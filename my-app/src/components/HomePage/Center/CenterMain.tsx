import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { statusPost } from '../../../redux/features/postSlice';
import ListPost from './Posts/ListPost';



const CenterMain = () => {
    const [avt, ] = useState('http://picsum.photos/id/17/1000/1000')
    const [isAtBeginning, setIsAtBeginning] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const dispath = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSlideChange = (swiper: any) => {
        setIsAtBeginning(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };
    return (
        <section className='max-w-[600px] mx-auto pt-4'>
            {/* stories  */}
            <div className=' relative mb-4'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation={{
                        prevEl: '.custom-swiper-prev-stories',
                        nextEl: '.custom-swiper-next-stories'
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={handleSlideChange}
                >
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative transition-all duration-300 ease-in-out active:scale-95'>

                            <div className='h-[200px]'>
                                <img src={avt} className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className='h-[50px] relative bg-white'>
                                <div className=' absolute  flex flex-col justify-center items-center w-max -top-3  left-1/2 -translate-x-1/2 '>
                                    <div className='p-1 bg-white rounded-full'>
                                        <div className='size-8 rounded-full bg-blue-500 text-xl text-white flex justify-center items-center'>
                                            <span><i className="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                    <p className='w-max text-[12px]/[150%] font-semibold'>Tạo tin</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src={avt} className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/20/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <h5 className=' absolute bottom-2 left-4 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Đoàn</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/23/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/20/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Ngô Thị Hồng Duyên</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/30/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/10/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Liên</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/30/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/10/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Liên</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/30/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/10/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Liên</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/30/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/10/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Liên</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' group w-[140px] h-[250px] overflow-hidden rounded-xl cursor-pointer relative  transition-all duration-300 ease-in-out active:scale-95'>
                            <div className='h-full'>
                                <img src='http://picsum.photos/id/30/1000/1000' className='imageCover group-hover:scale-105 transition duration-300 ease-in-out' alt="" />
                                <span className='hidden absolute top-0 left-0 w-full h-full bg-black/15 z-10 group-hover:block'></span>
                            </div>
                            <div className=' absolute top-2 left-4 p-1 bg-blue-500 rounded-full'>
                                <div className='size-8 rounded-full text-xl text-white flex justify-center items-center overflow-hidden'>
                                    <img src="http://picsum.photos/id/10/1000/1000" className='imageCover' alt="" />
                                </div>
                            </div>
                            <p className='px-4  absolute bottom-2 left-0 text-[12px]/[150%] text-white font-semibold'>Bùi Văn Liên</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className={`custom-swiper-prev-stories absolute left-4 top-1/2  -translate-y-1/2 cursor-pointer size-12 rounded-full bg-white z-[11] hover:bg-gray-200 ${isAtBeginning ? 'hidden' : ''}`}>
                    <span className='text-xl'><i className="fa-solid fa-angle-left"></i></span>
                </button>
                <button className={`custom-swiper-next-stories absolute right-4 top-1/2  -translate-y-1/2 cursor-pointer size-12 rounded-full bg-white z-[11] hover:bg-gray-200 ${isAtEnd ? 'hidden' : ''} `}>
                    <span className='text-xl'><i className="fa-solid fa-angle-right"></i></span>
                </button>
            </div>
            {/* feeling  */}
            <div className="p-4 rounded-lg bg-white shadow shadow-gray-400 mb-4">
                <div className="flex items-center gap-x-2 mb-3">
                    <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={avt} alt="" className="imageCover" />
                    </div>
                    <div onClick={()=> dispath(statusPost(true))}  className=" cursor-pointer px-3 py-2 bg-gray-200 rounded-full w-full">
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
          <ListPost />
        </section>
    )
}

export default CenterMain