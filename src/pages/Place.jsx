import { Card } from "../components";

const Place = () => {
  return (
    <div>
      <div className="overflow-x-auto py-4 flex border border border-[gray-50] md:border-none text-[#434343] gap-[30px] lg:text-[18px] font-[400] mt-[4.65rem] md:mt-[2rem] lg:mt-12  mb-[2rem] lg:mb-8 px-[1rem] md:px-[3rem] lg:px-[6rem] lg:mr-12 lg:justify-between items-center">
        <span className="whitespace-nowrap">Restaurant</span>
        <span className="whitespace-nowrap">Cottage</span>
        <span className="whitespace-nowrap">Castle</span>
        <span className="whitespace-nowrap">fantasy city</span>
        <span className="whitespace-nowrap">beach</span>
        <span className="whitespace-nowrap">Carbins</span>
        <span className="whitespace-nowrap">Off-grid</span>
        <span className="whitespace-nowrap">Farm</span>
        <button className="whitespace-nowrap h-[40px] lg:h-[48px] text-[14px] lg:text-[16px] rounded-[8px] w-[100%] lg:w-[161px] flex items-center justify-between font-[400] px-5 lg:px-3 border border-[#B4B4B4]">
          <span>Location</span>
          <img
            className="ml-2 h-[18px] lg:h-[24px] w-[14px] lg:w-[24px]"
            src="/assets/filter.png"
            alt="filter icon"
          />
        </button>
      </div>

      <div className="lg:px-[5rem] mb-[7rem]">
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <Card src={"/assets/places/frame1.png"} />
          <Card src={"/assets/places/frame2.png"} />
          <Card src={"/assets/places/frame3.png"} />
          <Card src={"/assets/places/frame4.png"} />
        </div>
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:mt-6">
          <Card src={"/assets/places/frame5.png"} />
          <Card src={"/assets/places/frame6.png"} />
          <Card src={"/assets/places/frame7.png"} />
          <Card src={"/assets/places/frame8.png"} />
        </div>
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:mt-6">
          <Card src={"/assets/places/frame9.png"} />
          <Card src={"/assets/places/frame10.png"} />
          <Card src={"/assets/places/frame11.png"} />
          <Card src={"/assets/places/frame12.png"} />
        </div>
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:mt-6">
          <Card src={"/assets/places/frame13.png"} />
          <Card src={"/assets/places/frame14.png"} />
          <Card src={"/assets/places/frame15.png"} />
          <Card src={"/assets/places/frame16.png"} />
        </div>
      </div>
    </div>
  );
};

export default Place;
