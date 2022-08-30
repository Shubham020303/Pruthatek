import React from 'react'

//Styles
import { ImageBackground, Image, ImageContainer, Left, Right, Wrapper, Background, TextBold } from './Description.styles';
import { Text } from './Description.styles';

//Images
import heroImage from '../../../images/heroImage(QM).jpg';

const Description = () => {
     return (
          <Wrapper>
               <Left>
                    <svg width="150" height="150" className='leftSVG' viewBox="0 0 534 730" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M143.803 2.54717C214.848 13.1426 252.988 87.894 312.818 127.687C376.662 170.15 468.078 175.915 505.315 242.99C544.451 313.488 541.824 405.884 507.859 479.02C475.422 548.869 394.312 574.786 330.942 618.47C269.652 660.721 218.209 728.917 143.803 729.984C69.1537 731.055 4.04282 678.185 -47.2719 623.895C-92.342 576.211 -109.432 511.638 -123.236 447.46C-135.702 389.5 -131.421 332.566 -122.542 273.948C-111.771 202.84 -116.582 122.457 -66.2357 71.1554C-13.3268 17.2422 69.1346 -8.58878 143.803 2.54717Z" fill="#EFA706" />
                    </svg>
                    <svg width="150" height="150" className='rightTopSVG' viewBox="0 0 295 648" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M319.888 0.306945C387.582 -3.19428 458.034 23.4026 504.599 72.661C547.978 118.549 548.77 187.429 556.073 250.152C561.989 300.967 567.254 354.426 542.624 399.264C519.977 440.494 463.006 445.087 430.383 478.976C385.915 525.168 379.05 605.922 319.888 630.641C254.405 658.001 171.483 651.861 113.069 611.556C54.2916 571.002 38.6565 493.228 20.6003 424.138C3.55754 358.926 -11.5942 289.961 12.5782 227.042C36.1422 165.707 95.6846 130.086 148.557 91.0761C201.869 51.7425 253.726 3.729 319.888 0.306945Z" fill="#1861AA" />
                    </svg>
                    <ImageContainer>
                         <Image src={heroImage} />
                    </ImageContainer>
                    <ImageBackground />
               </Left>
               <Right>
                    <Background />
                    <TextBold>QMS TASKS & OBJECTIVES</TextBold>
                    <Text>Elaboration and implementation of procedures and regulations for software development process based on industry standards and best practices;</Text>
                    <Text>Product lifecycle monitoring to ensure compliance with established processes and guidelines</Text>
                    <Text>Product quality verification and validation to ensure that it complies with clients’ business needs and expectations</Text>
                    <Text>Establishment of an effective collaboration between all project team members.</Text>
               </Right>
          </Wrapper>
     )
}

export default Description