import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import AddPost from "../components/Post/AddPost"


const LayoutWeb = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isOpenPost  = useSelector((state:any)=>state.post.isOpenPost)

  return (
    <div className="bg-slate-100 mx-auto">
      {isOpenPost && (<AddPost />)}
       <Header />
        <Outlet />
    </div>
  )
}

export default LayoutWeb