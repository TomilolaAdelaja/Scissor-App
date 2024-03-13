import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    //navItems
    const navItems = [
        {path: "/login", link: "Login"},
        {path: "/learnmore", link: "Try for free"},

    ]


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
            <a href="/login" className="text-[#0065fe] font-medium">Log in</a>
            <a href="/learnmore" className="bg-[#0065FE] bg-opacity-85 text-center text-white rounded-[30px] px-[28px] py-[8px]">Try for free</a>

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