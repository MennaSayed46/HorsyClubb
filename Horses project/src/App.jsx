import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'

import Layout from './components/Layout/Layout'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'
import Shop from './components/Shop/Shop'
// import Pages from './components/Pages/Pages'
import Contact from './components/Contact/Contact'
import Faq from './components/FAQ/FAQ'
import Blog from './components/Blog/Blog'
import { Toaster } from 'react-hot-toast'

function App() {

  let router =createBrowserRouter([
  
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<AboutUs/>},
      {path:'services',element:<Services/>},
      {path:'gallery',element:<Gallery/>},
      {path:'shop',element:<Shop/>},
      // {path:'pages',element:<Pages/>},
      {path:'contact',element:<Contact/>},
      {path:'faq',element:<Faq/>},
      {path:'blog',element:<Blog/>},
 
    ]},
  ]);

  return (
  
    <>
     <RouterProvider router={router}>
      <Toaster></Toaster>
     </RouterProvider>
    </>
  )
}

export default App
