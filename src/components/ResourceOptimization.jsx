import React, { useState } from 'react'

const ResourceOptimization = () => {
  const [cropType, setCropType] = useState('')
  const [soilMoisture, setSoilMoisture] = useState('')
  const [optimization, setOptimization] = useState(null)

  // Resource optimization data (Based on standard agricultural practices)
  const dummyOptimizations = {
    'wheat-60': {
      irrigation: 'Water every 5-7 days. Critical stages: Crown root initiation (21-25 DAS), Tillering (45-50 DAS), Jointing, Flowering, Milk stage. Total 4-6 irrigations needed.',
      fertilizer: 'Apply DAP 60-80kg/acre at sowing + Urea 100-120kg/acre in 2-3 splits (at tillering and jointing). NPK 12:32:16 can be used as basal.',
      waterSaving: 'Use drip irrigation to save 30-40% water. Mulch soil to retain moisture. Schedule irrigation based on soil moisture sensors.',
    },
    'rice-80': {
      irrigation: 'Maintain 5-7cm water level during active growth. Use Alternate Wetting and Drying (AWD) - allow water to drop to 15cm below surface before re-irrigating. Drain 7-10 days before harvest.',
      fertilizer: 'Apply DAP 60kg/acre at transplanting + Urea 120kg/acre in 3 splits (25, 45, 65 DAS) + MOP 40kg/acre. Adjust based on soil test.',
      waterSaving: 'Use AWD method to save 25-30% water. Use System of Rice Intensification (SRI) for better water efficiency. Install field channels for proper water management.',
    },
    'cotton-50': {
      irrigation: 'Water every 10-12 days. Critical stages: Flowering and boll formation (60-90 DAS). Total 6-8 irrigations. Avoid water stress during boll development.',
      fertilizer: 'Apply NPK 20:20:20 - 80kg/acre + Urea 60kg/acre in splits: 25% at sowing, 50% at flowering, 25% at boll formation. Add micronutrients if deficient.',
      waterSaving: 'Use drip irrigation for 30-40% water saving. Use furrow irrigation with proper spacing. Install soil moisture sensors. Mulch between rows.',
    },
  }

  const handleOptimize = () => {
    if (cropType && soilMoisture) {
      const key = `${cropType}-${soilMoisture}`.toLowerCase()
      const opt = dummyOptimizations[key] || {
        irrigation: 'Water every 7-10 days based on soil moisture. Monitor soil moisture regularly and adjust frequency based on weather conditions and crop stage.',
        fertilizer: 'Apply balanced NPK fertilizer as per crop requirement. Get soil tested for precise recommendations. Split application is better than single dose.',
        waterSaving: 'Monitor soil moisture regularly. Use efficient irrigation methods (drip/sprinkler). Mulch soil to reduce evaporation. Practice crop rotation.',
      }
      setOptimization(opt)
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section
      id="resources"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            💧 Resource Optimization
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize water, fertilizer, and other resources for maximum yield and efficiency
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            ⚠️ Note: Recommendations are general guidelines. Actual requirements vary based on soil type, crop variety, weather conditions, and local practices. Soil testing is recommended for precise fertilizer application. Consult local agricultural experts for specific advice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Crop Type Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type
                </label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                >
                  <option value="">Select Crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="maize">Maize</option>
                </select>
              </div>

              {/* Soil Moisture Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Moisture Level (%)
                </label>
                <input
                  type="number"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(e.target.value)}
                  placeholder="Enter moisture %"
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={handleOptimize}
              className="w-full sm:w-auto bg-agri-green hover:bg-agri-light-green text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Optimization Plan
            </button>
          </div>

          {/* Output Cards */}
          {optimization && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Irrigation Schedule */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">💧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Irrigation Schedule
                </h3>
                <p className="text-gray-700">{optimization.irrigation}</p>
              </div>

              {/* Fertilizer Quantity */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fertilizer Quantity
                </h3>
                <p className="text-gray-700">{optimization.fertilizer}</p>
              </div>

              {/* Water Saving Tips */}
              <div className="bg-white border-2 border-agri-green rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Water-Saving Tips
                </h3>
                <p className="text-gray-700">{optimization.waterSaving}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResourceOptimization

