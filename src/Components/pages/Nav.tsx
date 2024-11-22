import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleT = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <main>
        <nav className="flex  justify-between px-8 lg:mx-[165px] mt-4">
          <div className="block md:hidden">
            <h1 className="font-bold text-[20px] text-black">Shortly</h1>
          </div>
          <div>
            <ul
              className={`md:flex text-center md:mx-0 mx-[24px]  items-center md:space-x-6 md:top-0 md:space-y-0 space-y-[30px] absolute rounded-lg md:relative left-0 right-0 top-[4rem] ${
                toggle ? "bg-[#3A3054]" : "hidden"
              } bg-[#3A3054] md:bg-transparent`}
            >
              <li className="hidden md:block font-bold text-[20px] text-black">
                Shortly
              </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
              <div className="md:hidden btn_mobile md:mt-0 mt-[30px] px-4  flex flex-col gap-y-[24px]">
                <button className="text-white border-[#494160] border-t-[1px]  md:pt-0 pt-4 ">
                  Login
                </button>
                <button className="bg-[#25BDDD]  hover:opacity-[0.5] mx-2 mb-[40px] text-[15px] text-white px-4 py-2 rounded-full">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
          <div className="md:hidden" onClick={handleT}>
            {toggle ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </div>
          <div className="btn md:flex hidden gap-8">
            <button>Login</button>
            <button className="bg-[#25BDDD] hover:opacity-[0.5] text-[15px] text-white px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>
      </main>
    </>
  );
};
export default Nav;
