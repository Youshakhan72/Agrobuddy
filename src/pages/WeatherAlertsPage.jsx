import React from 'react'
import WeatherAlerts from '../components/WeatherAlerts'
import Footer from '../components/Footer'

const WeatherAlertsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WeatherAlerts />
      <Footer />
    </div>
  )
}

export default WeatherAlertsPage

