import React from 'react';
// Importing an icon for quotation marks
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// Defining an array of testimonials with user quotes, names, and optional titles
const testimonials = [
  {
    quote: "This application has transformed how I approach medical diagnostics. It's quick, accurate, and easy to use.",
    name: "Jane Doe",
    title: "General Practitioner"
  },
  {
    quote: "As a patient, it's reassuring to get immediate feedback on my symptoms. Highly recommended!",
    name: "John Smith",
    title: "Patient"
  },
  {
    quote: "A game-changer in telemedicine. The AI integration makes diagnostics more accessible than ever.",
    name: "Dr. Alice Brown",
    title: "Telemedicine Specialist"
  }
];

// Defining the TestimonialSection component
const TestimonialSection = () => (
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  
    {/*Container to center content and set max-width */}
    <div className="max-w-7xl mx-auto">
    
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        What Our Users Are Saying
      </h2>
      
      {/*Container for the testimonial items */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
         {/* Mapping over the testimonials array to create individual testimonial items */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
            <p className="mt-4 text-lg italic text-gray-600">"{testimonial.quote}"</p>
            <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.title}</p>
          </div>
        ))}
        
      </div>
      
    </div>
  </section>
);

export default TestimonialSection;
