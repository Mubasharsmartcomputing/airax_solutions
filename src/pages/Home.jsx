import React from 'react';
import HeroSection from '../components/HomeBanner/Banner';
import BusinessSolution from '../components/BussinessSolution/Bussiness';
import BusinessWork from '../components/WorkWithUs/Work';
import ImpressionsSection from '../components/ImperssionSection/Impression';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BusinessSolution/>
      <BusinessWork/>
      <ImpressionsSection/>
    </div>
  );
}

export default Home;
