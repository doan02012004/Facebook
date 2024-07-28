import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from './features/userSlice'
import chatReducer from './features/chatSlice'
import postReducer from './features/postSlice'

const rootReducer = combineReducers({
    user: userReducer ,
    chat: chatReducer,
    post: postReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
export default store