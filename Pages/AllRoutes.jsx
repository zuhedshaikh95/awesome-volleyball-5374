import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import HomePage from './HomePage'
import SingleProduct from './SingleProduct'
function AllRoutes() {
  return (
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<SingleProduct/>}/>
     </Routes>
  )
}

export default AllRoutes