import React from 'react';
import { Link } from 'react-router-dom';

// Importing an icon from heroicons library
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Defining an array of steps with titles and descriptions
const steps = [
  {
    number: '01',
    title: 'Sign Up or Sign In',
    description: 'Create an account or log in to access the full range of features.'
  },
  {
    number: '02',
    title: 'Input Your Symptoms',
    description: 'Describe your symptoms in detail using our intuitive form.'
  },
  {
    number: '03',
    title: 'Get Your Diagnosis',
    description: 'Receive an AI-powered diagnostic report and recommended next steps.'
  }
];

const HowItWorksSection = () => (
  // Main container for the How It Works section with padding and background color
  <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  
    {/* Container to center content and set max-width */}
    <div className="max-w-7xl mx-auto">
    
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        How It Works
      </h2>
      
       {/* Container for the step-by-step guide */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {/* Mapping over the steps array to create individual step items */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-6xl font-extrabold text-indigo-600">{step.number}</span>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-base text-gray-600">{step.description}</p>
          </div>
        ))}
        
      </div>
      
       {/* Optional call-to-action button to lead users to the sign-up or sign-in page */}
      <div className="mt-10 text-center">
        <Link
          to="/signup"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Get Started
          <ArrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
      
    </div>
  </section>
);

export default HowItWorksSection;
