import { NavLink } from 'react-router-dom'
export default function Navigation() {
    return (
        <>
            <ul className='flex w-full md:w-[75%] justify-between'>
                <li className='cursor-pointer text-sm font-bold hover:text-amber-900'>
                    <NavLink to="/fiction"
                        style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}
                    >
                        FICTION</NavLink>
                </li>
                <li className='cursor-pointer text-sm font-bold hover:text-amber-900'>
                    <NavLink
                        to="/nonFiction"
                        style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                    > NON-FICTION</NavLink></li>
                <li className='cursor-pointer text-sm font-bold hover:text-amber-900'>
                    <NavLink
                        to="/biographies"
                        style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                    >BIOGRAPHIES</NavLink></li>
                <li className='cursor-pointer text-sm font-bold hover:text-amber-900'>
                    <NavLink
                        style={({ isActive }) => (isActive ? { color: "#74642F", borderBottom: "2px solid #74642F" } : null)}

                        to="/children">CHILDREN</NavLink></li>
                <li className="group relative cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-5 left-0 bg-slate-300 text-black px-2 py-1 mt-2">Cart</span>

                </li>
                <li className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </li>
            </ul>

        </>
    )
}
