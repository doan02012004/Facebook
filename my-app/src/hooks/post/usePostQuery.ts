import { useQuery } from "@tanstack/react-query"


const usePostQuery = () => {
    const query = useQuery({
        queryKey:['POST'],
        queryFn: async()=>{
            try {
                const res = await fetch(`http://localhost:3001/posts`)
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
  return query
}

export default usePostQuery