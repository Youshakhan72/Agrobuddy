import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LearnAgricultureBasicsPage from './pages/LearnAgricultureBasicsPage'
import CropLifecyclePage from './pages/CropLifecyclePage'
import SoilTypesTestingPage from './pages/SoilTypesTestingPage'
import ModernFarmingTechniquesPage from './pages/ModernFarmingTechniquesPage'
import StudentSchemesPage from './pages/StudentSchemesPage'
import AgricultureCareersPage from './pages/AgricultureCareersPage'
import CropRecommendationPage from './pages/CropRecommendationPage'
import WeatherAlertsPage from './pages/WeatherAlertsPage'
import MarketPricesPage from './pages/MarketPricesPage'
import ResourceOptimizationPage from './pages/ResourceOptimizationPage'
import DiseaseDetectionPage from './pages/DiseaseDetectionPage'
import AIChatbotPage from './pages/AIChatbotPage'
import GovernmentSchemesPage from './pages/GovernmentSchemesPage'
import IoTDevicesPage from './pages/IoTDevicesPage'

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router basename="/Agrobuddy">
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-agriculture/basics" element={<LearnAgricultureBasicsPage />} />
          <Route path="/learn-agriculture/crop-lifecycle" element={<CropLifecyclePage />} />
          <Route path="/learn-agriculture/soil-types-testing" element={<SoilTypesTestingPage />} />
          <Route path="/learn-agriculture/modern-farming" element={<ModernFarmingTechniquesPage />} />
          <Route path="/learn-agriculture/student-schemes" element={<StudentSchemesPage />} />
          <Route path="/learn-agriculture/careers" element={<AgricultureCareersPage />} />
          <Route path="/crop-recommendation" element={<CropRecommendationPage />} />
          <Route path="/weather-alerts" element={<WeatherAlertsPage />} />
          <Route path="/market-prices" element={<MarketPricesPage />} />
          <Route path="/resource-optimization" element={<ResourceOptimizationPage />} />
          <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
          <Route path="/ai-chatbot" element={<AIChatbotPage />} />
          <Route path="/government-schemes" element={<GovernmentSchemesPage />} />
          <Route path="/iot-devices" element={<IoTDevicesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

