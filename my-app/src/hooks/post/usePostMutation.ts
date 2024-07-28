import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Ipost } from "../../interfaces/post"
import { useDispatch } from "react-redux"
import { statusPost } from "../../redux/features/postSlice"


const usePostMutation = () => {
    const queryClient = useQueryClient()
    const dispath = useDispatch()
    const mutation = useMutation({
        mutationKey:['POST'],
        mutationFn: async(newPost:Ipost) =>{
            try {
                const res = await fetch('http://localhost:3001/posts',{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(newPost)
                })
                const data = await res.json()
                if(data){
                    dispath(statusPost(false))
                }
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['POST']})
        }
    })
  return mutation
}

export default usePostMutation