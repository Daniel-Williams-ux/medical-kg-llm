import React from 'react';
import { Link } from 'react-router-dom';

// Defining the Footer component
const Footer = () => (
  <footer className="bg-gray-800 text-gray-200 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      {/* Footer content grid, which stacks vertically on smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    
        <div>
          <img src="/AskGpt.png" alt="Logo" className="h-12 w-auto mb-4" />
          <p className="text-sm">
            Revolutionizing medical diagnostics with AI and knowledge graphs.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition ease-in-out duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition ease-in-out duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition ease-in-out duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition ease-in-out duration-300">FAQ</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>Email: <a href="mailto:support@medicaldiagnostics.com" className="hover:text-white transition ease-in-out duration-300">support@medicaldiagnostics.com</a></li>
            <li>Phone: <a href="tel:+234 7033112571" className="hover:text-white transition ease-in-out duration-300">+123 456 7890</a></li>
            <li>Address: 1234 Awolowo Road, Ikoyi, Lagos Nigeria</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition ease-in-out duration-300">
              <span className="sr-only">Facebook</span>
              {/* Facebook Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.896 2.112H5.104C3.943 2.112 3 3.065 3 4.225v15.55c0 1.16.943 2.113 2.104 2.113h7.687v-6.76H9.724v-2.64h3.067V9.533c0-3.044 1.857-4.706 4.565-4.706 1.297 0 2.412.096 2.735.14v3.17h-1.876c-1.47 0-1.753.699-1.753 1.725v2.262h3.515l-.459 2.64h-3.056v6.76h5.897c1.16 0 2.104-.953 2.104-2.113V4.225c0-1.16-.944-2.113-2.104-2.113z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition ease-in-out duration-300">
              <span className="sr-only">Twitter</span>
              {/* Twitter Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19c7.732 0 11.948-6.312 11.948-11.798 0-.18-.003-.36-.011-.537A8.516 8.516 0 0022 4.617a8.187 8.187 0 01-2.357.636 4.086 4.086 0 001.803-2.253 8.226 8.226 0 01-2.605.978 4.098 4.098 0 00-6.972 3.737A11.63 11.63 0 013.17 3.266 4.097 4.097 0 002.67 5.94a4.095 4.095 0 001.82 3.417 4.074 4.074 0 01-1.857-.513v.052a4.098 4.098 0 003.286 4.017 4.09 4.09 0 01-1.847.07 4.097 4.097 0 003.83 2.847A8.226 8.226 0 012 17.561a11.616 11.616 0 006.29 1.837" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition ease-in-out duration-300">
              <span className="sr-only">LinkedIn</span>
              {/* LinkedIn Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.94 6.94h2.54v11.66H6.94V6.94zM8.18 4.77c-.807 0-1.455.648-1.455 1.454s.648 1.454 1.455 1.454c.806 0 1.454-.648 1.454-1.454S8.986 4.77 8.18 4.77zm6.36 2.17v2.21h-.03c-.347-.556-1.193-1.145-2.47-1.145-2.646 0-3.135 1.904-3.135 3.135v6.29h2.54V13.77c0-.74.026-1.476.732-1.476.724 0 .73.801.73 1.52v4.87h2.54V12.61c0-1.71-.334-3.01-2.35-3.01z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/*Legal disclaimer and copyright information */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 Medical Diagnostics, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
