
import { useForm } from 'react-hook-form'
import { Iuser } from '../../../interfaces/Iuser'
import { Ichat } from '../../../interfaces/chat'
import { useDispatch, useSelector } from 'react-redux'
import useMessageMutate from '../../../hooks/Messages/useMessageMutate'
import { useContext } from 'react'
import { SocketContext } from '../../../context/SocketProvider'
import { setMessagesNewChat } from '../../../redux/features/chatSlice'
type ChatInputProps = {
    chat: Ichat,
    friend: Iuser
}

const ChatInput = ({friend,chat}:ChatInputProps) => {
    const {register, handleSubmit,reset} = useForm()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=>state.user.userInfo)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const listMessage = useSelector((state:any)=>state.chat.listMessage)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispath = useDispatch()
    const mutation = useMessageMutate(friend)
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit:any = async(message:{text:string})=>{
      if(!chat._id){
            const newChat = {
                senderId: userInfo._id,
                receiverId: friend?._id
            }
            
            try {
                const result = await fetch('http://localhost:3001/chats',{
                    method: "POST",
                    headers:{
                        "Content-Type":'application/json'
                    },
                    body: JSON.stringify(newChat)
                })
                const resChat = await result.json()
                const newListMessage = listMessage.map((chat:Ichat)=>chat.members[1]._id == resChat.members[1]._id ? resChat: chat)
                dispath(setMessagesNewChat(newListMessage))
                mutation.mutate({
                    chat: resChat,
                    chatId:resChat._id,
                    text:message.text
                })
                reset()
                // send new chat on Socket
                // socket.current.emit('sendNewChat',{chat:resChat, receiverId:friend._id})
            } catch (error) {
                console.log(error)
            }
      }else{
        mutation.mutate({
            chat:null,
            chatId:chat._id,
            text:message.text
        })
        reset()
      }
        
    }
    
    return (
        <>
            <div className='py-3'>
                <form className='flex items-center gap-x-2 px-3 py-1' onSubmit={handleSubmit(onSubmit)}>
                    <div className=" cursor-pointer size-8 rounded-full text-lg flex justify-center items-center hover:bg-slate-300">
                        +
                    </div>
                    <input type="text" {...register('text',{required:true})} autoComplete="off" className=' h-8 w-full outline-0 border-0 rounded-full bg-gray-200 px-3 py-1 text-sm'  placeholder='Aa'/>
                    {/* <InputEmoji 
                    value={newMessage}
                    placeholder="Aa"
                    onChange={onHandleChange}
                    onEnter={onHandleEnter}
                    className='w-full h-10 resize-none '
                    height={5}
                    /> */}
                    <button type="submit" className='text-xl size-8 rounded-full hover:bg-slate-200'><i className="fa-solid fa-circle-arrow-right"></i></button>
                </form>
            </div>
        </>
    )
}

export default ChatInput