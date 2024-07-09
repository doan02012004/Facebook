

import { useQuery } from '@tanstack/react-query'
const useUserQuery = (userId:string|number|undefined) => {
const query = useQuery({
    queryKey:['USER',userId],
    queryFn: async()=>{
        try {
            const res = await fetch(`http://localhost:3001/users/${userId}`)
            const user = await res.json()
            return user.data
        } catch (error) {
            console.log(error)
            return []
        }
    }
})
  return query
}

export default useUserQuery