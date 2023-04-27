"use client"
import CourseBox from "../shared/CourseBox"
import Wrapper from "../shared/Wrapper"

const programData=[
    {
        slug:"ai",
        header:"Artificial Intelligence",
        color:"black"
    },
    {
        slug:"cn",
        header:'Cloud Native and Mobile Web',
        color:"rose-500"
    },
    {
        slug:"bc",
        header:'BLOCKCHAIN ',
        color:"rose-500"
    },
    {
        slug:"iot",
        header:'Internet of Things and AI',
        color:'rose-500'
    }
]
const AvailablePrograms =()=>{
    return(
        <section className="my-10">
            <Wrapper>
                <div className="w-full">
                    <div className="font-bold text-2xl text-center my-5 text-hcolor">
                        <h1>Available Programs</h1>
                    </div>
                    <div className="flex flex-col space-y-4 justify-around items-center md:flex-row md:gap-x-4 overflow-hidden" >
                        {
                            programData.map((items)=>{
                                return(
                                    <div key={items.slug}>
                                        <CourseBox  header={items.header} color={items.color}/>
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