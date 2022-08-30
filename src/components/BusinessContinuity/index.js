import React from 'react';

//Components
import Hero from '../Hero';
import Main from './Main';
import Navbar from '../Navbar';

const BusinessContinuity = () => {
     return (
          <div>
               <Navbar />
               <Hero
                    title="Business Continuty"
                    desc="PruthaTek maintains a comprehensive, thoughtful process that ensures business continuity and ultimate reliability."
               />
               <Main />
          </div>
     )
}

export default BusinessContinuity