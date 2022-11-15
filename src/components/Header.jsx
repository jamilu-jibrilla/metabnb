const Header = () => {
  return (
    <header className="md:px-[5rem] mt-[6rem] md:mt-[4rem] text-center lg:text-start flex flex-col lg:flex-row lg:justify-between">
      
      <div className="px-5 md:px-0">
        <h3 className="text-[2rem] md:text-[3.4rem] leading-[2.8rem] md:leading-[73px] mt-[2rem] text-[#434343] font-[500]">
          Rent a <span className="text-[#A02279] font-[700]"> Place </span> away from <br className="hidden lg:inline"/>
          <span className="text-[#A02279] font-[700]">Home</span> in the <span className="text-[#A02279] font-[700]">Metaverse</span>
        </h3>
        <p className="md:text-[1.2rem] px-3 md:px-0 font-[400] my-4 md:my-[40px]">
          we provide you access to luxury and affordable houses <br className="hidden lg:inline" /> in the
          metaverse, get a chance to turn your <br className="hidden lg:inline" /> imagination to reality at your
          comfort zone
        </p>
        <div className="flex items-center h-[40px] md:h-[50px]">
            <input className="w-[60%] md:w-[360px] focus:outline-0 border border-[#A3A3A3] h-[inherit]  px-[1rem] rounded-l-[8px]" type="text" placeholder="search for location" />
            <button className="w-[40%] md:w-[230px] h-[inherit] border border-[#A02279] text-white bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-r-[8px]">search</button>
        </div>
      </div>
      
      <div className="flex justify-center px-[3.5rem] md:px-0 lg:pr-4 order-first lg:order-last">
        <div className="flex flex-col lg:mt-[6rem] mr-2">
          <img className="md:h-[165px] md:w-[223px] mb-2" src="/assets/sect_1/image_4.png" alt="" />
          <img className="md:h-[165px] md:w-[223px]" src="/assets/sect_1/image_6.png" alt="" />
        </div>
        <div className="flex flex-col">
          <img className="md:h-[165px] md:w-[223px] mb-2" src="/assets/sect_1/image_3.png" alt="" />
          <img className="md:h-[165px] md:w-[223px]" src="/assets/sect_1/image_5.png" alt="" />
        </div>
      </div>

    </header>
  );
};

export default Header;
