import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'


const useOneFriendQuery = (userId:string|number|undefined) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=>state.user.userInfo)
    const data = {
        requesterId:userInfo._id,
        recipientId: userId
    }
    const query = useQuery({
        queryKey:['STATUSFRIEND'],
        queryFn: async()=>{
                try {
                    const res = await fetch(`http://localhost:3001/friends/onefriend/${data.requesterId}/${data.recipientId}`)
                    const oneFriend = await res.json()
                    return oneFriend
                } catch (error) {
                    console.log(error)
                    return []
                }
        }
    })
  return query
}

export default useOneFriendQuery