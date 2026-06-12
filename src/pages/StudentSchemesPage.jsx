import React from 'react'
import Footer from '../components/Footer'

const StudentSchemesPage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Government Schemes for Young Learners
          </h1>
          <p className="mt-3 text-gray-600">
            This page explains schemes in simple language so students can understand how the
            government supports farmers and agriculture education.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Examples of schemes</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">PM-KISAN:</span> Provides direct income support to small and marginal farmers.</li>
              <li><span className="font-semibold">PM Fasal Bima Yojana (PMFBY):</span> Crop insurance scheme that helps farmers when crops fail.</li>
              <li><span className="font-semibold">Kisan Credit Card (KCC):</span> Provides easy loans to farmers for seeds, fertilizers, and other needs.</li>
              <li><span className="font-semibold">Soil Health Card:</span> Helps farmers test soil and get fertilizer recommendations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">How is this useful for students?</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Helps you understand real-life examples for school projects and exams.</li>
              <li>Shows how science, economics, and policy work together in agriculture.</li>
              <li>Gives ideas for future careers in agriculture, rural development, and policy.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Want to explore more?</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Use the main <span className="font-semibold">Government Schemes</span> section of
              AgroBuddy to explore detailed scheme information and filters based on state and
              crop.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default StudentSchemesPage

