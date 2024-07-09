import { Key, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useChatQuery from '../hooks/chats/useChatQuery'
import { addChat, setChats, setMessages } from '../redux/features/chatSlice'

import { Ichat } from '../interfaces/chat'
import ChatBox from './Chat/ChatBox'
import ChatItem from './Chat/ChatItem/ChatItem'
import { SocketContext } from '../context/SocketProvider'


function Header() {
    const [isOpenChat, setIsOpenChat] = useState(false)
    // const [avt, setAvt] = useState('http://picsum.photos/id/12/300/300')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chats = useSelector((state: any) => state.chat.chats)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const messengers = useSelector((state: any) => state.chat.listMessage)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isOpenMessages = useSelector((state: any) => state.chat.isOpenMessages)
    const dispath = useDispatch()
    const chatQuery = useChatQuery()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket:any = useContext(SocketContext)
    useEffect(() => {
        if (chatQuery.data) {
            dispath(setChats(chatQuery.data))
        }
    }, [chatQuery.data])
    useEffect(()=>{
        socket?.current?.on('getNewChat',(chat:Ichat)=>{
                dispath(addChat(chat))
                // dispath(addChat(chat))
        })
    },[socket])
    return (
        <section className='h-14 w-full'>
            <div className='fixed h-14 w-full top-0 left-0 px-4 py-1 bg-white z-50 flex justify-between items-center'>
                <div className='flex items-center gap-x-2'>
                    <div className='size-12 overflow-hidden rounded-full'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" className='imageCover' alt="" />
                    </div>
                    <div>
                        <form className=' relative group h-10 flex items-center bg-slate-100 rounded-full px-2'>
                            <button type='submit' className='border-0 outline-0 text-slate-500'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                            <input type="text" placeholder='Tìm kiếm trên facebook' className=' text-sm border-0 outline-0 bg-transparent w-full h-full p-2' />
                            <div className='absolute top-11 hidden group-focus-within:block left-0 bg-white px-2 py-3 rounded-xl shadow-md shadow-slate-700 w-[300px]'>
                                <a href='#' className=' block'>
                                    <span className='cursor-pointer flex items-center gap-x-2 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                                        <div className='size-9 rounded-full overflow-hidden'>
                                            <img src='http://picsum.photos/id/12/300/300' alt="Ảnh" className='w-full object-cover' />
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

                    {/* messager  */}
                    <div onClick={() => setIsOpenChat(!isOpenChat)} className=' relative cursor-pointer size-10 rounded-full bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <span className=' absolute -top-1 -right-1 size-4 text-[12px] text-white rounded-full bg-red-600 flex justify-center items-center'>1</span>
                    </div>
                    {/* Notification  */}
                    <div className='relative cursor-pointer size-10 rounded-full bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <i className="fa-solid fa-bell"></i>
                        <span className='absolute -top-1 -right-1 size-4 text-[12px] text-white rounded-full bg-red-600 flex justify-center items-center'>1</span>
                    </div>

                    {/* User Information  */}
                    <div className='relative cursor-pointer size-10 rounded-full bg-gray-300 text-2xl flex justify-center items-center hover:bg-gray-400 '>
                        <div className='w-full h-full rounded-full overflow-hidden'>
                            <img src='http://picsum.photos/id/12/300/300' alt="" className='w-full object-cover' />
                        </div>
                    </div>
                    {isOpenChat && (
                        <div className=' absolute w-[360px] top-11 right-0 bg-white p-3 rounded-lg shadow-md shadow-black z-20'>
                            <div>
                                <div className='mb-3'>
                                    <h1 className='font-bold text-2xl text-black'>Đoạn chat</h1>
                                </div>
                                <div className=' relative group h-10 flex items-center bg-slate-100 rounded-full px-2 mb-5'>
                                    <span className='border-0 outline-0 text-slate-500'>
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
                                    {chatQuery.isLoading ? 'Loading...' :
                                        (
                                            <div>
                                                {chats?.map((chat: Ichat, i: Key | number | undefined) => (
                                                    <div key={i} onClick={() => dispath(setMessages(chat))}>
                                                        <ChatBox chat={chat} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    {/* <div>
             <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
                 <div className='size-14 rounded-full overflow-hidden'>
                     <img src={avt} alt="Ảnh" className='w-full object-cover' />
                 </div>
                 <div className=''>
                     <h5 className='text-base font-semibold'>Bùi Văn Đoàn</h5>
                     <p className='text-sm text-gray-500'>
                         Bạn: hello
                     </p>
                 </div>
             </span>
         </div> */}

                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* messenger  */}
                {isOpenMessages && (
                    <div className='fixed bottom-0 right-20 max-w-[676px] flex z-40 flex-row-reverse'>
                        {messengers?.map((chat: Ichat, i: Key | undefined | number) => (<ChatItem key={i} chat={chat} />))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default Header