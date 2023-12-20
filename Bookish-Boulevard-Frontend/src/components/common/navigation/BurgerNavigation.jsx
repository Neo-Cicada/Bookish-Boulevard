import { useState } from "react";
const BurgerNavigation = () => {
    const [burger, setBurger] = useState(true)
    return (
        <>
            {burger ?
            <div className="relative">
                
                <svg onClick={() => setBurger(!burger)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer z-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
                :
                <svg onClick={() => setBurger(!burger)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" data-slot="icon" className="w-10 h-10 cursor-pointer z-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            }
            

        </>
    )
}

export default BurgerNavigation;