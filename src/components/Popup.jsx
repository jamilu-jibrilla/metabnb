const Popup = ({openModal, setOpenModal}) => {
  return (
    <div className={`${openModal ? '' : 'hidden'} bg-[#404040]/30 z-40 fixed top-0 w-[100vw] h-[100vh] flex justify-center items-center`}>
      <div className="w-[90%] md:w-[500px]  h-[300px] rounded-[16px] bg-[white] shadow-md">
        <div className="flex px-7 py-4 font-[700] text-[20px] items-center justify-between border-b border-bottom-[#CFD8DC]">
            <h3>Connect Wallet</h3>
            <img onClick={()=>setOpenModal(false)} className="h-[24px] cursor-pointer w-[24px]" src="/assets/close.png" alt="close modal icon" />
        </div>
        <div className="px-7 py-4">
            <span className="text-[16px]">Choose your preffered wallet:</span>
            <div className="w-[100%] bg-[#F8F9FA] h-[55px] rounded-[8px] mt-5 flex px-7 py-4 items-center justify-between border border-[#CFD8DC]">
                <div className="flex items-center">
                    <img  src="/assets/metamask.png" alt="close modal icon" />   
                    <span className="ml-2 font-[600] text-[18px] " >Metamask</span>
                </div>
                <img src="/assets/next.png" alt="close modal icon" />   
            </div>
            <div className="w-[100%] bg-[#F8F9FA] h-[55px] rounded-[8px] mt-5 flex px-7 py-4 items-center justify-between border border-[#CFD8DC]">
                <div className="flex items-center">
                    <img  src="/assets/walletconnect.png" alt="close modal icon" />   
                    <span className="ml-2 font-[600] text-[18px] " >WalletConnect</span>
                </div>
                <img src="/assets/next.png" alt="close modal icon" />   
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
