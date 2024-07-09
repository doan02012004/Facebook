import React from 'react'
import ChatInput from './ChatInput'
import ChatBody from './ChatBody'
import { Ichat } from '../../../interfaces/chat'
import { useDispatch, useSelector } from 'react-redux'
import { Iuser } from '../../../interfaces/Iuser'
import { removeItemMessage } from '../../../redux/features/chatSlice'

type ChatItemProps = {
    chat: Ichat
}

const ChatItem = ({chat}:ChatItemProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useInfor = useSelector((state:any)=> state.user.userInfo)
    const dispath = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const friend:Iuser|any = chat?.members.find((item:Iuser) => item._id !== useInfor._id )
  return (
    <>
     <div className='w-[340px]'>
                    <div className='ml-[10px] bg-white rounded-t-lg '>
                        <div className='relative'>
                            <span className='flex items-center gap-x-2 px-2 py-1 border-b  '>
                                <div className='size-9 rounded-full overflow-hidden'>
                                    <img src={friend?.avatar} alt="Ảnh" className='w-full object-cover' />
                                </div>
                                <div className=''>
                                    <h5 className=' font-semibold'>{`${friend?.firstname} ${friend?.lastname} `}</h5>
                                    <p className='text-sm text-gray-500'>Đang hoạt động</p>
                                </div>
                            </span>
                            <span onClick={()=>dispath(removeItemMessage(chat))} className=' cursor-pointer text-xl text-gray-400 absolute right-4 top-1/2 -translate-y-1/2'>
                            <i className="fa-solid fa-xmark"></i>
                            </span>
                        </div>
                      {chat._id? (
                         <ChatBody friend={friend} chat={chat} />
                      ):(
                        <div className='h-[300px] px-2 overflow-y-auto flex flex-col gap-1'>
                            <div className='w-max mx-auto flex flex-col items-center gap-3 py-4'>
                                <div className='size-12 rounded-full overflow-hidden'>
                                    <img src={friend?.avatar? friend.avatar: 'http://picsum.photos/id/27/300/300'} className=' object-cover w-full' alt="" />
                                </div>
                                <p>{`${friend?.firstname} ${friend?.lastname}`}</p>
                            </div>
                        </div>
                      )}
                     <ChatInput friend={friend} chat={chat} />
                    </div>
                </div>
    </>
  )
}

export default ChatItem