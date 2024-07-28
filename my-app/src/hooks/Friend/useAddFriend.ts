import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'

import { SocketContext } from '../../context/SocketProvider'


const useAddFriend = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const socket:any = useContext(SocketContext)
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationKey:['ADDFRIEND'],
        mutationFn: async(data:{request:string|number|undefined, reciepient: string|number|undefined})=>{
            try {
                const res = await fetch(`http://localhost:3001/friends/addfriend`,{
                    method: 'POST',
                    headers:{
                        "Content-Type": 'application/json'
                    },
                    body:JSON.stringify(data)
                })
                const result = await res.json()
               if(result){
                socket.current.emit('addfriend', result)
               }
                return result
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['FRIENDPENDING']})
            queryClient.invalidateQueries({queryKey:['STATUSFRIEND']})
        }
    })
  return mutation
}

export default useAddFriend