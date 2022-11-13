import { Routes, Route, Link } from "react-router-dom";
import Motorcycle from "../pages/Motorcycles";
import Cars from "../pages/Cars";
import Mobiles from "../pages/Mobiles";
import Laptops from "../pages/Laptops";
import Houses from "../pages/Houses";

import LaptopSingle from "../pages/LaptopSingle";
import BikesSingle from "../pages/BikesSingle";
import CarSingle from "../pages/CarSingle";
import HouseSingle from "../pages/HouseSingle";
import MobileSingle from "../pages/MobileSingle";
import HomePage from "../pages/HomePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>

        <Route path="/bikes" element={<Motorcycle />}></Route>
        <Route path='/bikes/:_id' element={<BikesSingle/>}/>

        <Route path="/cars" element={<Cars />}></Route>
        <Route path='/cars/:_id' element={<CarSingle/>}/>

        <Route path="/mobiles" element={<Mobiles />}></Route>
        <Route path='mobile/:_id' element={<MobileSingle/>}/>

        <Route path="/laptops" element={<Laptops />}></Route>
        <Route path='/laptops/:_id' element={<LaptopSingle/>}/>

        <Route path="/houses" element={<Houses />}></Route>
        <Route path='/houses/:_id' element={<HouseSingle/>}/>
    </Routes>
  )
}

export default AllRoutes