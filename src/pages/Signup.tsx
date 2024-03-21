import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'
import 'firebase/auth';



// type FirebaseAuthType = firebase.auth.Auth;

const Signup = () => {

  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  const handleLogin = () => {
   console.log("Click");
  //  setName(event.target.value);
  };

  function setUser(_value: string): void {
    throw new Error('Function not implemented.')
  }

 

  return (
    <div>
      <div className=" flex flex-col h-[120vh] w-[40vw] mx-auto justify-center items-center py-[30px]">

<form action="" onSubmit={handleLogin} className="w-full h-full rounded-md border-[#0051cb] px-5 pt-[10px]">

  <p className="mx-auto text-center text-[14px]">Sign up with:</p>

  <div className="flex justify-center items-center">
    <button className="text-white bg-[#005AE2] font-normal px-[18px] py-[10px] flex justify-around items-center gap-2 rounded-sm mt-[18px] mr-[28px]" typeof='Submit'onClick={handleGoogle}><img src="../src/assets/logo_googleg_48dp.svg" alt="" />Google</	button>
    <button className="text-white bg-[#005AE2] font-normal px-[18px] py-[10px] flex justify-around items-center gap-2 rounded-sm mt-[18px] mr-[20px]" typeof='Submit'><img src="../src/assets/path.svg" alt="" />Apple</button>
  </div>

  <fieldset>
    <legend className="mx-auto py-[20px] text-center">Or</legend>
  </fieldset>

    <input type="text" placeholder="Username" onChange={(e) => setUser(e.  target.value)} className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] mb-[28px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"/>

    <input type="Email" placeholder="Email" onChange={(e) => setUser(e.  target.value)} className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] mb-[28px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"/>


    <div className='relative py-[1.8px]'>

    <input type="password" placeholder="Password" src="../src/assets/Vector.svg" name="" id="" className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]" /><img src="../src/assets/Vector.svg" alt="" className='absolute top-[18px] right-[35px]'/>
    </div>


    <div className='relative pt-[25px]'>
    <input type="password" placeholder="Retype Password" src="../src/assets/Vector.svg" name="" id="" className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[10px] placeholder:text-gray-300 placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"/> <img src="../src/assets/Vector.svg" alt="" className='absolute top-[40px] right-[35px]' />

    </div>


<p className="text-left text-gray-400 text-[14px] pl-[25px] pt-[12px]">6 or more characters, one number, one uppercase & one lowercase.</p>
  <button className="text-white text-[14px] bg-[#005AE2] font-semibold mx-auto px-[28px] py-[12px] flex justify-center gap-4 rounded-full w-[90%] mt-[45px]" onClick={handleLogin}>Sign up with Email</button>

  <p className="text-center text-[12px] py-[15px]">Already have an account? <Link to="/"><button className="text-[12px] text-[#0065fe]">Log in</button></Link></p>
  <p className="text-gray-400 text-[12px] text-center pb-[20px]">By signing in with an account, you agree to <br /> Scissor's  <span className="text-black">Terms of Service, Privacy Policy</span> and <span className="text-black">Acceptable Use Policy.</span></p>
</form>

</div>


    <Footer/>
    </div>
  )
}

export default Signup

// function setName(value: string) {
//   throw new Error('Function not implemented.');
// }
