// import { useContext, useState } from "react";
import { useAuth } from "../Components/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
// import { useState } from "react";


	const Login = () => {
		const { user, setUser, login } = useAuth();
		const navigate = useNavigate();
		const location = useLocation();
		const redirectPath = location.state?.path || "/";
	  
		// const [username, setUsername] = useState("");
		// const [password, setPassword] = useState("");
	  
		const handleLogin = () => {
		  // Perform validation or other necessary logic
		//   const user = { username, password };
		  login();
		  navigate(redirectPath, { replace: true });
	    };


  
	return (
		<div className="pt-[80px]">
            <div className=" flex flex-col h-[90vh] w-[35vw] mx-auto justify-center items-center py-[30px]">
                <form action="" onSubmit={handleLogin} className="w-full h-full bg-[#f5f5f5] rounded-md border-[#0051cb] px-5 pt-[10px]">
                    <p className="mx-auto text-center text-[14px]">Log in with:</p>
                    {/* Google and Apple buttons */}
                    <fieldset>
                        <legend className="mx-auto py-[20px] text-center">Or</legend>
                    </fieldset>
                    <input type="text" placeholder="Email address or username" onChange={(e) => setUser({ ...user, email: e.target.value })} className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] mb-[28px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"/>
                    <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]" />
                    <p className="text-right text-[#0065fe] text-[14px] pr-[20px]">Forgot your password?</p>
                    <button type="submit" className="text-white text-[14px] bg-[#005AE2] font-semibold mx-auto px-[28px] py-[12px] flex justify-center gap-4 rounded-full w-[90%] mt-[20px]">Log in</button>
                    <p className="text-center text-[12px] py-[15px]">Don't you have an account? <span className="text-[12px] text-[#0065fe]">Sign up</span></p>
                    <p className="text-gray-400 text-[12px] text-center pb-[20px]">By signing in with an account, you agree to <br /> Scissor's  <span className="text-black">Terms of Service, Privacy Policy</span> and <span className="text-black">Acceptable Use Policy.</span></p>
                </form>
            </div>


      <Footer/>
		</div>
	);
};

export default Login