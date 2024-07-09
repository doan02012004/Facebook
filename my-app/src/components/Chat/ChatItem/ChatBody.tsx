import {  useContext, useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Ichat } from "../../../interfaces/chat"
import { Iuser } from "../../../interfaces/Iuser"
import { Imessage } from "../../../interfaces/message"
import useMessageQuery from "../../../hooks/Messages/useMessageQuery"
import { SocketContext } from "../../../context/SocketProvider"


type ChatBodyProps = {
    chat: Ichat,
    friend: Iuser
}
const ChatBody = ({friend,chat}:ChatBodyProps) => {
    const [messages, setMessages] = useState([]as Imessage[])
    const [message, setMessage] = useState(null)
    const {ref,inView} = useInView()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const checkBoxRef = useRef<any>()
    const result = useMessageQuery({chatId:chat._id})
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const socket:any = useContext(SocketContext)
    useEffect(()=>{
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      socket.current.on('getMessage',(messageSocket:any)=>{
          if(chat._id == messageSocket.chatId){
            setMessage(messageSocket)
          }
      })
       
    },[socket.current])
    
    useEffect(()=>{
     if(message){
      setMessages([...messages,message])
     }
    },[message])
  
  useEffect(() => {
    // if(result.isFetchingNextPage){
    //   result?.data?.pages?.map((page)=>{
    //     setMessages([...page.data,...messages])
    //   })
    // }else{
     
    // }
    const dataPage:Imessage[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result?.data?.pages?.map((page:any)=>{
      dataPage.unshift(...page.data)
     
    })
    setMessages(dataPage)
   
  },[result.data])
  
  useEffect(()=>{
      if(inView && result.hasNextPage){
        result.fetchNextPage()
        // console.log(result.data)
      }
  },[inView, result.fetchNextPage])
  
  
    useEffect(()=> {
      checkBoxRef.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])
  
    return (
      <>
        <div className='h-[300px] px-2 overflow-y-auto flex flex-col gap-1' >
          {result?.hasNextPage && (<div ref={ref} className='w-full'>{result.isFetchingNextPage && 'Loadding..'}</div>)}
          {messages ?.map((item:Imessage, i:number) => {
               // Kiểm tra nếu tin nhắn trước đó có cùng senderId với tin nhắn hiện tại
              const showAvatar = i === 0 || messages[i - 1].senderId !== item.senderId;
            return (
              <div ref={checkBoxRef} key={i} className={`flex gap-x-1 ${friend._id==item.senderId?"flex-row-reverse self-start":"self-end"} ${showAvatar?'mt-2':''}`}>
                <div className={`p-2  ${friend._id==item.senderId?"bg-gray-300 text-black":"bg-blue-500 text-white "} rounded-lg text-sm`}>
                <p className=' max-w-[200px]'>{item.text}</p>
                </div>
               {friend._id == item.senderId? (
                 <div className={`size-8 rounded-full overflow-hidden ${showAvatar&&"border border-gray-300 cursor-pointer"} flex justify-center items-center`}>
                 {showAvatar && (
                   <span>
                   {friend?.avatar? ( <img src={friend?.avatar} alt="" className='w-full object-cover' />) : (<span>
                   <i className="fa-solid fa-user"></i>
                   </span>)}
                   </span>
                 )}
                </div>
               ):''}
              </div>
            )
          })}
        </div>
      </>
    )
}

export default ChatBody