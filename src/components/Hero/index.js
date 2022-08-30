import React from 'react'

//Styles
import { Background, Desc, Title, Wrapper } from './Hero.styles'

const Hero = ({ title, desc }) => {
     return (
          <Wrapper>
               <Background />
               <Title>
                    {title}
               </Title>
               <Desc>
                    {desc}
               </Desc>
          </Wrapper>
     )
}

export default Hero