import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import FeaturedProperties from '../components/FeaturedProperties'
import HowItWorks from '../components/HowItWorks'
import CallToAction from '../components/CallToAction'

const HomePage = () => {
  return (
    <div>
      <ImageCarousel/>
      <FeaturedProperties/>
      <HowItWorks/>
      <CallToAction/>
    </div>
  )
}

export default HomePage