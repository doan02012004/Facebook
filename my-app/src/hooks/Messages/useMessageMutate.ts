import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Iuser } from '../../interfaces/Iuser'
import { useContext } from 'react'
import { SocketContext } from '../../context/SocketProvider'
import { Ichat } from '../../interfaces/chat'


const useMessageMutate = (myFriend:Iuser) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=> state.user.userInfo)
    const queryClient = useQueryClient()
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const socket:any = useContext(SocketContext)
    const mutation = useMutation({
        mutationKey:['MESSAGE'],
        mutationFn: async(option:{chat:Ichat|null ,chatId:string|number,text:string})=>{
            const newMessage = {
                chatId: option.chatId,
                senderId:userInfo._id,
                receiverId:myFriend._id,
                text:option.text
            } 
           try {
               const res =  await fetch('http://localhost:3001/messages',{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMessage)
                })
                const message = await res.json()
             
                if(message){
                    socket.current.emit('sendMessage',message)
                     //send socket new chat
                    if(option.chat){
                        socket.current.emit('sendNewChat',{chat:option.chat, receiverId:myFriend._id})
                    }
                }
           } catch (error) {
            console.log(error)
           }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['MESSAGE']})
            queryClient.invalidateQueries({queryKey:['CHAT']})
            queryClient.invalidateQueries({queryKey:['LASTMESSAGE']})
            queryClient.invalidateQueries({queryKey:['COUNTCHAT']})
        }
    })
  return mutation
}

export default useMessageMutate