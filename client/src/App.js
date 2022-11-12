import logo from "./logo.svg";
import "./App.css";
import Sellpage from "./Page/Sellpage";
import { Route, Routes } from "react-router-dom";
import PostAdd from "./Page/PostAdMobile";
import Navbar from "./component/Navbar";
import YourAd from "./Page/YourAd";
import PostAdHouse from "./Page/PostAdHouse";
import PostAdMobile from "./Page/PostAdMobile";
import PostAdLaptop from "./Page/PostAdLaptop";
import PostAdCar from "./Page/PostAdCar";
import PostAdBike from "./Page/PostAdBike";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/sellpage" element={<Sellpage />}></Route>
        <Route path="/postadd" element={<PostAdd />}></Route>
        <Route path="/yourad" element={<YourAd />}></Route>
        <Route path="/house" element={<PostAdHouse />}></Route>
        <Route path="/mobile" element={<PostAdMobile />}></Route>
        <Route path="/laptop" element={<PostAdLaptop />}></Route>
        <Route path="/car" element={<PostAdCar />}></Route>
        <Route path="/bike" element={<PostAdBike />}></Route>
      </Routes>
    </div>
  );
}

export default App;
