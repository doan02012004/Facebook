import { useInfiniteQuery } from "@tanstack/react-query"


const fetchMessage = async({pageParam = 1, chatId}:{pageParam:number, chatId:string|number})=>{
   try {
    const res = await fetch(`http://localhost:3001/messages/${chatId}/pagemessage?page=${pageParam}`);
    const data = await res.json();
    return data;
   } catch (error) {
    console.log(error)
   }
}
const useMessageQuery = ({chatId}:{chatId:string|number|undefined}) => {
    const {data,
        fetchNextPage,      
        hasNextPage,        
        isFetchingNextPage,
        status,  
       } = useInfiniteQuery({
        queryKey:['MESSAGE', chatId],
        queryFn:({pageParam=1})=> fetchMessage({pageParam,chatId}),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getNextPageParam:(lastpage:any) =>{
            return lastpage.nextPage ?? undefined;
        }
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       } as any)
    // const query = useQuery({
    //     queryKey: ['MESSAGE',chatId],
    //     queryFn: async()=>{
    //         if(chatId){ 
    //         try {
    //             const res = await fetch(`http://localhost:3001/messages/${chatId}`)
    //             const message = await res.json()
    //             return message
    //         } catch (error) {
    //             console.log(error)
    //             return []
    //         }
    //         }
    //     }
    // })

  return {data,
    fetchNextPage,      
    hasNextPage,        
    isFetchingNextPage,
    status,  
   }
}

export default useMessageQuery