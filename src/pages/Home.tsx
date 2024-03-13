import React from 'react'
// import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Stats from '../Components/Stats'
import Features from '../Components/Features'
import Pricing from '../Components/Pricing'
import URL from '../Components/URL'
import FAQs from '../Components/FAQs'
import GetStarted from '../Components/GetStarted'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <URL/>
      <FAQs />
      <GetStarted />
      {/* <Footer /> */}
    </div>
  )
}

export default Home