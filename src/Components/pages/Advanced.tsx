import Footer from "./Footer";
import Shorten from "./Shorten";

const Advanced: React.FC = () => {
  // const article = [
  //   {
  //     id: 1,
  //     title: "    Brand Recognition",
  //     icon: Icon1,
  //     description:
  //       " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  //   },
  // ];
  // foo;
  return (
    <>
      <main className="bg-[#EFF1F7]">
        <div className="relative top-[-8rem] pt-8">
          <Shorten />
        </div>
        <section className="text-center">
          <h1
            className="text-[#34313D] 
          md:text-[40px] mb-4 font-[700] text-[28px]"
          >
            Advanced Statistics
          </h1>
          <p className="font-[500] tracking-tight md:text-[18px] text-[#9E9AA8] text-[18px]  leading-[30px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <article>
          <section className="md:flex text-center md:text-left lg:pl-[8rem] md:mx-8 mt-8">
            <div className="bg-white mb-4 mx-4 md:mx-0   relative z-10 rounded-[5px] p-4 md:px-4">
              <section className="flex md:block justify-center">
                <div className="bg-[#3A3054] mt-[-2.2rem] rounded-full w-[88px] lg:w-[88px] md:w-[70px] md:h-[70px]   lg:h-[88px] h-[88px] px-5 py-5">
                  <figure>
                    <img src={`/assets/icon1.svg`} alt="icon_1" />
                  </figure>
                </div>
              </section>

              <h1 className="text-[#34313D] font-[700] mt-4 text-[#22px]">
                Brand Recognition
              </h1>
              <p className="text-[15px] mt-4 text-[#9E9AA8]">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <main className="flex justify-center  md:block">
              <div className="aff"></div>
            </main>
            <div className="aff_2 md:block hidden"></div>
            <div className="bg-white  mx-3 md:mx-0 md:mt-7 relative p-4 mb-4  z-10 rounded-[5px]  md:px-4">
              <section className="flex md:block justify-center">
                <div className="bg-[#3A3054] mt-[-2.2rem] rounded-full md:w-[70px] md:h-[70px] lg:w-[88px] lg:h-[88px] h-[88px] w-[88px] px-6 py-5">
                  <figure>
                    <img src={`/assets/icon3.svg`} alt="icon_1" />
                  </figure>
                </div>
              </section>

              <h1 className="text-[#34313D] font-[700] mt-4 text-[#22px]">
                Detailed Records
              </h1>
              <p className="text-[15px] mt-4 text-[#9E9AA8]">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <main className="flex justify-center md:block">
              <div className="aff"></div>
            </main>
            <div className="aff_2 md:block hidden"></div>
            <div className="bg-white p-4  mx-3 md:mx-0 md:mb-4   md:mt-12  lg:h-[247px] relative  rounded-[5px] md:px-4">
              <section className="flex md:block justify-center">
                <div className="bg-[#3A3054] mt-[-2.2rem] rounded-full md:w-[70px] md:h-[70px] lg:w-[88px] lg:h-[88px] h-[88px] w-[88px] px-5 py-5">
                  <figure>
                    <img src={`/assets/icon2.svg`} alt="icon_1" />
                  </figure>
                </div>
              </section>

              <h1 className="text-[#34313D] font-[700] mt-4 text-[#22px]">
                Fully Customizable
              </h1>
              <p className="text-[15px] mt-4 text-[#9E9AA8]">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </section>
        </article>
        <div className="mt-8">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Advanced;
