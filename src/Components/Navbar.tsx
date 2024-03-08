import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-evenly items-center px-[90px] py-[15px]">

        {/* Logo */}
        <div className="w-[15%]">
            <img src="../src/assets/logo.svg" alt="logo" width="125"/>
        </div>

        {/* Middle Nav */}
        
            <div className="w-[65%] flex justify-around px-[160px]">
                <a href="" className="text-[#0065fe] font-normal">My URLs</a>
                <a href="" className="flex justify-between">Features <img src="../src/assets/chevron-down.svg" alt="chevron-down" className="flex items-center justify-center pt-[4px] pl-[5px]" width="25"/></a>
                <a href="">Pricing</a>
                <a href="">Analytics</a>
                <a href="">FAQs</a>
            </div>
            

        {/* Right Nav */}

        <div className="w-[20%] flex justify-evenly items-center">
            <a href="" className="text-[#0051cb]">Log in</a>
            <a href="" className="bg-[#0065FE] bg-opacity-85 text-center text-white rounded-[30px] px-[28px] py-[8px]">Try for free</a>
        </div>
        
    </div>
    
  )
}

export default Navbar