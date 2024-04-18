import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar';
import Home from './pages/1.home/Home';
import Services from './pages/2.services/Services';
import Portfolio from './pages/3.portfolio/Portfolio';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer'
import Login from './pages/0.login/Login'
import SignUp from './pages/0.login/SignUp'
import SlidingLoginForm from './pages/0.login/toggleLogin'
import BgImage from '/home/kartik/E/vs/React/route/route/public/modern-glass-morphism-of-login-template-vector-50688514.jpg';
import SigIn from "./pages/0.login/SigIn"
import DesktopImage from "/home/kartik/E/vs/React/route/route/public/asthetic_new.jpg"
import Image from "../public/brandbird.png"
import tick from "../public/icons8-tick-60.png"

function App() {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-screen flex h-screen overflow-hidden relative">
      <div className="w-[25%] border border-green-400 bg-gradient-to-r from-gray-300 to-[#4ca2cd]">
            <p className='text-emerald-700 font-extrabold font-mono text-4xl mt-[10rem]'>
              Welcome To anime Verce!
              <ul className="list-disc" >
                <li>binge watch your fav Anime</li>
                <li>Lauda Lasan</li>
                <li>And Bhat</li>
              </ul>
            </p>
      </div>
      <div className="w-[75%] border border-pink-600 relative bg-gradient-to-r from-[#4ca2cd] to-gray-700 via-purple-400">
        <div className="shadoWala -z-1 w-[95%] h-[85%] absolute bottom-0">

        </div>
        <img src={Image} className="pr-0 w-full h-full object-cover absolute" />
      </div>
      <div
        className="absolute top-[10rem] right-[24rem]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SigIn />
      </div>
    </div>
  );
}

export default App;
