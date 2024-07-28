import React from 'react'
import { Ipost } from '../../../../../interfaces/post'
type InputPostProps = {
    post: Ipost
}
const InputPost = ({post}:InputPostProps) => {
  return (
    <div className="flex gap-x-2">
    <div className="size-8 rounded-full overflow-hidden flex-shrink-0">
        <img src={`http://picsum.photos/id/34/100/100`} alt="" className="imageCover" />
    </div>
    <div className="w-full ">
        <form className=" h-10 w-full rounded-full overflow-hidden bg-gray-200 flex items-center ">
            <input type="text" className="text-sm px-4 w-full h-full outline-0 border-0 bg-transparent" placeholder="Bình luận dưới vai trò Đoàn Văn" />
            <button className="h-full px-3 rounded-full hover:bg-gray-500">
                <span><i className="fa-solid fa-paper-plane"></i></span>
            </button>
        </form>
    </div>
</div>
  )
}

export default InputPost