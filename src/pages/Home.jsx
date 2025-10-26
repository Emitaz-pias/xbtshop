import React from 'react';


import HeroSection from '../components/HeroSection/HeroSection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import StatsAndSteps from '../components/StatsAndSteps/StatsAndSteps';
import ProfitSection from '../components/ProfitSection/ProfitSection';


const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsAndSteps />
      <ProfitSection/>
      <FeatureSection />
      <Footer />
    
    </>
  );
};

export default Home;