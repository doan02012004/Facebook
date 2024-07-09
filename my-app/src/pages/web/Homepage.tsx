import { useSelector } from "react-redux"
import { Iuser } from "../../interfaces/Iuser"

const Homepage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeUser = useSelector((state:any)=>state.user.activeUser)
  return (
    <div className=" w-full h-screen">
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
              {/* {friendsPending?.map((friendPending, i)=>(
                 <div key={i} className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-slate-300 mb-2">
                 <div className=" size-12 rounded-full overflow-hidden">
                     <a href="#" className="block size-full">
                     <img src={friendPending.requester.avatar} className="w-full h-full object-cover" alt="" />
                     </a>
                 </div>
                 <div>
                     <h5 className="font-semibold mb-2">{`${friendPending.requester.firstname} ${friendPending.requester.lastname}`}</h5>
                     <div className="flex items-center gap-x-4">
                         <button className="w-28 py-2 font-semibold text-sm bg-blue-500 text-white hover:bg-blue-700 rounded-md">Chấp nhận</button>
                         <button className="w-28 py-2 font-semibold bg-slate-200 rounded-md hover:bg-slate-400">Xóa</button>
                     </div>
                 </div> 
             </div>
              ))} */}
              
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
    </div>
  )
}

export default Homepage