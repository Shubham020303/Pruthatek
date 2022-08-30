import React from 'react'

//Styles
import { BoldDiv, Card, CardDesc, CardDescContainer, CardImage, CardImageContainer, CardTitle, CardTitleContainer, DesignContainer, NormalDiv, SliderContainer, SubTitle, Wrapper } from './Slider.styles';

//Images
import slideImage1 from '../../../images/slideImage1(QM).png';
import slideImage2 from '../../../images/slideImage2(QM).png';
import slideImage3 from '../../../images/slideImage3(QM).png';

const Cards = [
     {
          image: slideImage1,
          title: "Quality Planning",
          color: "#1861AA",
          desc: "Teams are isolated across different locations. Some teams may not be using Agile.",
     },
     {
          image: slideImage2,
          title: "Quality Assurance",
          color: "#EFA706",
          desc: "Cross-functional Scrum teams are isolated across locations and integrated by a Scrum-of-Scrums that meets regularly across locations.",
     },
     {
          image: slideImage3,
          title: "Quality Control",
          color: "#7FBA00",
          desc: "Scrum team members are distributed across locations.",
     }
]


const Slider = () => {

     return (
          <Wrapper>
          
               <svg width="150" height="150" className='leftSVG' viewBox="0 0 197 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7978 1.15146C52.0616 5.94118 69.3827 39.7329 96.5535 57.7215C125.547 76.9171 167.063 79.5232 183.973 109.845C201.746 141.714 200.553 183.482 185.129 216.543C170.397 248.119 133.563 259.835 104.784 279.583C76.9502 298.682 53.5881 329.51 19.7978 329.993C-14.1031 330.477 -43.6723 306.577 -66.9761 282.035C-87.444 260.479 -95.2051 231.288 -101.474 202.276C-107.136 176.075 -105.191 150.338 -101.159 123.839C-96.2675 91.6949 -98.4522 55.3573 -75.5882 32.1661C-51.5605 7.79443 -14.1118 -3.8826 19.7978 1.15146Z" fill="#2BA9D9" />
               </svg>

               <SubTitle>Comprehensive Approach to quality</SubTitle>

               <SliderContainer>

                    {
                         Cards.map((card, index) => {
                              return (
                                   <Card key={index} id="card">

                                        <CardImageContainer>

                                             <CardImage src={card.image} />

                                        </CardImageContainer>

                                        <CardTitleContainer>

                                             <CardTitle>{card.title}</CardTitle>

                                        </CardTitleContainer>

                                        <DesignContainer>

                                             <BoldDiv style={{ backgroundColor: `${card.color}` }} />
                                             <NormalDiv style={{ backgroundColor: `${card.color}` }} />

                                        </DesignContainer>

                                        <CardDescContainer>

                                             <CardDesc>{card.desc}</CardDesc>

                                        </CardDescContainer>

                                   </Card>
                              )
                         })
                    }

               </SliderContainer>

               <svg width="150" height="150" className='rightSVG' viewBox="0 0 212 656" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M246.924 2.28605C310.761 11.7953 345.033 78.8837 398.792 114.597C456.16 152.707 538.302 157.882 571.76 218.08C606.926 281.351 604.565 364.276 574.047 429.915C544.9 492.603 472.019 515.863 415.078 555.069C360.006 592.989 313.781 654.194 246.924 655.151C179.848 656.112 121.343 608.663 75.2338 559.938C34.7361 517.142 19.3802 459.189 6.97655 401.59C-4.22535 349.571 -0.378485 298.474 7.59985 245.865C17.278 182.047 12.9555 109.904 58.1939 63.861C105.735 15.4747 179.831 -7.70833 246.924 2.28605Z" fill="#7FBA00" />
               </svg>

          </Wrapper>
     )
}

export default Slider