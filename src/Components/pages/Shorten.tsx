const Shorten: React.FC = () => {
  return (
    <>
      <main>
        <section className="bg-custom-bg md:mx-8 mx-2 relative   mb-4 h-[168px] mt-4 lg:mx-[9.3rem] overflow-hidden  rounded-lg">
          <div className="md:grid md:grid-cols-3 gap-4 mx-4  items-center mt-[2rem] md:mt-[5rem] justify-center pl-4">
            <div className=" md:col-span-2 mb-4 md:mb-0 ">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="px-[40px] w-full py-[12px] rounded-lg outline-none"
              />
            </div>
            <div className=" md:col-span-1">
              <button className="bg-[#25BDDD] w-full   md:w-auto   hover:opacity-[0.5]  text-[15px] text-white px-[40px] py-[12px] rounded-lg">
                Shorten It
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Shorten;
