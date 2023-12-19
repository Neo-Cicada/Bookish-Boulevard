import { useState, useEffect } from 'react';
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

        <div className="flex flex-col md:flex-row h-[15vh] items-center justify-between max-w-screen-2xl mx-auto min-w-[370px] gap-2">
            <div className='flex flex-col sm:flex-row  justify-between items-center h-[100%] w-full ' >
                <div className='h-[100%] pl-4 sm:w-80  md:pl-8 text-2xl flex  items-center sm:justify-center justify-between w-full ' >
                    <Link to="/">
                        <span className='font-extrabold'>Bookish</span> <i> Boulevard</i>
                    </Link>
                    {isMobile && <BurgerNavigation />}
                </div>

                {!isMobile &&
                    <div className='w-[100%] sm:w[50%] h-[100%] flex justify-center items-center'> <Navigation /> </div>
                }
            </div>

        </div>

    )
}
