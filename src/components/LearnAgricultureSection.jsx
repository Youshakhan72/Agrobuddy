import React from 'react'
import { useNavigate } from 'react-router-dom'

const LearnAgricultureSection = () => {
  const navigate = useNavigate()

  const learnCards = [
    {
      id: 'basics',
      icon: '📘',
      path: '/learn-agriculture/basics',
    },
    {
      id: 'lifecycle',
      icon: '🌱',
      path: '/learn-agriculture/crop-lifecycle',
    },
    {
      id: 'soil',
      icon: '🧪',
      path: '/learn-agriculture/soil-types-testing',
    },
    {
      id: 'modern',
      icon: '🚜',
      path: '/learn-agriculture/modern-farming',
    },
    {
      id: 'schemes',
      icon: '🏛️',
      path: '/learn-agriculture/student-schemes',
    },
    {
      id: 'careers',
      icon: '🎓',
      path: '/learn-agriculture/careers',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-2">
              Learn Agriculture
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Simple, student-friendly lessons to help school and college students understand how agriculture works, why it matters, and how they can be part of its future.
            </p>
          </div>
            <div className="inline-flex items-center space-x-2 bg-agri-bg border border-agri-green/20 rounded-full px-4 py-2 text-xs sm:text-sm text-agri-green">
            <span className="font-semibold">Student-Friendly Mode</span>
            <span className="text-gray-500 hidden sm:inline">
              Content written in simple language for learners.
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => navigate(card.path)}
              className="group flex flex-col items-stretch text-left bg-white rounded-2xl border border-gray-200 hover:border-agri-green hover:shadow-lg transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-agri-green"
            >
              <div className="h-2 w-full bg-gradient-to-r from-agri-green/70 via-agri-light-green/70 to-emerald-400/70 group-hover:from-agri-green group-hover:via-agri-light-green group-hover:to-emerald-400" />
              <div className="flex-1 p-5 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-agri-bg flex items-center justify-center text-xl">
                    <span>{card.icon}</span>
                  </div>
                  <span className="text-xs font-medium text-agri-green/80 border border-agri-green/30 rounded-full px-2 py-0.5">
                    For Students
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-agri-green">
                  {card.id === 'basics' ? 'Basics of Agriculture' : card.id === 'lifecycle' ? 'Crop Lifecycle' : card.id === 'soil' ? 'Soil Types & Testing' : card.id === 'modern' ? 'Modern Farming Techniques' : card.id === 'schemes' ? 'Government Schemes (For Students)' : 'Career Opportunities'}
                </h3>
                <p className="text-sm text-gray-600 flex-1">
                  {card.id === 'basics' ? 'Understand what agriculture is, why it matters, and how farms feed the world.' : card.id === 'lifecycle' ? "From seed to harvest – explore each stage in a crop's life." : card.id === 'soil' ? 'Learn about different soils, simple tests, and why healthy soil is important.' : card.id === 'modern' ? 'Discover smart irrigation, drones, sensors, and climate-smart farming.' : card.id === 'schemes' ? 'Easy explanations of schemes and support programs useful for young learners.' : 'Explore jobs and courses in agriculture, from scientist to agri-entrepreneur.'}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-agri-green group-hover:translate-x-1 transition-transform">
                  Explore lesson
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearnAgricultureSection

