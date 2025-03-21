import React from 'react';

import PricingSection from '../components/PaymentMethod/Payment';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ContactForm from '../components/ContactForm/Contact-form';
import ProductHeroSection from '../components/Banners/ProductBannerSection/ProductBanner';
import Carousel from '../components/ProductCarousel/Carousel';


const Product = () => {
    return (
        <div>
          
           <ProductHeroSection/>
           <Carousel/>
           <PricingSection/>
           <TestimonialsSection/>
           <ContactForm/>

        </div>
    );
}

export default Product;
