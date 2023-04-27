import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import logoImg from "../images/Logo.svg"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () =>{
    return (
        <nav>
            <div className="h-20 bg-primary shadow-2xl">
                <Wrapper>
                    <div className="flex justify-between items-center text-white">
                        {/* Logo section */}
                        <div>
                            <Image
                                className="pt-4"
                                alt="logo"
                                src={logoImg}
                                width={80}
                            />
                        </div>
                        {/* menu section */}
                        <div className="mb-10 hidden md:block">
                            <ul className="flex space-x-16 items-center justify-center">
                                <li className="hover:text-secondary cursor-pointer hover:shadow-md">How It Works</li>
                                <li className="hover:text-secondary cursor-pointer hover:shadow-md">Apply</li>
                                <li className="hover:text-secondary cursor-pointer hover:shadow-md">Avaible Programs</li>
                                <li className="hover:text-secondary cursor-pointer hover:shadow-md">About</li>
                                <li className="hover:text-secondary cursor-pointer hover:shadow-md">WIT</li>
                            </ul>     
                        </div>
                        <div className="mb-10 md:hidden">
                            <AiOutlineMenu
                                size={30}
                            />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </nav>
    )
}
export default Navbar