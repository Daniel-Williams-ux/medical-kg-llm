// Importing React library and necessary hooks
import React from 'react';

// Importing icons from heroicons library
import { CheckCircleIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Defining an array of feature objects with title and description
const features = [
  {
    icon: <CheckCircleIcon className="h-12 w-12 text-indigo-600" />,
    title: 'Accurate Diagnostics',
    description: 'Utilizing the latest advancements in AI for precise medical diagnostics.'
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-indigo-600" />,
    title: 'Secure and Private',
    description: 'Your medical data is handled with the highest standards of security and privacy.'
  },
  {
    icon: <LightBulbIcon className="h-12 w-12 text-indigo-600" />,
    title: 'Innovative Solutions',
    description: 'Continuous innovation to provide the best diagnostic tools available.'
  }
];

// Defining the FeatureSection component
const FeatureSection = () => (
  // Main container for the Feature Section with padding and background color
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  
    {/* Container to center content and set max-width */}
    <div className="max-w-7xl mx-auto text-center">
    
      {/* Heading for the feature section with large, bold text */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        Key Features
      </h2>
      
      {/* Container for feature items */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {/* Mapping over the features array to create individual feature items */}
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  </section>
);

// Exporting the FeatureSection component for use in other parts of the application
export default FeatureSection;
