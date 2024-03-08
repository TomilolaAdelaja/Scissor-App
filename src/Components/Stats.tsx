import React from 'react'

function Stats() {
  return (
    <div className="bg-[#F9FBFD] grid grid-cols-[400px,repeat(4,_2fr)] gap-10 h-[25%] border-blue-900 py-[60px] px-[80px]">
        <div>
            <h2 className="text-4xl font-bold">One Stop.</h2>
            <h2 className="text-4xl font-bold">Four <span className="text-[#0051cb]">Possibilities</span>.</h2>
        </div>

        <div>
            <h4 className="text-2xl font-semibold pb-[8px]">3M</h4>
            <p className="text-[16px]">Active User</p>
        </div>

        <div>
            <h4 className="text-2xl font-semibold pb-[8px]">60M</h4>
            <p className="text-[16px]">Links & QR <br /> codes created</p>
        </div>

        <div>
            <h4 className="text-2xl font-semibold pb-[8px]">1B</h4>
            <p className="text-[16px]">Click & Scanned connections</p>
        </div>

        <div>
            <h4 className="text-2xl font-semibold pb-[8px]">300k</h4>
            <p className="text-[16px]">App Integrations</p>
        </div>
    </div>
  )
}

export default Stats