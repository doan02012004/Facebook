import {  useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { login } from "../redux/features/userSlice"
import { useNavigate } from "react-router-dom"

interface Auth {
    email: string,
    password:string|number
}

const Login = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const dispath = useDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit: any = async (user:Auth) =>{
        try {
            const res = await fetch('http://localhost:3001/users/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            const data = await res.json()
            localStorage.setItem('user', JSON.stringify(data.data))
            if(data){
                dispath(login(JSON.parse(localStorage.getItem('user'))))
                navigate('/')
            }
        } catch (error) {
            alert('Đăng nhập thất bại')
            console.log(error)
        }
    }
  return (
  <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg flex">
    {/* Logo Section */}
    <div className="flex items-center justify-center">
      <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Logo" className="w-20 h-20" />
    </div>
    {/* Form Section */}
    <div className="ml-8">
      <h2 className="text-2xl font-semibold mb-4">Log in to Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">Email</label>
          <input type="text" id="username" {...register('email',{required:true})} className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your username" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input type="password" id="password"  {...register('password',{required:true})} className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Log
          In</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login