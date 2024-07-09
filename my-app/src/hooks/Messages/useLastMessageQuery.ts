import { useQuery } from '@tanstack/react-query'


const useLastMessageQuery = (chatId:string|number|undefined) => {
    const query = useQuery({
        queryKey:['LASTMESSAGE',chatId],
        queryFn: async()=>{
            try {
                const res = await fetch(`http://localhost:3001/messages/lastmessage/${chatId}`)
                const lastMessage = await res.json()
                return lastMessage
            } catch (error) {
                console.log(error)
                return []
            }
        }
    })
  return query
}

export default useLastMessageQuery