// import React from 'react'

function Features() {
  return (
    <div className="grid grid-cols-[380px,repeat(2,_1fr)] gap-[64px] py-[105px] pb-[90px] px-[85px]" id='Features'>
        <div className="relative">
            <img src="../src/assets/Line 70.svg" alt="slash" className="absolute left-[-20px]" />
            <h1 className="pb-[20px] text-4xl font-bold">Why choose <span className="text-[#0051cb]">Scissors</span></h1>
            <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none</p>
        </div>

        <div>
            <img src="../src/assets/Group 6.svg" alt="link-icon" width="40" className="pt-[6px]"/>
            <h4 className="text-2xl font-semibold py-[14px]">URL Shortening</h4>
            <p className="text-[16px]">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
        </div>

        <div>
            <img src="../src/assets/Frame 1000001695.svg" alt="edit-icon" width="40" className="pt-[6px]"/>
            <h4 className="text-2xl font-semibold py-[14px]">Custom URLs</h4>
            <p className="text-[16px]">With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
        </div>

        <div className="grid row-start-2 col-start-2 row-end-3 col-end-3">
            <img src="../src/assets/Frame 1000001695 (1).svg" alt="Barcode" width="40" className="pt-[6px]"/>
            <h4 className="text-2xl font-semibold py-[14px]">QR Codes</h4>
            <p className="text-[16px]">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
        </div>

        <div className="grid row-start-2 col-start-3 row-end-3 col-end-4">
            <img src="../src/assets/Frame 1000001718.svg" alt="Analytics" width="40" className="pt-[6px]"/>
            <h4 className="text-2xl font-semibold py-[14px]">Data Analytics</h4>
            <p className="text-[16px]">Receive data on the usage of either your shortened URLs, custom URLs or generated QR codes. Embedded to monitor progress.</p>
        </div>
    </div>
  )
}

export default Features