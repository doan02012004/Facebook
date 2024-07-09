import { Outlet } from "react-router-dom"
import Header from "../components/Header"


const LayoutWeb = () => {
 

  return (
    <div className="bg-slate-100 px-4 mx-auto">
       <Header />
        <Outlet />
    </div>
  )
}

export default LayoutWeb