import React from 'react'

import "../styles/ContactsStyles/contacts-styles.css"
import Header from '../components/HomePage/Header'
import ContactInfo from '../components/funcs/Contacts/ContactInfo'
import CompanyInfo from '../components/HomePage/CompanyInfo'
import Footer from '../components/HomePage/Footer'


const Contacts = () => {
    return (
        <div className='contact-page-container'>
            <Header />

            <div className='contacts-container'>
                <h1 className='contact-title'>Contact with us</h1>

                <div className='contacts-info'>
                    <ContactInfo 
                        icon={<i class="fa-solid fa-location-dot"></i>}
                        title={"Address"}
                        data={["Gabarevo", "Nov zhivot St. №1 /orders receiving center/"]}
                    />

                    <ContactInfo 
                        icon={<i class="fa-solid fa-mobile-screen"></i>}
                        title={"Phone number"}
                        data={["+359 87 818 4383"]}
                    />

                    <ContactInfo 
                        icon={<i class="fa-regular fa-clock"></i>}
                        title={"Work time"}
                        data={["Monday - Friday: 8:00 - 18:00", "Saturday and Sunday - Non-working days"]}
                    />

                    <ContactInfo 
                        icon={<i class="fa-solid fa-paper-plane"></i>}
                        title={"E-mail"}
                        data={["thread.art.creations@gmail.com", "/We typically reply within up to 48 hours./"]}
                    />
                </div>
            </div>

            <div>
                <CompanyInfo />
                <Footer />
            </div>
            
        </div>
    )
}

export default Contacts
