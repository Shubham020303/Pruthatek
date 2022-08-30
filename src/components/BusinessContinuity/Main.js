import React from 'react'

//Styles
import { Wrapper } from './Main.styles'

//Components
import Description from './Description'
import Slider from './Slider'
import DisaterRecovery from './DisaterRecovery'

const Main = () => {
     return (
          <Wrapper>
               <Description />
               <Slider />
               <DisaterRecovery />
          </Wrapper>
     )
}

export default Main