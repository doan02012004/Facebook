import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   posts: [],
   isOpenPost: false
}


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        setPosts: (state,action)=>{
            state.posts = action.payload
        },
        statusPost : (state,action)=>{
            state.isOpenPost = action.payload
        },
    }
})

export const {setPosts,statusPost} = postSlice.actions

export default postSlice.reducer