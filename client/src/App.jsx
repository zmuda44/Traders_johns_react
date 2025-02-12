import { useState } from 'react'
import { Outlet } from 'react-router-dom';
// import { Link } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import './css/checkout.css'
import './css/ui.css'
import './css/login.css'
import './css/profile.css'
import './style.css'

function App() {


  return (
    <div>
    <p style={{ textAlign: 'center', margin: '10px 0' }}>Click here for details on this project</p>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
