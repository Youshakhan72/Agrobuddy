import React, { useState } from 'react'

const GovernmentSchemes = () => {
  const [state, setState] = useState('')
  const [landSize, setLandSize] = useState('')
  const [cropType, setCropType] = useState('')
  const [schemes, setSchemes] = useState([])

  // Government schemes data (Verified as of 2024-2025)
  const allSchemes = [
    {
      name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      description:
        'Direct income support of ₹6,000 per year to all landholding farmer families in three equal installments of ₹2,000 each. Paid directly to bank accounts.',
      eligibility: 'All landholding farmer families (subject to exclusions like income tax payers, government employees, etc.)',
      benefits: '₹6,000/year (₹2,000 per installment)',
      website: 'https://pmkisan.gov.in',
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      description:
        'Crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities, pests, and diseases. Premium rates: 1.5% for Kharif, 1.5% for Rabi, and 5% for commercial/horticultural crops.',
      eligibility: 'All farmers growing notified crops in notified areas',
      benefits: 'Premium: 1.5-2% of sum insured for food crops, 5% for commercial crops. Government subsidizes remaining premium.',
      website: 'https://pmfby.gov.in',
    },
    {
      name: 'Kisan Credit Card (KCC)',
      description:
        'Credit facility for farmers to meet short-term credit requirements for cultivation, post-harvest expenses, and other needs. Interest subvention of 2% per annum for prompt repayment.',
      eligibility: 'All farmers including tenant farmers, oral lessees, and sharecroppers',
      benefits: 'Interest subvention up to 2% per annum. Credit limit based on landholding and crop value.',
      website: 'Contact nearest bank branch',
    },
    {
      name: 'Soil Health Card Scheme',
      description:
        'Provides farmers with soil health cards containing nutrient status of their soil and recommendations for appropriate dosage of nutrients. Free soil testing every 3 years.',
      eligibility: 'All farmers',
      benefits: 'Free soil testing and nutrient recommendations. Helps optimize fertilizer use and improve soil health.',
      website: 'https://soilhealth.dac.gov.in',
    },
    {
      name: 'National Mission on Sustainable Agriculture (NMSA)',
      description:
        'Promotes sustainable agriculture practices including organic farming, water conservation, and climate-resilient agriculture. Provides subsidies on equipment, inputs, and infrastructure.',
      eligibility: 'Farmers practicing sustainable agriculture, organic farming, or adopting climate-resilient practices',
      benefits: 'Subsidy on equipment (drip/sprinkler irrigation, mulching), organic inputs, and infrastructure development. Varies by component and state.',
      website: 'Contact state agriculture department',
    },
  ]

  const handleFindSchemes = () => {
    if (state && landSize && cropType) {
      // Filter schemes based on criteria (simplified logic)
      setSchemes(allSchemes)
    } else {
      alert('Please fill all fields')
    }
  }

  return (
    <section
      id="schemes"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🏛️ Government Scheme Recommender
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find eligible government schemes and subsidies based on your profile
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            ⚠️ Note: Scheme details, eligibility criteria, and benefits may vary by state and are subject to change. Please verify current information from official government websites or local agricultural offices before applying.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-agri-bg rounded-lg p-6 sm:p-8 shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* State Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  State
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-agri-green focus:border-agri-green transition-all bg-white text-gray-800 font-medium"
                >
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="punjab">Punjab</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="telangana">Telangana</option>
                </select>
              </div>

              {/* Land Size Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Land Size (acres)
                </label>
                <input
                  type="number"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  placeholder="Enter land size"
                  min="0"
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-agri-green focus:border-agri-green transition-all bg-white text-gray-800 font-medium"
                />
              </div>

              {/* Crop Type Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Crop Type
                </label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-agri-green focus:border-agri-green transition-all bg-white text-gray-800 font-medium"
                >
                  <option value="">Select Crop</option>
                  <option value="wheat">Wheat</option>
                  <option value="rice">Rice</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="pulses">Pulses</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleFindSchemes}
              className="w-full bg-agri-green hover:bg-agri-light-green text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Find Eligible Schemes
            </button>
          </div>

          {/* Scheme Cards - Accordion Style */}
          {schemes.length > 0 && (
            <div className="space-y-4">
              {schemes.map((scheme, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border-2 border-green-100 rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-agri-green mb-4">
                        {scheme.name}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{scheme.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-agri-bg to-white p-5 rounded-2xl border border-gray-100">
                          <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Eligibility</p>
                          <p className="text-base font-medium text-gray-800">
                            {scheme.eligibility}
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100">
                          <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Benefits</p>
                          <p className="text-base font-medium text-green-800">
                            {scheme.benefits}
                          </p>
                        </div>
                      </div>
                      {scheme.website && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">Official Website:</span>{' '}
                            <a href={scheme.website} target="_blank" rel="noopener noreferrer" className="text-agri-green hover:underline">
                              {scheme.website}
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="ml-6">
                      <svg className="w-6 h-6 text-agri-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default GovernmentSchemes

