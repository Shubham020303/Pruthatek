import React from 'react'

//Styles
import { Wrapper } from './Main.styles'

//Components
import Description from './Description'
import Slider from './Slider'
import OpmentLifecycle from './OpmentLifecycle'

const Main = () => {
     return (
          <Wrapper>
               <Description />
               <Slider />
               <OpmentLifecycle />
          </Wrapper>
     )
}

export default Main