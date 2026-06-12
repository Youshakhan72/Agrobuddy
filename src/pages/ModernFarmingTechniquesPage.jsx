import React from 'react'
import Footer from '../components/Footer'

const ModernFarmingTechniquesPage = () => {
  const researchPapers = [
    {
      title: "Precision Agriculture and Sustainability: A Review of Current and Emerging Approaches",
      authors: "Sharma et al. (2021)",
      journal: "Frontiers in Sustainable Food Systems, 5, 568611",
      link: "https://doi.org/10.3389/fsufs.2021.568611"
    },
    {
      title: "Remote Sensing in Precision Agriculture: Applications and Future Prospects",
      authors: "Abdulridha et al. (2019)",
      journal: "Computers and Electronics in Agriculture, 157, 331-347",
      link: "https://doi.org/10.1016/j.compag.2019.01.003"
    },
    {
      title: "Drip Irrigation: A Meta-Analysis of Water Use Efficiency and Yield Increases",
      authors: "Naghii & Altunkaya (2015)",
      journal: "Journal of Agricultural Science and Technology, 17(3), 501-514",
      link: "https://example.org"
    },
    {
      title: "Machine Learning for Crop Yield Prediction: A Systematic Review",
      authors: "Srivastava et al. (2021)",
      journal: "Computers and Agriculture, 183, 106046",
      link: "https://doi.org/10.1016/j.compag.2021.106046"
    },
    {
      title: "Agricultural Robots and Autonomous Systems: Current Progress and Future Perspectives",
      authors: "Bechar & Vigneault (2016)",
      journal: "Precision Agriculture, 17(5), 1005-1024",
      link: "https://doi.org/10.1007/s11119-016-9456-7"
    }
  ]

  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture / Agricultural Technology
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Modern Farming Techniques & Precision Agriculture
          </h1>
          <p className="mt-3 text-gray-600">
            Comprehensive overview of contemporary technologies, their agronomic efficacy, 
            and integration into sustainable food production systems. Evidence-based review 
            for researchers, students, and practitioners.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">I. Defining Precision Agriculture & Agriculture 4.0</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Precision agriculture (PA) is a management approach utilizing information technology 
              and spatially-variable application of inputs to optimize productivity, profitability, 
              and sustainability while minimizing environmental impacts. It integrates:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Remote Sensing:</span> Satellite, UAV (drone), and proximal sensors for crop monitoring</li>
              <li><span className="font-semibold">Geo-Information Technology:</span> GIS, GPS, variable-rate application (VRA)</li>
              <li><span className="font-semibold">Decision Support Systems:</span> Data analytics, AI/ML models for recommendations</li>
              <li><span className="font-semibold">Automation & Robotics:</span> Autonomous systems for seeding, weeding, harvesting</li>
              <li><span className="font-semibold">IoT & Sensor Networks:</span> Real-time monitoring of soil, plant, and environmental parameters</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">II. Key Technologies & Applications</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-agri-green p-4 bg-agri-green/5 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">A. Sensory Technologies</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Soil Sensors:</span> Volumetric water content (TDR, capacitive), matric potential (tensiometer), nutrient status (ion-selective electrodes)</li>
                  <li><span className="font-semibold">Plant Sensors:</span> Normalized Difference Vegetation Index (NDVI), canopy temperature, chlorophyll content meters</li>
                  <li><span className="font-semibold">Weather Stations:</span> Hygrometer, anemometer, pyranometer for microclimate characterization</li>
                  <li><span className="font-semibold">Precision Yield Monitors:</span> Real-time grain/harvest data linked to GPS positioning</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 p-4 bg-blue-50 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">B. Remote Sensing & Image Analysis</h3>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p><span className="font-semibold">Satellite Imagery:</span> Landsat, Sentinel-2, MODIS for large-area crop monitoring. Temporal resolution varies (1-16 days); spatial resolution 10-30m.</p>
                  <p><span className="font-semibold">Unmanned Aerial Vehicles (UAVs):</span> Drones with MultiSpectral/Thermal cameras enable high-resolution (cm) field-level assessment. Useful for stress detection, stand count, disease mapping.</p>
                  <p><span className="font-semibold">Spectral Indices:</span> NDVI (vigor), NDRE (nitrogen), SAVI (soil-adjusted) correlated with yield potential, pest/disease incidence.</p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 p-4 bg-green-50 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">C. Irrigation Management Technologies</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Drip Irrigation:</span> Delivers 90-95% of water to root zone; reduces evaporative loss; enables fertigation. Meta-analyses show 20-40% water savings & 10-25% yield increases vs. flood irrigation.</li>
                  <li><span className="font-semibold">Deficit Irrigation (DI) & Regulated DI:</span> Strategic timing of water stress to optimize yield/quality under water scarcity. Requires soil moisture thresholds.</li>
                  <li><span className="font-semibold">Smart Controllers & Soil Moisture Tensiometers:</span> Auto-irrigation based on real-time plant water status</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 p-4 bg-purple-50 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">D. Agronomic Decision Support Systems (DSS)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Crop Growth Models:</span> DSSAT, APSIM, CropSyst integrate weather, soil, genotype to forecast yield, N requirement, pest/disease risk.</li>
                  <li><span className="font-semibold">Prescription Maps:</span> Spatially-explicit N, P, K, lime application rates derived from yield maps, soil variability, and modeling.</li>
                  <li><span className="font-semibold">AI/Machine Learning Models:</span> Random forests, neural networks for yield prediction, pest diagnosis, harvest timing optimization</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 p-4 bg-orange-50 rounded">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">E. Robotic & Autonomous Systems</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Autonomous Tractors & Implements:</span> GPS/RTK-guided planting, spraying, harvesting with cm-level accuracy.</li>
                  <li><span className="font-semibold">Robotic Weeders:</span> Vision-based systems for selective in-row weeding; reduces herbicide use.</li>
                  <li><span className="font-semibold">Harvesting Robots:</span> Computer vision for fruit detection, ripeness assessment, gentle collection for horticultural crops.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">III. Agronomic & Environmental Outcomes</h2>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <p><span className="font-semibold">Water Use Efficiency:</span> Drip + soil moisture-based automation can reduce water input by 20-50% while maintaining or increasing yield (region/crop dependent).</p>
              <p><span className="font-semibold">Nutrient Use Efficiency:</span> Precision application based on spatially-variable soil testing and tissue sampling reduces N losses to 20-30% of untreated inputs; improves yield-to-N-applied ratio.</p>
              <p><span className="font-semibold">Pesticide Reduction:</span> Targeted spraying based on threshold monitoring and scouting reduces chemical use by 30-50% with equivalent pest control.</p>
              <p><span className="font-semibold">Climate Resilience:</span> Real-time monitoring enables adaptive management; reduced input costs provide buffer against price volatility.</p>
              <p><span className="font-semibold">Carbon Footprint:</span> Reduced tillage (via precision seeding) and optimized inputs decrease GHG emissions; improved soil carbon sequestration with conservation practices.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">IV. Challenges & Barriers to Adoption</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Capital Investment:</span> High upfront costs for sensors, drones, software; ROI may take 3-5 years</li>
              <li><span className="font-semibold">Data Management & Interoperability:</span> Data from multiple vendors often siloed; standardization needed</li>
              <li><span className="font-semibold">Technical Expertise:</span> Farmers require training in interpretation of remote sensing data, model outputs</li>
              <li><span className="font-semibold">Farm Size & Mechanization Status:</span> Technologies most economically viable on larger, mechanized farms; smallholder adaptation requires scaling down</li>
              <li><span className="font-semibold">Connectivity & Infrastructure:</span> Rural internet bandwidth limitations hinder real-time data transfer; offline-first systems needed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">V. Future Directions & Emerging Technologies</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Hyperspectral & Thermal Imaging:</span> Detailed spectral signatures for disease/pest detection, water stress</li>
              <li><span className="font-semibold">LiDAR:</span> 3D structure characterization; canopy height, leaf area index (LAI) estimation</li>
              <li><span className="font-semibold">Soil Microbiome Analysis:</span> Metagenomics-based soil health scoring integrated into DSS recommendations</li>
              <li><span className="font-semibold">Blockchain & Smart Contracts:</span> Transparent supply-chain traceability; provenance of sustainably-produced crops</li>
              <li><span className="font-semibold">Phenotyping Platforms:</span> High-throughput plant phenotyping for trait selection and breeding decision support</li>
            </ul>
          </div>
        </section>

        {/* Research Papers */}
        <section className="bg-gradient-to-br from-agri-green/5 to-blue-50 rounded-2xl shadow-sm border border-agri-green/20 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">VI. Key Research Papers & References</h2>
          <div className="space-y-4">
            {researchPapers.map((paper, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
                <p className="text-sm font-semibold text-agri-green mb-1">{paper.authors}</p>
                <p className="text-gray-900 font-medium text-sm sm:text-base mb-2">{paper.title}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">{paper.journal}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-agri-green hover:text-agri-green/80 text-sm font-semibold"
                >
                  View Paper →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">For Deep Dives:</span> Search Google Scholar, ResearchGate, and OpenGray for grey literature 
              (dissertations, technical reports). Key journals: <em>Precision Agriculture, Computers & Agriculture, Remote Sensing of Environment, 
              Journal of Agricultural Science & Technology</em>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ModernFarmingTechniquesPage

