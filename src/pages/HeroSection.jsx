import React from 'react';

const HeroSection = () => (
  <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
        Revolutionizing Medical Diagnostics
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Accurate diagnostics at your fingertips
      </p>
      <a href="/signup" className="mt-8 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700">
        Get Started
      </a>
      
    </div>
  </section>
);
export default HeroSection;