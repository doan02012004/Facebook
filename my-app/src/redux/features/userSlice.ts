import { createSlice } from "@reduxjs/toolkit"
import { Iuser } from "../../interfaces/Iuser"
import { Ifriend } from "../../interfaces/friend"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const user = JSON.parse(localStorage.getItem('user') as any)


const initialState = {
    userInfo: user? user : {},
    activeUser: [] as Iuser[],
    friendsPending: [] as Ifriend[]
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload
           
        },
        setActiveUser: (state, action) => {
            state.activeUser = action.payload.filter((user: Iuser) => user._id !== state.userInfo._id)
        },
        setFriendsPending:(state, action)=>{
            state.friendsPending = action.payload
        }
        
    }

})
export const { login, setActiveUser,setFriendsPending } = userSlice.actions

export default userSlice.reducer