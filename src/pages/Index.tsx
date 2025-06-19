
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrendingJobs from '../components/TrendingJobs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrendingJobs />
      <Footer />
    </div>
  );
};

export default Index;
