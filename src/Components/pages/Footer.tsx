import Btn from "./props/Btn";
const Footer: React.FC = () => {
  return (
    <>
      <main className="bg-custom-bg w-full  md:mt-0 flex items-center justify-center">
        <div className=" mt-8 mx-[35px]">
          <h1 className="text-white text-center font-bold md:text-[40px] text-[20px]">
            Boost your links today
          </h1>
          <div className="flex justify-center">
            <Btn
              className="bg-[#25BDDD] mt-8 md:mt-4  hover:opacity-[0.5]  mb-[40px] text-[15px] text-white px-[40px] py-[12px] rounded-full"
              text="Get started"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
