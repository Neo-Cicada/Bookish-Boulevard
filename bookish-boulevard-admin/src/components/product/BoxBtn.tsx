import { FC } from "react"
import { useState } from "react"
import DialogBox from "./DialogBox"
const BoxBtn: FC<{ name: string }> = ({ name }) => {
    const [isBoxOpen, setBoxOpen] = useState(false)
    const onPress = () => {

    }
    return (
        <>
            <div className='h-full bg-white w-[20%] rounded-md flex items-center justify-center cursor-pointer'
                 onClick={()=>setBoxOpen(!isBoxOpen)}
                >
                {name}
            </div>

            {isBoxOpen && <DialogBox setBoxOpen={setBoxOpen} />}
        </>
    )
}

export default BoxBtn