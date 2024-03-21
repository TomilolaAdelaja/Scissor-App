// import React from 'react'
// import Footer from '../Components/Footer'

const Trial = () => {
  return (
    <div className="pt-[80px] bg-[url(../src/assets/bg-learnmore.png)] bg-gray-400">
      <h3 className="text-center text-[26px] font-bold">Let's get in touch</h3>
      <div className=" flex flex-col h-[167vh] w-[40vw]  mx-auto justify-center items-center pt-[30px] pb-[90px]">

          <form action="" className="w-full h-full bg-[#CBD6E0] rounded-md border-[#0051cb] px-10 pt-[70px]">


          <div className='flex justify-between py-[10px] gap-4 w-full'>

            <div className='w-full'>
              <label>
                First Name*
              </label>
              <br />
              <input type="text" name="" id="" className='py-[6px] w-[100%]' />
            </div>

            <div className='w-full'>
              <label htmlFor="">
                Last Name*
              </label>
                <br />
              <input type="text" name="" id="" className='py-[6px] w-full' />
            </div>
          </div>

            <div className='py-[10px]'>
              <label htmlFor="">
                Company Name*
              </label>
              <br />
              <input type="text" name="" id="" className='w-full py-[6px]' />

            </div>

            <div className='py-[10px]'>
              <label htmlFor="">
                Business Email Address*
              </label>
              <br />
              <input type="text" name="" id="" className='w-full py-[6px]' />

            </div>

            <div>
              <label htmlFor="">
                Phone Number*
              </label>
              <br />
              <input type="text" name="" id="" className='w-full py-[6px]'/>

            </div>


            <div className='py-[10px]'>
              <label htmlFor="">
                Job Title*
              </label>
              <br />
              <select name="" id="" value="Please Select" className='w-full py-[9px]'>
                <option value="" selected>Please Select</option>
                <option value="">Marketing Head</option>
                <option value="">CTO</option>
                <option value="">Sales Head</option>
              </select>

            </div>

            <div className='py-[10px]'>
              <label htmlFor="">
                Company Size*
              </label>
              <br />
              <select name="" id="" value="Please Select" className='w-full py-[9px]'>
              <option value="" selected>Please Select</option>
                <option value="">1-10</option>
                <option value="">10-50</option>
                <option value="">50-100</option>
                <option value="">100-1000</option>
              </select>

            </div>

            <div className='py-[10px]'>
              <label htmlFor="">
                Primary Use Case*
              </label>
              <br />
              <select name="" id="" value="Please Select" className='w-full py-[9px]'>
              <option value="" selected>Please Select</option>
                <option value="">For Research</option>
                <option value="">For Fun</option>
                <option value="">Official Use</option>
              </select>

            </div>

            <div>
              <label htmlFor="">
                Country*
              </label>
              <br />
              <select name="" id="" value="Please Select" className='w-full py-[9px]'>
                <option value="" selected>Please Select</option>
                <option value="">Nigeria</option>
                <option value="">Kenya</option>
                <option value="">Ghana</option>
              </select>

            </div>
              <p className='text-[11px] py-[12px]'>Scissor requires the contact information you provide in order to reach out to you regarding our products and services. You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy.</p>

              <button type="submit" className="text-white text-[14px] bg-[#005AE2] font-semibold mx-auto px-[28px] py-[12px] flex justify-center rounded-full w-full mt-[20px]">Submit</button>

          </form>

       </div>

    </div>
  )
}

export default Trial