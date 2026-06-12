import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// ============================================
// SLIDE DATA CONFIGURATION
// ============================================
// Update slide content, images, and navigation links here
const SLIDES_DATA = [
  {
    id: 1,
    title: 'AI Crop Recommendation',
    description: 'Get personalized crop suggestions based on your soil, season, and location for maximum yield',
    cta: 'Explore Crop Recommendations',
    link: '/crop-recommendation',
    backgroundImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80', // Update with your image URL
    sectionId: 'crop-recommendation',
  },
  {
    id: 2,
    title: 'Weather & Climate Alerts',
    description: 'Stay ahead with real-time weather updates and climate alerts for better farming decisions',
    cta: 'View Weather Alerts',
    link: '/weather-alerts',
    backgroundImage: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&q=80', // Update with your image URL
    sectionId: 'weather-alerts',
  },
  {
    id: 3,
    title: 'Market Price Analysis',
    description: 'Track market trends and get AI-powered recommendations on when to sell your produce',
    cta: 'Check Market Prices',
    link: '/market-prices',
    backgroundImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80', // Update with your image URL
    sectionId: 'market-prices',
  },
  {
    id: 4,
    title: 'Resource Optimization',
    description: 'Optimize water, fertilizer, and resources for maximum efficiency and sustainable farming',
    cta: 'Optimize Resources',
    link: '/resource-optimization',
    backgroundImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80', // Update with your image URL
    sectionId: 'resource-optimization',
  },
  {
    id: 5,
    title: 'Crop Disease Detection',
    description: 'Upload crop images to instantly detect diseases and get treatment recommendations',
    cta: 'Detect Diseases',
    link: '/disease-detection',
    backgroundImage: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1920&q=80', // Update with your image URL
    sectionId: 'disease-detection',
  },
  {
    id: 6,
    title: 'AgroBuddy',
    description: 'Ask any farming question and get instant AI-powered answers and expert advice',
    cta: 'Chat with AI',
    link: '/ai-chatbot',
    backgroundImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&q=80',
    sectionId: 'ai-chatbot',
  },
  {
    id: 7,
    title: 'Government Schemes',
    description: 'Discover eligible government schemes and subsidies tailored to your farming profile',
    cta: 'Find Schemes',
    link: '/government-schemes',
    backgroundImage: 'https://images.unsplash.com/photo-1574943320219-553eb2137222?w=1920&q=80',
    sectionId: 'govt-schemes',
  },
]

const AUTOPLAY_INTERVAL = 4000 // 4 seconds - Update this to change autoplay speed

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayTimerRef = useRef(null)
  const navigate = useNavigate()

  // ============================================
  // NAVIGATION FUNCTIONS
  // ============================================
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length)
  }, [])

  // ============================================
  // AUTOPLAY LOGIC
  // ============================================
  useEffect(() => {
    if (!isPaused) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide()
      }, AUTOPLAY_INTERVAL)
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [isPaused, nextSlide])

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [prevSlide, nextSlide])

  // ============================================
  // SLIDE CLICK HANDLER
  // ============================================
  const handleSlideClick = (e, slide) => {
    // Don't navigate if clicking on navigation controls
    if (
      e.target.closest('.slide-nav-arrow') ||
      e.target.closest('.slide-dot') ||
      e.target.closest('.slide-cta-button')
    ) {
      return
    }

    // Navigate to the section/page
    navigate(slide.link)
  }

  // ============================================
  // CTA BUTTON CLICK HANDLER
  // ============================================
  const handleCTAClick = (e, slide) => {
    e.stopPropagation()
    navigate(slide.link)
  }

  // ============================================
  // ARROW CLICK HANDLERS
  // ============================================
  const handleArrowClick = (e, direction) => {
    e.stopPropagation()
    if (direction === 'prev') {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  // ============================================
  // DOT CLICK HANDLER
  // ============================================
  const handleDotClick = (e, index) => {
    e.stopPropagation()
    goToSlide(index)
  }

  const currentSlideData = SLIDES_DATA[currentSlide]

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero slideshow"
    >
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {SLIDES_DATA.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[20s] ease-out hover:scale-110"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-white">
          {SLIDES_DATA.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
              onClick={(e) => handleSlideClick(e, slide)}
              role="button"
              tabIndex={index === currentSlide ? 0 : -1}
              aria-label={`Navigate to ${slide.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  navigate(slide.link)
                }
              }}
            >
              <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 animate-fade-in leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button
                  onClick={(e) => handleCTAClick(e, slide)}
                  className="slide-cta-button inline-block bg-agri-green hover:bg-agri-light-green text-white font-semibold py-5 px-10 md:py-6 md:px-12 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl text-xl md:text-2xl"
                  aria-label={`${slide.cta} - Navigate to section`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Arrow */}
      <button
        onClick={(e) => handleArrowClick(e, 'prev')}
        className="slide-nav-arrow absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={(e) => handleArrowClick(e, 'next')}
        className="slide-nav-arrow absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
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
      </button>

      {/* Dot Indicators */}
      <div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2 md:space-x-3"
        role="tablist"
        aria-label="Slide indicators"
      >
        {SLIDES_DATA.map((slide, index) => (
          <button
            key={slide.id}
            onClick={(e) => handleDotClick(e, index)}
            className={`slide-dot w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide
                ? 'bg-white w-8 md:w-10'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>

      {/* Autoplay Indicator */}
      {!isPaused && (
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
            <span>Autoplay</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSlideshow

