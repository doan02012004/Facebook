/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react'
import usePostQuery from '../../../../hooks/post/usePostQuery'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../../../redux/features/postSlice'
import { Ipost } from '../../../../interfaces/post'
import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'
import CountPost from './_components/CountPost'
import ActionsPost from './_components/ActionsPost'
import LastComment from './_components/LastComment'
import InputPost from './_components/InputPost'


const ListPost = () => {
    const listPost = usePostQuery()
    const dispath = useDispatch()
    const posts = useSelector((state: any) => state.post.posts)
    useEffect(() => {
        if (listPost.data) {
            dispath(setPosts(listPost.data))
        }
    }, [listPost.data])

    return (
        <div>
            {listPost.isLoading? 'Loading...': (
                posts?.map((post:Ipost, i:number) => (
                    <div key={i} className="rounded-lg bg-white shadow shadow-gray-400 mb-4">
                        {/* header post  */}
                        <div className="px-4 pt-4 pb-2">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-x-2">
                                    <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
                                        <img src={post.author.avatar} alt="" className="imageCover" />
                                    </div>
                                    <div>
                                        <a href="#" className="block w-max font-semibold text-sm">{`${post.author.firstname} ${post.author.lastname}`}</a>
                                        <div className="flex items-center gap-x-2">
                                            <p className="cursor-pointer text-[12px]/[150%] text-gray-600 ">{`${formatDistanceToNow(new Date(post.createdAt), { addSuffix: true,locale: vi }) =='dưới 1 phút trước'? 'Vừa xong': `${formatDistanceToNow(new Date(post.createdAt), { addSuffix: true,locale: vi })}`}`}</p>
                                            <div className=" size-6 cursor-pointer text-[10px] rounded-full hover:bg-gray-300 flex justify-center items-center "><i className="fa-solid fa-user-group"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="size-9 rounded-full text-gray-500 hover:bg-gray-200 flex justify-center items-center"><i className="fa-solid fa-ellipsis"></i></button>
                            </div>
                            <p>{post.content}</p>
                        </div>
                        {/* image post  */}
                        <div className="w-full h-[500px]">
                            <div className="w-full h-full">
                                <img src={post.images} className="w-full h-full object-cover" alt="" />
                            </div>
                        </div>
                        {/* feel post  */}
                        <div className="px-4">
                            <div className="py-2 border-y border-y-gray-400">
                             <CountPost post={post}/>
                            </div>
                           <ActionsPost  post={post} />
                            <div className="mb-4">
                                <span className="block text-sm text-gray-600 font-semibold cursor-pointer py-1 my-1">Xem thêm bình luận</span>
                              <LastComment  post={post} />
                            </div>
    
                            {/* input comment  */}
                           <InputPost  post={post} />
                        </div>
                    </div>
                ))
            )}
          

        </div>
    )
}

export default ListPost