import logo from '../assets/logos/logo.png'
import avt from '../assets/images/avt.jpg'
import { useState } from 'react'



const Header = () => {
    const [openListMessenger, setOpenMessenger] = useState(false)
    const [messenger, setMessenger] = useState(false)
    const openMessenger = () => {
            setMessenger(true)
            setOpenMessenger(false)
    }
    
    return (
        <section className="wrapper h-14">
            <div className="fixed h-14 top-0 left-0 px-4 w-full bg-white py-2 flex justify-between items-center z-50">
                <div className='max-w-80 flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img src={logo} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div>
                        <form className=' relative group h-10 flex items-center bg-slate-100 rounded-full px-2'>
                            <button type='submit' className='border-0 outline-0 text-slate-500'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input type="text" placeholder='Tìm kiếm trên facebook' className=' text-sm border-0 outline-0 bg-transparent w-full h-full p-2' />
                            <div className=' absolute top-11 hidden group-focus-within:block left-0 bg-white px-2 py-3 rounded-xl shadow-md shadow-slate-700 w-full'>
                                <a href="#" className=' block'>
                                    <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                        <div className='size-9 rounded-full overflow-hidden'>
                                            <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                        </div>
                                        <div className=''>
                                            <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                            <p className='text-sm text-gray-500'>Bạn bè</p>
                                        </div>
                                    </span>
                                </a>
                                <a href="#" className=' block'>
                                    <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                        <div className='size-9 rounded-full overflow-hidden'>
                                            <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                        </div>
                                        <div className=''>
                                            <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                            <p className='text-sm text-gray-500'>Bạn bè</p>
                                        </div>
                                    </span>
                                </a>
                                <a href="#" className=' block'>
                                    <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                        <div className='size-9 rounded-full overflow-hidden'>
                                            <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                        </div>
                                        <div className=''>
                                            <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                            <p className='text-sm text-gray-500'>Bạn bè</p>
                                        </div>
                                    </span>
                                </a>
                                <a href="#" className=' block'>
                                    <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                        <div className='size-9 rounded-full overflow-hidden'>
                                            <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                        </div>
                                        <div className=''>
                                            <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                            <p className='text-sm text-gray-500'>Bạn bè</p>
                                        </div>
                                    </span>
                                </a>

                            </div>
                        </form>
                    </div>
                </div>

                <div className=' relative flex items-center gap-3'>
                    <div className='cursor-pointer size-10 rounded-full overflow-hidden bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <span className='w-max rotate-90'>
                            <i className="fa-solid fa-grip"></i>
                        </span>
                    </div>
                    <div onClick={() => setOpenMessenger(!openListMessenger)} className=' relative cursor-pointer size-10 rounded-full bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <span className=' absolute -top-1 -right-1 size-4 text-[12px] text-white rounded-full bg-red-600 flex justify-center items-center'>1</span>
                    </div>
                    <div className='relative cursor-pointer size-10 rounded-full bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <i className="fa-solid fa-bell"></i>
                        <span className='absolute -top-1 -right-1 size-4 text-[12px] text-white rounded-full bg-red-600 flex justify-center items-center'>1</span>
                    </div>
                    {openListMessenger && (
                        <div className=' absolute w-[360px] top-11 right-0 bg-white p-3 rounded-lg shadow-md shadow-black z-20'>
                            <div>
                                <div className='mb-3'>
                                    <h1 className='font-bold text-2xl text-black'>Đoạn chat</h1>
                                </div>
                                <div className=' relative group h-10 flex items-center bg-slate-100 rounded-full px-2 mb-5'>
                                    <span type='submit' className='border-0 outline-0 text-slate-500'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <input type="text" placeholder='Tìm kiếm trên facebook' className=' text-sm border-0 outline-0 bg-transparent w-full h-full p-2' />
                                    {/* <div className=' absolute top-11 hidden group-focus-within:block left-0 bg-white px-2 py-3 rounded-xl shadow-md shadow-slate-700 w-full'>
                                       <a href="#" className=' block'>
                                       <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-9 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh"  className='w-full object-cover'/>
                                            </div>
                                            <div className=''>
                                                <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn bè</p>
                                            </div>
                                        </span>
                                       </a>
                                       <a href="#" className=' block'>
                                       <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-9 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh"  className='w-full object-cover'/>
                                            </div>
                                            <div className=''>
                                                <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn bè</p>
                                            </div>
                                        </span>
                                       </a>
                                       <a href="#" className=' block'>
                                       <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-9 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh"  className='w-full object-cover'/>
                                            </div>
                                            <div className=''>
                                                <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn bè</p>
                                            </div>
                                        </span>
                                       </a>
                                       <a href="#" className=' block'>
                                       <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-9 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh"  className='w-full object-cover'/>
                                            </div>
                                            <div className=''>
                                                <h5 className='text-sm font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn bè</p>
                                            </div>
                                        </span>
                                       </a>
                                        
                                    </div> */}
                                </div>
                                {/* div chat  */}
                                <div className='h-[460px] overflow-y-auto'>
                                    <div>
                                        <span onClick={()=> openMessenger()} className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                            <div className='size-14 rounded-full overflow-hidden'>
                                                <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                            </div>
                                            <div className=''>
                                                <h5 className='font-semibold'>Bùi Văn Đoàn</h5>
                                                <p className='text-sm text-gray-500'>Bạn: Hello Word</p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* user Chat  */}
           {
            messenger && (
                <div className='fixed bottom-0 right-20 max-w-[676px] flex flex-row-reverse'>
                <div className='w-[328px]'>
                    <div className='ml-[10px] bg-white rounded-t-lg overflow-hidden '>
                        <div className='relative'>
                            <span className='flex items-center gap-x-2 px-2 py-1 shadow shadow-gray-300'>
                                <div className='size-9 rounded-full overflow-hidden'>
                                    <img src={avt} alt="Ảnh" className='w-full object-cover' />
                                </div>
                                <div className=''>
                                    <h5 className=' font-semibold'>Bùi Văn Đoàn</h5>
                                    <p className='text-sm text-gray-500'>Đang hoạt động</p>
                                </div>
                            </span>
                            <span onClick={()=>setMessenger(false)} className=' cursor-pointer text-xl text-gray-400 absolute right-4 top-1/2 -translate-y-1/2'>
                            <i className="fa-solid fa-xmark"></i>
                            </span>

                        </div>
                        <div className='h-[300px] overflow-y-auto'>
                            
                        </div>
                        <div className='py-3'>
                            <form className='flex items-center gap-x-2 px-3 py-1'>
                                    <input type="text" className=' h-8 w-full outline-0 border-0 rounded-full bg-slate-200 px-3 py-1 text-sm bg-transparent' placeholder='Aa' />
                                <button type='submit' className='text-xl size-8 rounded-full hover:bg-slate-200'><i className="fa-solid fa-circle-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )
           }
        </section>
    )
}

export default Header