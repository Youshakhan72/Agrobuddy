import React from 'react'
import Footer from '../components/Footer'

const AgricultureCareersPage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Career Opportunities in Agriculture
          </h1>
          <p className="mt-3 text-gray-600">
            Agriculture is not only about working in fields. There are many modern and
            exciting career paths for students.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Popular career paths</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Agriculture scientist:</span> Works on new crop varieties, fertilizers, and farming methods.</li>
              <li><span className="font-semibold">Agronomy or soil expert:</span> Studies soil and crop management to improve yields.</li>
              <li><span className="font-semibold">Veterinary doctor:</span> Cares for farm animals and improves livestock health.</li>
              <li><span className="font-semibold">Agri-business manager:</span> Works with food companies, input suppliers, and supply chains.</li>
              <li><span className="font-semibold">Agri-tech entrepreneur:</span> Builds apps, tools, or devices to help farmers (like AgroBuddy).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Courses you can study</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              After school, students can choose courses such as B.Sc. Agriculture,
              Agricultural Engineering, Dairy Technology, Horticulture, Forestry, and more.
              Many universities and agriculture colleges offer these programmes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Did you know?</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Agriculture careers now combine biology, data science, climate science,
              engineering, and business. It is a great field if you enjoy solving real-world
              problems and helping communities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AgricultureCareersPage

