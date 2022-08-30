import React from 'react'

//Styles
import { ContentContainer, LeftContentContainer, RightContentContainer, RightImage, RightImageContainer, Text, TextContainer, Title, TitleContainer, Wrapper } from './DisaterRecovery.styles';

//Images
import subHeroImage from '../../../images/subHeroImage(BC).jpg';

const DisaterRecovery = () => {
     return (
          <Wrapper>

               <svg width="150" height="150" className='leftSVG' viewBox="0 0 170 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-7.20217 1.15146C25.0616 5.94118 42.3827 39.7329 69.5535 57.7215C98.5474 76.9171 140.063 79.5232 156.973 109.845C174.746 141.714 173.553 183.482 158.129 216.543C143.397 248.119 106.563 259.835 77.7842 279.583C49.9502 298.682 26.5881 329.51 -7.20217 329.993C-41.1031 330.477 -70.6723 306.577 -93.9761 282.035C-114.444 260.479 -122.205 231.288 -128.474 202.276C-134.136 176.075 -132.191 150.338 -128.159 123.839C-123.268 91.6949 -125.452 55.3573 -102.588 32.1661C-78.5605 7.79443 -41.1118 -3.8826 -7.20217 1.15146Z" fill="#1861AA" />
               </svg>

               <TitleContainer>
                    <Title>Disaster recovery</Title>
               </TitleContainer>

               <ContentContainer>

                    <LeftContentContainer>

                         <TextContainer>
                              <Text>PruthaTek implements a disaster recovery program at all of its data premises which includes a set of data protection and other security-related activities and embraces data recovery scenarios for each potential data loss situation (e.g., hardware or software failure, computer virus, human factor, etc.). This program comprises multiple components to minimize the risk of any single point of failure, including the following:</Text>
                         </TextContainer>

                         <TextContainer>
                              <svg width="25" height="25" className='greenSVG' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-path="url(#clip0_149_291)">
                                        <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#7FBA00" />
                                        <path d="M3.15869 8.07913L4.66645 6.17408L7.13164 8.89775C7.37288 8.42341 7.59151 7.98731 7.81767 7.55887C8.64507 5.87266 9.70066 4.31211 10.9538 2.92251C12.4939 1.30539 14.5358 0.276004 16.7361 0.00756836C16.7888 0.00756836 16.8492 0.00756836 16.9924 0.00756836C12.2053 3.35095 9.45359 8.04852 7.74982 13.4882C6.99594 12.5319 6.36268 11.5526 5.6088 10.6651C4.85492 9.77759 4.00304 8.95897 3.15869 8.07913Z" fill="#7FBA00" />
                                   </g>
                                   <defs>
                                        <clipPath id="clip0_149_291">
                                             <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                   </defs>
                              </svg>
                              <Text>All application data is replicated to multiple systems within a data center and to remote data centers.</Text>
                         </TextContainer>

                         <TextContainer>
                              <svg width="25" height="25" className='orangeSVG' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g clip-path="url(#clip0_150_346)">
                                        <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#EFA706" />
                                        <path d="M3.15869 8.07913L4.66645 6.17408L7.13164 8.89775C7.37288 8.42341 7.59151 7.98731 7.81767 7.55887C8.64507 5.87266 9.70066 4.31211 10.9538 2.92251C12.4939 1.30539 14.5358 0.276004 16.7361 0.00756836C16.7888 0.00756836 16.8492 0.00756836 16.9924 0.00756836C12.2053 3.35095 9.45359 8.04852 7.74982 13.4882C6.99594 12.5319 6.36268 11.5526 5.6088 10.6651C4.85492 9.77759 4.00304 8.95897 3.15869 8.07913Z" fill="#EFA706" />
                                   </g>
                                   <defs>
                                        <clipPath id="clip0_150_346">
                                             <rect width="17" height="17" fill="white" />
                                        </clipPath>
                                   </defs>
                              </svg>
                              <Text>PruthaTek operates a geographically distributed set of data centers that are designed to maintain service continuity in the event of a disaster or other incident in a single region.</Text>
                         </TextContainer>

                    </LeftContentContainer>

                    <RightContentContainer>

                         <RightImageContainer>

                              <RightImage src={subHeroImage} />

                         </RightImageContainer>

                    </RightContentContainer>
                    
               </ContentContainer>

               <svg width="150" height="150" className='rightSVG' viewBox="0 0 314 657" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M139.248 647.384C87.1996 633.348 35.6418 600.122 13.5145 550.965C-7.65247 503.942 27.0264 451.642 27.9279 400.082C28.6149 360.792 19.3649 324.273 18.165 284.996C16.0311 215.142 -20.5848 137.762 18.1373 79.5842C56.1731 22.4376 138.014 -10.0808 205.207 3.97661C272.917 18.1423 319.801 85.497 348.106 148.617C370.179 197.839 327.953 254.699 341.099 307.017C350.145 343.018 410.671 355.08 409.307 392.175C407.972 428.462 350.851 436.187 335.145 468.926C311.157 518.927 337.512 589.937 296.516 627.284C256.64 663.61 191.329 661.429 139.248 647.384Z" fill="#2BA9D9" />
               </svg>

          </Wrapper>
     )
}

export default DisaterRecovery