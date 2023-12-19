import { useState, useEffect } from 'react';
import SearchButton from './SearchButton'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import BurgerNavigation from './navigation/BurgerNavigation';
export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div className="flex flex-col md:flex-row h-[15vh] border border-red-500 items-center justify-center max-w-screen-2xl mx-auto min-w-[310px]">
            <div className='flex flex-col md:flex-row w-full md:w-[65%]  justify-between md:h-[100%] items-center'>
                <div className='pl-4 sm:w-80  md:pl-8 text-2xl flex items-center sm:justify-center justify-between border border-green-500 w-full ' >
                    <Link to="/">
                        <span className='font-extrabold'>Bookish</span> <i> Boulevard</i>
                    </Link>
                    {isMobile && <BurgerNavigation/>}
                </div>
                {!isMobile && <Navigation />}
            </div>

            <div className='flex flex-row w-full md:w-[35%]  justify-between h-[100%] items-center'>

                <div className=' w-[50%] border border-red-500 ' >
                    <SearchButton />
                </div>
                <div className='pr-[2rem]'>
                    login
                </div>
            </div>
        </div>

    )
}
