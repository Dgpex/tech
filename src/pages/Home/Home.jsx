import React from 'react'
import Section1 from './Section1'
import Navbar from '../../components/Navbar'
import WhyChooseSection from './WhyChooseSection'
import PropertiesListing from './PropertiesListing'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Section1 />
      <PropertiesListing />
      <WhyChooseSection />
    </div>
  )
}

export default Home
