import React from 'react'

function GetStarted() {
  return (
    <div className="h-[300px] bg-[#1E3448] relative">
        <img src="../src/assets/Group 2 (3).png" alt="Vectors" className="absolute top-[0px] right-[0px]"/>
        <img src="../src/assets/Group 3 (2).png" alt="Vectors" className="absolute bottom-[0px] left-[0px]"/>
        <div className="mx-auto pt-[80px] text-center">
            <h2 className="text-3xl font-bold text-[#fff] mt-[20px]">Revolutionizing Link Optimization</h2>
            <button className="bg-[#0065FE] bg-opacity-85 text-center mt-[50px] text-[14px] text-white font-semibold rounded-[30px] px-[40px] py-[8px]">Get Started</button>
        </div>
    </div>
  )
}

export default GetStarted