/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react"
import { Ichat } from "../../interfaces/chat.js"
import useLastMessageQuery from "../../hooks/Messages/useLastMessageQuery.js"
import { useSelector } from "react-redux"
import { Imessage } from "../../interfaces/message.js"
import { Iuser } from "../../interfaces/Iuser.js"

import { SocketContext } from "../../context/SocketProvider.js"


type ChatBoxProp = {
    chat:Ichat
}

const ChatBox = ({ chat }:ChatBoxProp) => {
    const [lastMessage, setLastMessage] = useState({} as Imessage)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any) => state.user.userInfo)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const friend:Iuser|undefined = chat?.members?.find((item:Iuser) =>item._id!== userInfo._id)
    const lastMesQuery = useLastMessageQuery(chat?._id)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket:any = useContext(SocketContext)
    useEffect(() => {
        if (lastMesQuery.data) {
            setLastMessage(lastMesQuery.data)
        }
    }, [lastMesQuery.data])
    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        socket.current.on('getMessage',(messageSocket:any)=>{
            console.log(messageSocket)
            if(chat._id == messageSocket.chatId){
                setLastMessage(messageSocket)
              
            }
        })
    },[socket])
    console.log(lastMessage)
    return (
        <span className='cursor-pointer flex items-center gap-x-3 mb-3 px-2 py-1 hover:bg-slate-200  rounded-xl'>
            <div className='size-14 rounded-full overflow-hidden'>
                <img src={friend?.avatar} alt="Ảnh" className='w-full object-cover' />
            </div>
            <div className=''>
                <h5 className='text-base font-semibold'>{`${friend?.firstname} ${friend?.lastname}`}</h5>
                <p className='text-sm text-gray-500'>
                    {lastMessage?.senderId == userInfo._id ?
                        (<span>Bạn: {lastMessage.text}</span>) : (<span className="text-black font-semibold"> {lastMessage.text}</span>)
                    }
                </p>
            </div>
        </span>
    )
}

export default ChatBox