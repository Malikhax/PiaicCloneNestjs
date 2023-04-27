"use client"
import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import logoImg from "../images/Logo.svg"
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navbar = () =>{
    const [nav,setNav] = useState(true);
    const clickHandle =()=>{
        setNav(!nav)
    }
    return (
        <nav>
            <div className="h-20 bg-primary shadow-2xl">
                <Wrapper>
                    <div className="flex justify-between items-center text-white">
                        {/* Logo section */}
                        <div>
                            <Image
                                className="pt-4 relative z-10"
                                alt="logo"
                                src={logoImg}
                                width={80}
                            />
                        </div>
                        {/* menu section */}
                        <div className={!nav ? 'mb-10 mr-10 hidden md:block relative': ''}>
                            <ul className="flex flex-col absolute top-20 right-0 pt-20 pb-10 pl-10 bg-primary w-full gap-6 items-start md:items-center md:justify-center md:flex-row md:static md:space-x-10 md:px-0 md:pt-0 md:pl-0 md:pb-0">
                                <li className="hover:text-secondary cursor-pointer border-b-[1px] pb-2  border-b-green w-11/12 hover:shadow-md md:border-none md:w-auto md:pb-0">How It Works</li>
                                <li className="hover:text-secondary cursor-pointer border-b-[1px] pb-2  border-b-green w-11/12 hover:shadow-md md:border-none md:w-auto md:pb-0">Apply</li>
                                <li className="hover:text-secondary cursor-pointer border-b-[1px] pb-2  border-b-green w-11/12 hover:shadow-md md:border-none md:w-auto md:pb-0">Avaible Programs</li>
                                <li className="hover:text-secondary cursor-pointer border-b-[1px] pb-2  border-b-green w-11/12 hover:shadow-md md:border-none md:w-auto md:pb-0">About</li>
                                <li className="hover:text-secondary cursor-pointer border-b-[1px] pb-2  border-b-green w-11/12 hover:shadow-md md:border-none md:w-auto md:pb-0">WIT</li>
                            </ul>     
                        </div>
                        <div onClick={clickHandle} className="relative mb-10 mr-10 md:hidden">
                            {
                                !nav ? <AiOutlineMenu size={30} /> : <><AiOutlineClose size={30}/></> 
                            }
                        </div>
                    </div>
                </Wrapper>
            </div>
        </nav>
    )
}
export default Navbar