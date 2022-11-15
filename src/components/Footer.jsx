const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-[3rem] md:py-[4rem] text-[15px] px-7 lg:px-[5rem] text-white flex  flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <img className="h-[28px] md:h-[32px] lg:h-[36.67px] lg:w-[233px] mb-10 md:mb-0" src="./assets/footer/Logo.svg" alt="logo" />
        <div className="social_icons flex mb-[3rem] mt-[5rem] hidden md:flex">
          <img className="mr-[2rem]" src="/assets/social_icons/facebook.png" alt="facebook icon" />
          <img className="mr-[2rem]" src="/assets/social_icons/instagram.png" alt="instagram icon" />
          <img src="/assets/social_icons/twitter.png" alt="twitter icon" />
        </div>
        <p className="text-[16px] font-[400] hidden md:block">© 2022 Metabnb</p>
      </div>

      <div className="mb-10 md:mb-0">
        <h2 className="mb-6 font-[700] text-[18px]">Community</h2>
        <h4 className="mb-4">NFT</h4>
        <h4 className="mb-4">Tokens</h4>
        <h4 className="mb-4">Landlords</h4>
        <h4>Discord</h4>
      </div>
      <div className="mb-10 md:mb-0">
        <h2 className="mb-6 font-[700] text-[18px]">Places</h2>
        <h4 className=" mb-4">Castle</h4>
        <h4 className=" mb-4">Farm</h4>
        <h4 className=" mb-4">Beach</h4>
        <h4>Learn more</h4>
      </div>
      <div className="mb-10 md:mb-0">
        <h2 className="mb-6 font-[700] text-[18px]">About us</h2>
        <h4 className="mb-4">Road map</h4>
        <h4 className="mb-4">Creators</h4>
        <h4 className="mb-4">Career</h4>
        <h4>Contact us</h4>
      </div>

      <div className="social_icons flex mb-[3rem] md:hidden">
          <img className="mr-[2rem]" src="/assets/social_icons/facebook.png" alt="facebook icon" />
          <img className="mr-[2rem]" src="/assets/social_icons/instagram.png" alt="instagram icon" />
          <img src="/assets/social_icons/twitter.png" alt="twitter icon" />
        </div>
        <p className="text-[16px] font-[400] md:hidden">© 2022 Metabnb</p>

    </footer>
  );
};

export default Footer;
