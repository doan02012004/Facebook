import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Ipost } from '../../interfaces/post'
import { useDispatch, useSelector } from 'react-redux'
import usePostMutation from '../../hooks/post/usePostMutation'
import { statusPost } from '../../redux/features/postSlice'

const AddPost = () => {
    const [avt,] = useState('http://picsum.photos/id/17/1000/1000')
    const [imageUrl, setImageUrl] = useState('')
    const {register,handleSubmit} = useForm()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo = useSelector((state:any)=>state.user.userInfo)
    const mutation = usePostMutation()
    const dispath = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChangeImage = (e:any) =>{
        setTimeout(()=>{
            setImageUrl(e.target.value)
        },300)
    }
 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit:any = (post:Ipost) =>{
       const newPost = {
        author: userInfo._id,
        content:post.content,
        images:post.images,
       }
       mutation.mutate(newPost)
    }
    return (
        <section className=' fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white/80 z-[55] flex justify-center items-center'>
            <div className='w-[550px] shadow-md shadow-gray-400 rounded-lg bg-white px-4'>
                {/* title  */}
                <div className='w-full py-6 relative border-b border-b-gray-300 mb-3'>
                    <h1 className='text-lg font-bold text-center'>Tạo bài viết</h1>
                    <div onClick={()=>dispath(statusPost(false))} className='cursor-pointer  absolute top-1/2 -translate-y-1/2 right-1 size-8 rounded-full bg-gray-200 text-2xl flex justify-center items-center hover:bg-gray-500'><i className="fa-solid fa-xmark"></i></div>
                </div>
                {/* avatar  */}
                <div className=" mb-4">
                    <div className="flex items-center gap-x-2 mb-3">
                        <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
                            <img src={avt} alt="" className="imageCover" />
                        </div>
                        <div>
                            <h1 className='text-base font-semibold'>Đoàn Văn</h1>
                        </div>
                    </div>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div  className=' overflow-y-auto max-h-[400px] mb-4'>
                     {/* content  */}
                     <div>
                        <textarea {...register('content',{required:true})} className='w-full text-2xl h-20 resize-none outline-0 bg-transparent' placeholder='Đoàn ơi bạn đang nghĩ gì ?'></textarea>
                    </div>
                    {/* image  */}
                    <div className='mb-4'>
                        <div className='w-full h-[350px] mb-3'>
                            <img src={imageUrl} className='imageCover' alt="" />
                        </div>
                        <div className='border px-3 py-2 rounded-md'>
                            <input {...register('images')} type="text" onChange={(e)=> onChangeImage(e)} className=' h-full outline-0 w-full border-0 bg-transparent' placeholder='Enter image Url' />
                        </div>
                    </div>
                   </div>
                    <div className='p-3 rounded-md shadow shadow-gray-500 flex items-center mb-3'>
                    <div className=' basis-1/2'>
                        <p className='text-sm font-semibold'>Thêm vào bài viết của bạn</p>
                    </div>
                    <div className=' basis-1/2 flex items-center gap-x-3 '>
                        <div className="size-9 cursor-pointer rounded-full flex-shrink-0 flex items-center justify-center gap-x-2 hover:bg-gray-200">
                            <span className="text-xl text-green-600"><i className="fa-regular fa-image"></i></span>
                        </div>
                        <div className=" size-9 cursor-pointer rounded-full flex-shrink-0 flex items-center  justify-center gap-x-2 hover:bg-gray-200">
                            <span className="text-xl text-blue-600"><i className="fa-solid fa-user-tag"></i></span>
                        </div>

                        <div className="size-9 cursor-pointer rounded-full flex-shrink-0 flex items-center justify-center gap-x-2 hover:bg-gray-200">
                            <span className="text-xl text-yellow-600"><i className="fa-regular fa-face-grin-wink"></i></span>
                        </div>
                        <div className="size-9 cursor-pointer rounded-full flex-shrink-0 flex items-center justify-center gap-x-2 hover:bg-gray-200">
                            <span className="text-xl text-red-600"><i className="fa-solid fa-location-dot"></i></span>
                        </div>

                    </div>
                    </div>
                    <button type='submit' className='w-full py-2 bg-blue-500 text-sm font-semibold text-white rounded-lg mb-3'>Đăng</button>
                </form>
             
            </div>
        </section>
    )
}

export default AddPost