import { useEffect, useReducer, useState } from "react"
import useUserQuery from "../../hooks/Users/useUserQuery"
import { useParams } from "react-router-dom"
import useOneFriendQuery from "../../hooks/Friend/useOneFriendQuery"
import useAddFriend from "../../hooks/Friend/useAddFriend"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../../redux/features/chatSlice"
import { Ichat } from "../../interfaces/chat"
import { Iuser } from "../../interfaces/Iuser"
import { Ifriend } from "../../interfaces/friend"


const ProFilePage = () => {
    const { id } = useParams()
    const [user, setUser] = useState({} as Iuser)
    // const { userMessage, setUserMessage, setMessenger, myProfile } = useContext(MessageContext)
    const [friend, setFriend] = useState({} as Ifriend)
    const userQuery = useUserQuery(id)
    const onFriend = useOneFriendQuery(id)
    const addFriend = useAddFriend()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listMessage = useSelector((state:any)=>state.chat.listMessage)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=>state.user.userInfo)
    const dispath = useDispatch()
    useEffect(() => {
      setUser(userQuery.data)
    }, [userQuery.data,id])
    useEffect(()=>{
      setFriend(onFriend.data)
    },[onFriend.data])
    const onMessage = async (data:Iuser) => {
      try {
        const res = await fetch(`http://localhost:3001/chats/find/${userInfo._id}/${data._id}`)
        const result = await res.json()
        if (result) {
          const findChat = listMessage.find((chat:Ichat) => chat._id == result._id)
          if (!findChat) {
              // setUserMessage([...userMessage, result])
            dispath(setMessages(result))
          }
        } else {
          const newUserMessage = {
            members: [
              userInfo,
                user,
            ]
           
          }
          dispath(setMessages(newUserMessage))
        }
      } catch (error) {
        console.log(error)
      }
    }
  const onAddFriend = ()=>{
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data:any = {
        requester: userInfo._id,
        recipient: user._id
      }
      addFriend.mutate(data)
  }
  
  if(userQuery.isLoading) return <div>Loading...</div>
  if(onFriend.isLoading) return <div>Loading...</div>
    return (
      <div>
        <div className="flex items-center gap-x-2">
          <div className="size-10 rounded-full overflow-hidden">
            <img src={user?.avatar} className="w-full object-cover" alt="" />
          </div>
          <p>{`${user?.firstname} ${user?.lastname}`}</p>
        </div>
        <div className="flex items-center">
        { (friend == null || friend == undefined || friend.status == 'rejected') && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onAddFriend}>Kết Bạn</button>
        )}
        {friend?.requester == userInfo._id && friend?.status == 'pending' && (
          <button className="bg-blue-200 text-black px-4 py-2 rounded-lg">Chờ xác nhận</button>
        )}
        {friend?.recipient == userInfo._id && friend?.status == 'pending' && (
          <button className="bg-blue-200 text-black px-4 py-2 rounded-lg">Xác nhận</button>
        )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-3" onClick={() => onMessage(user)}>Nhắn tin</button>
        </div>
      </div>
    )
}

export default ProFilePage