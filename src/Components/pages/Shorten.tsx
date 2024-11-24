import { useState } from "react";
import Loader from "../helper/Loader";

const Shorten: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

  const handleShorten = async () => {
    if (!urlRegex.test(value)) {
      setError("Please enter a valid URL.");
      return;
    }

    setError(null);
    setLoader(true);

    try {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: value }),
      });

      if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
      }

      const data = await response.json();

      setSuccess(true);
      setCopied(false);
      setShortenedLink(data.data.tiny_url);
      setValue("");
    } catch (error: any) {
      setError("Something went wrong. " + error.message);
      console.error("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleCopy = () => {
    if (shortenedLink) {
      navigator.clipboard.writeText(shortenedLink);
      setCopied(true);
    }
  };

  return (
    <main className="md:mx-8 mx-2 lg:mx-[9.3rem]">
      <section className="bg-custom-bg relative mb-4 h-[190px] mt-4 overflow-hidden rounded-lg">
        <div className="md:grid md:grid-cols-3 gap-4 mx-4 items-center mt-[2rem] md:mt-[5rem] justify-center pl-4">
          <div className="md:col-span-2 mb-6 md:mb-0">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(null);
              }}
              type="text"
              placeholder="Shorten a link here..."
              className={`px-[40px] w-full py-[12px] rounded-lg outline-none ${
                error
                  ? "border-2 border-red-500 md:mb-0 mb-6 placeholder:text-red-300"
                  : ""
              }`}
            />
          </div>
          <div className="md:col-span-1">
            <button
              onClick={handleShorten}
              className={`w-full md:w-auto text-[15px] text-white px-[40px] py-[12px] rounded-lg ${
                loader
                  ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "bg-[#25BDDD] hover:opacity-[0.5]"
              }`}
              disabled={loader}
            >
              {loader ? <Loader /> : "Shorten It"}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-[-5.6rem] md:mt-[-1rem] italic">
              {error}
            </p>
          )}
        </div>
      </section>
      {success && shortenedLink && (
        <section className="md:flex justify-center">
          <main className="w-full py-4 px-2 rounded-lg md:flex justify-between bg-[#FFFFFF]">
            <div className="border-b-[1px] md:border-none pb-2 truncate border-[#E7E6E9]">
              {shortenedLink.length > 8
                ? `${shortenedLink.substring(0, 30)}...`
                : shortenedLink}
            </div>
            <div className="md:flex items-center gap-4 md:mt-0 mt-2">
              <div className="text-[#7AE1E1]">{shortenedLink}</div>
              <button
                onClick={handleCopy}
                className={`${
                  copied ? "bg-[#3A3054] text-white" : "bg-[#7AE1E1] text-white"
                } w-full md:w-auto px-4 py-2`}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </main>
        </section>
      )}
    </main>
  );
};

export default Shorten;
