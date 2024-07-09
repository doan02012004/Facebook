import { useQuery } from "@tanstack/react-query"



const fetchListFriendPending = async(userId:string|number|undefined)=>{
        try {
            const res = await fetch(`http://localhost:3001/friends/pending/${userId}`)
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
            return []
        }
}

const useListFriendPQuery = (id:string|number|undefined) => {
    
    const query = useQuery({
        queryKey:['FRIENDPENDING',id],
        queryFn: ()=> fetchListFriendPending(id)
    })
    
  return query
}

export default useListFriendPQuery