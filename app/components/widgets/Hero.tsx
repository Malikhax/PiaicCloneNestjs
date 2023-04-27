import Image from "next/image"
import Wrapper from "../shared/Wrapper"
import heroImg from "../images/heroimg.png"

const Hero =() =>{
    return(
        <section>
            <div className="bg-extra h-full text-black relative -z-10">
                <Wrapper>
                    <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
                        <div className="flex-1 mx-8 mt-20">
                            <Image 
                                className="w-[150px] sm:w-[200px] md:w-[450px]"
                                alt="Presedent image"
                                src={heroImg}
                                height={800}
                            />
                        </div>
                        <div className="flex-1 mx-10">
                            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">Presidential Initiative</h1>
                            <h4 className="text-lg mt-2  font-semibold md:text-2xl">for Artificial Intelligence & Computing (PIAIC)</h4>
                            <p className="mt-6 shrink text-sm md:text-md">The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-10 pr-10 md:bottom-10 md:right-0 md:absolute md:mx-48">
                        <div className="">
                            <button className="px-10 py-2 bg-secondary rounded-2xl text-white">Apply</button>
                        </div>
                        <div className="mb-10">
                            <h1 className="font-bold">100K.</h1>
                            <p>Applications Received</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </section>
    )
}
export default Hero