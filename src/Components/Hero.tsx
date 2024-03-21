// import React from 'react'

function Hero() {
  return (
    <div>
      <h1 className="text-[50px] w-[80%] text-center mx-auto relative pt-16 pb-8 font-black leading-loose">Optimize Your Online Experience with Our Advanced <span className="text-[#0051cb]">URL Shortening</span> Solution <img src="../src/assets/Vector 3.svg" alt="slash" className="absolute top-[250px] left-[462px]"/></h1>

        <p className="mx-auto w-[53%] text-center text-[17px] tracking-[0.3px] pb-[60px] leading-7">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>

        <div className="flex justify-center items-center">
            <a href="" className="bg-[#0065FE] bg-opacity-85 text-center text-white rounded-[30px] mr-16 px-[40px] py-[8px]">Sign Up</a>
            <a href="" className="text-[#0051cb]">Learn more</a>
        </div>

        <div className="relative mt-[30px]">
          <img src="../src/assets/Vector 2.png" alt="Vector" width="242" className="absolute top-[45px] left-[370px]"/>
          <img src="../src/assets/Frame 29546.png" alt="icons" className="mx-auto absolute top-[10px] left-[500px] py-12"/>
        </div>

        <div className="relative mt-[380px]">
          <img src="../src/assets/Ellipse 1.png" alt="Ellipse" className="absolute top-[25px] left-[200px]"/>
          <img src="../src/assets/Rectangle 9.png" alt="Rectangle" />
        </div>

    </div>
  )
}

export default Hero
