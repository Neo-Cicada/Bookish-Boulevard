import React from 'react'
import SearchButton from './SearchButton'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <div className="flex flex-col md:flex-row h-[15vh] border border-red-500 items-center justify-center max-w-screen-xl mx-auto min-w-[310px]">
            <div className='flex flex-col md:flex-row w-full md:w-[65%]  justify-between md:h-[100%] items-center'>
                <div className='pl-4 md:pl-8'>
                    <Link to="/">Bookish Boulevard</Link>
                </div>
                <Navigation />
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
