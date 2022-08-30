import styled from "styled-components";

export const Wrapper = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-evenly;

     @media screen and (max-width: 500px) {
          flex-direction: column;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          flex-direction: column;
     }
`;

export const Left = styled.div`
     min-width: 550px;
     
     .leftSVG{
          position: absolute;
          top: 250px;
          left: -40px;
          z-index: -1;
          animation: leftSVGAnimate 2s infinite;

          @keyframes leftSVGAnimate {
               0%, 100% { 
                    transform: translate(0,0);
               }
               25% { 
                    transform: translate(5px,5px);
               }
               75% { 
                    transform: translate(12px,10px);
               }
          }
     }

     .rightSVG{
          position: absolute;
          top: 100px;
          right: 0px;
          z-index: -1;
          animation: rightTopSVGAnimate 2s infinite;

          @keyframes rightTopSVGAnimate {
               0%, 100% { 
                    transform: translate(0,0);
               }
               25% { 
                    transform: translate(0px,-10px);
               }
               75% { 
                    transform: translate(0px,20px);
               }
          }
     }

     @media screen and (max-width: 500px) {
          height: 300px;
          display: flex;
          justify-content: center;
     }

     @media screen and (max-width: 768px) and (min-width: 500px) {
          height: 500px;
          display: flex;
          justify-content: center;
     }
`;

export const ImageContainer = styled.div`
     width: 450px;
     height: 400px;
     background: rgba(255, 255, 255, 0.15);
     backdrop-filter: blur(50px);
     border-radius: 40px;
     display: flex;
     align-items: center;
     justify-content: center;

     @media screen and (max-width: 500px) {
          width: 200px; 
          height: 200px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          width: 350px; 
          height: 350px;
     }
`;

export const Image = styled.img`
     width: 85%;
     height: 80%;
     border-radius: 40px;
`;

export const ImageBackground = styled.div`
     width: 450px;
     height: 400px;
     margin-top: -300px;
     margin-left: 100px;
     background: linear-gradient(164.27deg, rgba(78, 146, 249, 0.25) 10.99%, rgba(195, 129, 219, 0.25) 113.57%);
     border-radius: 61px;

     @media screen and (max-width: 500px) {
          width: 200px; 
          height: 200px;
          margin-top: 50px;
          margin-left: -145px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          width: 350px; 
          height: 350px;
          margin-top: 100px;
          margin-left: -250px;
     }
`;

export const Right = styled.div`
     position: relative;
     display: flex;
     max-width: 800px;
     flex-direction: column;
     justify-content: space-between;
     padding-left: 80px;
     padding-right: 40px;

     @media screen and (max-width: 500px) {
          padding-left: 0;
          padding-right: 0;
          text-align: center;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          padding-left: 0;
          padding-right: 0;
     }
`;

export const Text = styled.p`
     font-weight: 400;
     font-size: 16px;
     letter-spacing: 0.04em;
     color: var(--greyColor1);
     margin-bottom: 30px;

     @media screen and (max-width: 500px) {
          font-size: 14px;
          text-align: justify;
     }
`;

export const Background = styled.div`
     position: absolute;
     width: 350px;
     height: 350px;
     top: 50%;
     left: 50%;
     background: radial-gradient(50% 50% at 50% 50%, rgba(255, 61, 37, 0.5) 0%, rgba(255, 0, 17, 0) 100%);
     filter: blur(60px);
`;