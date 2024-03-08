import React from 'react'

function URL() {
  return (
    <div className="bg-[#1E3448] h-[520px] w-full relative">
        <img src="../src/assets/Group 3.png" alt="vectors" className="absolute top-[0px] left-[0px]"/>
        <img src="../src/assets/Group 2 (1).png" alt="vectors" className="absolute bottom-[0px] right-[0px]" />
        
        <div className="h-screen flex justify-center items-center text-[#0065FE]">
            <form action="" className="w-[30%] bg-[#fff] rounded-md border-[#0051cb] p-5 z-30">
              <input type="text" placeholder="search...." className="border border-gray-20 rounded-full px-9 py-[6px]"/>
                <select name="" id="" value="Choose Domain">
                    <option value="" >Choose a Domain</option>
                    <option value="" >Choose another Domain</option>
                </select>

                <input type="text" name="name" id="" value="" placeholder="Type Alias here"/>  

                <button className="text-white bg-blue-400">Trim the URL <img src="../src/assets/magic wand.svg" alt="magic-wand"/></button>              
            </form>
        </div>


    </div>
  )
}

export default URL