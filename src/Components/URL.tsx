import { useEffect, useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import InputShortener from "../pages/Test";



function URL() {

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setinputValue] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :</p>
  }

  return (
    <div className="bg-[#1E3448] flex items-center justify-center flex-col h-[520px] w-full relative" id="My-URL">
      <img
        src="../src/assets/Group 3.png"
        alt="vectors"
        className="absolute top-[0px] left-[0px]"
      />
      <img
        src="../src/assets/Group 2 (1).png"
        alt="vectors"
        className="absolute bottom-[0px] right-[0px]"
      />

      <div className="flex justify-center w-[35vw] h-[60vh] items-center text-[#0065FE]">
        <form
          action=""
          // onSubmit={}
          className="w-full h-full bg-[#f5f5f5] rounded-md border-[#0051cb] px-5 py-[40px] z-30"
        >
          <input
            type="text"
            placeholder="Paste URL here..."
            value={inputValue}
            className="border mx-auto border-[#0065FE] w-[90%] flex justify-center rounded-lg px-9 py-[12px] placeholder:text-[#0065fe] placeholder:justify-start active:border-[#0065fe] hover:border-[#0065fe] focus:border-[#0065fe] outline-[#0065fe]"
          />

          <div className="flex justify-center w-[90%] gap-4 mx-auto mt-[25px]">
            <select
              name=""
              id=""
              value="Choose Domain"
              className="w-[50%] rounded-lg px-9 py-[12px] border-[#0065FE] outline-[#0065fe] border-[1px] placeholder:text-[#0065fe]"
            >
              <option
                value=""
                className="border-[#0065FE] placeholder:justify-start"
              >
                Choose a Domain
              </option>
              <option value="">Choose another Domain</option>
            </select>

            <input
              type="text"
              name="name"
              id=""
              value=""
              placeholder="Type Alias here"
              className="border border-[#0065FE] w-[50%] rounded-lg px-9 outline-[#0065fe] py-[6px] placeholder:text-[#0065fe]"
            />
          </div>

          <div>
            <InputShortener />
          </div>

          <button className="text-white bg-[#005AE2] font-bold mx-auto px-[28px] py-[12px] flex justify-center gap-4 rounded-full w-[90%] mt-[30px]" type="submit">
            Trim the URL{" "}
            <img
              src="../src/assets/magic wand.svg"
              alt="magic-wand"
              className=""
            />
          </button>
          <p className="pt-[20px] px-[34px] text-[14px]">
            By clicking TrimURL, I agree to the{" "}
            <span className="font-bold">Terms of Service, Privacy Policy</span>{" "}
            and Use of Cookies
          </p>

          <p className="">{shortenLink}</p>
        </form>
      </div>
    </div>
  );
}

export default URL;
