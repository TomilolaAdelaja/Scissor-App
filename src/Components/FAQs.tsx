// import React from 'react'

function FAQs() {
  return (
    <div className="relative h-[900px]" id='FAQs'>
        <img src="../src/assets/Group 3 (1).png" alt="Vectors" className="absolute top-[0px] left-[0px]"/>
        <img src="../src/assets/Group 2 (2).png" alt="Vectors" className="absolute bottom-[0px] right-[0px]"/>

        <div className="mx-auto text-center relative pt-[35px]">
            <img src="../src/assets/Line 70.svg" alt="slash-icon" className="absolute top-[32px] left-[612px]"/>
            <h2 className="text-4xl font-bold">FAQs</h2>
        </div>


        <div className="mx-auto w-[52%] pt-[60px]">

            <div className="border-gray-300 border-b-[1px]">
                <div className="flex justify-between">
                    <h4 className="pb-[14px] text-[18px]">How does URL shortening work?</h4>
                    <img src="../src/assets/minus.svg" alt="minus-icon" />
                </div>
                <p className="text-[14px] py-[12px]">URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.</p>
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Is it necessary to create an account to use the URL shortening service?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Are the shortened links permanent? Will they expire?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Are there any limitations on the number of URLs I can shorten?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Can I customize the shortened URLs to reflect my brand or content</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Can I track the performance of my shortened URLs?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">What is a QR code and what can it do?</h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>

            <div className="flex justify-between border-gray-300 border-y-[1px]">
                <h4 className="py-[16px] text-[18px]">Is there an API available for integrating the URL shortening service into my own applications or websites?  </h4>
                <img src="../src/assets/plus.svg" alt="plus-icon" />
            </div>
        </div>

    </div>
  )
}

export default FAQs