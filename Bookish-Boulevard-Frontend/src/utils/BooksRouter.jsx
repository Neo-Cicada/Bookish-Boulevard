import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fictions from '../pages/Fictions'
import NonFiction from '../pages/NonFiction'
import Biographies from '../pages/Biographies'
import Children from '../pages/Children'
import Landing from '../pages/landing/Landing'
import Cart from '../pages/Cart'
export default function BooksRouter() {
    return (

        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/fiction' element={<Fictions />} />
            <Route path='/children' element={<Children />} />
            <Route path='/nonfiction' element={<NonFiction />} />
            <Route path='/biographies' element={<Biographies />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>

    )
}
