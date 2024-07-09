import React, { useEffect, useRef } from 'react'
import { setActiveUser } from '../redux/features/userSlice'
import { Iuser } from '../interfaces/Iuser'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
type childrenProps = {
    children: React.ReactNode
}
export const SocketContext = React.createContext(null)
const SocketProvider = ({children}:childrenProps) => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo = useSelector((state:any)=>state.user.userInfo)
  const dispath = useDispatch()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const socket:any = useRef()
  useEffect(()=>{
    socket.current = io('http://localhost:8000')
  },[]) 
  useEffect(()=>{
    socket.current.emit('addUser',userInfo)
    socket.current.on('getUsers',(users:Iuser[])=>{
     dispath(setActiveUser(users))
    })
  },[socket])
  return (
   <SocketContext.Provider value={socket}>
        {children}
   </SocketContext.Provider>
  )
}

export default SocketProvider