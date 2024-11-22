import COM from "../../assets/working_with_computer.svg";
import Btn from "./props/Btn";
// Btn
const Hero: React.FC = () => {
  return (
    <>
      <main className=" ">
        <section className="md:flex md:pl-8 items-center gap-4 overflow-hidden justify-around mt-[2rem] mb-[8rem] flex-row-reverse">
          <img
            src={COM}
            alt="LOGO"
            className="md:w-[50%] relative left-[3rem] z-0"
          />
          <article className="text-center lg:w-[50.4%]  md:text-left lg:pl-[9.3rem] ">
            <h1 className="font-[700] lg:text-[65px] lg:tracking-[-2px] lg:leading-[90px] tracking-tight text-[42px] leading-[48px] text-[#34313D]">
              More than just shorter links
            </h1>
            <p className="font-[500] tracking-tight md:text-[18px] text-[#9E9AA8] text-[18px]  leading-[30px]">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div>
              <div>
                <Btn />
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Hero;
