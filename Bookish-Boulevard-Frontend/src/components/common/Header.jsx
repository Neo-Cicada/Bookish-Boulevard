import { useState, useEffect } from 'react';
import Navigation from './Navigation'
import { Link, NavLink } from 'react-router-dom'
import BurgerNavigation from './navigation/BurgerNavigation';
export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const [burger, setBurger] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
            setBurger(true)
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row h-[15vh] items-center justify-between max-w-screen-2xl mx-auto min-w-[360px] gap-2">
                <div className='flex flex-col sm:flex-row  justify-between items-center h-[100%] w-full ' >
                    <div className=' h-[100%] pl-4 sm:w-80  md:pl-8 text-2xl flex  items-center sm:justify-center justify-between w-full ' >
                        <Link to="/">
                            <span className='font-extrabold hover:text-amber-900'>Bookish</span> <i> Boulevard</i>
                        </Link>
                        {isMobile && <BurgerNavigation burger={burger} setBurger={setBurger} />}
                    </div>

                    {!isMobile &&
                        <div className='w-[100%] sm:w[50%] h-[100%] flex justify-center items-center'> <Navigation /> </div>
                    }

                </div>

            </div>
            
            {(!burger && isMobile) && <div className='w-full  h-[40vh] z-40 absolute top-15 left-0 right-0 min-w-[360px]'>
                <ul className='flex flex-col items-center justify-around w-full h-full border border-amber-900'>
                    <li>
                        <NavLink to="/fiction"
                            style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}
                        >
                            FICTION</NavLink></li>
                    <li>
                        <NavLink
                            to="/nonFiction"
                            style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                        > NON-FICTION</NavLink></li>
                    <li>
                        <NavLink
                            to="/biographies"
                            style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                        >BIOGRAPHIES</NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                            to="/children">CHILDREN</NavLink>
                    </li>
                </ul>
            </div >}
        </>
    )
}
