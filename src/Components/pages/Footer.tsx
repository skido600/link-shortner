import Btn from "./props/Btn";
// import Logo1 from "../../assets/Path (1).svg";
// import Logo2 from "../../assets/Path (2).svg";
// import Logo3 from "../../assets/Path (3).svg";
// import Logo4 from "../../assets/Shape.svg";
const Footer: React.FC = () => {
  return (
    <>
      <section>
        <main className="bg-custom-bg  w-full  md:mt-8 flex items-center justify-center">
          <div className=" mt-8 mx-[35px] ">
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
        <article className="bg-[#232127] text-center md:text-left pt-8 pb-4 md:flex justify-around">
          <div className="">
            <h1 className="font-bold text-[30px] text-white mb-8 md:mb-0">
              Shortly
            </h1>
          </div>
          <section className="md:flex gap-x-12  items-center">
            <div>
              <ul className="text-[#BFBFBF] text-[15px] mb-8   md:mb-0 space-y-2">
                <h1 className="font-bold text-[15px] text-white mb-4">
                  Features
                </h1>
                <ol>link Shortening</ol>
                <ol>Branded olnks</ol>
                <ol>Analytics</ol>
              </ul>
            </div>
            <div>
              <ul className="text-[#BFBFBF]  mb-8 md:mb-0 space-y-2 text-[15px]">
                <h1 className="font-bold text-[15px] text-white mb-4">
                  Resources
                </h1>
                <ol>Blog</ol>
                <ol>Developers</ol>
                <ol>Support</ol>
              </ul>
            </div>
            <div>
              <ul className="text-[#BFBFBF] space-y text-[15px]">
                <h1 className="font-bold text-[15px] text-white mb-4">
                  Company
                </h1>
                <ol className="mb-1">About</ol>
                <ol className="mb-1">Our Team</ol>
                <ol className="mb-1">Careers</ol>
                <ol>Contact</ol>
              </ul>
            </div>
          </section>
          <div className="flex ibn space-x-4 p-2 mt-4 justify-center">
            <img src={`/assets/Path (1).svg`} alt="logo_1" />
            <img src={`/assets/Path (2).svg`} alt="logo_1" />
            <img src={`/assets/Path (3).svg`} alt="logo_1" />
            <img src={`/assets/Shape.svg`} alt="logo_1" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Footer;
