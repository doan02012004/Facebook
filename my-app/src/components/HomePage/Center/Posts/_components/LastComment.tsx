import React from 'react'
import { Ipost } from '../../../../../interfaces/post'
type LastCommentProps = {
    post: Ipost
}
const LastComment = ({post}:LastCommentProps) => {
  return (
    <div className="flex gap-x-2">
    <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
        <img src={`http://picsum.photos/id/34/100/100`} alt="" className="imageCover" />
    </div>
    <div>
        <div className="p-2 rounded-xl bg-gray-200">
            <p className="block w-max font-semibold text-[12px]/[150%] mb-1">Đoàn Văn</p>
            <p className="text-sm ">Tôi rất thích điều này</p>
        </div>

        <div className="flex items-center gap-x-3">
            <p className="cursor-pointer text-[12px]/[150%] text-gray-600 ">2 phút</p>
            <span className="cursor-pointer text-[12px]/[150%] text-gray-600 font-semibold  hover:underline">thích</span>
            <span className="cursor-pointer text-[12px]/[150%] text-gray-600 font-semibold  hover:underline">Phản hồi</span>
        </div>
    </div>
</div>
  )
}

export default LastComment