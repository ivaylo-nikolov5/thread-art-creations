import React from 'react';

import "../styles/GeneralTermsStyles/general-terms.css";
import Header from "../components/HomePage/Header";

import { termsData } from '../components/GeneralTerms/termsData';
import TermsPart from '../components/GeneralTerms/TermsPart';
import Footer from '../components/HomePage/Footer';
import CompanyInfo from '../components/HomePage/CompanyInfo';

const GeneralTerms = () => {

    const terms = termsData.map((data) => {
        return <TermsPart title={data.title} text={data.text} />
    })

    return (
        <div>
            <Header />  

            <div className='terms-container'>
                <h1 className='general-terms-title'>Terms and Conditions</h1>

                <div>
                    {terms}
                </div>
            </div> 
            
            <CompanyInfo />
            <Footer />
            
        </div>
    )
}

export default GeneralTerms