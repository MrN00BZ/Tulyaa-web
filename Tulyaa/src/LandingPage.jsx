import { useState } from 'react'
import './LandingPage.css'
import Search from './Components/Search'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Categories from './Components/Categories'
import CustomerReviews from './Components/CustomerReviews'
import Lenissmoothscroll from '../Lenissmoothscroll'
import Aboutus from './Components/Aboutus'

function LandingPage() {

  return (
    <>
      <Lenissmoothscroll />
      <Navbar />
      <Hero />
      <Search />
      <Features />
      <Categories />
      <Aboutus />
      <CustomerReviews />
      <Footer />
    </>
  )
}

export default LandingPage
