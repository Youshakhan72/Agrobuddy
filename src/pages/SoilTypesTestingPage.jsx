import React from 'react'
import Footer from '../components/Footer'

const SoilTypesTestingPage = () => {
  const researchPapers = [
    {
      title: "Soil Microbiota and Soil Fertility: A Review of the Evidence",
      authors: "Delgado-Baquerizo et al. (2020)",
      journal: "Soil Biology & Biochemistry, 142, 107704",
      link: "https://doi.org/10.1016/j.soilbio.2020.107704"
    },
    {
      title: "Assessment and Mapping of Soil Quality: A Review",
      authors: "Nambiar & Menzies (2006)",
      journal: "Australian Journal of Soil Research, 44(5), 513-537",
      link: "https://doi.org/10.1071/SR05159"
    },
    {
      title: "Soil Carbon Sequestration and Climate Change Mitigation",
      authors: "Lal (2004)",
      journal: "Soil Science Society of America Journal, 68(4), 1219-1237",
      link: "https://doi.org/10.2136/sssaj2004.1219"
    },
    {
      title: "Digital Soil Mapping: A Brief Overview",
      authors: "McBratney et al. (2003)",
      journal: "Journal of Soils and Sediments, 3(4), 272-275",
      link: "https://doi.org/10.1007/BF02986471"
    }
  ]

  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture / Soil Science
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Soil Science: Classification, Analysis & Management
          </h1>
          <p className="mt-3 text-gray-600">
            Comprehensive study of soil properties, classification systems, diagnostic methods, 
            and contemporary research in soil-plant interactions and soil carbon dynamics.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">I. Soil Formation & Classification</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              Soil is a dynamic, living system formed through the weathering of parent rock and 
              accumulation of organic matter over centuries. Soil formation (pedogenesis) is governed by:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Climate:</span> Temperature, precipitation regimes control weathering rates and organic matter decomposition</li>
              <li><span className="font-semibold">Parent Material:</span> Mineral composition determines inherent nutrient status and texture</li>
              <li><span className="font-semibold">Topography:</span> Slope influences water movement and soil depth accumulation</li>
              <li><span className="font-semibold">Organisms:</span> Microbes, fauna, and vegetation alter soil structure and nutrient cycling</li>
              <li><span className="font-semibold">Time:</span> Soil development requires decades to millennia</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">II. Soil Texture & Structure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">A. Texture (Mineral Composition)</h3>
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-agri-green/10">
                      <th className="border border-gray-300 p-2 text-left font-semibold">Soil Type</th>
                      <th className="border border-gray-300 p-2 text-left font-semibold">Composition</th>
                      <th className="border border-gray-300 p-2 text-left font-semibold">Field Indicator</th>
                      <th className="border border-gray-300 p-2 text-left font-semibold">Agronomic Implications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Clay</td>
                      <td className="border border-gray-300 p-2">&lt;2μm; &gt;40% particles</td>
                      <td className="border border-gray-300 p-2">Sticky when wet, hard when dry</td>
                      <td className="border border-gray-300 p-2">High nutrient retention, waterlogging risk, poor drainage</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">Silt</td>
                      <td className="border border-gray-300 p-2">2-50μm; 20-50% particles</td>
                      <td className="border border-gray-300 p-2">Slightly sticky, moderate cohesion</td>
                      <td className="border border-gray-300 p-2">Good water holding; erosion-prone</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Sand</td>
                      <td className="border border-gray-300 p-2">50-2000μm; &gt;85% particles</td>
                      <td className="border border-gray-300 p-2">Gritty feel, no cohesion</td>
                      <td className="border border-gray-300 p-2">Good drainage, low nutrient retention, drought-prone</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">Loam</td>
                      <td className="border border-gray-300 p-2">Balanced mixture (40% sand, 40% silt, 20% clay)</td>
                      <td className="border border-gray-300 p-2">Crumbly, moderate stickiness</td>
                      <td className="border border-gray-300 p-2">Optimal for most crops; balanced drainage & retention</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">B. Soil Structure</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Arrangement of soil particles into aggregates. Aggregation is stabilized by organic matter, 
                  iron oxides, and microbial products. Good structure promotes aeration, root penetration, 
                  water infiltration, and biological activity. Intensive tillage and monoculture degrade structure; 
                  conservation agriculture and organic matter addition improve it.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">III. Soil Chemical Properties & Fertility Assessment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Key Parameters:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">pH:</span> Optimal range 6–7.5 for most crops. Affects nutrient availability and microbial activity.</li>
                  <li><span className="font-semibold">Organic Carbon (OC):</span> Target &gt;2% for sustained fertility. Improves structure, water holding, nutrient cycling.</li>
                  <li><span className="font-semibold">Macronutrients:</span> Nitrogen (N), Phosphorus (P), Potassium (K). Often limiting in intensive systems.</li>
                  <li><span className="font-semibold">Micronutrients:</span> Zinc, Iron, Boron, Manganese. Deficiencies can reduce crop quality despite adequate macro-N, P, K.</li>
                  <li><span className="font-semibold">Cation Exchange Capacity (CEC):</span> Indicator of soil's nutrient holding potential. Higher in clay and organic-rich soils.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">IV. Soil Analysis Methods</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Field Methods (Qualitative):</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Texture by Feel:</span> Ribbon test, jar settling test</li>
                  <li><span className="font-semibold">Structure Assessment:</span> Visual observation of aggregate stability, porosity</li>
                  <li><span className="font-semibold">Infiltration Test:</span> Indicates drainage class and water holding capacity</li>
                  <li><span className="font-semibold">Biological Indicators:</span> Earthworm count, root distribution, visible microbial activity</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Laboratory Methods (Quantitative):</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li><span className="font-semibold">Particle Size Analysis:</span> Hydrometer method per USDA standards</li>
                  <li><span className="font-semibold">pH Determination:</span> pH meter in 1:2.5 soil:water suspension</li>
                  <li><span className="font-semibold">Organic Carbon:</span> Walkley-Black or LECO combustion methods</li>
                  <li><span className="font-semibold">Available Nutrients:</span> Olsen (P), Ammonium Acetate (K), DTPA (micronutrients)</li>
                  <li><span className="font-semibold">Microbial Analysis:</span> 16S rRNA sequencing, enzyme assays (dehydrogenase, phosphatase)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">V. Soil Health & Sustainability Indicators</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              Modern soil management emphasizes holistic assessment beyond crop nutrition:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Soil Organic Matter (SOM):</span> Critical for carbon sequestration and climate mitigation</li>
              <li><span className="font-semibold">Microbial Biomass & Diversity:</span> Indicator of biological integrity and nutrient cycling capacity</li>
              <li><span className="font-semibold">Enzymatic Activity:</span> Reflects soil biological function and mineralization rates</li>
              <li><span className="font-semibold">Aggregate Stability:</span> Measure of structural integrity and erosion resistance</li>
              <li><span className="font-semibold">Water Retention & Infiltration:</span> Environmental and agricultural stability</li>
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
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SoilTypesTestingPage

