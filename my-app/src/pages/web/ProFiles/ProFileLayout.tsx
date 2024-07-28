import { useContext, useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Iuser } from "../../../interfaces/Iuser"
import { Ichat } from "../../../interfaces/chat"
import { setMessages } from "../../../redux/features/chatSlice"
import useOneFriendQuery from "../../../hooks/Friend/useOneFriendQuery"
import useUserQuery from "../../../hooks/Users/useUserQuery"
import useAddFriend from "../../../hooks/Friend/useAddFriend"
import { useDispatch, useSelector } from "react-redux"
import { Ifriend } from "../../../interfaces/friend"
import useUpdateStatusFriend from "../../../hooks/Friend/useUpdateStatusFriend"
import { SocketContext } from "../../../context/SocketProvider"

const ProFileLayout = () => {
    const [avt, ] = useState('http://picsum.photos/id/15/1000/1000')
    const { id } = useParams()
  const [user, setUser] = useState({} as Iuser) // dữ liệu đối phương
  const [friend, setFriend] = useState({} as Ifriend) // dữ liệu trạng thái bạn bè
  const [friendSocket, setFriendSocket] = useState({} as Ifriend) // dữ liệu trạng thái bạn bè từ socket
  const [isAddFriend, setIsAddFriend] = useState(false) // trạng thái kết bạn
  const [isDecision, setIsDecision] = useState(false) // trạng thái hủy yêu cầu kết bạn hoặc chấp nhận yêu cầu kết bạn
  const [isFriend, setIsFriend] = useState(false) // trạng thái đã là bạn bè của nhau
  const userQuery = useUserQuery(id) // lấy dữ liệu người dùng
  const onFriend = useOneFriendQuery(id) // lấy dữ liệu trạng thái bạn bè
  const addFriend = useAddFriend() // hook để kết bạn
  const updateStatus = useUpdateStatusFriend(id) // hook để cập nhật trạng thái bạn bè
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listMessage = useSelector((state: any) => state.chat.listMessage)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo = useSelector((state: any) => state.user.userInfo)
  const dispath = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket:any = useContext(SocketContext)
  useEffect(() => {
    setUser(userQuery.data)
  }, [userQuery.data, id])
  useEffect(() => {
    setFriend(onFriend.data)
    if(onFriend.data){
        if(onFriend.data.status == 'accepted'){
            setIsAddFriend(false)
            setIsDecision(false)
            setIsFriend(true)
        }else if(onFriend.data.status == 'pending'){
            setIsAddFriend(false)
            setIsDecision(true)
            setIsFriend(false)
        }else{
            setIsAddFriend(true)
            setIsDecision(false)
            setIsFriend(false)
        }
    }else{
        setIsAddFriend(true)
        setIsDecision(false)
        setIsFriend(false)
    }
  }, [onFriend.data])
  useEffect(()=>{
    socket?.current?.on('getNewFriend', (data:Ifriend)=>{
       setFriendSocket(data)
       console.log(data)
    })
  },[socket])
  useEffect(()=>{
        setFriend(friendSocket)
        if(friendSocket){
            if(friendSocket.status == 'accepted'){
                setIsAddFriend(false)
                setIsDecision(false)
                setIsFriend(true)
            }else if(friendSocket.status == 'pending'){
                setIsAddFriend(false)
                setIsDecision(true)
                setIsFriend(false)
            }else{
                setIsAddFriend(true)
                setIsDecision(false)
                setIsFriend(false)
            }
        }
  },[friendSocket])
  const onMessage = async (data: Iuser) => {
    try {
      const res = await fetch(`http://localhost:3001/chats/find/${userInfo._id}/${data._id}`)
      const result = await res.json()
      if (result) {
        const findChat = listMessage.find((chat: Ichat) => chat._id == result._id)
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
  const onChangeStatusFriend = () => {
    if(isDecision){
        if(userInfo._id == friend.requester){
            updateStatus.mutate({
                id:friend._id,
                status:'rejected'
            })
        }else{
            updateStatus.mutate({
                id:friend._id,
                status:'accepted'
            })
        }
    }
    else if(isAddFriend) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any = {
            requester: userInfo._id,
            recipient: user._id
          }
          addFriend.mutate(data)
    }
    else{
        console.log('Đã là bạn bè')
    }
  }
  
  if (userQuery.isLoading) return <div>Loading...</div>
  if (onFriend.isLoading) return <div>Loading...</div>
    return (
        <>
            <section className="bg-white shadow shadow-gray-400">
                <div className="px-4 max-w-[1100px] mx-auto">
                    <div className="w-full h-[430px] overflow-hidden rounded-xl ">
                        <img src="http://picsum.photos/id/15/1000/1000" className="w-full" alt="" />
                    </div>
                    <div className="max-w-[1000px] mx-auto px-4">
                        <div className="flex gap-x-3 pt-4 pb-6">
                            <div className="relative  w-[180px]">
                                <div className="p-1 rounded-full bg-white absolute left-0 -top-10">
                                    <div className="size-36 rounded-full overflow-hidden">
                                        <img src={user?.avatar} className="w-full h-full object-cover" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="font-bold text-3xl text-black ">{`${user?.firstname} ${user?.lastname}`}</h1>
                                <a href="#" className="block w-max text-gray-500 hover:underline">100 bạn chung</a>
                                <div className="pt-2 flex justify-between items-center w-full">
                                    <div className="flex items-center relative">
                                        <div className=" cursor-pointer p-1 rounded-full bg-white absolute left-0 z-[5]">
                                            <div className="size-9 rounded-full overflow-hidden">
                                                <img src={avt} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className=" cursor-pointer p-1 rounded-full bg-white absolute left-7 z-[4]">
                                            <div className="size-9 rounded-full overflow-hidden">
                                                <img src={avt} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className=" cursor-pointer p-1 rounded-full bg-white absolute left-14 z-[3]">
                                            <div className="size-9 rounded-full overflow-hidden">
                                                <img src={avt} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <button onClick={onChangeStatusFriend} className="flex items-center gap-x-1 btn-sm bg-gray-200 hover:bg-gray-400">
                                            {/* <span><i className="fa-solid fa-user-xmark"></i></span> */}
                                            {isAddFriend && ( <><span><i className="fa-solid fa-user-plus"></i></span> Thêm bạn bè</>)}
                                            {isDecision && userInfo._id == friend.requester &&  ( <><span><i className="fa-solid fa-user-xmark"></i></span> Hủy yêu cầu</>)}
                                            {isDecision && userInfo._id == friend.recipient &&  ( <><span><i className="fa-solid fa-user-plus"></i></span> Chấp nhận</>)}
                                            {isFriend && ( <><span><i className="fa-solid fa-user-check"></i></span> Bạn bè</>)}
                                        </button>
                                        <button onClick={() =>onMessage(user)} className="flex items-center gap-x-1 btn-sm bg-blue-500 text-white hover:bg-blue-700">
                                            <span><i className="fa-brands fa-facebook-messenger"></i></span>
                                            Nhắn tin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-t-gray-300">
                        <div className="nav-profile flex items-center gap-x-3 pt-1">
                            <a href="#" className="block w-max active">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Bài viết</button>
                            </a>
                            <a href="#" className="block w-max ">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Giới thiệu</button>
                            </a>
                            <a href="#" className="block w-max ">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Bạn bè</button>
                            </a>
                            <a href="#" className="block w-max ">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Ảnh</button>
                            </a>
                            <a href="#" className="block w-max ">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Video</button>
                            </a>
                            <a href="#" className="block w-max ">
                                <button className="font-semibold  p-4 rounded-md hover:bg-gray-300 ">Check in</button>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
           <div className="max-w-[1000px] mx-auto px-4 mt-4">
           <Outlet />
           </div>
        </>
    )
}

export default ProFileLayout