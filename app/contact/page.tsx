'use client'; // Mark this as a Client Component

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaExclamationTriangle, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute top-1/3 right-20 w-60 h-60 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
      </div>

      <div className="relative z-10">
        {/* Header with Animation */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-16 pb-12 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">
              Contact CrimeWatch
            </h1>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or need assistance? Reach out to our team through any of the channels below.
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 transform transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaEnvelope className="text-white" />
                  Get in Touch
                </h2>
              </div>
              <div className="p-8 space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <a 
                      href="mailto:support@crimewatch.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      support@crimewatch.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+1 (800) 555-0199</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">123 Safety Way<br />Security City, SC 12345</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 6pm EST<br />
                      Saturday: 10am - 2pm EST
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 transform transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaPaperPlane className="text-white" />
                  Send Us a Message
                </h2>
              </div>
              <div className="p-8">
                <form className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="space-y-1"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="space-y-1"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your email"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="space-y-1"
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="space-y-1"
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Type your message here"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-3">
              <FaExclamationTriangle className="text-red-500" />
              Emergency Notice
            </h3>
            <p className="text-gray-700">
              If you need to report a crime in progress or have an emergency, please call 911 or your local emergency number immediately. 
              This contact form is not monitored 24/7 and should not be used for urgent matters.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
}