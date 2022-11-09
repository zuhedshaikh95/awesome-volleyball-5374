import logo from './logo.svg';
import './App.css';
import Sellpage from './Page/Sellpage';
import { Route, Routes } from 'react-router-dom';
import PostAdd from './Page/PostAdd';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/sellpage" element={<Sellpage/>}></Route>
        <Route path="/postadd" element={<PostAdd/>}></Route>
      </Routes>  
    </div>
  );
}

export default App;
