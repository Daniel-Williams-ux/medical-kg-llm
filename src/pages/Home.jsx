import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialSection from './TestimonialSection';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  )
};

export default Home;