import React, { useState } from 'react'

const MarketPrices = () => {
  const [selectedCrop, setSelectedCrop] = useState('')
  const [selectedMandi, setSelectedMandi] = useState('')
  const [priceData, setPriceData] = useState(null)

  // Dummy price data
  const dummyPrices = {
    'wheat-delhi': {
      current: 2200,
      trend: 'up',
      recommendation: 'Sell',
      reason: 'Prices are rising. Good time to sell.',
    },
    'rice-mumbai': {
      current: 1800,
      trend: 'down',
      recommendation: 'Hold',
      reason: 'Prices are declining. Wait for better rates.',
    },
    'cotton-ahmedabad': {
      current: 6500,
      trend: 'up',
      recommendation: 'Sell',
      reason: 'Strong upward trend. Sell now for maximum profit.',
    },
  }

  const handleGetPrice = () => {
    if (selectedCrop && selectedMandi) {
      const key = `${selectedCrop}-${selectedMandi}`.toLowerCase()
      const data = dummyPrices[key] || {
        current: 2000,
        trend: 'stable',
        recommendation: 'Hold',
        reason: 'Prices are stable. Monitor market trends.',
      }
      setPriceData(data)
    } else {
      alert('Please select both crop and mandi')
    }
  }

  return (
    <section
      id="market"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            📊 Market Price Trend Analysis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track market prices and get AI-powered selling recommendations
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            ⚠️ Note: Prices shown are for demonstration purposes. Actual market prices vary daily and by location. For real-time prices, please check official mandi websites or agricultural commodity exchanges. Always verify prices before making selling decisions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-agri-bg rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Crop Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop
                </label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="potato">Potato</option>
                  <option value="tomato">Tomato</option>
                </select>
              </div>

              {/* Mandi Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mandi
                </label>
                <select
                  value={selectedMandi}
                  onChange={(e) => setSelectedMandi(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Mandi</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="hyderabad">Hyderabad, Telangana</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGetPrice}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Price Analysis
            </button>
          </div>

          {/* Price Chart Placeholder and Recommendation */}
          {priceData && (
            <div className="space-y-6">
              {/* Chart Placeholder */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Price Trend (Last 30 Days)
                </h3>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-gray-600">
                      Chart visualization would appear here
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Current Price: ₹{priceData.current}/quintal
                    </p>
                    <p className="text-sm text-gray-500">
                      Trend: {priceData.trend === 'up' ? '📈 Upward' : priceData.trend === 'down' ? '📉 Downward' : '➡️ Stable'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  AI Recommendation
                </h3>
                <div className="bg-agri-bg p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600">Suggested Action</p>
                    <span
                      className={`px-4 py-2 rounded-lg font-bold ${
                        priceData.recommendation === 'Sell'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {priceData.recommendation}
                    </span>
                  </div>
                  <p className="text-gray-800 mt-2">{priceData.reason}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MarketPrices

