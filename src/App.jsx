import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import AppLayout from './components/layout/AppLayout'


import Product from './pages/Product'
import Contact from './pages/Contact'
// import About from './pages/About'
import Home from './pages/Home'
import LoginPage  from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPass from './pages/ForgotPass'



const router=createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/product',
      element:<Product/>,
    },
    // {
    //   path:'/about',
    //   element:<About/>,
    // },
    
    {
      path:'contact',
      element:<Contact/>,
    },
    {
      path:'login',
      element:<LoginPage/>,
    },
    {
      path:'signup',
      element:<SignUp/>,
    },
    {
      path:'forgot-password',
      element:<ForgotPass/>,
    },
  ]
  }
  
])
const App=()=>{
  return <RouterProvider router={router}></RouterProvider>
}
export default App