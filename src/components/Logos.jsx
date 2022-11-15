const Logos = () => {
  return (
    <div className="bg-[#A02279] w-[100%] h-[50px] md:h-[70px] mt-[6rem] flex justify-around items-center">
      <img
        className="h-[1.2rem] md:h-[35px] lg:h-[43px]"
        src="/assets/sect_1/mb_token.svg"
        alt="company logo for m b token"
      />
      <img
        className="h-[1.2rem] md:h-[35px] lg:h-[43px]"
        src="/assets/sect_1/metamask.svg"
        alt="company logo for metamask"
      />
      <img
        className="h-[1.2rem] md:h-[35px] lg:h-[43px]"
        src="/assets/sect_1/opensea.svg"
        alt="company logo for open sea"
      />
    </div>
  );
};

export default Logos;
