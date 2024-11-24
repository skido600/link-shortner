import { useState } from "react";
import Loader from "../helper/Loader";

const Shorten: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

  const body = {
    destination: value,
  };

  const handleShorten = async () => {
    if (!urlRegex.test(value)) {
      setError("Please enter a valid URL.");
      return;
    }

    setError(null);
    setLoader(true);

    try {
      const response = await fetch("https://short-xish.onrender.com/api/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log("Shortened URL:", data);
      } else if (response.status === 400) {
        setError("Destination URL is required");
      } else if (response.status === 500) {
        setError("Internal server error");
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <main>
      <section className="bg-custom-bg md:mx-8 mx-2 relative mb-4 h-[178px] mt-4 lg:mx-[9.3rem] overflow-hidden rounded-lg">
        <div className="md:grid md:grid-cols-3 gap-4 mx-4 items-center mt-[2rem] md:mt-[5rem] justify-center pl-4">
          <div className="md:col-span-2 mb-6 md:mb-0">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                // setError(null);
              }}
              type="text"
              placeholder="Shorten a link here..."
              className={`px-[40px] w-full py-[12px] rounded-lg outline-none ${
                error
                  ? "border-2 border-red-500 md:mb-0 mb-4 placeholder:text-red-300"
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
            <p className="text-red-500 text-sm mt-[-4.8rem] md:mt-[-1rem] italic">
              {error}
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shorten;
