import React from 'react';
import HeroSection from '../components/Banners/HomeBanner/Banner';
import BusinessSolution from '../components/BussinessSolution/Bussiness';
import BusinessWork from '../components/WorkWithUs/Work';
import ImpressionsSection from '../components/ImperssionSection/Impression';
import SalesAnalytics from '../components/Sale_Anaylytics/Analytics';
import FeaturesSection from '../components/FeatureSection/Feature';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import PricingSection from '../components/PaymentMethod/Payment';
import ContactForm from '../components/ContactForm/Contact-form';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BusinessSolution/>
      <BusinessWork/>
      <ImpressionsSection/>
      <SalesAnalytics/>
      <FeaturesSection/>
      <PricingSection/>
      <TestimonialsSection/>
      <ContactForm/>
    </div>
  );
}

export default Home;
