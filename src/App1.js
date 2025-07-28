import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">VAHATA</h1>
          <nav>
            <ul className="flex gap-6 font-medium">
              <li>Home</li>
              <li>Journeys</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/')] bg-cover bg-center h-screen flex items-center justify-center text-white relative">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Where Travel Becomes Learning</h2>
          <p className="text-lg mb-6">Experience educational tours for students across India and beyond.</p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Explore Trips
          </button>
        </div>
      </section>

      const CompanyDetails = () => {
  <section className="bg-white py-16 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About Our Company</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        VAHATA Travel Solution specializes in educational travel experiences tailored for school students. 
        We believe that travel is one of the best ways to learn and grow outside the classroom. 
        With expert planning, certified guides, and a passion for student engagement, we create trips that are both educational and unforgettable.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">10+ Years Experience</h3>
          <p>Organizing educational and safe student trips since 2014.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Certified Guides</h3>
          <p>Professionally trained and background-verified tour staff.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Trusted by Schools</h3>
          <p>Over 500+ schools trust VAHATA for safe and impactful journeys.</p>
        </div>
      </div>
    </div>
  </section>
}
      {/* Trip Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Popular Student Trips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Cultural Tours", "Adventure Camps", "Space Programs"].map((title) => (
            <div key={title} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p>Explore destinations designed to inspire and educate school students.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose VAHATA?</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {["Expert Guides", "Safe & Secure", "Affordable Plans"].map((feature) => (
            <div key={feature} className="w-64 p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold">{feature}</h4>
              <p className="mt-2 text-gray-600">We deliver quality experiences for student travel programs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry Call to Action */}
      <section className="bg-yellow-400 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Plan Your School Trip Today</h3>
        <p className="mb-6">Get in touch with our team to customize your educational travel experience.</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
          Enquire Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 VAHATA Travel Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
