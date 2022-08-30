import React from 'react'

//Styles
import { ContentContainer, LeftContentContainer, RightContentContainer, RightImage, RightImageContainer, SVGContainer, Text, TextContainer, TextDesc, TextDescContainer, Title, TitleContainer, TitleSubText, Wrapper } from './OpmentLifecycle.styles';

//Images
import subHeroImage from '../../../images/subHeroImage(QM).jpg';

const OpmentLifecycle = () => {
     return (
          <Wrapper>

               <svg width="150" height="150" viewBox="0 0 323 639" fill="none" className='leftSVG' xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.6418 0.000379605C107.549 0.0871638 165.95 18.8368 200.046 60.5918C232.662 100.534 212.701 160.028 225.175 210.064C234.68 248.193 253.067 281.074 264.392 318.702C284.532 385.623 339.928 450.89 317.583 517.107C295.634 582.151 224.998 634.743 156.457 638.556C87.3871 642.397 24.6678 589.472 -19.0095 535.829C-53.0694 493.997 -26.9989 428.145 -53.238 381.013C-71.294 348.579 -132.879 352.594 -141.162 316.41C-149.265 281.014 -96.0891 258.768 -89.3917 223.08C-79.1629 168.574 -122.999 106.805 -93.0655 60.1199C-63.9501 14.7106 -0.299866 -0.0864597 53.6418 0.000379605Z" fill="#F25022" />
               </svg>


               <TitleContainer>
                    <Title>Qa That Is Weaved Into The Devel Opment Lifecycle</Title>
                    <TitleSubText>PruthaTek performs quality assurance throughout the entire software development lifecycle with QA team members being involved at all stages. A Lead QA specialist is assigned at the commencement of each project and is involved into initial business analysis and requirements specification. Such a simultaneous interaction of our development and QA teams provides for a better understanding of the project scope and the client’s business objectives. A typical QA lifecycle at PruthaTek includes the following phases:</TitleSubText>
               </TitleContainer>

               <ContentContainer>

                    <RightContentContainer>

                         <RightImageContainer>

                              <RightImage src={subHeroImage} />

                         </RightImageContainer>

                    </RightContentContainer>

                    <LeftContentContainer>

                         <TextContainer>

                              <SVGContainer>

                                   <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                        <g clip-path="url(#clip0_133_782)">
                                             <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#F25022" />
                                             <path d="M3.15881 8.07913L4.66657 6.17408L7.13176 8.89775C7.373 8.42341 7.59163 7.98731 7.81779 7.55887C8.64519 5.87266 9.70079 4.31211 10.9539 2.92251C12.494 1.30539 14.536 0.276004 16.7362 0.00756836C16.789 0.00756836 16.8493 0.00756836 16.9925 0.00756836C12.2054 3.35095 9.45371 8.04852 7.74994 13.4882C6.99606 12.5319 6.3628 11.5526 5.60892 10.6651C4.85504 9.77759 4.00316 8.95897 3.15881 8.07913Z" fill="#F25022" />
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_133_782">
                                                  <rect width="17" height="17" fill="white" />
                                             </clipPath>
                                        </defs>
                                   </svg>

                                   <Text>Initiation and Planning</Text>

                              </SVGContainer>

                              <TextDescContainer>
                                   <TextDesc>Project specification analysis, test plan elaboration and team assignment</TextDesc>
                              </TextDescContainer>
                         </TextContainer>
                         <TextContainer>

                              <SVGContainer>

                                   <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                        <g clip-path="url(#clip0_133_785)">
                                             <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#EFA706" />
                                             <path d="M3.15881 8.07913L4.66657 6.17408L7.13176 8.89775C7.373 8.42341 7.59163 7.98731 7.81779 7.55887C8.64519 5.87266 9.70079 4.31211 10.9539 2.92251C12.494 1.30539 14.536 0.276004 16.7362 0.00756836C16.789 0.00756836 16.8493 0.00756836 16.9925 0.00756836C12.2054 3.35095 9.45371 8.04852 7.74994 13.4882C6.99606 12.5319 6.3628 11.5526 5.60892 10.6651C4.85504 9.77759 4.00316 8.95897 3.15881 8.07913Z" fill="#EFA706" />
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_133_785">
                                                  <rect width="17" height="17" fill="white" />
                                             </clipPath>
                                        </defs>
                                   </svg>

                                   <Text>Iteration Audits</Text>

                              </SVGContainer>

                              <TextDescContainer>
                                   <TextDesc>Ongoing testing of intermediate iterations builds</TextDesc>
                              </TextDescContainer>
                         </TextContainer>
                         <TextContainer>

                              <SVGContainer>

                                   <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                        <g clip-path="url(#clip0_133_788)">
                                             <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#1861AA" />
                                             <path d="M3.15881 8.07913L4.66657 6.17408L7.13176 8.89775C7.373 8.42341 7.59163 7.98731 7.81779 7.55887C8.64519 5.87266 9.70079 4.31211 10.9539 2.92251C12.494 1.30539 14.536 0.276004 16.7362 0.00756836C16.789 0.00756836 16.8493 0.00756836 16.9925 0.00756836C12.2054 3.35095 9.45371 8.04852 7.74994 13.4882C6.99606 12.5319 6.3628 11.5526 5.60892 10.6651C4.85504 9.77759 4.00316 8.95897 3.15881 8.07913Z" fill="#1861AA" />
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_133_788">
                                                  <rect width="17" height="17" fill="white" />
                                             </clipPath>
                                        </defs>
                                   </svg>

                                   <Text>First Review</Text>

                              </SVGContainer>

                              <TextDescContainer>
                                   <TextDesc>Initial testing of first development deliverables, refining the test plan and test items (if necessary).</TextDesc>
                              </TextDescContainer>
                         </TextContainer>
                         <TextContainer>

                              <SVGContainer>

                                   <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                        <g clip-path="url(#clip0_133_791)">
                                             <path d="M10.7579 2.51703V2.57059C10.4186 3.11379 10.004 3.1903 9.37828 2.99138C8.10106 2.61584 6.74153 2.64315 5.47996 3.06971C4.21839 3.49626 3.11437 4.30191 2.31431 5.37981C1.51424 6.45771 1.05592 7.75695 1.00011 9.10525C0.944296 10.4536 1.29364 11.7872 2.00181 12.9294C2.70998 14.0716 3.74352 14.9684 4.9654 15.5008C6.18727 16.0333 7.53975 16.1762 8.8435 15.9107C10.1473 15.6452 11.3407 14.9838 12.2656 14.0141C13.1904 13.0445 13.803 11.8125 14.0222 10.4815C14.1724 9.57199 14.1318 8.64056 13.9032 7.74805C13.6746 6.85554 13.263 6.02202 12.6953 5.30191L12.4466 4.97293L12.733 4.59039L13.0195 4.2461C14.2795 5.63003 14.9889 7.43899 15.0107 9.32308C15.0324 11.2072 14.3648 13.0325 13.1371 14.4459C11.9094 15.8594 10.2088 16.7606 8.36422 16.9751C6.51965 17.1897 4.66223 16.7024 3.15122 15.6075C1.61935 14.5016 0.552469 12.8524 0.161815 10.9862C-0.228838 9.12002 0.0852113 7.17301 1.04179 5.53065C1.99838 3.88829 3.52775 2.67032 5.32711 2.11789C7.12647 1.56545 9.06464 1.71882 10.7579 2.54763V2.51703Z" fill="#7FBA00" />
                                             <path d="M3.15881 8.07913L4.66657 6.17408L7.13176 8.89775C7.373 8.42341 7.59163 7.98731 7.81779 7.55887C8.64519 5.87266 9.70079 4.31211 10.9539 2.92251C12.494 1.30539 14.536 0.276004 16.7362 0.00756836C16.789 0.00756836 16.8493 0.00756836 16.9925 0.00756836C12.2054 3.35095 9.45371 8.04852 7.74994 13.4882C6.99606 12.5319 6.3628 11.5526 5.60892 10.6651C4.85504 9.77759 4.00316 8.95897 3.15881 8.07913Z" fill="#7FBA00" />
                                        </g>
                                        <defs>
                                             <clipPath id="clip0_133_791">
                                                  <rect width="17" height="17" fill="white" />
                                             </clipPath>
                                        </defs>
                                   </svg>

                                   <Text>Final Verification and Validation</Text>

                              </SVGContainer>

                              <TextDescContainer>
                                   <TextDesc>Final product testing to ensure bespoke quality and readiness for deployment.</TextDesc>
                              </TextDescContainer>
                         </TextContainer>



                    </LeftContentContainer>

               </ContentContainer>

          </Wrapper>
     )
}

export default OpmentLifecycle