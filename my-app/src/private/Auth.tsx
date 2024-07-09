
import { Navigate } from 'react-router-dom'
const Auth = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    let authenticate = true;
    // localStorage.removeItem('user')
    if(!user|| user._id == ''){
        authenticate = false;
        alert('Bạn ko có quyền truy cập')
    }
   
    return authenticate ? children : <Navigate to='/login' />
}

export default Auth