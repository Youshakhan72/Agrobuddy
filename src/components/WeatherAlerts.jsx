import React, { useState, useMemo } from 'react'

const WeatherAlerts = () => {
  const [selectedLocation, setSelectedLocation] = useState('mumbai')
  const [viewMode, setViewMode] = useState('today') // 'today', 'forecast', 'hourly'

  // Helper functions to generate dynamic dates
  const getTodayDate = () => new Date()

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const getDayName = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[date.getDay()]
  }

  const generateValidUntilDate = () => {
    const today = getTodayDate()
    const validUntil = new Date(today)
    validUntil.setDate(today.getDate() + 2)
    return formatDate(validUntil)
  }

  const generateForecast = (baseLow, baseHigh, conditionList, iconList, rainList, windList) => {
    const today = getTodayDate()
    const forecast = []
    
    // More realistic temperature variations
    const tempVariations = [0, 1, 2, 1, -1, -2, 0]

    for (let i = 0; i < 7; i++) {
      const forecastDate = new Date(today)
      forecastDate.setDate(today.getDate() + i)
      const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : getDayName(forecastDate)

      forecast.push({
        day: dayName,
        date: formatDate(forecastDate),
        high: baseHigh + tempVariations[i],
        low: baseLow + tempVariations[i],
        condition: conditionList[i % conditionList.length],
        icon: iconList[i % iconList.length],
        rain: rainList[i % rainList.length],
        wind: windList[i % windList.length],
      })
    }
    return forecast
  }

  const formatHourLabel = (date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
  }

  const iconToCondition = (icon) => {
    const map = { '☀️': 'Sunny', '⛅': 'Partly Cloudy', '☁️': 'Cloudy', '🌦️': 'Light Rain', '🌙': 'Clear' }
    return map[icon] || 'Clear'
  }

  // Generate a realistic 24-hour hourly forecast using diurnal temperature variation
  const generateHourlyForecast = (currentTemp = 22, currentRain = 0) => {
    const hours = []
    const now = new Date()
    const currentHour = now.getHours()
    const amplitude = 4 // typical day-night swing
    const peakHour = 15 // temperature peak around 3 PM

    for (let i = 0; i < 24; i++) {
      const hourDate = new Date(now)
      hourDate.setHours(currentHour + i, 0, 0, 0)
      const hour = hourDate.getHours()

      // Sinusoidal diurnal model centered on currentTemp
      const radians = ((hour - peakHour) / 24) * 2 * Math.PI
      const tempOffset = Math.round(amplitude * Math.sin(radians))
      const temp = Math.round(currentTemp + tempOffset)

      // Choose icon based on temperature and hour
      let icon = '⛅'
      if (hour >= 20 || hour <= 5) icon = '🌙'
      else if (temp >= currentTemp + 2) icon = '☀️'
      else if (temp <= currentTemp - 2) icon = '☁️'

      // Smooth rain probability based on currentRain and diurnal variation
      const baseRainProb = Math.min(80, Math.round(currentRain * 10))
      const rainVariation = Math.round((Math.sin((hour / 24) * 2 * Math.PI) + 1) * 8) // 0-16
      const rainProb = Math.max(0, Math.min(100, baseRainProb + rainVariation + (Math.random() * 6 - 3)))

      hours.push({
        time: formatHourLabel(hourDate),
        temp,
        condition: iconToCondition(icon),
        icon,
        rain: `${Math.round(rainProb)}%`,
      })
    }

    return hours
  }

  // Weather data with dynamic dates
  const weatherData = useMemo(() => ({
    mumbai: {
      current: {
        temperature: 28,
        feelsLike: 30,
        rainfall: 2,
        humidity: 58,
        windSpeed: 14,
        windDirection: 'NW',
        pressure: 1015,
        uvIndex: 6,
        visibility: 12,
        condition: 'Partly Cloudy',
        icon: '⛅',
      },
      alerts: [
        {
          type: 'Wind',
          severity: 'low',
          message: 'Moderate winds expected. Secure temporary structures and protect young plants.',
          validUntil: generateValidUntilDate(),
          recommendations: ['Secure greenhouse covers', 'Protect young seedlings', 'Avoid spraying in windy conditions'],
        },
      ],
      forecast: generateForecast(20, 29, ['Partly Cloudy', 'Sunny', 'Cloudy', 'Light Rain'], ['⛅', '☀️', '☁️', '🌦️'], ['2mm', '0mm', '3mm', '8mm'], ['14 km/h', '12 km/h', '15 km/h', '16 km/h']),
      hourly: generateHourlyForecast(28, 2),
      farmingRecommendations: {
        watering: 'Morning and evening watering recommended due to moderate humidity (58%). Water deeply but less frequently to encourage root development.',
        pestManagement: 'Monitor for powdery mildew in morning hours. The partly cloudy weather with moderate wind provides favorable conditions. Scout crops thoroughly.',
        soilCare: 'Soil moisture is adequate. Avoid waterlogging. The moderate wind will help aerate soil naturally. Check drainage in low-lying areas.',
        fertilizing: 'With current weather, foliar feeding is suitable in early morning or late evening. Avoid midday application due to UV index of 6.',
        diseaseControl: 'Partly cloudy conditions reduce UV stress but may increase fungal disease risk. Apply copper-based fungicides preventatively if needed.',
      },
    },
    delhi: {
      current: {
        temperature: 12,
        feelsLike: 9,
        rainfall: 0,
        humidity: 42,
        windSpeed: 16,
        windDirection: 'W',
        pressure: 1019,
        uvIndex: 4,
        visibility: 10,
        condition: 'Mostly Clear',
        icon: '☀️',
      },
      alerts: [
        {
          type: 'Cold Wave',
          severity: 'medium',
          message: `Cold temperatures expected. Frost possible in early mornings. Protect sensitive crops and cover young plants.`,
          validUntil: generateValidUntilDate(),
          recommendations: ['Cover crops with frost cloth', 'Avoid early morning irrigation', 'Use row covers for vulnerable plants'],
        },
        {
          type: 'Wind',
          severity: 'low',
          message: 'Strong winds possible. Ensure structures are secured.',
          validUntil: generateValidUntilDate(),
          recommendations: ['Secure support structures', 'Stake tall plants', 'Protect seedlings'],
        },
      ],
      forecast: generateForecast(4, 12, ['Mostly Clear', 'Cloudy', 'Frost'], ['☀️', '☁️', '❄️'], ['0mm', '2mm', '0mm'], ['16 km/h', '14 km/h', '18 km/h']),
      hourly: generateHourlyForecast(12, 0),
      farmingRecommendations: {
        watering: 'Reduce watering frequency. Cold temperatures slow water uptake. Water only when soil surface is dry, preferably in midday hours to reduce frost risk.',
        pestManagement: 'Cold temperatures will slow pest development. Most insects are dormant. Continue monitoring for early morning arrivals of mobile pests.',
        soilCare: 'Soil will be cold and waterlogged. Avoid heavy machinery on wet fields. Mulch around plants to insulate soil and maintain temperature.',
        fertilizing: 'Nutrient uptake is minimal in cold weather. Delay granular fertilizer application. Foliar feeding is ineffective in low temperatures.',
        diseaseControl: 'Frost and cold reduce disease pressure significantly. Focus on protecting plants mechanically rather than chemical treatments.',
      },
    },
    bangalore: {
      current: {
        temperature: 24,
        feelsLike: 25,
        rainfall: 0,
        humidity: 50,
        windSpeed: 8,
        windDirection: 'NE',
        pressure: 1013,
        uvIndex: 5,
        visibility: 11,
        condition: 'Sunny',
        icon: '☀️',
      },
      alerts: [
        {
          type: 'UV Index',
          severity: 'low',
          message: 'Moderate UV index. Light protection sufficient. Drip irrigation recommended to conserve water.',
          validUntil: generateValidUntilDate(),
          recommendations: ['Use sunscreen on exposed skin', 'Provide shade cloth for sensitive plants (30-40%)', 'Water deeply but less frequently'],
        },
      ],
      forecast: generateForecast(17, 26, ['Sunny', 'Partly Cloudy', 'Light Rain'], ['☀️', '⛅', '🌦️'], ['0mm', '1mm', '2mm'], ['8 km/h', '9 km/h', '10 km/h']),
      hourly: generateHourlyForecast(24, 0),
      farmingRecommendations: {
        watering: 'Sunny climate requires consistent irrigation. Early morning watering is ideal. Consider drip irrigation to minimize evaporation and water loss.',
        pestManagement: 'Sunny, warm weather is favorable for pest activity. Increase monitoring frequency. Apply organic pest management strategies in evening hours.',
        soilCare: 'Soil temperature is optimal for microbial activity. Maintain mulch cover to prevent excessive evaporation. Organic matter content should be maintained.',
        fertilizing: 'Excellent conditions for nutrient uptake. Schedule foliar feeding in early morning or late evening. Soil fertilizers will be well-absorbed.',
        diseaseControl: 'Lower humidity reduces fungal disease risk. However, monitor for bacterial diseases. Ensure proper crop spacing for air circulation.',
      },
    },
    hyderabad: {
      current: {
        temperature: 26,
        feelsLike: 27,
        rainfall: 1,
        humidity: 55,
        windSpeed: 12,
        windDirection: 'SW',
        pressure: 1014,
        uvIndex: 5,
        visibility: 11,
        condition: 'Partly Cloudy',
        icon: '⛅',
      },
      alerts: [
        {
          type: 'Temperature',
          severity: 'low',
          message: 'Mild weather conditions. Ideal for outdoor farm operations. Ensure crops have adequate water as temperatures gradually increase.',
          validUntil: generateValidUntilDate(),
          recommendations: ['Monitor soil moisture closely', 'Provide irrigation support for young plants', 'Schedule field operations for morning hours'],
        },
      ],
      forecast: generateForecast(16, 27, ['Partly Cloudy', 'Sunny', 'Cloudy', 'Light Rain'], ['⛅', '☀️', '☁️', '🌦️'], ['1mm', '0mm', '2mm', '5mm'], ['12 km/h', '11 km/h', '13 km/h', '14 km/h']),
      hourly: generateHourlyForecast(26, 1),
      farmingRecommendations: {
        watering: 'Moderate temperatures and humidity suggest balanced watering needs. Water deeply 2-3 times per week depending on soil type and crop stage.',
        pestManagement: 'Mild weather with moderate wind is optimal for integrated pest management. Scout crops and plan preventative measures accordingly.',
        soilCare: 'Soil conditions are ideal for cultivation. Incorporate organic matter and ensure proper drainage. Monitor soil moisture at 12-15 cm depth.',
        fertilizing: 'Good conditions for nutrient uptake. Apply recommended fertilizers according to soil test results. Split doses are advisable for leaching prevention.',
        diseaseControl: 'Balanced weather reduces disease pressure. Maintain plant health through proper nutrition and balanced irrigation to minimize disease susceptibility.',
      },
    },
  }), [])

  const currentData = weatherData[selectedLocation]

  const getAlertColor = (alertType, severity) => {
    const colors = {
      rain: { moderate: 'bg-blue-100 border-blue-500 text-blue-800', high: 'bg-blue-200 border-blue-600 text-blue-900' },
      heatwave: { moderate: 'bg-orange-100 border-orange-500 text-orange-800', high: 'bg-red-200 border-red-600 text-red-900' },
      drought: { moderate: 'bg-yellow-100 border-yellow-500 text-yellow-800', high: 'bg-orange-200 border-orange-600 text-orange-900' },
      'cold wave': { low: 'bg-cyan-100 border-cyan-500 text-cyan-800', medium: 'bg-cyan-200 border-cyan-600 text-cyan-900', high: 'bg-blue-200 border-blue-600 text-blue-900' },
      frost: { low: 'bg-cyan-100 border-cyan-500 text-cyan-800', moderate: 'bg-cyan-200 border-cyan-600 text-cyan-900', high: 'bg-blue-200 border-blue-600 text-blue-900' },
      storm: { moderate: 'bg-purple-100 border-purple-500 text-purple-800', high: 'bg-purple-200 border-purple-600 text-purple-900' },
      wind: { low: 'bg-gray-100 border-gray-500 text-gray-800', moderate: 'bg-gray-200 border-gray-600 text-gray-900' },
      fog: { low: 'bg-gray-100 border-gray-500 text-gray-800', moderate: 'bg-gray-200 border-gray-600 text-gray-900', high: 'bg-gray-300 border-gray-700 text-gray-900' },
      temperature: { low: 'bg-yellow-100 border-yellow-500 text-yellow-800', moderate: 'bg-orange-100 border-orange-500 text-orange-800' },
      'uv index': { low: 'bg-yellow-100 border-yellow-500 text-yellow-800', moderate: 'bg-orange-100 border-orange-500 text-orange-800' },
    }
    return colors[alertType.toLowerCase()]?.[severity] || 'bg-yellow-100 border-yellow-500 text-yellow-800'
  }

  const getUVIndexColor = (uv) => {
    if (uv <= 2) return 'text-green-600 bg-green-100'
    if (uv <= 5) return 'text-yellow-600 bg-yellow-100'
    if (uv <= 7) return 'text-orange-600 bg-orange-100'
    if (uv <= 10) return 'text-red-600 bg-red-100'
    return 'text-purple-600 bg-purple-100'
  }

  const getUVIndexLabel = (uv) => {
    if (uv <= 2) return 'Low'
    if (uv <= 5) return 'Moderate'
    if (uv <= 7) return 'High'
    if (uv <= 10) return 'Very High'
    return 'Extreme'
  }

  return (
    <section
      id="weather"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-agri-bg to-agri-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-agri-green mb-4">
            🌤️ Weather & Climate Alerts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-time weather updates and climate alerts for your agricultural decisions
          </p>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto italic">
            📅 Displaying weather data for today: <strong>{formatDate(getTodayDate())}</strong>
          </p>
        </div>

        {/* Location Selector */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent text-lg"
            >
              <option value="mumbai">Mumbai, Maharashtra</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore, Karnataka</option>
              <option value="hyderabad">Hyderabad, Telangana</option>
            </select>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-lg p-2 shadow-md flex gap-2">
            <button
              onClick={() => setViewMode('today')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'today'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setViewMode('forecast')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'forecast'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              7-Day Forecast
            </button>
            <button
              onClick={() => setViewMode('hourly')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                viewMode === 'hourly'
                  ? 'bg-agri-green text-white shadow-md'
                  : 'text-gray-700 hover:bg-agri-bg'
              }`}
            >
              Hourly
            </button>
          </div>
        </div>

        {/* Current Weather - Today View */}
        {viewMode === 'today' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Weather Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="text-6xl mb-2">{currentData.current.icon}</div>
                  <div className="text-6xl font-bold mb-2">{currentData.current.temperature}°C</div>
                  <div className="text-xl opacity-90">Feels like {currentData.current.feelsLike}°C</div>
                  <div className="text-lg mt-2">{currentData.current.condition}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="text-sm opacity-90">Humidity</div>
                    <div className="text-2xl font-bold">{currentData.current.humidity}%</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl mb-1">🌬️</div>
                    <div className="text-sm opacity-90">Wind</div>
                    <div className="text-2xl font-bold">{currentData.current.windSpeed} km/h</div>
                    <div className="text-xs opacity-75">{currentData.current.windDirection}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">🌧️</div>
                <p className="text-sm text-gray-600 mb-1">Rainfall</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.rainfall}mm</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-sm text-gray-600 mb-1">Pressure</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.pressure} hPa</p>
              </div>
              <div className={`bg-white rounded-lg p-4 shadow-md text-center ${getUVIndexColor(currentData.current.uvIndex)}`}>
                <div className="text-3xl mb-2">☀️</div>
                <p className="text-sm mb-1">UV Index</p>
                <p className="text-2xl font-bold">{currentData.current.uvIndex}</p>
                <p className="text-xs">{getUVIndexLabel(currentData.current.uvIndex)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md text-center">
                <div className="text-3xl mb-2">👁️</div>
                <p className="text-sm text-gray-600 mb-1">Visibility</p>
                <p className="text-2xl font-bold text-agri-green">{currentData.current.visibility} km</p>
              </div>
            </div>

            {/* Alerts */}
            {currentData.alerts.length > 0 && (
              <div className="space-y-4">
                {currentData.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg p-5 ${getAlertColor(alert.type, alert.severity)}`}
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">⚠️</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <h4 className="font-bold text-xl">{alert.type} Alert</h4>
                          <span className="text-xs bg-white/50 px-3 py-1 rounded font-semibold">Valid until: {alert.validUntil}</span>
                        </div>
                        <p className="mb-3">{alert.message}</p>
                        <div className="mt-3 pt-3 border-t border-current/20">
                          <p className="font-semibold mb-2">✓ Recommendations:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {alert.recommendations.map((rec, i) => (
                              <li key={i} className="text-sm">{rec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Farming Recommendations */}
            <div className="bg-gradient-to-br from-green-50 to-agri-bg rounded-xl p-6 shadow-md border-2 border-green-200">
              <h3 className="text-2xl font-bold text-agri-green mb-4 flex items-center">
                <span className="mr-2">🌾</span> Today's Farming Recommendations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">💧 Watering</p>
                  <p className="text-gray-800">{currentData.farmingRecommendations.watering}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">🐛 Pest Management</p>
                  <p className="text-gray-800">{currentData.farmingRecommendations.pestManagement}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">🌱 Soil Care</p>
                  <p className="text-gray-800">{currentData.farmingRecommendations.soilCare}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">🧪 Fertilizing</p>
                  <p className="text-gray-800">{currentData.farmingRecommendations.fertilizing}</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:col-span-2">
                  <p className="text-sm text-gray-600 mb-2 font-semibold">🦠 Disease Control</p>
                  <p className="text-gray-800">{currentData.farmingRecommendations.diseaseControl}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7-Day Forecast View */}
        {viewMode === 'forecast' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">7-Day Weather Forecast</h3>
              <div className="space-y-3">
                {currentData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-agri-bg to-white rounded-lg hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-center w-24">
                        <div className="text-3xl mb-1">{day.icon}</div>
                        <div className="text-sm font-semibold text-gray-700">{day.day}</div>
                        <div className="text-xs text-gray-500">{day.date}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-800">{day.condition}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="mr-4">🌧️ {day.rain}</span>
                          <span>🌬️ {day.wind}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-agri-green">{day.high}°</div>
                      <div className="text-lg text-gray-500">{day.low}°</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hourly Forecast View */}
        {viewMode === 'hourly' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">24-Hour Forecast</h3>
              <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-4">
                  {currentData.hourly.map((hour, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-24 text-center bg-agri-bg rounded-lg p-3 hover:bg-green-100 transition-colors border border-green-200"
                    >
                      <div className="text-sm font-bold text-gray-700 mb-2">{hour.time}</div>
                      <div className="text-2xl mb-2">{hour.icon}</div>
                      <div className="text-lg font-bold text-agri-green mb-1">{hour.temp}°</div>
                      <div className="text-xs text-blue-600 font-semibold">{hour.rain}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default WeatherAlerts

