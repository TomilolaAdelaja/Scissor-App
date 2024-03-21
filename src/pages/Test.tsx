import { useState } from "react";
import axios from "axios";

const InputShortener = () => {
  const [shortenLink, setShortenLink] = useState("");
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${value}`);
      setShortenLink(res.data.result.full_short_link);
      setError(false); // Reset error state
    } catch (err) {
      setError(true); // Set error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={handleChange}
        />
        <button onClick={fetchData} disabled={loading}>
          {loading ? 'Loading...' : 'Shorten'}
        </button>
        {error && <p className="error">Something went wrong</p>}
        <p>{shortenLink}</p>
      </div>
    </div>
  );
};

export default InputShortener;
