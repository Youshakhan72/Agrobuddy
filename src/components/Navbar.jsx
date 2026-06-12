import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'IoT Devices', path: '/iot-devices' },
    { name: 'Learn Agriculture', path: '/learn-agriculture/basics' },
    { name: 'Crop Recommendation', path: '/crop-recommendation' },
    { name: 'Weather Alerts', path: '/weather-alerts' },
    { name: 'Market Prices', path: '/market-prices' },
    { name: 'Resource Optimization', path: '/resource-optimization' },
    { name: 'Disease Detection', path: '/disease-detection' },
    { name: 'AI Chatbot', path: '/ai-chatbot' },
    { name: 'Government Schemes', path: '/government-schemes' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-agri-green">
              🌾 AgroBuddy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-1 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-agri-green bg-agri-bg'
                    : 'text-gray-700 hover:text-agri-green hover:bg-agri-bg'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md text-left transition-colors ${
                    location.pathname === item.path
                      ? 'text-agri-green bg-agri-bg'
                      : 'text-gray-700 hover:text-agri-green hover:bg-agri-bg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

