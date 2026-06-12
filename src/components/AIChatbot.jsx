import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I am your AI farming assistant. I can help you with:\n\n🌾 Crop Recommendations\n🌤️ Weather Alerts\n📊 Market Price Analysis\n💧 Resource Optimization\n🔬 Disease Detection\n🏛️ Government Schemes\n\nWhat would you like to know? You can also ask me to guide you to any feature!',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState([])
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(true)
  const [speechStatus, setSpeechStatus] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const recognitionRef = useRef(null)
  const navigate = useNavigate()

  // Website features data - aligned with actual features
  const websiteFeatures = {
    cropRecommendation: {
      name: 'Crop Recommendation',
      path: '/crop-recommendation',
      description: 'Get AI-powered crop recommendations based on soil type, season, and location',
      inputs: {
        soilTypes: ['Clay', 'Sandy', 'Loamy', 'Red Soil', 'Black Soil'],
        seasons: ['Kharif', 'Rabi', 'Zaid'],
        locations: ['Maharashtra', 'Punjab', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Telangana'],
      },
      outputs: ['Recommended Crop', 'Expected Yield', 'Fertilizer Advice'],
    },
    weatherAlerts: {
      name: 'Weather & Climate Alerts',
      path: '/weather-alerts',
      description: 'Real-time weather updates and climate alerts for farming decisions',
      data: {
        metrics: ['Temperature', 'Rainfall', 'Humidity', 'Wind Speed'],
        alerts: ['Rain', 'Heatwave', 'Drought'],
        features: ['Current Weather Conditions', 'Alert Banners', 'Best Sowing Time'],
      },
    },
    marketPrices: {
      name: 'Market Price Analysis',
      path: '/market-prices',
      description: 'Track market prices and get AI-powered selling recommendations',
      inputs: {
        crops: ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Potato', 'Tomato'],
        mandis: ['Delhi', 'Mumbai', 'Ahmedabad', 'Bangalore', 'Kolkata', 'Hyderabad'],
      },
      outputs: ['Price Trends (30 days)', 'Current Price', 'Sell/Hold Recommendations'],
    },
    resourceOptimization: {
      name: 'Resource Optimization',
      path: '/resource-optimization',
      description: 'Optimize water, fertilizer, and resources for maximum efficiency',
      inputs: {
        crops: ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Maize'],
        soilMoisture: 'Percentage (0-100%)',
      },
      outputs: ['Irrigation Schedule', 'Fertilizer Quantity', 'Water-Saving Tips'],
    },
    diseaseDetection: {
      name: 'Crop Disease Detection',
      path: '/disease-detection',
      description: 'Upload crop images to detect diseases and get treatment recommendations',
      features: ['Image Upload', 'AI Disease Detection', 'Treatment Suggestions'],
      diseases: ['Leaf Blight', 'Powdery Mildew', 'Rust Disease'],
    },
    governmentSchemes: {
      name: 'Government Schemes',
      path: '/government-schemes',
      description: 'Find eligible government schemes and subsidies',
      schemes: [
        {
          name: 'PM-KISAN',
          benefit: '₹6,000/year',
          eligibility: 'All farmers with cultivable land',
        },
        {
          name: 'PMFBY (Crop Insurance)',
          benefit: 'Premium: 1.5-2% of sum insured',
          eligibility: 'All farmers growing notified crops',
        },
        {
          name: 'Kisan Credit Card (KCC)',
          benefit: 'Interest subvention up to 2%',
          eligibility: 'All farmers including tenant farmers',
        },
        {
          name: 'Soil Health Card',
          benefit: 'Free soil testing and recommendations',
          eligibility: 'All farmers',
        },
        {
          name: 'National Mission on Sustainable Agriculture',
          benefit: 'Subsidy on equipment and inputs',
          eligibility: 'Farmers practicing sustainable agriculture',
        },
      ],
      inputs: {
        states: ['Maharashtra', 'Punjab', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Telangana'],
        cropTypes: ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Pulses'],
      },
    },
  }

  // Comprehensive Agricultural Knowledge Base
  const agricultureKnowledge = {
    crops: {
      wheat: {
        sowing: 'Sow wheat from mid-October to mid-November. Optimal soil temperature: 20-25°C. Use 100-125 kg seeds per hectare. Row spacing: 20-23 cm.',
        fertilizer: 'Apply 120-150 kg N, 60-80 kg P2O5, 40-60 kg K2O per hectare. Use DAP at sowing (60-80 kg/ha) and Urea in 2-3 splits.',
        irrigation: 'Wheat needs 4-6 irrigations. Critical stages: Crown root initiation (21-25 DAS), Tillering (45-50 DAS), Jointing, Flowering, Milk stage, Dough stage.',
        pests: 'Common pests: Aphids, termites, armyworms, cutworms. Control: Use neem oil, imidacloprid, or chlorpyriphos. Monitor regularly.',
        diseases: 'Major diseases: Rust (yellow, brown, black), smut, powdery mildew. Use resistant varieties, fungicides like propiconazole, tebuconazole.',
        harvesting: 'Harvest when grains are hard (moisture 20-25%). Use combine harvester or manual harvesting. Dry to 12-14% moisture before storage.',
      },
      rice: {
        sowing: 'Transplant 25-30 day old seedlings. Spacing: 20x15 cm. Seed rate: 20-25 kg/ha for direct seeding, 40-50 kg/ha for transplanting.',
        fertilizer: 'Apply 120-150 kg N, 60-80 kg P2O5, 40-60 kg K2O per hectare. Basal: DAP (60-80 kg), Top dressing: Urea in 3 splits (at 25, 45, 65 DAS).',
        irrigation: 'Maintain 5-7 cm water depth during active growth. Use Alternate Wetting and Drying (AWD) to save 25-30% water. Drain 7-10 days before harvest.',
        pests: 'Major pests: Stem borer, leaf folder, brown planthopper, gall midge. Use IPM: Neem, pheromone traps, biological control, selective pesticides.',
        diseases: 'Common diseases: Blast, sheath blight, bacterial leaf blight, false smut. Use resistant varieties, fungicides like tricyclazole, validamycin.',
        harvesting: 'Harvest when 80% grains turn golden yellow (moisture 20-22%). Thresh, dry to 14% moisture, store in clean, dry place.',
      },
      cotton: {
        sowing: 'Sow from April to May. Spacing: 60-90 cm between rows, 30-45 cm between plants. Seed rate: 4-5 kg/ha. Soil temp should be above 18°C.',
        fertilizer: 'Apply 80-100 kg N, 40-60 kg P2O5, 40-60 kg K2O per hectare. Use NPK 20:20:20 in splits: 25% at sowing, 50% at flowering, 25% at boll formation.',
        irrigation: 'Cotton needs 6-8 irrigations. Critical stages: Flowering and boll formation. Use drip irrigation for 30-40% water saving. Avoid water stress during boll development.',
        pests: 'Major pests: Bollworm, whitefly, aphids, thrips, jassids. Use Bt cotton varieties, neem-based pesticides, biological control, IPM practices.',
        diseases: 'Common diseases: Fusarium wilt, bacterial blight, leaf curl virus, alternaria leaf spot. Use disease-free seeds, resistant varieties, crop rotation.',
        harvesting: 'Harvest when bolls open completely. Pick in 2-3 pickings. Dry cotton properly before storage. Store in moisture-free environment.',
      },
      sugarcane: {
        sowing: 'Plant from February-April or September-October. Use 2-3 budded setts. Spacing: 90 cm between rows, 60 cm between setts. Seed rate: 35,000-40,000 setts/ha.',
        fertilizer: 'Apply 200-250 kg N, 80-100 kg P2O5, 100-120 kg K2O per hectare. Apply in splits: 25% at planting, 50% at tillering, 25% at grand growth stage.',
        irrigation: 'Sugarcane needs frequent irrigation. Maintain soil moisture throughout. Critical stages: Germination, tillering, grand growth. Use furrow or drip irrigation.',
        pests: 'Major pests: Top borer, internode borer, white grub, termites. Use biological control, pheromone traps, neem-based pesticides, resistant varieties.',
        diseases: 'Common diseases: Red rot, smut, ratoon stunting disease, mosaic. Use disease-free setts, resistant varieties, crop rotation, hot water treatment.',
        harvesting: 'Harvest at 10-12 months age. Cut at ground level, remove leaves. Crush within 24-48 hours for best sugar recovery.',
      },
      maize: {
        sowing: 'Sow from June-July (Kharif) or October-November (Rabi). Spacing: 60x25 cm. Seed rate: 20-25 kg/ha. Plant 2-3 seeds per hill, thin to one.',
        fertilizer: 'Apply 120-150 kg N, 60-80 kg P2O5, 40-60 kg K2O per hectare. Apply 50% N at sowing, 50% at knee-high stage (30-35 DAS).',
        irrigation: 'Maize needs 4-5 irrigations. Critical stages: Knee-high, tasseling, silking, grain filling. Maintain soil moisture, avoid waterlogging.',
        pests: 'Common pests: Stem borer, fall armyworm, aphids, cutworms. Use Bt maize, neem-based pesticides, biological control, IPM practices.',
        diseases: 'Major diseases: Turcicum leaf blight, maydis leaf blight, downy mildew, rust. Use resistant varieties, fungicides like mancozeb, propiconazole.',
        harvesting: 'Harvest when husk turns brown and grains are hard (moisture 20-25%). Dry to 12-14% moisture. Store in clean, dry, rodent-proof place.',
      },
    },
    general: {
      soilManagement: {
        types: 'Main soil types: Clay (high water retention, good for rice), Sandy (drains quickly, good for groundnut), Loamy (ideal for most crops), Red soil (good for cotton, pulses), Black soil (excellent for cotton, sugarcane).',
        ph: 'Most crops prefer pH 6.0-7.5. Add lime to acidic soil, gypsum to alkaline soil. Test soil pH every 2-3 years.',
        improvement: 'Improve soil: Add organic matter (compost, FYM), practice crop rotation, use green manures, avoid over-tilling, maintain soil cover.',
        testing: 'Get soil tested every 2-3 years. Check pH, N-P-K levels, organic carbon, micronutrients. Use Soil Health Card scheme for free testing.',
      },
      irrigation: {
        methods: 'Irrigation methods: Flood (traditional), Drip (saves 30-50% water), Sprinkler (good for vegetables), Furrow (for row crops). Drip is most efficient.',
        timing: 'Irrigate early morning or evening to reduce evaporation. Avoid midday irrigation. Check soil moisture before irrigating.',
        waterSaving: 'Water saving tips: Use drip/sprinkler, mulch soil, practice AWD for rice, choose drought-resistant varieties, schedule based on crop stage.',
        scheduling: 'Irrigation schedule depends on crop, soil type, weather. Critical stages need more water. Monitor soil moisture regularly.',
      },
      fertilizers: {
        npk: 'NPK stands for Nitrogen (N), Phosphorus (P), Potassium (K). N promotes growth, P for roots/flowers, K for overall health. Use balanced fertilizers.',
        organic: 'Organic fertilizers: Compost, Farm Yard Manure (FYM), vermicompost, green manures, neem cake. Improve soil health and provide slow-release nutrients.',
        application: 'Apply fertilizers at right time: Basal dose at sowing, top dressing during critical growth stages. Split application is better than single dose.',
        micronutrients: 'Important micronutrients: Zinc, Iron, Boron, Manganese. Deficiencies cause yellowing, stunting. Apply based on soil test recommendations.',
      },
      pestManagement: {
        ipm: 'Integrated Pest Management (IPM): Combine biological, cultural, mechanical, and chemical methods. Use pesticides as last resort. Monitor regularly.',
        biological: 'Biological control: Use beneficial insects (ladybugs, spiders), neem-based products, pheromone traps, biopesticides (Bacillus thuringiensis).',
        cultural: 'Cultural practices: Crop rotation, intercropping, proper spacing, timely sowing, resistant varieties, field sanitation, remove weeds.',
        chemical: 'Chemical pesticides: Use only when necessary, follow label instructions, rotate different groups, avoid during flowering, maintain safety period.',
      },
      diseaseManagement: {
        prevention: 'Prevent diseases: Use disease-free seeds, resistant varieties, crop rotation, proper spacing, avoid waterlogging, maintain field hygiene.',
        identification: 'Common symptoms: Spots on leaves, wilting, yellowing, stunting, rot, powdery coating. Early identification helps in control.',
        treatment: 'Treat diseases: Remove infected plants, use fungicides (mancozeb, propiconazole), biological control, improve drainage, balanced nutrition.',
        organic: 'Organic disease control: Neem oil, copper-based fungicides, baking soda solution, proper crop rotation, resistant varieties, good sanitation.',
      },
      organicFarming: {
        basics: 'Organic farming: No synthetic chemicals, use organic inputs, maintain soil health, biodiversity, crop rotation, biological pest control.',
        inputs: 'Organic inputs: Compost, vermicompost, FYM, green manures, neem-based pesticides, biofertilizers, rock phosphate, bone meal.',
        certification: 'For organic certification: Follow standards, maintain records, avoid prohibited substances for 3 years, get certified by recognized agency.',
        benefits: 'Benefits: Better soil health, higher prices, environmental protection, sustainable farming, improved food quality, reduced input costs long-term.',
      },
      cropRotation: {
        importance: 'Crop rotation: Prevents pest/disease buildup, improves soil fertility, breaks weed cycles, maintains soil structure, reduces fertilizer needs.',
        examples: 'Good rotations: Rice-Wheat, Cotton-Wheat, Maize-Wheat, Pulses-Cereals. Include legumes to fix nitrogen in soil.',
        planning: 'Plan rotation: Consider crop families, nutrient needs, water requirements, market demand, soil type, climate. Rotate every 2-3 years.',
      },
      harvesting: {
        timing: 'Harvest timing: Check crop maturity indicators (color change, grain hardness, moisture content). Harvest at right stage for best quality.',
        methods: 'Harvest methods: Manual (traditional), combine harvester (efficient), mechanical harvesters. Choose based on crop, field size, cost.',
        postHarvest: 'Post-harvest: Clean, dry to safe moisture (12-14% for grains), grade, store in clean dry place, protect from pests and moisture.',
        storage: 'Storage: Use clean, dry, well-ventilated place. Protect from rodents, insects, moisture. Use proper containers, maintain temperature and humidity.',
      },
      seasons: {
        kharif: 'Kharif season: June-October (monsoon). Crops: Rice, maize, cotton, soybean, groundnut, pulses. Sown with onset of monsoon, harvested in autumn.',
        rabi: 'Rabi season: October-March (winter). Crops: Wheat, barley, mustard, gram, peas. Sown in October-November, harvested in spring.',
        zaid: 'Zaid season: March-June (summer). Crops: Watermelon, cucumber, vegetables, fodder crops. Short duration crops between Rabi and Kharif.',
      },
      treePlanting: {
        general: {
          steps: '**Steps to Plant a Tree:**\n\n1. **Choose the right tree** for your climate, soil, and space\n2. **Select location** - consider sunlight, space for growth, distance from buildings\n3. **Dig hole** - 2-3 times wider than root ball, same depth as root ball\n4. **Prepare soil** - mix native soil with compost (50:50)\n5. **Plant tree** - place in center, spread roots, backfill with soil mix\n6. **Water thoroughly** - create water basin around tree\n7. **Mulch** - 2-4 inches around base (not touching trunk)\n8. **Stake if needed** - for support in windy areas\n9. **Water regularly** - especially first 2-3 years',
          bestTime: '**Best Time to Plant:**\n\n• **Monsoon season** (June-September) - ideal for most trees\n• **Early spring** (February-March) - before hot summer\n• **Avoid** planting in peak summer (April-May) or winter (December-January)\n• **Container trees** can be planted year-round with proper care',
          waterNeeds: '**Water Requirements:**\n\n• **First year**: Water daily or every 2-3 days (10-15 liters per tree)\n• **Second year**: Water 2-3 times per week (15-20 liters)\n• **Third year onwards**: Water weekly or as needed (20-30 liters)\n• **Monsoon**: Reduce watering, natural rainfall is sufficient\n• **Summer**: Increase frequency, water early morning or evening\n• **Check soil**: Water when top 2-3 inches of soil is dry',
          fertilizer: '**Fertilizer for Trees:**\n\n• **First year**: Apply 500g-1kg well-rotted compost/FYM per tree, 3-4 times\n• **NPK**: Use 19:19:19 or 20:20:20, 100-200g per tree, 2-3 times per year\n• **Organic**: Compost, vermicompost, neem cake (1-2 kg per tree annually)\n• **Application**: Spread around drip line (edge of canopy), not near trunk\n• **Timing**: Apply before monsoon and after monsoon\n• **Young trees**: Use half dose, increase gradually',
          care: '**Tree Care Tips:**\n\n• **Pruning**: Remove dead/damaged branches, prune in dormant season\n• **Mulching**: Maintain 2-4 inch mulch layer, keep away from trunk\n• **Protection**: Protect from animals, use tree guards if needed\n• **Weeding**: Keep area around tree weed-free for first 2-3 years\n• **Monitoring**: Check for pests, diseases, water stress regularly',
        },
        fruitTrees: {
          mango: {
            planting: '**Mango Tree Planting:**\n\n• **Best time**: June-July (monsoon)\n• **Spacing**: 10-12 meters between trees\n• **Hole size**: 1m x 1m x 1m\n• **Soil**: Well-drained, loamy soil, pH 5.5-7.5\n• **Varieties**: Alphonso, Dasheri, Langra, Kesar, Totapuri\n• **Grafting**: Use grafted saplings for early fruiting (3-4 years)',
            water: '**Mango Water Needs:**\n\n• **Young trees** (1-3 years): 20-30 liters every 3-4 days\n• **Mature trees**: 50-100 liters per week\n• **Critical stages**: Flowering (Dec-Feb), fruit development (Mar-May)\n• **Avoid**: Overwatering, waterlogging\n• **Drip irrigation**: Most efficient, saves 40-50% water',
            fertilizer: '**Mango Fertilizer:**\n\n• **Young trees**: 1-2 kg FYM + 100g NPK 19:19:19 per tree, 3 times/year\n• **Mature trees**: 10-15 kg FYM + 500g-1kg NPK per tree, 2 times/year\n• **Apply**: Before flowering (Oct-Nov) and after harvest (June-July)\n• **Micronutrients**: Zinc, Boron important for fruit quality',
            care: '**Mango Care:**\n\n• **Pruning**: After harvest, remove dead branches, maintain shape\n• **Pests**: Fruit fly, mealybug, scale insects - use neem oil, traps\n• **Diseases**: Anthracnose, powdery mildew - use fungicides\n• **Fruiting**: Starts in 4-5 years, full production in 8-10 years',
          },
          guava: {
            planting: '**Guava Tree Planting:**\n\n• **Best time**: June-September (monsoon)\n• **Spacing**: 6-8 meters between trees\n• **Hole size**: 60cm x 60cm x 60cm\n• **Soil**: Well-drained, can tolerate various soil types\n• **Varieties**: Allahabad Safeda, Lucknow-49, Red Flesh\n• **Propagation**: Grafting or air layering preferred',
            water: '**Guava Water Needs:**\n\n• **Young trees**: 10-15 liters every 2-3 days\n• **Mature trees**: 30-50 liters per week\n• **Flowering**: Reduce water slightly to induce flowering\n• **Fruit development**: Regular watering needed\n• **Drought tolerant**: Can survive with less water once established',
            fertilizer: '**Guava Fertilizer:**\n\n• **Young trees**: 500g-1kg FYM + 100g NPK per tree, 3 times/year\n• **Mature trees**: 5-10 kg FYM + 300-500g NPK per tree, 2 times/year\n• **Apply**: Before monsoon and after monsoon\n• **High potash**: Important for fruit quality and sweetness',
            care: '**Guava Care:**\n\n• **Pruning**: Regular pruning for shape and productivity\n• **Pests**: Fruit fly, mealybug - use IPM practices\n• **Fruiting**: Starts in 2-3 years, multiple crops per year possible',
          },
          papaya: {
            planting: '**Papaya Tree Planting:**\n\n• **Best time**: June-August (monsoon)\n• **Spacing**: 2-3 meters between trees\n• **Hole size**: 45cm x 45cm x 45cm\n• **Soil**: Well-drained, rich in organic matter\n• **Varieties**: Red Lady, Pusa Delicious, Coorg Honey Dew\n• **Planting**: 2-3 plants per hole, remove males later',
            water: '**Papaya Water Needs:**\n\n• **Young plants**: 5-10 liters every 2 days\n• **Mature trees**: 20-30 liters per week\n• **Critical**: Regular watering essential, avoid waterlogging\n• **Drip irrigation**: Ideal for papaya cultivation',
            fertilizer: '**Papaya Fertilizer:**\n\n• **Young plants**: 200-300g NPK 19:19:19 per plant, monthly\n• **Mature trees**: 500g-1kg NPK per tree, every 2 months\n• **Organic**: 2-3 kg compost per tree, 3-4 times/year\n• **High nitrogen**: Important for growth and fruiting',
            care: '**Papaya Care:**\n\n• **Support**: Stake young plants in windy areas\n• **Pests**: Fruit fly, aphids, red spider mite\n• **Diseases**: Root rot, powdery mildew - ensure good drainage\n• **Fruiting**: Starts in 6-8 months, harvest when color changes',
          },
          lemon: {
            planting: '**Lemon Tree Planting:**\n\n• **Best time**: June-September (monsoon)\n• **Spacing**: 4-6 meters between trees\n• **Hole size**: 60cm x 60cm x 60cm\n• **Soil**: Well-drained, slightly acidic (pH 5.5-7.0)\n• **Varieties**: Kagzi, Eureka, Lisbon\n• **Grafting**: Use grafted plants for better yield',
            water: '**Lemon Water Needs:**\n\n• **Young trees**: 10-15 liters every 3-4 days\n• **Mature trees**: 30-50 liters per week\n• **Flowering**: Regular watering during flowering\n• **Avoid**: Overwatering, waterlogging causes root rot\n• **Drip irrigation**: Recommended for consistent moisture',
            fertilizer: '**Lemon Fertilizer:**\n\n• **Young trees**: 500g-1kg FYM + 100g NPK per tree, 3 times/year\n• **Mature trees**: 5-10 kg FYM + 300-500g NPK per tree, 2 times/year\n• **Micronutrients**: Zinc, Iron, Manganese important\n• **Apply**: Before monsoon and after monsoon',
            care: '**Lemon Care:**\n\n• **Pruning**: Light pruning to maintain shape, remove dead wood\n• **Pests**: Citrus leaf miner, aphids, scale insects\n• **Diseases**: Citrus canker, greening disease\n• **Fruiting**: Starts in 2-3 years, year-round fruiting possible',
          },
          coconut: {
            planting: '**Coconut Tree Planting:**\n\n• **Best time**: May-June (pre-monsoon) or September-October\n• **Spacing**: 7-9 meters between trees\n• **Hole size**: 1m x 1m x 1m\n• **Soil**: Well-drained, sandy loam, near coastal areas ideal\n• **Varieties**: Tall varieties, Dwarf varieties (Chowghat, Malayan)\n• **Planting depth**: Plant so 1/3 of nut is above ground',
            water: '**Coconut Water Needs:**\n\n• **Young palms**: 20-30 liters every 3-4 days\n• **Mature palms**: 50-100 liters per week\n• **Critical**: Regular watering essential, especially in non-coastal areas\n• **Drip irrigation**: Efficient method for coconut',
            fertilizer: '**Coconut Fertilizer:**\n\n• **Young palms**: 1-2 kg FYM + 200g NPK per palm, 3 times/year\n• **Mature palms**: 10-15 kg FYM + 1-1.5 kg NPK per palm, 2 times/year\n• **Apply**: In circular trench around palm (1.5m from base)\n• **High potassium**: Important for nut production',
            care: '**Coconut Care:**\n\n• **Pruning**: Remove old fronds, maintain 12-14 green fronds\n• **Pests**: Rhinoceros beetle, red palm weevil\n• **Diseases**: Root wilt, bud rot\n• **Fruiting**: Starts in 5-7 years, continues for 60-80 years',
          },
          neem: {
            planting: '**Neem Tree Planting:**\n\n• **Best time**: June-September (monsoon)\n• **Spacing**: 5-7 meters between trees\n• **Hole size**: 60cm x 60cm x 60cm\n• **Soil**: Well-drained, can grow in poor soils\n• **Drought tolerant**: Very hardy tree\n• **Uses**: Medicinal, pest repellent, shade, timber',
            water: '**Neem Water Needs:**\n\n• **Young trees**: 10-15 liters every 4-5 days\n• **Mature trees**: 30-50 liters per week (first 2-3 years)\n• **After establishment**: Very drought tolerant, minimal watering needed\n• **Monsoon**: Natural rainfall sufficient',
            fertilizer: '**Neem Fertilizer:**\n\n• **Young trees**: 500g-1kg compost per tree, 2-3 times/year\n• **Mature trees**: 2-3 kg compost per tree, once a year\n• **Low maintenance**: Doesn\'t need much fertilizer\n• **Organic**: Responds well to organic inputs',
            care: '**Neem Care:**\n\n• **Very hardy**: Requires minimal care once established\n• **Pruning**: Light pruning for shape\n• **Pests**: Very few, natural pest repellent\n• **Growth**: Fast growing, provides shade quickly',
          },
        },
        commonTrees: {
          banyan: {
            planting: '**Banyan Tree Planting:**\n\n• **Best time**: June-September (monsoon)\n• **Spacing**: 15-20 meters (needs large space)\n• **Hole size**: 1m x 1m x 1m\n• **Soil**: Well-drained, can grow in various soils\n• **Note**: Grows very large, needs open space',
            water: '**Banyan Water Needs:**\n\n• **Young trees**: 20-30 liters every 3-4 days\n• **Mature trees**: 50-100 liters per week (first 3-4 years)\n• **After establishment**: Drought tolerant, minimal watering',
            fertilizer: '**Banyan Fertilizer:**\n\n• **Young trees**: 1-2 kg compost per tree, 2-3 times/year\n• **Mature trees**: 3-5 kg compost per tree, once a year\n• **Low maintenance**: Doesn\'t need much fertilizer',
          },
          peepal: {
            planting: '**Peepal Tree Planting:**\n\n• **Best time**: June-September (monsoon)\n• **Spacing**: 10-15 meters\n• **Hole size**: 60cm x 60cm x 60cm\n• **Soil**: Well-drained, adaptable to various soils\n• **Sacred tree**: Important in Indian culture',
            water: '**Peepal Water Needs:**\n\n• **Young trees**: 15-20 liters every 3-4 days\n• **Mature trees**: 40-60 liters per week (first 3-4 years)\n• **After establishment**: Drought tolerant',
            fertilizer: '**Peepal Fertilizer:**\n\n• **Young trees**: 1 kg compost per tree, 2-3 times/year\n• **Mature trees**: 2-3 kg compost per tree, once a year',
          },
        },
      },
    },
  }

  // Enhanced response generator aligned with website features + agricultural knowledge
  const generateResponse = (userMessage, context) => {
    const lowerMessage = userMessage.toLowerCase().trim()
    const words = lowerMessage.split(/\s+/)

    // Feature navigation requests
    if (lowerMessage.match(/^(show|go to|open|visit|navigate to|take me to)/)) {
      if (words.some(w => ['crop', 'recommendation', 'recommend'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.cropRecommendation.path), 500)
        return `I'll take you to the ${websiteFeatures.cropRecommendation.name} feature. You can select your soil type (${websiteFeatures.cropRecommendation.inputs.soilTypes.join(', ')}), season (${websiteFeatures.cropRecommendation.inputs.seasons.join(', ')}), and location to get personalized crop recommendations!`
      }
      if (words.some(w => ['weather', 'climate', 'alert'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.weatherAlerts.path), 500)
        return `Opening ${websiteFeatures.weatherAlerts.name}. You'll see current weather conditions, alerts for rain/heatwave/drought, and best sowing time recommendations!`
      }
      if (words.some(w => ['market', 'price', 'mandi', 'sell'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.marketPrices.path), 500)
        return `Taking you to ${websiteFeatures.marketPrices.name}. You can check prices for crops like ${websiteFeatures.marketPrices.inputs.crops.slice(0, 3).join(', ')} in mandis like ${websiteFeatures.marketPrices.inputs.mandis.slice(0, 3).join(', ')} and get sell/hold recommendations!`
      }
      if (words.some(w => ['resource', 'optimization', 'water', 'fertilizer', 'irrigation'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.resourceOptimization.path), 500)
        return `Opening ${websiteFeatures.resourceOptimization.name}. Enter your crop type and soil moisture level to get irrigation schedules, fertilizer recommendations, and water-saving tips!`
      }
      if (words.some(w => ['disease', 'detection', 'detect', 'sick', 'infected'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.diseaseDetection.path), 500)
        return `Taking you to ${websiteFeatures.diseaseDetection.name}. Upload an image of your crop to detect diseases like ${websiteFeatures.diseaseDetection.diseases.join(', ')} and get treatment suggestions!`
      }
      if (words.some(w => ['scheme', 'government', 'subsidy', 'benefit', 'pm-kisan'].includes(w))) {
        setTimeout(() => navigate(websiteFeatures.governmentSchemes.path), 500)
        return `Opening ${websiteFeatures.governmentSchemes.name}. You can find eligible schemes like PM-KISAN, PMFBY, KCC, and more based on your state, land size, and crop type!`
      }
    }

    // Greeting responses
    if (lowerMessage.match(/^(hi|hello|hey|namaste|namaskar)/)) {
      return `Hello! I'm your AI farming assistant. I can help you with:\n\n• Crop recommendations\n• Weather alerts\n• Market prices\n• Resource optimization\n• Disease detection\n• Government schemes\n\nWhat would you like to explore? You can ask me to "show crop recommendation" or ask any farming question!`
    }

    // Help requests
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('features')) {
      return `Our platform offers these features:\n\n🌾 **Crop Recommendation** - Get crop suggestions based on soil, season, and location\n🌤️ **Weather Alerts** - Real-time weather updates and alerts\n📊 **Market Prices** - Price trends and selling recommendations\n💧 **Resource Optimization** - Water and fertilizer optimization\n🔬 **Disease Detection** - Upload images to detect crop diseases\n🏛️ **Government Schemes** - Find eligible schemes and subsidies\n\nJust ask me to "show [feature name]" or ask any farming question!`
    }

    // Crop Recommendation queries
    if (words.some(w => ['crop', 'recommend', 'suggest', 'grow', 'plant'].includes(w)) && 
        (words.some(w => ['which', 'what', 'recommendation'].includes(w)) || lowerMessage.includes('should i'))) {
      return `For crop recommendations, I can guide you to our **Crop Recommendation** feature! It considers:\n\n• **Soil Types**: ${websiteFeatures.cropRecommendation.inputs.soilTypes.join(', ')}\n• **Seasons**: ${websiteFeatures.cropRecommendation.inputs.seasons.join(', ')}\n• **Locations**: ${websiteFeatures.cropRecommendation.inputs.locations.slice(0, 3).join(', ')}, and more\n\nYou'll get: Recommended crop, expected yield, and fertilizer advice.\n\nSay "show crop recommendation" to use this feature, or tell me your soil type, season, and location for a quick suggestion!`
    }

    // Weather queries
    if (words.some(w => ['weather', 'rain', 'rainfall', 'temperature', 'climate', 'sowing time'].includes(w))) {
      return `Our **Weather Alerts** feature provides:\n\n• Current weather (temperature, rainfall, humidity, wind speed)\n• Alerts for rain, heatwave, or drought\n• Best sowing time recommendations\n\nSay "show weather alerts" to see current conditions, or ask me about specific weather information!`
    }

    // Market price queries
    if (words.some(w => ['price', 'market', 'sell', 'mandi', 'rate', 'when to sell', 'hold'].includes(w))) {
      return `Our **Market Price Analysis** feature helps you:\n\n• Check prices for: ${websiteFeatures.marketPrices.inputs.crops.join(', ')}\n• View prices in mandis: ${websiteFeatures.marketPrices.inputs.mandis.slice(0, 3).join(', ')}, and more\n• Get AI recommendations: Sell or Hold based on price trends\n• See 30-day price charts\n\nSay "show market prices" to access this feature, or tell me which crop and mandi you're interested in!`
    }

    // Resource optimization queries
    if (words.some(w => ['water', 'irrigation', 'fertilizer', 'resource', 'optimize', 'moisture'].includes(w))) {
      return `Our **Resource Optimization** feature provides:\n\n• **Crops supported**: ${websiteFeatures.resourceOptimization.inputs.crops.join(', ')}\n• **Inputs**: Crop type and soil moisture level (%)\n• **Outputs**:\n  - Irrigation schedule\n  - Fertilizer quantity recommendations\n  - Water-saving tips\n\nSay "show resource optimization" to use this feature, or tell me your crop and soil moisture for quick advice!`
    }

    // Disease detection queries
    if (words.some(w => ['disease', 'sick', 'infected', 'detect', 'treatment', 'pest', 'fungus'].includes(w))) {
      return `Our **Disease Detection** feature can:\n\n• Detect diseases from uploaded crop images\n• Identify diseases like: ${websiteFeatures.diseaseDetection.diseases.join(', ')}\n• Provide treatment suggestions and causes\n\nSay "show disease detection" to upload an image, or describe the symptoms and I can help!`
    }

    // Government schemes queries
    if (words.some(w => ['scheme', 'government', 'subsidy', 'benefit', 'pm-kisan', 'insurance', 'credit'].includes(w))) {
      const schemesList = websiteFeatures.governmentSchemes.schemes
        .slice(0, 3)
        .map(s => `• **${s.name}**: ${s.benefit}`)
        .join('\n')
      return `Our **Government Schemes** feature helps you find:\n\n${schemesList}\n\nAnd more schemes! You can search by:\n• State: ${websiteFeatures.governmentSchemes.inputs.states.slice(0, 3).join(', ')}, and more\n• Land size\n• Crop type\n\nSay "show government schemes" to find eligible schemes, or ask about a specific scheme!`
    }

    // Specific crop queries with website data
    const cropData = {
      wheat: {
        recommendation: 'For wheat recommendations, use our Crop Recommendation feature! Select: Sandy/Loamy soil, Rabi season, and your location (Punjab, Uttar Pradesh, etc.)',
        market: 'Check wheat prices in our Market Prices section. Available mandis: Delhi, Mumbai, and more. Current trend shows good selling opportunities!',
        optimization: 'For wheat resource optimization, enter: Crop=Wheat, Soil Moisture=60%. You\'ll get irrigation schedule (every 5-7 days) and fertilizer recommendations (NPK 12:32:16).',
      },
      rice: {
        recommendation: 'For rice, use Crop Recommendation with: Clay/Loamy soil, Kharif season, and locations like Maharashtra, Tamil Nadu, Karnataka.',
        market: 'Rice prices available in Market Prices section. Check Mumbai, Kolkata mandis for current rates and trends.',
        optimization: 'Rice optimization: Enter Crop=Rice, Soil Moisture=80%. Get irrigation schedule (maintain 5cm water) and fertilizer (Urea + DAP).',
      },
      cotton: {
        recommendation: 'For cotton, use Crop Recommendation: Black/Red soil, Kharif season, locations like Gujarat, Maharashtra.',
        market: 'Cotton prices in Market Prices - check Ahmedabad, Mumbai mandis. Strong upward trends often seen!',
        optimization: 'Cotton optimization: Crop=Cotton, Soil Moisture=50%. Get irrigation (every 10-12 days) and fertilizer (NPK 20:20:20).',
      },
    }

    for (const [crop, info] of Object.entries(cropData)) {
      if (lowerMessage.includes(crop)) {
        if (words.some(w => ['recommend', 'suggest', 'grow'].includes(w))) {
          return info.recommendation
        }
        if (words.some(w => ['price', 'market', 'sell'].includes(w))) {
          return info.market
        }
        if (words.some(w => ['water', 'irrigation', 'fertilizer', 'optimize'].includes(w))) {
          return info.optimization
        }
        return `For ${crop}, I can help with:\n\n1. **Crop Recommendation** - Say "show crop recommendation"\n2. **Market Prices** - Say "show market prices"\n3. **Resource Optimization** - Say "show resource optimization"\n\nOr ask me specific questions about ${crop} cultivation!`
      }
    }

    // Soil type queries
    if (words.some(w => ['soil', 'clay', 'sandy', 'loamy', 'black', 'red'].includes(w))) {
      return `Our Crop Recommendation feature supports these soil types: ${websiteFeatures.cropRecommendation.inputs.soilTypes.join(', ')}.\n\nFor best results, use the Crop Recommendation feature with your soil type, season (${websiteFeatures.cropRecommendation.inputs.seasons.join(', ')}), and location. Say "show crop recommendation" to get started!`
    }

    // Season queries
    if (words.some(w => ['season', 'kharif', 'rabi', 'zaid', 'when to sow'].includes(w))) {
      return `Our platform supports all three seasons:\n\n• **Kharif** (Monsoon crops)\n• **Rabi** (Winter crops)\n• **Zaid** (Summer crops)\n\nUse the Crop Recommendation feature to find the best crops for each season based on your soil and location. Say "show crop recommendation" or check Weather Alerts for best sowing time!`
    }

    // Location/State queries
    if (words.some(w => ['maharashtra', 'punjab', 'gujarat', 'karnataka', 'tamil', 'uttar', 'telangana', 'location', 'state'].includes(w))) {
      return `Our platform supports these locations: ${websiteFeatures.cropRecommendation.inputs.locations.join(', ')}.\n\nYou can use these in:\n• **Crop Recommendation** - for location-specific crop suggestions\n• **Market Prices** - for location-specific mandi prices\n• **Government Schemes** - for state-specific schemes\n\nWhich feature would you like to explore?`
    }

    // ========== BASIC AGRICULTURE QUERIES ==========
    
    // Crop-specific detailed queries
    for (const [crop, info] of Object.entries(agricultureKnowledge.crops)) {
      if (lowerMessage.includes(crop)) {
        if (words.some(w => ['sow', 'sowing', 'plant', 'planting', 'when', 'time'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Sowing:**\n\n${info.sowing}\n\n💡 For personalized recommendations based on your location and soil, use our Crop Recommendation feature! Say "show crop recommendation".`
        }
        if (words.some(w => ['fertilizer', 'fertiliser', 'nutrient', 'npk', 'urea', 'dap', 'manure'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Fertilizer:**\n\n${info.fertilizer}\n\n💡 Get specific recommendations for your soil and crop using our Resource Optimization feature! Say "show resource optimization".`
        }
        if (words.some(w => ['water', 'irrigation', 'irrigate', 'moisture'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Irrigation:**\n\n${info.irrigation}\n\n💡 Get detailed irrigation schedules using our Resource Optimization feature! Say "show resource optimization".`
        }
        if (words.some(w => ['pest', 'insect', 'bug', 'control', 'attack'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Pest Control:**\n\n${info.pests}\n\n💡 For disease detection from images, use our Disease Detection feature! Say "show disease detection".`
        }
        if (words.some(w => ['disease', 'sick', 'infected', 'fungus', 'rot', 'blight'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Diseases:**\n\n${info.diseases}\n\n💡 Upload crop images to detect diseases using our Disease Detection feature! Say "show disease detection".`
        }
        if (words.some(w => ['harvest', 'harvesting', 'when to harvest', 'maturity'].includes(w))) {
          return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Harvesting:**\n\n${info.harvesting}`
        }
        // General crop info
        return `**${crop.charAt(0).toUpperCase() + crop.slice(1)} Cultivation Guide:**\n\n• **Sowing**: ${info.sowing.split('.')[0]}\n• **Fertilizer**: ${info.fertilizer.split('.')[0]}\n• **Irrigation**: ${info.irrigation.split('.')[0]}\n• **Pests**: ${info.pests.split('.')[0]}\n• **Diseases**: ${info.diseases.split('.')[0]}\n\n💡 For detailed recommendations, use our platform features! Ask me about specific aspects or say "show crop recommendation".`
      }
    }

    // Soil management queries
    if (words.some(w => ['soil', 'land', 'field', 'earth'].includes(w))) {
      if (words.some(w => ['type', 'kind', 'clay', 'sandy', 'loamy'].includes(w))) {
        return `**Soil Types:**\n\n${agricultureKnowledge.general.soilManagement.types}\n\n💡 Use our Crop Recommendation feature to find crops suitable for your soil type! Say "show crop recommendation".`
      }
      if (words.some(w => ['ph', 'acid', 'alkaline', 'test'].includes(w))) {
        return `**Soil pH Management:**\n\n${agricultureKnowledge.general.soilManagement.ph}\n\n💡 Get free soil testing through Soil Health Card scheme! Check our Government Schemes feature. Say "show government schemes".`
      }
      if (words.some(w => ['improve', 'better', 'fertile', 'quality', 'health'].includes(w))) {
        return `**Improving Soil Health:**\n\n${agricultureKnowledge.general.soilManagement.improvement}\n\n💡 Get soil health recommendations through our platform's Government Schemes section (Soil Health Card)!`
      }
      return `**Soil Management:**\n\n${agricultureKnowledge.general.soilManagement.types}\n\nFor soil testing and recommendations, check our Government Schemes section for Soil Health Card scheme!`
    }

    // Irrigation queries
    if (words.some(w => ['irrigation', 'water', 'irrigate', 'watering'].includes(w))) {
      if (words.some(w => ['method', 'way', 'how to', 'type'].includes(w))) {
        return `**Irrigation Methods:**\n\n${agricultureKnowledge.general.irrigation.methods}\n\n💡 Get personalized irrigation schedules using our Resource Optimization feature! Say "show resource optimization".`
      }
      if (words.some(w => ['save', 'saving', 'efficient', 'reduce'].includes(w))) {
        return `**Water Saving Tips:**\n\n${agricultureKnowledge.general.irrigation.waterSaving}\n\n💡 Our Resource Optimization feature provides water-saving tips specific to your crop! Say "show resource optimization".`
      }
      if (words.some(w => ['when', 'time', 'schedule', 'timing'].includes(w))) {
        return `**Irrigation Timing:**\n\n${agricultureKnowledge.general.irrigation.timing}\n\n💡 Get detailed irrigation schedules for your crop using our Resource Optimization feature! Say "show resource optimization".`
      }
      return `**Irrigation Management:**\n\n${agricultureKnowledge.general.irrigation.methods}\n\n💡 For crop-specific irrigation schedules, use our Resource Optimization feature! Say "show resource optimization".`
    }

    // Fertilizer queries
    if (words.some(w => ['fertilizer', 'fertiliser', 'manure', 'nutrient', 'npk'].includes(w))) {
      if (words.some(w => ['npk', 'nitrogen', 'phosphorus', 'potassium', 'what is'].includes(w))) {
        return `**Understanding NPK:**\n\n${agricultureKnowledge.general.fertilizers.npk}\n\n💡 Get specific fertilizer recommendations using our Resource Optimization feature! Say "show resource optimization".`
      }
      if (words.some(w => ['organic', 'natural', 'compost', 'fym'].includes(w))) {
        return `**Organic Fertilizers:**\n\n${agricultureKnowledge.general.fertilizers.organic}\n\n💡 Organic farming improves soil health and sustainability!`
      }
      if (words.some(w => ['how', 'apply', 'application', 'when'].includes(w))) {
        return `**Fertilizer Application:**\n\n${agricultureKnowledge.general.fertilizers.application}\n\n💡 Get precise fertilizer quantities for your crop using our Resource Optimization feature! Say "show resource optimization".`
      }
      return `**Fertilizer Management:**\n\n${agricultureKnowledge.general.fertilizers.npk}\n\n💡 For crop-specific fertilizer recommendations, use our Resource Optimization feature! Say "show resource optimization".`
    }

    // Pest management queries
    if (words.some(w => ['pest', 'insect', 'bug', 'attack', 'control'].includes(w))) {
      if (words.some(w => ['ipm', 'integrated', 'manage', 'management'].includes(w))) {
        return `**Integrated Pest Management (IPM):**\n\n${agricultureKnowledge.general.pestManagement.ipm}\n\n💡 For disease detection from images, use our Disease Detection feature! Say "show disease detection".`
      }
      if (words.some(w => ['organic', 'natural', 'biological', 'neem'].includes(w))) {
        return `**Biological Pest Control:**\n\n${agricultureKnowledge.general.pestManagement.biological}\n\n💡 Organic methods are safer and more sustainable!`
      }
      return `**Pest Management:**\n\n${agricultureKnowledge.general.pestManagement.ipm}\n\n💡 For identifying crop diseases from images, use our Disease Detection feature! Say "show disease detection".`
    }

    // Disease management queries
    if (words.some(w => ['disease', 'sick', 'infected', 'fungus', 'rot', 'blight', 'mildew'].includes(w))) {
      if (words.some(w => ['prevent', 'prevention', 'avoid'].includes(w))) {
        return `**Disease Prevention:**\n\n${agricultureKnowledge.general.diseaseManagement.prevention}\n\n💡 Upload crop images to detect diseases early using our Disease Detection feature! Say "show disease detection".`
      }
      if (words.some(w => ['identify', 'detect', 'symptom', 'sign'].includes(w))) {
        return `**Disease Identification:**\n\n${agricultureKnowledge.general.diseaseManagement.identification}\n\n💡 Use our Disease Detection feature to identify diseases from crop images! Say "show disease detection".`
      }
      if (words.some(w => ['treat', 'treatment', 'cure', 'control'].includes(w))) {
        return `**Disease Treatment:**\n\n${agricultureKnowledge.general.diseaseManagement.treatment}\n\n💡 Upload images to get treatment suggestions using our Disease Detection feature! Say "show disease detection".`
      }
      return `**Disease Management:**\n\n${agricultureKnowledge.general.diseaseManagement.prevention}\n\n💡 Upload crop images to detect and get treatment for diseases using our Disease Detection feature! Say "show disease detection".`
    }

    // Organic farming queries
    if (words.some(w => ['organic', 'natural farming', 'sustainable'].includes(w))) {
      if (words.some(w => ['what', 'is', 'meaning', 'define'].includes(w))) {
        return `**Organic Farming:**\n\n${agricultureKnowledge.general.organicFarming.basics}\n\n💡 Organic farming promotes soil health and sustainability!`
      }
      if (words.some(w => ['input', 'fertilizer', 'pesticide', 'use'].includes(w))) {
        return `**Organic Inputs:**\n\n${agricultureKnowledge.general.organicFarming.inputs}\n\n💡 Organic inputs improve soil health and crop quality!`
      }
      if (words.some(w => ['benefit', 'advantage', 'why', 'good'].includes(w))) {
        return `**Benefits of Organic Farming:**\n\n${agricultureKnowledge.general.organicFarming.benefits}\n\n💡 Check Government Schemes for organic farming subsidies! Say "show government schemes".`
      }
      return `**Organic Farming:**\n\n${agricultureKnowledge.general.organicFarming.basics}\n\n💡 For organic farming support, check our Government Schemes section! Say "show government schemes".`
    }

    // Crop rotation queries
    if (words.some(w => ['rotation', 'rotate', 'crop rotation', 'alternate'].includes(w))) {
      if (words.some(w => ['why', 'important', 'benefit', 'need'].includes(w))) {
        return `**Importance of Crop Rotation:**\n\n${agricultureKnowledge.general.cropRotation.importance}\n\n💡 Plan your crop rotation for better yields and soil health!`
      }
      if (words.some(w => ['example', 'what', 'which', 'suggest'].includes(w))) {
        return `**Crop Rotation Examples:**\n\n${agricultureKnowledge.general.cropRotation.examples}\n\n💡 Use our Crop Recommendation feature to plan rotations! Say "show crop recommendation".`
      }
      return `**Crop Rotation:**\n\n${agricultureKnowledge.general.cropRotation.importance}\n\n💡 Plan rotations using our Crop Recommendation feature for different seasons!`
    }

    // Harvesting queries
    if (words.some(w => ['harvest', 'harvesting', 'when to harvest', 'maturity', 'ripe'].includes(w))) {
      return `**Harvesting Guide:**\n\n${agricultureKnowledge.general.harvesting.timing}\n\n**Post-Harvest:**\n${agricultureKnowledge.general.harvesting.postHarvest}\n\n💡 Check market prices before selling using our Market Prices feature! Say "show market prices".`
    }

    // Storage queries
    if (words.some(w => ['storage', 'store', 'preserve', 'keep'].includes(w))) {
      return `**Storage Management:**\n\n${agricultureKnowledge.general.harvesting.storage}\n\n💡 Check market prices to decide when to sell using our Market Prices feature! Say "show market prices".`
    }

    // Season queries (enhanced)
    if (words.some(w => ['kharif', 'rabi', 'zaid', 'season'].includes(w))) {
      if (lowerMessage.includes('kharif')) {
        return `**Kharif Season:**\n\n${agricultureKnowledge.general.seasons.kharif}\n\n💡 Use our Crop Recommendation feature to find best Kharif crops for your location! Say "show crop recommendation".`
      }
      if (lowerMessage.includes('rabi')) {
        return `**Rabi Season:**\n\n${agricultureKnowledge.general.seasons.rabi}\n\n💡 Use our Crop Recommendation feature to find best Rabi crops! Say "show crop recommendation".`
      }
      if (lowerMessage.includes('zaid')) {
        return `**Zaid Season:**\n\n${agricultureKnowledge.general.seasons.zaid}\n\n💡 Use our Crop Recommendation feature for Zaid crop suggestions! Say "show crop recommendation".`
      }
      return `**Indian Farming Seasons:**\n\n• **Kharif**: ${agricultureKnowledge.general.seasons.kharif.split('.')[0]}\n• **Rabi**: ${agricultureKnowledge.general.seasons.rabi.split('.')[0]}\n• **Zaid**: ${agricultureKnowledge.general.seasons.zaid.split('.')[0]}\n\n💡 Use our Crop Recommendation feature to find crops for each season! Say "show crop recommendation".`
    }

    // ========== TREE PLANTING QUERIES ==========
    
    // General tree planting queries
    if (words.some(w => ['plant', 'planting', 'grow'].includes(w)) && 
        (words.some(w => ['tree', 'sapling'].includes(w)) || lowerMessage.includes('how to plant'))) {
      if (words.some(w => ['what', 'need', 'required', 'require'].includes(w))) {
        return `**What You Need to Plant a Tree:**\n\n• **Sapling/Seed**: Healthy, disease-free plant\n• **Location**: Right spot with adequate sunlight and space\n• **Tools**: Spade, shovel, watering can, compost, mulch\n• **Materials**: Well-rotted compost/FYM, mulch (straw/leaves), stakes (if needed)\n• **Time**: Best during monsoon (June-September)\n\n**Basic Steps:**\n${agricultureKnowledge.general.treePlanting.general.steps}\n\n💡 For specific tree guidance, ask me about the tree name (e.g., "how to plant mango tree")!`
      }
      if (words.some(w => ['how', 'steps', 'method', 'process'].includes(w))) {
        return `**How to Plant a Tree:**\n\n${agricultureKnowledge.general.treePlanting.general.steps}\n\n**Best Time:**\n${agricultureKnowledge.general.treePlanting.general.bestTime}\n\n💡 For specific tree planting details, ask about the tree name!`
      }
      return `**Tree Planting Guide:**\n\n${agricultureKnowledge.general.treePlanting.general.steps}\n\n💡 Ask me about specific trees (mango, guava, neem, etc.) for detailed information!`
    }

    // Tree water requirements
    if ((words.some(w => ['tree', 'trees'].includes(w)) || words.some(w => ['mango', 'guava', 'papaya', 'lemon', 'coconut', 'neem', 'banyan', 'peepal'].includes(w))) && 
        words.some(w => ['water', 'watering', 'irrigation', 'how much water'].includes(w))) {
      // Check for specific fruit trees first
      const fruitTrees = ['mango', 'guava', 'papaya', 'lemon', 'coconut', 'neem']
      for (const tree of fruitTrees) {
        if (lowerMessage.includes(tree)) {
          return `**${tree.charAt(0).toUpperCase() + tree.slice(1)} Tree Water Needs:**\n\n${agricultureKnowledge.general.treePlanting.fruitTrees[tree].water}\n\n💡 For complete ${tree} care guide, ask me about "${tree} planting" or "${tree} fertilizer"!`
        }
      }
      return `**Tree Water Requirements:**\n\n${agricultureKnowledge.general.treePlanting.general.waterNeeds}\n\n💡 For specific tree water needs, ask about the tree name (e.g., "mango tree water needs")!`
    }

    // Tree fertilizer requirements
    if ((words.some(w => ['tree', 'trees'].includes(w)) || words.some(w => ['mango', 'guava', 'papaya', 'lemon', 'coconut', 'neem'].includes(w))) && 
        words.some(w => ['fertilizer', 'fertiliser', 'manure', 'nutrient', 'npk'].includes(w))) {
      // Check for specific fruit trees first
      const fruitTrees = ['mango', 'guava', 'papaya', 'lemon', 'coconut', 'neem']
      for (const tree of fruitTrees) {
        if (lowerMessage.includes(tree)) {
          return `**${tree.charAt(0).toUpperCase() + tree.slice(1)} Tree Fertilizer:**\n\n${agricultureKnowledge.general.treePlanting.fruitTrees[tree].fertilizer}\n\n💡 For complete ${tree} care guide, ask me about "${tree} planting" or "${tree} water needs"!`
        }
      }
      return `**Tree Fertilizer Requirements:**\n\n${agricultureKnowledge.general.treePlanting.general.fertilizer}\n\n💡 For specific tree fertilizer needs, ask about the tree name (e.g., "mango tree fertilizer")!`
    }

    // Specific tree planting queries
    const allTrees = {
      ...agricultureKnowledge.general.treePlanting.fruitTrees,
      ...agricultureKnowledge.general.treePlanting.commonTrees,
    }
    
    for (const [treeName, treeInfo] of Object.entries(allTrees)) {
      if (lowerMessage.includes(treeName)) {
        if (words.some(w => ['plant', 'planting', 'how to', 'grow'].includes(w))) {
          return `**${treeName.charAt(0).toUpperCase() + treeName.slice(1)} Tree Planting:**\n\n${treeInfo.planting}\n\n**Water Needs:**\n${treeInfo.water}\n\n**Fertilizer:**\n${treeInfo.fertilizer}\n\n**Care:**\n${treeInfo.care || agricultureKnowledge.general.treePlanting.general.care}\n\n💡 For more details, ask specific questions about ${treeName}!`
        }
        if (words.some(w => ['water', 'watering'].includes(w))) {
          return `**${treeName.charAt(0).toUpperCase() + treeName.slice(1)} Water Needs:**\n\n${treeInfo.water}\n\n💡 For complete ${treeName} guide, ask about "${treeName} planting"!`
        }
        if (words.some(w => ['fertilizer', 'manure'].includes(w))) {
          return `**${treeName.charAt(0).toUpperCase() + treeName.slice(1)} Fertilizer:**\n\n${treeInfo.fertilizer}\n\n💡 For complete ${treeName} guide, ask about "${treeName} planting"!`
        }
        if (words.some(w => ['care', 'maintain', 'maintenance'].includes(w))) {
          return `**${treeName.charAt(0).toUpperCase() + treeName.slice(1)} Care:**\n\n${treeInfo.care || agricultureKnowledge.general.treePlanting.general.care}\n\n💡 For planting and other details, ask about "${treeName} planting"!`
        }
        // General tree info
        return `**${treeName.charAt(0).toUpperCase() + treeName.slice(1)} Tree Guide:**\n\n**Planting:**\n${treeInfo.planting}\n\n**Water:**\n${treeInfo.water.split('.')[0]}.\n\n**Fertilizer:**\n${treeInfo.fertilizer.split('.')[0]}.\n\n💡 Ask me about "${treeName} planting", "${treeName} water", or "${treeName} fertilizer" for detailed information!`
      }
    }

    // Tree care general queries
    if (words.some(w => ['tree', 'trees'].includes(w)) && 
        words.some(w => ['care', 'maintain', 'maintenance', 'look after'].includes(w))) {
      return `**Tree Care Tips:**\n\n${agricultureKnowledge.general.treePlanting.general.care}\n\n💡 For specific tree care, ask about the tree name (e.g., "mango tree care")!`
    }

    // Default with feature suggestions
    const suggestions = [
      "I'd be happy to help! Our platform offers:\n\n• Crop recommendations based on soil, season, location\n• Weather alerts and best sowing times\n• Market price analysis with sell/hold recommendations\n• Resource optimization for water and fertilizers\n• Disease detection from crop images\n• Government scheme finder\n\nWhich feature interests you? Just say 'show [feature name]' or ask a specific question!",
      "That's a great question! To give you the best answer, I can guide you to our features:\n\n🌾 Crop Recommendation - for crop selection\n🌤️ Weather Alerts - for weather info\n📊 Market Prices - for price trends\n💧 Resource Optimization - for water/fertilizer\n🔬 Disease Detection - for crop health\n🏛️ Government Schemes - for subsidies\n\nOr ask me more specifically - which crop, location, or problem are you dealing with?",
      "I understand you're asking about farming. Our platform has specialized features for different needs:\n\n• Need crop advice? → Crop Recommendation\n• Weather concerns? → Weather Alerts\n• Selling decisions? → Market Prices\n• Resource management? → Resource Optimization\n• Crop health issues? → Disease Detection\n• Financial support? → Government Schemes\n\nWhich one can I help you with? Or ask me a specific farming question!",
    ]
    return suggestions[Math.floor(Math.random() * suggestions.length)]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Initialize browser speech recognition for microphone input
  useEffect(() => {
    if (typeof window === 'undefined') return

    console.log('[AgroBuddy][Voice] Initializing speech recognition...')
    console.log('[AgroBuddy][Voice] Secure context (required for mic):', window.isSecureContext)
    console.log('[AgroBuddy][Voice] User agent:', navigator.userAgent)

    // Microphone requires HTTPS or localhost – browsers block it on plain HTTP (except localhost)
    if (!window.isSecureContext) {
      console.warn('[AgroBuddy][Voice] Page is not in a secure context (HTTPS or localhost). Mic is blocked by the browser.')
      setIsSpeechSupported(false)
      setSpeechStatus(
        'Voice input needs a secure connection. Open this site via https:// or from http://localhost. Then try again.'
      )
      return
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      console.warn('[AgroBuddy][Voice] Web Speech API not available in this browser.')
      setIsSpeechSupported(false)
      setSpeechStatus(
        'Voice input is not available in this browser. Voice input works best on Chrome or Edge. Please switch browsers or use text input.'
      )
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = navigator.language || 'en-IN'
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      console.log('[AgroBuddy][Voice] Transcription result:', transcript)
      setInputText((prev) => {
        if (!prev) return transcript
        const needsSpace = !prev.endsWith(' ')
        return prev + (needsSpace ? ' ' : '') + transcript
      })
      setSpeechStatus('Voice captured. You can edit the text and press send.')
    }

    recognition.onerror = (event) => {
      console.error('[AgroBuddy][Voice] Speech recognition error:', event?.error)
      setIsListening(false)
      if (event && event.error === 'not-allowed') {
        setSpeechStatus(
          'Microphone permission was denied. Please allow mic access in your browser settings or use text input.'
        )
      } else if (event && event.error === 'no-speech') {
        setSpeechStatus('I did not hear anything. Please try speaking again.')
      } else if (event && event.error === 'audio-capture') {
        setSpeechStatus(
          'No microphone was detected. Please connect a mic or use text input.'
        )
      } else {
        setSpeechStatus(
          'There was a problem with voice input. You can try again or use text input instead.'
        )
      }
    }

    recognition.onend = () => {
      console.log('[AgroBuddy][Voice] Speech recognition session ended.')
      setIsListening(false)
    }

    recognitionRef.current = recognition

    console.log('[AgroBuddy][Voice] Speech recognition initialized successfully.')

    return () => {
      recognition.stop?.()
    }
  }, [])

  const toggleListening = () => {
    if (!isSpeechSupported || !recognitionRef.current || isTyping) return

    if (isListening) {
      console.log('[AgroBuddy][Voice] Stopping listening...')
      recognitionRef.current.stop()
      setIsListening(false)
      setSpeechStatus('')
    } else {
      try {
        console.log('[AgroBuddy][Voice] Starting listening...')
        setSpeechStatus('Listening... speak clearly near your microphone.')
        recognitionRef.current.start()
        setIsListening(true)
      } catch {
        // some browsers throw if called twice quickly
        setIsListening(false)
        setSpeechStatus(
          'Voice input is already active or not ready yet. Please wait a moment and try again.'
        )
      }
    }
  }

  const handleSendMessage = async (text = null) => {
    const messageText = text || inputText.trim()
    if (!messageText) return

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setConversationContext((prev) => [...prev, messageText])
    setInputText('')
    setIsTyping(true)

    const thinkingTime = Math.min(800 + Math.random() * 1200, 2000)

    setTimeout(() => {
      setIsTyping(false)
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(messageText, conversationContext),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, thinkingTime)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: 'Hello! I am your AI farming assistant. I can help you with:\n\n🌾 Crop Recommendations\n🌤️ Weather Alerts\n📊 Market Price Analysis\n💧 Resource Optimization\n🔬 Disease Detection\n🏛️ Government Schemes\n\nWhat would you like to know? You can also ask me to guide you to any feature!',
        sender: 'bot',
        timestamp: new Date(),
      },
    ])
    setConversationContext([])
  }

  return (
    <section
      id="chatbot"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-agri-bg min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-agri-green mb-4">
            🤖 AgroBuddy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ask any farming-related questions and get guided to our platform features
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            ⚠️ Note: Information provided is for general guidance. Agricultural practices vary by region, soil type, and local conditions. Always consult local agricultural extension officers or experts for specific advice tailored to your situation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" style={{ height: '600px' }}>
            {/* Chat Header */}
            <div className="bg-agri-green text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">AI Farming Assistant</span>
              </div>
              <button
                onClick={handleClearChat}
                className="text-white/80 hover:text-white text-sm px-3 py-1 rounded hover:bg-white/10 transition-colors"
                title="Clear conversation"
              >
                Clear Chat
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className="flex items-start space-x-2 max-w-[80%] sm:max-w-[70%]">
                      {message.sender === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-agri-green flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">AI</span>
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-agri-green text-white rounded-tr-sm'
                            : 'bg-white text-gray-800 border border-gray-200 rounded-tl-sm shadow-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {message.text}
                        </p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 text-sm">You</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-agri-green flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">AI</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-4">
              <div className="flex items-end space-x-2">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about features, crops, or say 'show [feature name]' to navigate..."
                    rows={1}
                    className="w-full px-4 py-3 pr-14 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent resize-none max-h-32 overflow-y-auto"
                    style={{ minHeight: '48px' }}
                    onInput={(e) => {
                      e.target.style.height = 'auto'
                      e.target.style.height = e.target.scrollHeight + 'px'
                    }}
                  />
                  <div className="absolute right-2 bottom-2 flex items-center space-x-1">
                    {isSpeechSupported && (
                      <button
                        type="button"
                        onClick={toggleListening}
                        disabled={isTyping}
                        className={`p-2 rounded-lg border ${
                          isListening
                            ? 'bg-red-500 border-red-500 text-white'
                            : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                        } disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                        title={
                          isListening
                            ? 'Stop listening'
                            : 'Speak your question'
                        }
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
                          <path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7.002 7.002 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-2v-2.08A7.002 7.002 0 0 0 19 11z" />
                        </svg>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() || isTyping}
                      className="p-2 bg-agri-green hover:bg-agri-light-green disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      title="Send message"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {isSpeechSupported
                  ? 'Tip: Click the mic, speak clearly, then press send. Voice input works best on Chrome or Edge (desktop & mobile).'
                  : 'Voice input works best on Chrome or Edge. Your current browser does not support it, so please switch browsers or use text input.'}
              </p>
              {speechStatus && (
                <p className="text-xs text-gray-600 mt-1 text-center">
                  {speechStatus}
                </p>
              )}
              <details className="mt-3 text-left">
                <summary className="text-xs text-agri-green cursor-pointer hover:underline">
                  Why isn’t my mic working?
                </summary>
                <ul className="mt-2 text-xs text-gray-600 space-y-1 pl-4 list-disc">
                  <li><strong>Browser:</strong> Voice works only in Chrome and Edge (desktop &amp; Android). It does not work in Firefox or some Safari versions.</li>
                  <li><strong>Secure page:</strong> The site must be opened via <code className="bg-gray-100 px-1 rounded">https://</code> or <code className="bg-gray-100 px-1 rounded">http://localhost</code>. Plain <code className="bg-gray-100 px-1 rounded">http://</code> on a network URL blocks the microphone.</li>
                  <li><strong>Permission:</strong> When you click the mic, the browser will ask for microphone access. You must allow it for this site.</li>
                  <li><strong>Device:</strong> Your device must have a working microphone (built-in or USB) and it must not be blocked by system settings.</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChatbot
