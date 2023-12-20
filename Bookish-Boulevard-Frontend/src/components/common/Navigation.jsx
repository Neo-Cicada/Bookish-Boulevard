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
            </ul>
        </>
    )
}
