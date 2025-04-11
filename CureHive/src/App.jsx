import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaCommentDots, FaHospitalAlt, FaTint, FaPhone } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 bg-white text-black shadow-md">
        <div className="text-2xl font-extrabold text-black">CureHive</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-blue-600 font-medium transition duration-200">Home</a>
          <a href="#" className="hover:text-blue-600 font-medium transition duration-200">Find Beds</a>
          <a href="#" className="hover:text-blue-600 font-medium transition duration-200">Blood Bank</a>
          <a href="#" className="hover:text-blue-600 font-medium transition duration-200">About Us</a>
          <a href="#" className="hover:text-blue-600 font-medium transition duration-200">Contact</a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="border px-5 py-2 rounded text-base hover:bg-gray-100 transition duration-200">Login</button>
          <button className="bg-gray-900 text-white px-5 py-2 rounded text-base font-semibold hover:bg-gray-800 transition duration-200">Emergency</button>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-blue-50">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-900">
            India's Trusted MedTech Solution
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            CureHive connects you with real-time hospital bed availability, blood banks, and emergency services within 5 km.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200">
              Find Nearby Facilities
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 font-semibold rounded-md hover:bg-blue-100 transition-all duration-200">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2790/2790922.png"
            alt="MedTech Illustration"
            className="w-4/5 mx-auto animate-bounce"
          />
        </motion.div>
      </main>

      {/* Filter Section */}
      <section className="bg-blue-50 text-gray-900 px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Find Facilities Near You</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Enter your address"
              className="px-4 py-2 rounded border w-full md:w-1/3"
            />
            <select className="px-4 py-2 rounded border">
              <option>2 km</option>
              <option>5 km</option>
              <option>10 km</option>
            </select>
            <select className="px-4 py-2 rounded border">
              <option>All Facilities</option>
              <option>Hospitals</option>
              <option>Blood Banks</option>
              <option>Clinics</option>
            </select>
            <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
              Search
            </button>
          </div>
          <div className="flex justify-center gap-4 flex-wrap text-sm">
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">🟢 Available</span>
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">🟡 Limited</span>
            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">🔴 Unavailable</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">🕒 24/7 Availability</span>
          </div>
        </div>
      </section>

      {/* Map + Facility List Section */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-center items-center min-h-[300px]">
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-xl font-bold">Showing 4 facilities within 5km of your location</h3>
              <p className="text-sm mt-2 text-gray-500">
                In a real implementation, this would display an interactive map with facility markers
              </p>
            </div>
          </div>
          <div className="space-y-4 overflow-y-auto max-h-[400px] p-2 bg-gray-50 rounded-lg">
            {[{"name": "City Hospital","open": "Open 24/7","distance": "Distance unknown","bed": "unavailable","blood": "No blood data"},{"name": "Red Cross Blood Bank","open": "Limited hours","distance": "0.7 km away","bed": "unavailable","blood": "No blood data"},{"name": "Community Medical Center","open": "Unknown","distance": "-","bed": "unavailable","blood": "No blood data"}].map((facility, i) => (
              <div key={i} className="bg-white p-4 rounded shadow flex flex-col">
                <div className="font-semibold text-lg">{facility.name}</div>
                <div className="text-sm text-gray-600">{facility.distance} • {facility.open}</div>
                <div className="flex items-center gap-4 text-sm mt-2">
                  <span><FaHospitalAlt className="inline text-red-400" /> Bed data {facility.bed}</span>
                  <span><FaTint className="inline text-red-400" /> {facility.blood}</span>
                </div>
                <div className="mt-2">
                  <button className="text-sm text-blue-600 underline">Call facility</button>
                  <button className="ml-4 px-3 py-1 bg-blue-600 text-white rounded">View Details</button>
                </div>
              </div>
            ))}
            <button className="w-full mt-4 bg-gray-200 py-2 rounded hover:bg-gray-300 text-sm font-medium">Load More Results</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="bg-blue-50 text-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose CureHive?</h2>
          <p className="text-gray-600 mt-2">
            Explore the powerful tools that make CureHive a lifesaving companion during medical emergencies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-Time Hospital Bed Tracking",
              description:
                "Know exactly which hospitals near you have available beds — updated live with minimal delay.",
              icon: "🛏️",
            },
            {
              title: "Verified Blood Bank Info",
              description:
                "Access blood availability status and contact details for licensed blood banks in your area.",
              icon: "🩸",
            },
            {
              title: "Location-Based Search",
              description:
                "Filter hospitals and blood banks based on distance, availability, and facility type.",
              icon: "📍",
            },
            {
              title: "Emergency Hotline Integration",
              description:
                "Call the national emergency number (108) directly from the platform in one click.",
              icon: "📞",
            },
            {
              title: "Multilingual Support",
              description:
                "Interface available in Hindi, English, and regional languages to ensure broader accessibility.",
              icon: "🈳",
            },
            {
              title: "User Testimonials & Ratings",
              description:
                "See real user feedback and ratings for each facility before making critical decisions.",
              icon: "⭐",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="bg-blue-50 text-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose CureHive?</h2>
          <p className="text-gray-600">We bring real-time, critical healthcare access to your fingertips with our smart MedTech solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300">
            <div className="text mb-4 text-4xl"><FaHospitalAlt /></div>
            <h3 className="text-xl font-semibold mb-2">Real-time Bed & Blood Availability</h3>
            <p className="text-sm text-gray-600">Check live hospital data around you to find beds and blood units in emergencies.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300">
            <div className="text mb-4 text-4xl"><FaPhone /></div>
            <h3 className="text-xl font-semibold mb-2">24/7 Medical Access</h3>
            <p className="text-sm text-gray-600">Day or night, CureHive helps you locate and access care when you need it most.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300">
            <div className="text mb-4 text-4xl"><FaTint /></div>
            <h3 className="text-xl font-semibold mb-2">Verified Blood Bank Integration</h3>
            <p className="text-sm text-gray-600">Get live updates from certified blood banks across your city.</p>
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <section className="bg-white text-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">What People Say</h2>
        <p className="text-center text-gray-600 mb-10">Hear from those who've used our services</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              name: "Sarah Johnson",
              city: "Delhi",
              review: "MediFind helped me locate a hospital with available beds for my father during a medical emergency. The real-time information saved us valuable time.",
            },
            {
              name: "Michael Chen",
              city: "Mumbai",
              review: "When my wife needed a rare blood type, MediFind showed us exactly where it was available nearby. The service is invaluable during critical situations.",
            },
            {
              name: "Dr. Priya Sharma",
              city: "Bangalore",
              review: "As a doctor, I recommend MediFind to all my patients. It's an essential tool for healthcare access, especially in urgent situations when time matters most.",
            },
          ].map((person, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded shadow">
              <div className="flex items-center text-yellow-500 mb-3">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{person.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-sm">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Emergency Helpline Section */}
      <section className="bg-red-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-red-600">Emergency Helpline</h2>
            <p className="text-gray-700 mt-1">24/7 medical assistance hotline for emergencies</p>
          </div>
          <a
            href="tel:108"
            className="mt-4 md:mt-0 inline-flex items-center bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600 transition"
          >
            <FaPhone className="mr-2" /> Call 108
          </a>
        </div>
      </section>

      {/* Footer with Newsletter */}
      <footer className="bg-[#0D1B2A] text-white px-10 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Contact & Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">CureHive</h3>
            <p className="text-sm mb-4">Real-time medical resource locator for beds, blood, and emergency facilities across India.</p>
            <p className="text-sm mb-2">📞 +91 98765 43210</p>
            <p className="text-sm mb-2">✉️ support@curehive.in</p>
            <p className="text-sm">📍 New Delhi, India</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Stay updated with latest alerts, health articles, and resources.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-black w-full sm:w-auto flex-1"
              />
              <button className="px-6 py-2 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm mt-10 text-gray-400">&copy; 2025 CureHive. All rights reserved.</div>
      </footer>

      {/* Chatbot Icon (non-redirect) */}
      <div
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 cursor-pointer"
        title="Chat with us"
      >
        <FaCommentDots size={24} />
      </div>
    </div>
  );
}
