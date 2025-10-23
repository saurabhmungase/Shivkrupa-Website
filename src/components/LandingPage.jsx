import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <WhatsAppButton />
    </div>
  )
}

export default LandingPage