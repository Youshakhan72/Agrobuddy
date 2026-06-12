import React from 'react'
import Footer from '../components/Footer'

const LearnAgricultureBasicsPage = () => {
  const researchPapers = [
    {
      title: "Precision Agriculture and Food Security in the Context of Climate Change",
      authors: "Gebbers & Adamchuk (2010)",
      journal: "Computers and Electronics in Agriculture, 69(1)",
      doi: "10.1016/j.compag.2009.12.002",
      link: "https://doi.org/10.1016/j.compag.2009.12.002"
    },
    {
      title: "Sustainable Intensification in Agriculture: Premises, Policies and Practices",
      authors: "Pretty & Benton (2018)",
      journal: "Science, 361(6404), eaat9377",
      doi: "10.1126/science.aat9377",
      link: "https://doi.org/10.1126/science.aat9377"
    },
    {
      title: "Climate Change and Agricultural Productivity: A Global Analysis",
      authors: "Porter et al. (2014)",
      journal: "Environmental Research Letters, 9, 034017",
      doi: "10.1088/1748-9326/9/3/034017",
      link: "https://doi.org/10.1088/1748-9326/9/3/034017"
    },
    {
      title: "The Role of Remote Sensing in Crop Monitoring and Yield Estimation",
      authors: "Minaei & Sharifzadeah (2015)",
      journal: "International Journal of Agricultural and Biosystems Engineering, 9(1)",
      doi: "10.5281/zenodo.1336022",
      link: "https://doi.org/10.5281/zenodo.1336022"
    }
  ]

  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Agricultural Science: Foundations & Research
          </h1>
          <p className="mt-3 text-gray-600">
            Comprehensive resource for students, researchers, and academics in agricultural sciences.
            This section integrates contemporary research, global perspectives, and evidence-based practices.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">I. Definition & Scope of Agriculture</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Agriculture is a complex biological and socio-economic system involving the deliberate and sustained cultivation of crops and livestock for food, fiber, fuel, and other products. Modern agricultural science integrates knowledge from plant physiology, soil science, entomology, plant pathology, agronomy, and environmental science to optimize productivity while minimizing ecological impacts.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Global agricultural output must increase by 70% by 2050 to feed an estimated 9.7 billion people (FAO, 2017), while simultaneously addressing climate change mitigation and biodiversity conservation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">II. Historical & Contemporary Agricultural Paradigms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">A. Green Revolution (1960s–1980s)</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Focus: High-yielding varieties (HYVs), synthetic fertilizers, and mechanization. While dramatically increasing yields, it also introduced environmental concerns regarding soil degradation, water eutrophication, and pesticide residue accumulation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">B. Precision Agriculture / Agriculture 4.0</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Contemporary approach utilizing IoT sensors, remote sensing (satellite/drone imagery), big data analytics, machine learning, and autonomous systems to optimize input application at field-specific scales. Reduces resource waste and environmental footprint while enhancing yield predictability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">C. Sustainable & Regenerative Agriculture</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Emphasizes ecosystem health, carbon sequestration, biodiversity conservation, and long-term soil fertility maintenance. Integration of agroforestry, crop rotation, biological pest control, and conservation tillage practices.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">III. Major Agricultural Production Systems</h2>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <div><span className="font-semibold">Rainfed Agriculture:</span> Dependent on precipitation; covers ~75% of global cropland and supports 50% of world's poor. Vulnerability to climate variability is critical research challenge.</div>
              <div><span className="font-semibold">Irrigated Agriculture:</span> Accounts for ~17% of cultivated area but ~40% of agricultural output. Water-use efficiency and salinity management are pressing concerns.</div>
              <div><span className="font-semibold">Protected Cultivation:</span> Greenhouses, polyhouses, and vertical farms enable year-round production, climate control, and reduced pesticide use.</div>
              <div><span className="font-semibold">Agroforestry & Mixed Farming:</span> Integration of trees with crops/livestock; enhances soil health, carbon storage, and income diversification.</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">IV. Key Research Challenges & Opportunities</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Climate Resilience:</span> Development of climate-adaptive crop varieties and management practices</li>
              <li><span className="font-semibold">Water Scarcity:</span> Drip irrigation, mulching, and drought-tolerant cultivars</li>
              <li><span className="font-semibold">Soil Health:</span> Carbon sequestration, microbiome engineering, and fertility restoration</li>
              <li><span className="font-semibold">Pest & Disease Management:</span> Integrated pest management (IPM), biocontrol, and omics-based diagnostics</li>
              <li><span className="font-semibold">Dietary Transitions:</span> Plant-based proteins, nutri-cereals, and food security in developing nations</li>
            </ul>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="bg-gradient-to-br from-agri-green/5 to-blue-50 rounded-2xl shadow-sm border border-agri-green/20 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">V. Key Research Papers & References</h2>
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
              <span className="font-semibold">Note for Researchers:</span> Use these papers as entry points for deeper exploration. 
              Search databases like Google Scholar, PubMed Central, Web of Science, and ResearchGate for extended literature reviews.
              Consider following journals: <em>Nature Sustainability, Global Food Security, Agricultural Systems, Precision Agriculture</em>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LearnAgricultureBasicsPage

