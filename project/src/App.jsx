import "./App.css";
import Cursor from "./components/cursor/cursor";
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/home/home';
import { useState } from "react";
import Challenge from "./pages/challenges/Challenge"
import Event from "./pages/events/Event"
import About from "./pages/about/About"
import Navbar from "./components/navBar/navBar";
import { Footer } from "./components/footer/Footer";

function App() {
  const [dataState, setDataState] = useState("waite")
  const location = useLocation();

  return (
    <>
      <Cursor ele="a,button,hover"/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/challenge' element={<Challenge />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
