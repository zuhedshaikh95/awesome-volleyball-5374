import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import BikeSingle from './BikesSingle'
import HomePage from './HomePage'
import MobileSingle from './MobileSingle'
import NotFound from './NotFound'
import LaptopSingle from './LaptopSingle'
import CarSingle from './CasSingle'
import HouseSingle from './HouseSingle'
function AllRoutes() {
  return (
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='laptop/:_id' element={<LaptopSingle/>}/>
        <Route path='mobile/:_id' element={<MobileSingle/>}/>
        <Route path='bike/:_id' element={<BikeSingle/>}/>
        <Route path='car/:_id' element={<CarSingle/>}/>
        <Route path='house/:_id' element={<HouseSingle/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
  )
}

export default AllRoutes