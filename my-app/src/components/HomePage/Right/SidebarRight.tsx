import { useDispatch, useSelector } from "react-redux"
import { Iuser } from "../../../interfaces/Iuser"
import { useContext, useEffect } from "react"
import useListFriendPQuery from "../../../hooks/Friend/useListFriendPQuery"
import { Ifriend } from "../../../interfaces/friend"
import { addFriendPending, removeFriendsPending, setFriendsPending } from "../../../redux/features/userSlice"

import FriendPending from "./Friend/FriendPending"
import { SocketContext } from "../../../context/SocketProvider"


const SidebarRight = () => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeUser = useSelector((state:any)=>state.user.activeUser)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const userInfo = useSelector((state:any)=>state.user.userInfo)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const friendsPending = useSelector((state:any)=>state.user.friendsPending)
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const socket:any = useContext(SocketContext)
  const friendPendingQuery = useListFriendPQuery(userInfo._id)
  const dispath = useDispatch()
  useEffect(()=>{
    if(friendPendingQuery.data){
        dispath(setFriendsPending(friendPendingQuery.data))
    }
  },[friendPendingQuery.data])
  useEffect(()=>{
    socket?.current?.on('getNewFriend', (data:Ifriend)=>{
      if(data.status == 'pending'){
        dispath(addFriendPending(data))
      }if(data.status == 'rejected'){
        dispath(removeFriendsPending(data))
      }
    })
  },[socket])

  return (
    <section className=" fixed w-[360px] h-full px-4 py-4 right-0 top-14 overflow-y-auto">
    <div className="mb-2">
        {/* title  */}
        <div className="flex justify-between items-center mb-2">
            <h3 className=" text-lg font-semibold text-gray-600">Lời mời kết bạn</h3>
            <a href="#" className="block max-w-28 px-2 py-1 rounded-lg text-blue-500 whitespace-nowrap text-center hover:bg-slate-200">Xem tất cả</a>
        </div>
        {/* body  */}
        <div className="max-h-[300px] overflow-y-auto">
            {/* item  */}
          {friendsPending?.map((friendPending:Ifriend, i:number)=>(
            <FriendPending key={i} friendPending={friendPending}  />
          ))}
          
        </div>
    </div>
    <div>
{/* title  */}
<div className="flex justify-between items-center pt-3 border-t border-t-gray-300 mb-2">
    <h3 className=" text-lg font-semibold text-gray-600">Người liên hệ</h3>
   
</div>
{/* body  */}
<div className="max-h-[300px]">
    {/* item  */}
    {activeUser?.map((user:Iuser,i:number)=>(
         <div key={i} className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-slate-300 mb-2">
         <div className="relative">
             <a href={`/profile/${user._id}`} className="block  size-9 rounded-full overflow-hidden">
             <img src={user.avatar} className="w-full object-cover" alt="" />
             </a>
             <div className="p-[2px] absolute rounded-full bg-white w-max bottom-0 right-0 flex justify-center items-center">
             <div className=" size-2 rounded-full bg-green-500 "></div>
             </div>
         </div>
         <h5 className="text-sm font-semibold ">{`${user.firstname} ${user.lastname}`}</h5>
     </div>
    ))}
  
   
 
</div>
</div>
</section>
  )
}

export default SidebarRight