import React from 'react'

//Components
import Hero from '../Hero'
import Navbar from '../Navbar'
import Main from './Main'

const QualityManagement = () => {
     return (
          <div>
               <Navbar />
               <Hero
                    title="Quality Management"
                    desc="PruthaTek has put in place a Quality Management System (QMS) 			comprising a complex set of engineering and managerial activities that 			ensure bespoke quality of delivered software throughout the entire 			workflow."
               />
               <Main />
          </div>
     )
}

export default QualityManagement