import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useContext } from "react"
import { SocketContext } from "../../context/SocketProvider"

const useUpdateStatusFriend = (friendId:string|number|undefined) => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const socket:any = useContext(SocketContext)
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey:['STATUSFRIEND',friendId],
        mutationFn: async(option: {id:string|number|undefined, status: string})=>{
            try {
                const res = await fetch('http://localhost:3001/friends/updatestatus', {
                    method:"POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(option)
                })
                const friend = await res.json()
                if(friend){
                    const data = {
                        friend:friend,
                        friendId:friendId
                    }
                    socket.current.emit('updateStatusFriend', data)
                   }
                return friend
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['FRIENDPENDING']})
            queryClient.invalidateQueries({queryKey:['STATUSFRIEND']})
            queryClient.invalidateQueries({queryKey:['ADDFRIEND']})
        }
    })

  return mutation
}

export default useUpdateStatusFriend