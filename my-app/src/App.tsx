
import { Route, Routes } from 'react-router-dom'
import LayoutWeb from './pages/LayoutWeb'
import Homepage from './pages/web/Homepage'
import Login from './pages/Login'
import Auth from './private/Auth'
import ProFilePage from './pages/web/ProFilePage'


function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Auth><LayoutWeb /></Auth>}>
        <Route index element={<Homepage />} />
        <Route path='profile/:id' element={<ProFilePage />} />
    </Route>
    <Route path='login' element={<Login />} />
   </Routes>
   </>
  )
}

export default App
