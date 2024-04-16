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


function App() {

  return (
    <div className="m-12">
      
      <Login />
      <SignUp />

    </div>
  )
}

export default App
