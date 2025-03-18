import React from 'react';
import ContactForm from '../components/ContactForm/Contact-form';
import BusinessSolution from '../components/BussinessSolution/Bussiness';
import ContactHeroSection from '../components/Banners/ContactBannerSection/ContactBanner';

const Contact = () => {
    return (
        <div>
            <ContactHeroSection/>
            <BusinessSolution/>
           <ContactForm/>
          
        </div>
    );
}

export default Contact;
