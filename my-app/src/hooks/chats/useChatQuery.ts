

import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'



const useChatQuery = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=> state.user.userInfo)
    const query = useQuery({
        queryKey:['CHAT'],
        queryFn: async()=>{
            try {
               const res = await fetch(`http://localhost:3001/chats/${userInfo._id}`)
                const data = await res.json()
               return data.data
            } catch (error) {
                console.log(error)
                return []
            }
        }
    })

  return query
}

export default useChatQuery