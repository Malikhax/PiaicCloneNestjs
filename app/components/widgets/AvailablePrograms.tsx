"use client"
import CourseBox from "../shared/CourseBox"
import Wrapper from "../shared/Wrapper"

const programData=[
    {
        slug:"ai",
        header:"Artificial Intelligence",
        color:"text-[#192a56]",
        bg:"bg-[#192a56]"
    },
    {
        slug:"cn",
        header:'Cloud Native and Mobile Web',
        color:"text-[#e1006a]",
        bg:"bg-[#e1006a]"
    },
    {
        slug:"bc",
        header:'BLOCKCHAIN ',
        color:"text-[#fbc314]",
        bg:"bg-[#fbc314]"
    },
    {
        slug:"iot",
        header:'Internet of Things and AI',
        color:'text-[#1b8f8b]',
        bg:"bg-[#1b8f8b]"
    }
]
const AvailablePrograms =()=>{
    return(
        <section className="my-10">
            <Wrapper>
                <div className="w-full pb-20">
                    <div className="font-bold text-2xl text-center my-5 text-hcolor ">
                        <h1 className="tracking-[10px]">Available Programs</h1>
                    </div>
                    <div className="flex flex-col gap-4 justify-around items-center md:flex-row  overflow-hidden" >
                        {
                            programData.map((items)=>{
                                return(
                                    <div key={items.slug}>
                                        <CourseBox  header={items.header} color={items.color} bg={items.bg}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
export default AvailablePrograms