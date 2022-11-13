import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Navbar/Home";
import DummyLogin from "../Pages/SigninPages/DummyLogin";
import LoginEmail from "../Pages/SigninPages/Login_Email";
import LoginMobile from "../Pages/SigninPages/LoginMoblie";


export const AllRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>

        <Route path="/" element={ <DummyLogin/>  }></Route>
          <Route path="/contwithphone" element={<LoginMobile />}></Route>
          <Route path="/contwithemail" element={<LoginEmail />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
