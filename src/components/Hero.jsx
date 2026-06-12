import React from 'react'

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('values')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-agri-dark/90 via-agri-green/85 to-agri-dark/90" />
        {/* Blur Effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            AI-Powered Growth for
            <span className="block text-agri-bright-green"> Indian Agriculture</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light">
            Smarter farming decisions using data & AI
          </p>
          <button
            onClick={scrollToFeatures}
            className="inline-flex items-center px-8 py-4 bg-white text-agri-green font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Explore Insights
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
