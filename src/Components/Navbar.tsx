import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './ContextProvider'

function Navbar() {
    //navItems
    // const navItems = [
    //     {path: "/login", link: "Login"},
    //     {path: "learn", link: "Try for free"},

    // ]

    const Auth = useAuth() 


  return (
    <div className="flex justify-evenly items-center px-[90px] py-[15px] font-medium">

        {/* Logo */}
        <div className="w-[15%]">
            <a href="/"><img src="../src/assets/logo.svg" alt="logo" width="125"/></a>
        </div>

        {/* Middle Nav */}
        
            <div className="w-[65%] flex justify-around px-[160px]">
                <a href="#My-URL" className="text-[#0065fe]">My URLs</a>
                <a href="#Features" className="flex justify-between">Features <img src="../src/assets/chevron-down.svg" alt="chevron-down" className="flex items-center justify-center pt-[1.5px] pl-[2px]" width="25"/></a>
                <a href="#Pricing">Pricing</a>
                <a href="">Analytics</a>
                <a href="#FAQs">FAQs</a>
            </div>
            

        {/* Right Nav */}

        <div className="w-[20%] flex justify-evenly items-center">
            {/* <a href="/login" className="text-[#0065fe] font-medium">Log in</a> */}
            {Auth?.user? <Link to="login" className="text-[#0065fe]">Login</Link>:<Link to='/' className="text-[#0065fe]">Logout</Link>}
            <Link to="learn" className='bg-[#0065FE] bg-opacity-85 text-center text-white rounded-[30px] px-[28px] py-[8px]'>Try for free</Link>

            {/* {
                navItems.map(({path, link}) => <a className='text-black' key={path}>
                    <NavLink to={path}>{link}</NavLink>
                </a>)
            } */}
        </div>
        
    </div>
    
  )
}

export default Navbar