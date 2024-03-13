import React from 'react'

function Footer() {
  return (
    <div className="relative h-[450px] pt-[100px]">
        <img src="../src/assets/Group 3 (3).png" alt="Vectors" className="absolute top-[142px] left-[0px]"/>
        <img src="../src/assets/Group 2 (4).png" alt="Vectors" className="absolute top-[325px] right-[0px]"/>

        
        <div className="flex px-[200px] gap-20 w-full">
            
            <div className="flex flex-col w-[15%]">
                    <div className="pt-[5px]">
                        <img src="../src/assets/Logo (1).svg" alt="" />
                    </div>

                    <div className="flex gap-[18px] pt-[30px]">
                        <img src="../src/assets/i.fi-social-twitter.svg" alt=""/>
                        <img src="../src/assets/svg.feather.svg" alt="" />
                        <img src="../src/assets/i.fi-social-linkedin.svg" alt="" />
                        <img src="../src/assets/i.fi-social-facebook.svg" alt="" />
                    </div>
            </div>

            <div className="grid grid-cols-4 w-[85%] gap-x-20 gap-y-1">

                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Why Scissor?</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Scissor 101</a></li>
                        <li className="pb-[3px]"><a href="">Integration & API</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Solutions</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Social Media</a></li>
                        <li className="pb-[3px]"><a href="">Digital Marketing</a></li>
                        <li className="pb-[3px]"><a href="">Customer Service</a></li>
                        <li><a href="">For Developers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-[20px] pb-[10px]">Products</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Link Management</a></li>
                        <li className="pb-[3px]"><a href="">QR Codes</a></li>
                        <li><a href="">Link-in-bio</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Company</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">About Scissor</a></li>
                        <li className="pb-[3px]"><a href="">Careers</a></li>
                        <li className="pb-[3px]"><a href="">Partners</a></li>
                        <li className="pb-[3px]"><a href="">Press</a></li>
                        <li className="pb-[3px]"><a href="">Contact</a></li>
                        <li><a href="">Reviews</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Resources</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Blog</a></li>
                        <li className="pb-[3px]"><a href="">Resource Library</a></li>
                        <li className="pb-[3px]"><a href="">Developers</a></li>
                        <li className="pb-[3px]"><a href="">App Connectors</a></li>
                        <li className="pb-[3px]"><a href="">Supports</a></li>
                        <li className="pb-[3px]"><a href="">Trust Center</a></li>
                        <li className="pb-[3px]"><a href="">Browser Extension</a></li>
                        <li><a href="">Mobile App</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Features</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Branded Links</a></li>
                        <li className="pb-[3px]"><a href="">Mobile Links</a></li>
                        <li className="pb-[3px]"><a href="">Campaign</a></li>
                        <li className="pb-[3px]"><a href="">Management &</a></li>
                        <li className="pb-[3px]"><a href="">Analytics</a></li>
                        <li><a href="">QR Code generation</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[20px] font-semibold pb-[10px]">Legal</h4>
                    <ul>
                        <li className="pb-[3px]"><a href="">Privacy Policy</a></li>
                        <li className="pb-[3px]"><a href="">Cookie Policy</a></li>
                        <li className="pb-[3px]"><a href="">Terms of Service</a></li>
                        <li className="pb-[3px]"><a href="">Acceptable Use Policy</a></li>
                        <li><a href="">Code of Conduct</a></li>
                    </ul>
                </div>

            </div>
        </div>
        
        <div className="flex justify-around gap-2 absolute bottom-[-200px] right-[130px] font-medium">
            <p className="ml-[10px]">Term of service</p>
            <img src="../src/assets/Vector 6.svg" alt="" width="2"/>
            <p>Security</p>
            <img src="../src/assets/Vector 6.svg" alt="" width="2"/>
            <p>Scissor 2023</p>
        </div>

    </div>
  )
}

export default Footer