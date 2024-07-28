import React, { useEffect, useState } from 'react'
import { Ipost } from '../../../../../interfaces/post'
type CountPostProps = {
    post: Ipost
}
const CountPost = ({ post }: CountPostProps) => {
    const [countUsers, setCountUsers] = useState(0)
    useEffect(() => {
        if(post.likes.length > 0){
            setCountUsers(post.likes.length)
        }
    }, [post])
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                    <div className="size-5 rounded-full bg-blue-500 flex justify-center items-center">
                        <span className="text-white text-[12px]"><i className="fa-solid fa-thumbs-up"></i></span>
                    </div>
                    <p className="text-sm text-gray-500 cursor-pointer hover:underline">{countUsers > 0? 'Duyên và 99 người khác':''}</p>
                </div>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">99 bình luận</p>
            </div>
        </>
    )
}

export default CountPost