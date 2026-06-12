# AgroBuddy

A modern, mobile-friendly frontend demo website for Indian farmers. "WITHOUT INTERNET ACCESS just GO ON ONE TAP" 

AgroBuddy is an AI-based helper which plays an important role in Rural support and agriculture.

## Features

- 🌾 **Crop Recommendation** - AI-powered crop suggestions based on soil, season, and location
- 🌤️ **Weather Alerts** - Real-time weather updates and climate alerts
- 📊 **Market Price Analysis** - Price trends and selling recommendations
- 💧 **Resource Optimization** - Water and fertilizer optimization plans
- 🔬 **Disease Detection** - Image-based crop disease identification
- 🤖 **AgroBuddy** - Interactive farming assistant
- 🏛️ **Government Schemes** - Find eligible schemes and subsidies

## Tech Stack

- React 18
- React Router DOM (for multi-page navigation)
- Vite (Build Tool)
- Tailwind CSS
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
agritech/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CropRecommendation.jsx
│   │   ├── WeatherAlerts.jsx
│   │   ├── MarketPrices.jsx
│   │   ├── ResourceOptimization.jsx
│   │   ├── DiseaseDetection.jsx
│   │   ├── AIChatbot.jsx
│   │   ├── GovernmentSchemes.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CropRecommendationPage.jsx
│   │   ├── WeatherAlertsPage.jsx
│   │   ├── MarketPricesPage.jsx
│   │   ├── ResourceOptimizationPage.jsx
│   │   ├── DiseaseDetectionPage.jsx
│   │   ├── AIChatbotPage.jsx
│   │   └── GovernmentSchemesPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features Overview

### 1. Crop Recommendation
- Input: Soil type, season (Kharif/Rabi/Zaid), location
- Output: Recommended crop, expected yield, fertilizer advice

### 2. Weather & Climate Alerts
- Current weather conditions (temperature, rainfall, humidity)
- Alert banners for rain, heatwave, drought
- Best sowing time recommendations

### 3. Market Price Trend Analysis
- Crop and mandi selection
- Price trend visualization (placeholder)
- AI-powered sell/hold recommendations

### 4. Resource Optimization
- Crop type and soil moisture inputs
- Irrigation schedule recommendations
- Fertilizer quantity suggestions
- Water-saving tips

### 5. Crop Disease Detection
- Image upload interface
- Disease identification
- Treatment recommendations

### 6. AgroBuddy
- WhatsApp-style chat interface
- Sample question buttons
- Voice input icon (visual only)
- Context-aware responses

### 7. Government Scheme Recommender
- State, land size, crop type inputs
- Eligible scheme cards
- Benefits and eligibility information

## Design Features

- ✅ Multi-page application with React Router
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Navigation between different sections/pages
- ✅ Card-based layout
- ✅ Green agriculture color theme
- ✅ Clean, modern UI
- ✅ Farmer-friendly language
- ✅ Accessible and user-friendly

## Notes

- Multi-page application - each feature has its own page
- All AI outputs use dummy data for demo purposes
- Ready to be connected to backend APIs
- All sections are clearly separated into individual pages
- Mobile menu for navigation on small screens
- Active page highlighting in navigation bar

## Customization

- Update team name and contact info in `Footer.jsx`
- Modify color scheme in `tailwind.config.js`
- Replace dummy data with actual API calls in respective components

## License

Built for Hackathon Demo
