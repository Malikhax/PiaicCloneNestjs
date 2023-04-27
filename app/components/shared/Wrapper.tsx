import { FC } from "react"

interface childrenProps{
    children:React.ReactNode
}

const Wrapper:React.FC<childrenProps> = ({children}) =>{
    return(
        <div className="max-w-screen-2xl mx-2  sm:mx-4 md:mx-auto md:px-4">
            {children}
        </div>
    )
}
export default Wrapper