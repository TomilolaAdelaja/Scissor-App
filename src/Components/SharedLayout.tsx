// import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        <Navbar/>
        |<Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedLayout