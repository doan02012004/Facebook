import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LayoutWeb from "./pages/LayoutWeb"


function App() {


  return (
   <>
   <Routes>
      <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
      </Route>
   </Routes>
   </>
  )
}

export default App
