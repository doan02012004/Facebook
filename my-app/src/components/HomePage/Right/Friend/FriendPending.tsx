import { useDispatch } from "react-redux"
import useUpdateStatusFriend from "../../../../hooks/Friend/useUpdateStatusFriend"
import { Ifriend } from "../../../../interfaces/friend"
import { removeFriendsPending } from "../../../../redux/features/userSlice"

type FriendPendingProps= {
    friendPending: Ifriend
}
const FriendPending = ({friendPending}:FriendPendingProps) => {
    const updateStatus = useUpdateStatusFriend(friendPending.requester._id)
    const dispath = useDispatch()
    const onHandleAcpFriend = ()=>{
        updateStatus.mutate({
            id:friendPending._id,
            status:'accepted'
        })
        dispath(removeFriendsPending(friendPending))
      }

    const onHandleRejected = (data:Ifriend)=>{
        updateStatus.mutate({
            id:data._id,
            status:'rejected'
        })
        dispath(removeFriendsPending(data))
     
    }

  return (
    <div className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-slate-300 mb-2">
    <div className=" size-12 rounded-full overflow-hidden">
        <a href="#" className="block size-full">
        <img src={friendPending.requester.avatar} className="w-full h-full object-cover" alt="" />
        </a>
    </div>
    <div>
        <h5 className="font-semibold mb-2">{`${friendPending.requester.firstname} ${friendPending.requester.lastname}`}</h5>
        <div className="flex items-center gap-x-4">
            <button className="w-28 py-2 font-semibold text-sm bg-blue-500 text-white hover:bg-blue-700 rounded-md" onClick={onHandleAcpFriend}>Chấp nhận</button>
            <button className="w-28 py-2 font-semibold bg-slate-200 rounded-md hover:bg-slate-400" onClick={ ()=> onHandleRejected(friendPending)}>Xóa</button>
        </div>
    </div> 
</div>
  )
}

export default FriendPending