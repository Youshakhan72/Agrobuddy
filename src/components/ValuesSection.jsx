import React from 'react'

const ValuesSection = () => {

  const values = [
    {
      id: 'dataDriven',
      icon: '📊',
    },
    {
      id: 'monsoon',
      icon: '🌧️',
    },
    {
      id: 'farmer',
      icon: '👨‍🌾',
    },
    {
      id: 'sustainable',
      icon: '🌱',
    },
  ]

  return (
    <section
      id="values"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-green-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wider mb-4">
            VALUES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-agri-dark mb-6">
            Why Our AI Platform Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering Indian farmers with intelligent tools for sustainable and profitable agriculture
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] border border-green-100/50"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-agri-green/10 to-agri-light-green/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-agri-dark mb-3">
                    {value.id === 'dataDriven' ? 'Data-Driven Decisions' : value.id === 'monsoon' ? 'Monsoon-Aware Intelligence' : value.id === 'farmer' ? 'Farmer-First Design' : 'Sustainable Resource Use'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.id === 'dataDriven' ? 'Make informed choices with AI-powered insights based on real-time data and historical patterns.' : value.id === 'monsoon' ? 'Stay ahead of weather patterns with predictive climate analysis tailored for Indian farming seasons.' : value.id === 'farmer' ? 'Built for Indian farmers with simple, intuitive interfaces that work in rural connectivity conditions.' : 'Optimize water, fertilizer, and energy usage for maximum yield with minimal environmental impact.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

