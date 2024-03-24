import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Earlybird from './components/EarlyBird/Earlybird'
import { Outlet } from 'react-router-dom'
import ThemeToggler from './components/ThemeToggler'

function Layout() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Earlybird/>
    <Outlet/>
    <ThemeToggler />
    <Footer/>
    </>
  )
}

export default Layout