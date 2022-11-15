const Card = ({src}) => {
    return (
        <div className="w-[85%] mb-3 lg:mb-0 md:w-[45%] lg:w-[23%] h-[fit-content] mx-auto md:mx-3 border border-[#D7D7D7]] rounded-[15px] p-3 text-[13px]">
            <img className="h-[75%] w-[100%]" src={src} alt="N F T image" />
            <div className="flex justify-between my-2">
                <span>Desert King</span>
                <span className="font-[700]">1MBT per night</span>
            </div>
            <div className="flex justify-between my-2">
                <span>2345km away</span>
                <span>available for 2 weeks stay</span>
            </div>
            <div className="flex justify-between my-2">
                <span className="flex">
                    <img className="mr-2" src="/assets/sect_2/star.png" alt="first rating star" />
                    <img className="mr-2" src="/assets/sect_2/star.png" alt="second rating star" />
                    <img className="mr-2" src="/assets/sect_2/star.png" alt="third rating star" />
                    <img className="mr-2" src="/assets/sect_2/star.png" alt="fourth rating star" />
                    <img className="mr-2" src="/assets/sect_2/star.png" alt="fifth rating star" />
                </span>
                <span></span>
            </div>
        </div>
    )
}

export default Card