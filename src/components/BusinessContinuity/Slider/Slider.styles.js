import styled from "styled-components";

export const Wrapper = styled.div`
     width: 100%;
     max-height: 500px;
     height: 100vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 100px;
     position: relative;

     .leftSVG{
          position: absolute;
          left: -80px;
          bottom: -50px;
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
          right: -50px;
          top: 40px;
          z-index: -1;
          animation: rightSVGAnimate 2s infinite;

          @keyframes rightSVGAnimate {
               0%, 100% { 
                    transform: translate(0,0);
               }
               25% { 
                    transform: translate(5px,-10px);
               }
               75% { 
                    transform: translate(20px,20px);
               }
          }
     }

     @media screen and (max-width: 500px) {
          max-height: fit-content;
          height: fit-content;
          margin-top: 50px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          max-height: fit-content;
          height: fit-content;
     }
`;

export const SubTitle = styled.h1`
     width: 100%;
     font-weight: 700;
     font-size: 30px;
     text-align: center;
     text-transform: capitalize;
     color: var(--blackColor2);

     @media screen and (max-width: 500px) {
          font-size: 17px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          font-size: 25px;
     }
`;

export const SliderContainer = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top: 50px;
     /* animation: slide 8s ease-in-out infinite;

     @keyframes slide {
          0% {
               margin-left:0;
          }
          50% {
               margin-left:-1000px;
          }
          100% {
               margin-left:0;
          }
     }

     :hover{
          animation-play-state:paused;
     } */

     @media screen and (max-width: 500px) {
          flex-direction: column;
          margin-top: 20px;
          animation: 0s;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          flex-direction: column;
          margin-top: 20px;
          animation: 0s;
     }
`;

export const Card = styled.div`
     width: 300px;
     height: 350px;
     margin: 0 15px;
     padding: 20px;
     display: flex;
     flex-direction: column;
     align-items: center;
     background: linear-gradient(137.73deg, rgba(255, 255, 255, 0) 4.16%, rgba(255, 255, 255, 0.5) 102.02%);
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
     backdrop-filter: blur(80px);
     border-radius: 30px;
     box-shadow: 0px 4px 4px 0px #00000040;

     @media screen and (max-width: 500px) {
          width: 80vw;
          margin: 20px 0;
          padding: 20px;
          min-width: fit-content;
          height: fit-content;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          min-width: 100px;
          width: 400px;
          margin: 20px 0
     }
`;

export const CardImageContainer = styled.div`
     width: 100%;
     max-height: 150px;
     height: 100px;
     display: flex;
     align-items: center;
     justify-content: center;
`;

export const CardImage = styled.img`
     width: 30%;
`;

export const CardTitleContainer = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
`;

export const CardTitle = styled.p`
     font-weight: 500;
     font-size: 16px;
     color: #485466;

     @media screen and (max-width: 500px) {
          font-size: 16px;
     }
`;

export const DesignContainer = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
`;

export const BoldDiv = styled.div`
     width: 15%;
     height: 5px;
     border-radius: 10px;
`;

export const NormalDiv = styled.div`
     width: 50%;
     height: 1px;
     border-radius: 10px;

     @media screen and (max-width: 500px) {
          width: 40%;
     }
`;

export const CardDescContainer = styled.div`
     width: 100%;
     max-height: 100px;
     margin-top: 15px;

     @media screen and (max-width: 500px) {
          max-height: fit-content;
     }
`;

export const CardDesc = styled.p`
     font-weight: 400;
     font-size: 14px;
     color: #5A6980;
     text-align: justify;
`;