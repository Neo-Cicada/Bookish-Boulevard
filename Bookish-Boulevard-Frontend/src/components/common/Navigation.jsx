import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
    return (
        <>
            <ul className='flex w-full md:w-[75%] justify-around'>
                <li className='cursor-pointer'>
                    <NavLink to="/fiction"
                        style={({ isActive }) => (isActive ? { borderBottom: '1px solid red' } : null)}
                    >
                        Fiction</NavLink>
                </li>
                <li className='cursor-pointer'><NavLink
                    to="/nonFiction"
                    style={({ isActive }) => (isActive ? { borderBottom: '1px solid red' } : null)}

                > Non-Fiction</NavLink></li>
                <li className='cursor-pointer'>
                    <NavLink
                        to="/biographies"
                        style={({ isActive }) => (isActive ? { borderBottom: '1px solid red' } : null)}

                    >Biographies</NavLink></li>
                <li className='cursor-pointer'> <NavLink
                    style={({ isActive }) => (isActive ? { borderBottom: '1px solid red' } : null)}

                    to="/children">Children</NavLink></li>
            </ul>
        </>
    )
}
