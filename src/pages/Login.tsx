// import { useContext, useState } from "react";
import { useAuth } from "../Components/ContextProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState } from "react";


const Login = () => {
    const [name,setName]=useState<string>('')
      const [password,setPassword]=useState<string|number>('')
   const auth = useAuth();

   const navigate = useNavigate();
   // const location = useLocation();
   // const redirectPath = location.state?.path || "/dashboard";
const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
	event.preventDefault();
   setName(event.target.value);
 };
 const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
	event.preventDefault();
   setPassword(event.target.value);
};
const handleLogin = () => {
   const user = {name,password}
   auth?.login(()=>{
	   user
		   });
		   navigate('/landingPage')
	   // navigate(redirectPath, { replace: true });
   };

  
	return (
		<div className="pt-[80px]">
            <div className=" flex flex-col h-[95vh] w-[40vw] mx-auto justify-center items-center py-[30px]">
                <form action="" onSubmit={handleLogin} className="w-full h-full bg-[#f5f5f5] rounded-md border-[#0051cb] px-5 pt-[10px]">
                    <p className="mx-auto text-center text-[14px]">Log in with:</p>

                    {/* Google and Apple buttons */}
					<div className="flex justify-center items-center">
    					<button className="text-white bg-[#005AE2] font-normal px-[18px] py-[10px] flex justify-around items-center gap-2 rounded-sm mt-[18px] mr-[28px]" onClick={handleLogin}><img src="../src/assets/logo_googleg_48dp.svg" alt="" />Google</	button>
    					<button className="text-white bg-[#005AE2] font-normal px-[18px] py-[10px] flex justify-around items-center gap-2 rounded-sm mt-[18px] mr-[20px]" onClick={handleLogin}><img src="../src/assets/path.svg" alt="" />Apple</button>
  					</div>

                    <fieldset>
                        <legend className="mx-auto py-[20px] text-center">Or</legend>
                    </fieldset>
                    <input type="text" placeholder="Email address or username" onChange={handleNameChange} value={name} className="border-[2px] mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] mb-[28px] placeholder:text-gray-400 placeholder:justify-start placeholder:font-medium active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"/>
                    <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="border-[2px] mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] placeholder:text-gray-400 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]" />

					<div className="flex justify-end pt-[10px] mr-[24px]">
                    	<button className="text-[#0065fe] text-[14px]">Forgot your password?</button>

					</div>
                    <button type="submit" className="text-white text-[14px] bg-[#005AE2] font-semibold mx-auto px-[28px] py-[12px] flex justify-center gap-4 rounded-full w-[90%] mt-[20px]">Log in</button>
                    <p className="text-center text-[12px] py-[15px]">Don't you have an account? <Link to="/signup"><button className="text-[12px] text-[#0065fe]">Sign up</button></Link></p>
                    <p className="text-gray-400 text-[12px] text-center pb-[20px]">By signing in with an account, you agree to <br /> Scissor's  <span className="text-black">Terms of Service, Privacy Policy</span> and <span className="text-black">Acceptable Use Policy.</span></p>
                </form>
            </div>


      <Footer/>
		</div>
	);
};

export default Login