import { Routes, Route } from "react-router-dom";
import Motorcycle from "../pages/Motorcycles";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/bikes" element={<Motorcycle />}></Route>
    </Routes>
  )
}

export default AllRoutes