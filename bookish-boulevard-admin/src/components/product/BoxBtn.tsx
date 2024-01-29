import { FC } from "react"
import { useState } from "react"
import CreateItem from "./CreateItem"
const BoxBtn: FC<{ name: string }> = ({ name }) => {
    const [isBoxOpen, setBoxOpen] = useState(false)
    const onPress = () => {

    }
    return (
        <>
            <div className='h-full bg-white w-[20%] rounded-md flex items-center justify-center'
                 onClick={()=>setBoxOpen(!isBoxOpen)}
                >
                {name}
            </div>

            {isBoxOpen && <CreateItem />}
        </>
    )
}

export default BoxBtn