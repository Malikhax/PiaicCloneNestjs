"use client"
import { FC } from "react"

const CourseBox:FC<{header:String,color:string}> =(props) =>{
    return (
        <section className="relative h-60 w-64 box-border border shadow-sm cursor-pointer rounded-md hover:shadow-lg md:h-40 md:w-44 md:text-sm xl:h-48 xl:w-64">
            <div className={`h-10 bg-${props.color} rounded-t-md `}>
            </div>
            <div>
                <h1 className={`absolute text-${props.color} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold whitespace-nowrap`}>{props.header}</h1>
            </div>
        </section>
    )
}
export default CourseBox