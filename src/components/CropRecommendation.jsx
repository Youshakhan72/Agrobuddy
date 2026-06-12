import React, { useState } from 'react'

const CropRecommendation = () => {
  const [soilType, setSoilType] = useState('')
  const [season, setSeason] = useState('')
  const [location, setLocation] = useState('')
  const [recommendation, setRecommendation] = useState(null)

  // Crop recommendation data (Note: Yields vary based on variety, management practices, and weather conditions)
  const dummyRecommendations = {
    'clay-kharif-maharashtra': {
      crop: 'Cotton',
      yield: '800-1200 kg seed cotton/acre (or 300-450 kg lint/acre)',
      fertilizer: 'NPK 20:20:20 - 80kg/acre + Urea - 60kg/acre in splits. Apply 25% at sowing, 50% at flowering, 25% at boll formation.',
      note: 'Cotton is well-suited for black/clay soils in Maharashtra during Kharif season. Use Bt cotton varieties for better pest resistance.',
    },
    'sandy-rabi-punjab': {
      crop: 'Wheat',
      yield: '1800-2200 kg/acre (45-55 quintals/acre)',
      fertilizer: 'NPK 12:32:16 - 60kg/acre, DAP - 80kg/acre at sowing, Urea in 2-3 splits',
      note: 'Punjab is ideal for wheat cultivation. Use high-yielding varieties like PBW-725, HD-3086.',
    },
    'loamy-zaid-gujarat': {
      crop: 'Watermelon',
      yield: '8000-12000 kg/acre',
      fertilizer: 'NPK 20:20:20 - 40kg/acre, Organic compost - 2-3 tons/acre',
      note: 'Watermelon thrives in well-drained loamy soil during summer. Ensure adequate irrigation.',
    },
  }

  const handleGetRecommendation = () => {
    if (soilType && season && location) {
      const key = `${soilType}-${season}-${location}`.toLowerCase()
      const rec = dummyRecommendations[key] || {
        crop: 'Rice',
        yield: '2000-3000 kg/acre (50-75 quintals/acre)',
        fertilizer: 'DAP - 60kg/acre at sowing + Urea - 120kg/acre in 3 splits (25, 45, 65 DAS) + MOP - 40kg/acre',
        note: 'Yields vary based on variety, water management, and local conditions. Consult local agricultural extension office for region-specific recommendations. Maintain 5-7 cm water depth during active growth.',
      }
      setRecommendation(rec)
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section
      id="crop"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🌾 Crop Recommendation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get AI-powered crop recommendations based on your soil type, season, and location
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            ⚠️ Note: Recommendations are general guidelines. Actual yields and fertilizer requirements may vary based on variety, local conditions, and management practices. Please consult local agricultural experts for specific advice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-agri-bg rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Soil Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Soil Type</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="red">Red Soil</option>
                  <option value="black">Black Soil</option>
                </select>
              </div>

              {/* Season Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Season
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Season</option>
                  <option value="kharif">Kharif</option>
                  <option value="rabi">Rabi</option>
                  <option value="zaid">Zaid</option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Location</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="punjab">Punjab</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="telangana">Telangana</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGetRecommendation}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Crop Recommendation
            </button>
          </div>

          {/* Output Card */}
          {recommendation && (
            <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-agri-green mb-4">
                Recommended Crop
              </h3>
              <div className="space-y-4">
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Crop Name</p>
                  <p className="text-xl font-semibold text-agri-green">
                    {recommendation.crop}
                  </p>
                </div>
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Expected Yield</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {recommendation.yield}
                  </p>
                </div>
                <div className="bg-agri-bg p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Fertilizer Advice</p>
                  <p className="text-lg text-gray-800">{recommendation.fertilizer}</p>
                </div>
                {recommendation.note && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800">{recommendation.note}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CropRecommendation

