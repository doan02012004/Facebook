import { useQuery } from '@tanstack/react-query'

const useCommentQuery = (postId: string|number|undefined) => {
    const query = useQuery({
        queryKey:['COMMENT',postId],
        queryFn: async()=>{
            try {
                const res = await fetch(`http://localhost:3001/comments/${postId}`)
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })
  return query
}

export default useCommentQuery