import React from 'react';


import HeroSection from '../components/HeroSection/HeroSection';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import StatsAndSteps from '../components/StatsAndSteps/StatsAndSteps';
import ProfitSection from '../components/ProfitSection/ProfitSection';
import AdvantagesSection from '../components/AdvantageSection/AdvantageSection';
import WhoAgentsSection from '../components/WhoAgentsSection/WhoAgentsSection';
import WorkingWithUs from '../components/WorkingWithUs/WorkingWithUs';
import FloatingCardSection from '../components/FloatingCardSection/FloatingCardSection ';
import OurSolutions from '../components/OurSolutions/OurSolutions';
import Why1xBet from '../components/Why1xBet/Why1xBet';
import FAQ from '../components/FAQ/FAQ';
import BusinessSection from '../components/BusinessSection/BusinessSection';
import AgentFormSection from '../components/AgentFormSection/AgentFormSection';
import AgentIntroSection from '../components/AgentIntroSection/AgentIntroSection';




const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsAndSteps />
      <ProfitSection/>
      {/* <FeatureSection /> */}
      <AdvantagesSection />
      <WhoAgentsSection/>
      <WorkingWithUs/>
      <FloatingCardSection/>
      <OurSolutions/>
      <Why1xBet/>
      <FAQ/>
      <BusinessSection/>
      <AgentFormSection/>
      <AgentIntroSection/>
      <Footer />
    
    </>
  );
};

export default Home;