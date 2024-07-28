import {  useState } from "react"



const ProFilePage = () => {
  const [avt, ] = useState('http://picsum.photos/id/15/1000/1000')
  
  return (
    // <div>
    //   <div className="flex items-center gap-x-2">
    //     <div className="size-10 rounded-full overflow-hidden">
    //       <img src={user?.avatar} className="w-full object-cover" alt="" />
    //     </div>
    //     <p>{`${user?.firstname} ${user?.lastname}`}</p>
    //   </div>
    //   <div className="flex items-center">
    //   { (friend == null || friend == undefined || friend.status == 'rejected') && (
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onAddFriend}>Kết Bạn</button>
    //   )}
    //   {friend?.requester == userInfo._id && friend?.status == 'pending' && (
    //     <button className="bg-blue-200 text-black px-4 py-2 rounded-lg">Chờ xác nhận</button>
    //   )}
    //   {friend?.recipient == userInfo._id && friend?.status == 'pending' && (
    //     <button className="bg-blue-200 text-black px-4 py-2 rounded-lg">Xác nhận</button>
    //   )}
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-3" onClick={() => onMessage(user)}>Nhắn tin</button>
    //   </div>
    // </div>
    <section className="flex gap-x-4">
      <div className=" basis-2/5">
        <div className="p-4 rounded-lg bg-white shadow shadow-gray-400 mb-4">
          {/* header  */}
          <div className="mb-4" >
            <h1 className="text-lg font-bold">Giới thiệu</h1>

          </div>
          {/* content  */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-gray-400 mr-3"><i className="fa-solid fa-graduation-cap"></i></span>
              <p className="text-sm tracking-wide  text-black">
                Từng học tại <a href="#" className="font-semibold hover:underline">Trường cao đẳng FPT Polytechnic</a>
              </p>
            </div>
            <div className="flex items-center ">
              <span className="text-gray-400 mr-3"><i className="fa-solid fa-house-flag"></i></span>
              <p className="text-sm tracking-wide  text-black">
                Sống tại <a href="#" className="font-semibold hover:underline">Hà Nội</a>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white shadow shadow-gray-400 mb-4">
          {/* header  */}
          <div className="mb-4 flex justify-between items-center" >
            <h1 className="text-lg font-bold">Ảnh</h1>
            <a href="#" className="block w-max">
              <button className="btn-sm text-blue-500 hover:bg-gray-200">Xem tất cả ảnh</button>
            </a>
          </div>
          {/* content  */}
          <div>
            <div className="w-full rounded-lg overflow-hidden grid grid-cols-3 gap-1">
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="">
                <img src={avt} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white shadow shadow-gray-400">
          {/* header  */}
          <div className="mb-4">
            <div className="flex justify-between items-center" >
              <h1 className="text-lg font-bold">Bạn bè</h1>
              <a href="#" className="block w-max">
                <button className="btn-sm text-blue-500 hover:bg-gray-200">Xem tất cả bạn bè</button>
              </a>
            </div>
            <p className="block text-base text-gray-500">999 người bạn</p>
          </div>
          {/* content  */}
          <div>

            <div className="w-full  grid grid-cols-3 gap-x-3 gap-y-4">
              <div className="">
                <div className=" rounded-md overflow-hidden mb-1">
                  <img src={avt} className="w-full h-full object-cover" alt="" />
                </div>
                <a href="#" className="block font-semibold text-[13px]/[150%]">Bùi Văn Đoàn</a>
              </div>
              <div>
                <div className=" rounded-md overflow-hidden mb-1">
                  <img src={avt} className="w-full h-full object-cover" alt="" />
                </div>
                <a href="#" className="block font-semibold text-[13px]/[150%]">Ngô Thị Hồng Duyên</a>
              </div>
              <div>
                <div className=" rounded-md overflow-hidden mb-1">
                  <img src={avt} className="w-full h-full object-cover" alt="" />
                </div>
                <a href="#" className="block font-semibold text-[13px]/[150%]">Ngô Thị Hồng Duyên</a>
              </div>
              <div>
                <div className=" rounded-md overflow-hidden mb-1">
                  <img src={avt} className="w-full h-full object-cover" alt="" />
                </div>
                <a href="#" className="block font-semibold text-[13px]/[150%]">Ngô Thị Hồng Duyên</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" basis-3/5">
        {/* header  */}
        <div className="p-4 rounded-lg bg-white shadow shadow-gray-400 mb-4">
          <div className="flex items-center gap-x-2 mb-3">
            <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
              <img src={avt} alt="" className="imageCover" />
            </div>
            <div className=" cursor-pointer px-3 py-2 bg-gray-200 rounded-full w-full">
              <p className=" text-gray-600">Bạn đang nghĩ gì?</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-1 pt-3 border-t border-t-gray-300">
            <button className=" w-full px-4 py-1 cursor-pointer rounded-md flex items-center  justify-center gap-x-2 hover:bg-gray-200">
              <span className="text-xl text-red-600"><i className="fa-solid fa-video"></i></span>
              <p className="text-sm font-semibold text-gray-600">Video trực tiếp</p>
            </button>
            <button className=" w-full px-4 py-1 cursor-pointer rounded-md flex items-center justify-center gap-x-2 hover:bg-gray-200">
              <span className="text-xl text-green-600"><i className="fa-regular fa-image"></i></span>
              <p className="text-sm font-semibold text-gray-600">Ảnh/video</p>
            </button>
            <button className=" w-full px-4 py-1 cursor-pointer rounded-md flex items-center justify-center gap-x-2 hover:bg-gray-200">
              <span className="text-xl text-yellow-600"><i className="fa-regular fa-face-grin-wink"></i></span>
              <p className="text-sm font-semibold text-gray-600">Cảm Xúc</p>
            </button>
          </div>
        </div>

        {/* Post  */}
        <div className="rounded-lg bg-white shadow shadow-gray-400 mb-4">
          {/* header post  */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-x-2">
                <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={avt} alt="" className="imageCover" />
                </div>
                <div>
                  <a href="#" className="block w-max font-semibold text-sm">Đoàn Văn</a>
                  <div className="flex items-center gap-x-2">
                    <p className="cursor-pointer text-[12px]/[150%] text-gray-600 ">10 tháng 2, 2024</p>
                    <div className=" size-6 cursor-pointer text-[10px] rounded-full hover:bg-gray-300 flex justify-center items-center "><i className="fa-solid fa-user-group"></i></div>
                  </div>
                </div>
              </div>
              <button className="size-9 rounded-full text-gray-500 hover:bg-gray-200 flex justify-center items-center"><i className="fa-solid fa-ellipsis"></i></button>
            </div>
            <p>Fpoly</p>
          </div>
          {/* image post  */}
          <div className="w-full h-[500px]">
            <div className="w-full h-full">
              <img src="http://picsum.photos/id/27/1000/1000" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          {/* feel post  */}
          <div className="px-4">
            <div className="py-2 border-y border-y-gray-400">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <div className="size-5 rounded-full bg-blue-500 flex justify-center items-center">
                    <span className="text-white text-[12px]"><i className="fa-solid fa-thumbs-up"></i></span>
                  </div>
                  <p className="text-sm text-gray-500 cursor-pointer hover:underline">Duyên và 99 người khác</p>
                </div>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">99 bình luận</p>
              </div>
            </div>
            <div className="py-1 border-b border-b-gray-400">
              <div className="flex items-center justify-between gap-x-2">
                <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
                  <span className="mr-2 text-lg"><i className="fa-regular fa-thumbs-up"></i></span>
                  Thích
                </button>
                <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
                  <span className="mr-2 text-lg"> <i className="fa-regular fa-comment"></i></span>
                  Bình luận
                </button>
                <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
                  <span className="mr-2 text-lg"><i className="fa-solid fa-share"></i></span>
                  Chia sẻ
                </button>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-sm text-gray-600 font-semibold cursor-pointer py-1 my-1">Xem thêm bình luận</span>
              <div className="flex gap-x-2">
                <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={avt} alt="" className="imageCover" />
                </div>
                <div>
                  <div className="p-2 rounded-xl bg-gray-200">
                    <p className="block w-max font-semibold text-[12px]/[150%] mb-1">Đoàn Văn</p>
                    <p className="text-sm ">Tôi rất thích điều này</p>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <p className="cursor-pointer text-[12px]/[150%] text-gray-600 ">2 phút</p>
                    <span className="cursor-pointer text-[12px]/[150%] text-gray-600 font-semibold  hover:underline">thích</span>
                    <span className="cursor-pointer text-[12px]/[150%] text-gray-600 font-semibold  hover:underline">Phản hồi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* input comment  */}
            <div className="flex gap-x-2">
              <div className="size-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={avt} alt="" className="imageCover" />
              </div>
              <div className="w-full ">
                <form className=" h-10 w-full rounded-full overflow-hidden bg-gray-200 flex items-center ">
                    <input type="text" className="text-sm px-4 w-full h-full outline-0 border-0 bg-transparent" placeholder="Bình luận dưới vai trò Đoàn Văn" />
                    <button className="h-full px-3 rounded-full hover:bg-gray-500">
                      <span><i className="fa-solid fa-paper-plane"></i></span>
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProFilePage