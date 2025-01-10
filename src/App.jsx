
import React from 'react'
import Herosection from './components/herosection';
import Features from './components/features'
import Testimonial from './components/testimonial';
import Queries from './components/queries';
import Blogs from './components/blogs';
import Trial from './components/Trial';
import Footer from './components/footer';
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
