import { createSlice } from "@reduxjs/toolkit";
import { Ichat } from "../../interfaces/chat";

const initialState = {
    chats:[] as Ichat[],
    isOpenChatBox: false,
    isOpenMessages: false,
    listMessage :[] as Ichat[]
}


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:{
        setChats: (state,action)=>{
            state.chats = action.payload
        },
        addChat: (state,action)=>{
            const newChat = [ ...state.chats,action.payload]
            state.chats = newChat
        },
        setMessages:(state,action)=>{
            const checkChat = state.listMessage.find((chat)=> chat._id == action.payload._id )
           
            if(!checkChat){
                state.listMessage = [...state.listMessage, action.payload]
            }else{
                state.listMessage = state.listMessage.map((chat)=>chat._id == action.payload._id? action.payload: chat)
            }
            state.isOpenMessages = true
        },
        setMessagesNewChat: (state,action) =>{
            state.listMessage = action.payload
        },
        removeItemMessage:(state,action)=>{
            state.listMessage = state.listMessage.filter((chat)=> chat._id !== action.payload._id)
            if(state.listMessage.length == 0){
                state.isOpenMessages= false
            }
        }
    }
})

export const {setChats,setMessages,removeItemMessage,setMessagesNewChat,addChat} = chatSlice.actions

export default chatSlice.reducer