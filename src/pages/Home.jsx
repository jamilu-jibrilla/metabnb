import { Cards, Header, Logos } from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <Logos />
      <Cards />
      <div className="bg-[#A02279] mt-[5rem] py-[2rem] md:py-[1rem] px-7 lg:px-[5rem] flex items-center justify-between">
        <div className="text-white lg:mt-[-2rem]">
          <h3 className="text-[2rem] lg:text-[3rem] mb-5 font-[700]">Metabnb NFTs</h3>
          <p className="lg:leading-[2rem]">
            Discover our NFT gift cards collection. Loyal <br className="hidden md:inline" />
            customers gets amazing gift cards which are <br className="hidden md:inline" />
            traded as NFTs. These NFTs gives our cutomer <br className="hidden md:inline" />
            access to loads of our exclusive services.
          </p>
          <button className="bg-white text-[#A02279] rounded-[8px] w-[156px] h-[48px] mt-7 md:mt-10">
            Learn more
          </button>
        </div>
        <div className="hidden md:block w-[50%] py-[3rem] px-[2rem]">
          <img src="/assets/sect_3/Frame.png" />
        </div>
      </div>
    </>
  );
};

export default Home;
