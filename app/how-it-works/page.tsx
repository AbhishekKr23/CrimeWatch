import React from 'react';
import { FaShieldAlt, FaMapMarkerAlt, FaRegUser } from 'react-icons/fa'; // Icons for steps

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">How CrimeWatch Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Our platform empowers users to report crimes anonymously, ensuring community safety. Here's how it works:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1: Report */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
            <FaRegUser className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Report</h3>
            <p className="text-gray-600">
              Submit anonymous crime reports via our easy-to-use interface. No personal information required, protecting your privacy.
            </p>
          </div>

          {/* Step 2: AI Generated Description */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
            <FaShieldAlt className="text-green-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: AI Powered Crime Descriptions</h3>
            <p className="text-gray-600">
              Powered by Google Gemini AI, we generate accurate crime descriptions to streamline your reporting experience.
            </p>
          </div>

          {/* Step 3: Secure and Scalable */}
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition duration-300">
            <FaMapMarkerAlt className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Secure & Scalable</h3>
            <p className="text-gray-600">
              We use robust backend technologies like Prisma ORM and NeonDB to ensure the scalability and security of your data.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900">Ready to Make a Difference?</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Join our community and help make your neighborhood safer. Start reporting crimes today with CrimeWatch!
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
