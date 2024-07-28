import React from 'react'
import { Ipost } from '../../../../../interfaces/post'
type ActionsPostProps = {
    post: Ipost
}

const ActionsPost = ({post}:ActionsPostProps) => {
  return (
    <div className="py-1 border-b border-b-gray-400">
    <div className="flex items-center justify-between gap-x-2">
        <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
            <span className="mr-2 text-lg"><i className="fa-regular fa-thumbs-up"></i></span>
            Thích
        </button>
        <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
            <span className="mr-2 text-lg"> <i className="fa-regular fa-comment"></i></span>
            Bình luận
        </button>
        <button className="w-full py-1 rounded-md text-gray-600 hover:bg-gray-200">
            <span className="mr-2 text-lg"><i className="fa-solid fa-share"></i></span>
            Chia sẻ
        </button>
    </div>
</div>
  )
}

export default ActionsPost