import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
=======
import { RouterProvider, createBrowserRouter,Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>
//       }
//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"     element={<Layout/>}>
    <Route path=""     element={<Home/>}/>
    <Route path="about"     element={<About/>}/>
    <Route path="contact"     element={<Contact/>}/>
       <Route path="user:/userid"     element={<User/>}/>
 </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
>>>>>>> 4c0d20e7b98ea028246e3fc4b1f2649dd397150d
  </React.StrictMode>,
)
