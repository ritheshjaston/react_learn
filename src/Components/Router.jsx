import React from 'react'
import Home from './Home'
import Arrowfunction from './Arrowfunction'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Arraymethod from './Arraymethod'
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Arrowfunction' element={<Arrowfunction/>}/>
                    <Route exact path='/Array' element={<Arraymethod/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
