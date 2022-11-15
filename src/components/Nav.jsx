import { useState } from "react"
import Logo from "./Logo"
import { Link } from 'react-router-dom'
const Nav = ({setOpenModal}) => {
    const [isOpen, setIsopen] = useState(false)

    return (
        <nav className="shadow md:shadow-none flex justify-between md:justify-around fixed md:static top-0 left-0 w-[100%] bg-[white] lg:justify-between items-center py-[1.4rem] px-[1.2rem] md:px-auto md:py-[2rem] lg:px-[5rem]">
            <Logo />
            <ul className={`${isOpen ? 'w-[100%]': 'w-[0px] overflow-hidden' } transition-all ease-linear duration-100 absolute md:static border-t border-t-[gray-50] md:border-t-0 shadow-md md:shadow-none flex flex-col md:flex-row w-[100%] py-5 md:py-0 left-0 top-[4.5rem]  md:w-[auto] bg-[white] items-center font-[400] text-[14px] lg:text-[17px] gap-[30px]`}>
                <li><Link to="/">Home </Link></li>
                <li><Link to="place">Place to stay </Link></li>
                <li><a href="#">NFTs</a></li>
                <li><a href="#">Community</a></li>
            </ul>
            <div className="md:hidden" onClick={()=> setIsopen(prev=> !prev)}>
                <div className={`${isOpen ? 'rotate-45 h-[1.5px]': '' } transition-all ease-linear duration-200 h-[3px] w-[22px] mb-[3px] bg-black`}></div>
                <div className={`${isOpen ? 'hidden': '' } transition-all ease-linear duration-200 h-[3px] w-[22px] mb-[3px] bg-black`}></div>
                <div className={`${isOpen ? '-rotate-45 h-[1.5px]': '' } transition-all ease-linear duration-200 h-[3px] w-[22px] bg-black`}></div>
            </div>
            <button onClick={()=> setOpenModal(true) } className="hidden md:block w-[120px] text-sm lg:text-[1rem] lg:w-[170px] h-[45px] lg:h-[48px] rounded-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white">Connect wallet</button>
        </nav>
    )
}

export default Nav