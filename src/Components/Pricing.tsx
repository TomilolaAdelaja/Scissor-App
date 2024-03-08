import React from 'react'

function Pricing() {
  return (
    <div>
        <div className="relative mx-auto text-center">
            <img src="../src/assets/Line 70.svg" alt="slash" className="absolute top-[60px] left-[400px]" />
            <h2 className="text-4xl font-bold pt-[60px] pb-[18px]">A <span className="text-[#0051cb]">price perfect</span> for your needs.</h2>
            <p className="w-[38%] mx-auto text-[16px] pb-[60px]">From catering for your personal business, event, social needs you can be rest assured we have you in mind in our pricing.</p>
        </div>
        <div className="flex justify-center mx-auto pt-[60px]">
            <div className="border-[#005AE2] border-[1px] h-[80%] border-r-[0px] px-[45px] pt-[10px] pb-[25px] w-[300px] rounded-md rounded-r-none">
                <p className="text-[18px] pt-[8px] pb-[14px]">Basic</p>
                <h3 className="text-3xl font-semibold">Free</h3>
                <p className="text-[18px] pt-[12px] pb-[21px] font-normal">Free plan for all users</p>
                <ul>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Unlimited URL Shortening</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Basic Link Analytics</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Customizable Short Links</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Standardized Support</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Ad-supported</li>
                </ul>
            </div>

            <div className="bg-[#1E3448] text-white h-[500px] transform translate-y-[-68px] pt-[65px] pb-[70px] px-[45px] w-[350px] rounded-md">
                <p className="text-[18px] pt-[8px] pb-[14px]">Professional</p>
                <h3 className="text-3xl font-semibold">$15/month</h3>
                <p className="text-[18px] pt-[12px] pb-[21px]">Ideal for business creators</p>
                <ul>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle.svg" alt="checked-icon" className="pr-[10px]"/>Enhanced Link Analytics</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle.svg" alt="checked-icon" className="pr-[10px]"/>Custom Branded Domains</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle.svg" alt="checked-icon" className="pr-[10px]"/>Advanced Link Customization</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle.svg" alt="checked-icon" className="pr-[10px]"/>Priority Support</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle.svg" alt="checked-icon" className="pr-[10px]"/>Ad-free Experience</li>
                </ul>
            </div>

            <div className="border-[#005AE2] border-[1px] h-[80%] border-l-[0px] px-[45px] pt-[10px] pb-[25px] w-[300px] rounded-md rounded-l-none">
            <p className="text-[18px] pt-[8px] pb-[14px]">Teams</p>
                <h3 className="text-3xl font-semibold">$25/month</h3>
                <p className="text-[18px] pt-[12px] pb-[21px]">Share with up to 10 users</p>
                <ul>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Team Collaboration</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>User Roles and Permissions</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Enhanced Security</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>API Access</li>
                    <li className="flex item-center text-[14px] pb-[15px]"><img src="../src/assets/check-circle (1).svg" alt="checked-icon" className="pr-[10px]"/>Dedicated Account Manager</li>
                </ul>
            </div>
        </div>

        <div className="flex justify-center items-center pb-[100px]">
            <a href="" className="text-[#0051cb] bg-[#fff] border-[#0051cb] mr-6 border-[1px] rounded-[30px] px-[40px] py-[8px]">Get Custom Pricing</a>
            <a href="" className="bg-[#0065FE] bg-opacity-85 text-center text-white rounded-[30px] px-[40px] py-[8px]">Select Pricing</a>
        </div>
    </div>
  )
}

export default Pricing