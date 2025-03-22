import React from 'react';

import PricingSection from '../components/PaymentMethod/Payment';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ContactForm from '../components/ContactForm/Contact-form';
import ProductHeroSection from '../components/Banners/ProductBannerSection/ProductBanner';

import BusinessSolution from '../components/BussinessSolution/Bussiness';
import ImpressionsSection from '../components/ImperssionSection/Impression';


const Product = () => {
    return (
        <div>
          
           <ProductHeroSection/>
           <ImpressionsSection/>
           <BusinessSolution/>
           <PricingSection/>
           <TestimonialsSection/>
           <ContactForm/>

        </div>
    );
}

export default Product;
