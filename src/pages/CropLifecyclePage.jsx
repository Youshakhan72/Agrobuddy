import React from 'react'
import Footer from '../components/Footer'

const CropLifecyclePage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Crop Lifecycle
          </h1>
          <p className="mt-3 text-gray-600">
            Follow a crop from seed to harvest using clear, student-friendly steps.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <ol className="list-decimal pl-5 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>
              <span className="font-semibold">Seed selection:</span> Farmers choose good quality,
              healthy seeds that match their soil, climate, and market demand.
            </li>
            <li>
              <span className="font-semibold">Land preparation:</span> The field is ploughed,
              levelled, and sometimes treated with organic matter to improve soil health.
            </li>
            <li>
              <span className="font-semibold">Sowing / planting:</span> Seeds or seedlings are
              placed in the soil at the right depth and spacing.
            </li>
            <li>
              <span className="font-semibold">Germination:</span> Seeds sprout and tiny plants
              appear above the soil surface.
            </li>
            <li>
              <span className="font-semibold">Vegetative growth:</span> The plant grows leaves,
              stems, and roots. It needs enough water, sunlight, and nutrients.
            </li>
            <li>
              <span className="font-semibold">Flowering and fruiting:</span> The plant produces
              flowers, which later turn into grains, fruits, or pods.
            </li>
            <li>
              <span className="font-semibold">Maturity:</span> The crop reaches full size and the
              grain or fruit is ready to be harvested.
            </li>
            <li>
              <span className="font-semibold">Harvesting and storage:</span> Crops are cut,
              cleaned, dried, and stored safely to avoid damage from insects and moisture.
            </li>
          </ol>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Did you know?</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Different crops have different lifecycles. For example, rice and wheat are usually
              grown in one season, while fruit trees like mango can live and produce fruit for
              many years.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CropLifecyclePage

