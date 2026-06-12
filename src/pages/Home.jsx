import React from 'react'
import HeroSlideshow from '../components/HeroSlideshow'
import LearnAgricultureSection from '../components/LearnAgricultureSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSlideshow />
      <LearnAgricultureSection />
      <Footer />
    </div>
  )
}

export default Home

