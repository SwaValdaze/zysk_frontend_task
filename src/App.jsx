
import React from 'react'
import Herosection from './components/Herosection';
import Features from './components/Features'
import Testimonial from './components/Testimonial';
import Queries from './components/Queries';
import Blogs from './components/Blogs';
import Trial from './components/Trial';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Features/>
    <Testimonial/>
    <FAQ/>
    <Queries/>
    <Blogs/>
    <Trial/>
    <Footer/>
    </>
    
  )
}

export default App
