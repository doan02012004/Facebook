import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from './features/userSlice'
import chatReducer from './features/chatSlice'

const rootReducer = combineReducers({
    user: userReducer ,
    chat: chatReducer,
   
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
export default store