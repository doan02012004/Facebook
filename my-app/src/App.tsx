
import { Route, Routes } from 'react-router-dom'
import LayoutWeb from './pages/LayoutWeb'
import Homepage from './pages/web/Homepage'
import Login from './pages/Login'
import Auth from './private/Auth'
import ProFilePage from './pages/web/ProFiles/ProFilePage'
import ProFileLayout from './pages/web/ProFiles/ProFileLayout'
import ProFileAbout from './pages/web/ProFiles/ProFileAbout'


function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Auth><LayoutWeb /></Auth>}>
        <Route index element={<Homepage />} />
        <Route path='profile/:id' element={<ProFileLayout />}>
              <Route index element={<ProFilePage />} />
              <Route path='&sk=about' element={<ProFileAbout />}  />
        </Route>
    </Route>
    <Route path='login' element={<Login />} />
   </Routes>
   </>
  )
}

export default App
