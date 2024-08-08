import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="bg-indigo-600 py-16 px-4 sm:px-6 lg:px-8">
  
    {/* Container to center content and set max-width */}
    <div className="max-w-7xl mx-auto text-center">
    
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Ready to Revolutionize Your Medical Diagnostics?
      </h2>
      
      <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-indigo-200">
        Start using our AI-powered diagnostic tool today and see the difference.
      </p>
      
      {/* Button container with margin for spacing */}
      <div className="mt-8 flex justify-center">
      
        {/* Primary action button with padding, border-radius, and hover effect */}
        <Link
          to="/signup"
          className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition duration-300 ease-in-out"
        >
          Sign Up Now
        </Link>
        
        {/* Secondary button for an alternative action, with margin-left for spacing */}
        <Link
          to="/learn-more"
          className="ml-4 px-8 py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-400 transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
        
      </div>
      
    </div>
  </section>
);

export default CallToAction;
