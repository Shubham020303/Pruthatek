import styled from "styled-components";

export const Wrapper = styled.div`
     width: 100%;
     margin-top: 50px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     position: relative;

     .leftSVG{
          position: absolute;
          left: -100px;
          top: 80%;
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

          @media screen and (max-width: 500px) {
               width: 150px;
               height: 150px;
               top: 90%;
          }

          @media screen and (max-width: 768px) and (min-width: 500px)  {
               width: 200px;
               height: 200px;
               top: 80%;
               left: -100px;
          }
     }

     @media screen and (max-width: 500px) {
          height: fit-content;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          height: fit-content;
     }
`;

export const TitleContainer = styled.div`
     width: 100%;
     margin-bottom: 50px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     @media screen and (max-width: 500px) {
          margin-bottom: 0;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          margin-bottom: 25px;
     }
`;

export const Title = styled.h1`
     width: 100%;
     font-weight: 700;
     font-size: 30px;
     text-align: center;
     text-transform: capitalize;
     color: var(--blackColor2);

     @media screen and (max-width: 500px) {
          font-size: 14px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          font-size: 25px;
     }
`;

export const TitleSubText = styled.p`
     width: 90%;
     text-align: center;
     color: var(--greyColor2);

     @media screen and (max-width: 500px) {
          font-size: 14px;
	  text-align: justify;
     }
`;

export const ContentContainer = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;

     @media screen and (max-width: 500px) {
          flex-direction: column;
          align-items: center;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          flex-direction: column;
          align-items: center;
     }
`;

export const LeftContentContainer = styled.div`
     min-width: 500px;
     width: 600px;
     height: 100%;
     padding: 40px 40px 0 40px;

     @media screen and (max-width: 500px) {
          width: 80vw;
          min-width: 80vw;
          padding: 0;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          width: 80vw;
          min-width: 80vw;
          padding: 0;
     }
`;

export const TextContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     margin-bottom: 10px;
`;

export const SVGContainer = styled.div`
     display: flex;
     align-items: center;
     margin-bottom: -10px;

     .SVG{
          margin-right: 20px;

	  @media screen and (max-width: 500px) {
          	width: 20px;
    		height: 20px;
     	  }
     }
`;

export const Text = styled.p`
     width: 100%;
     font-weight: 600;
     font-size: 16px;
     letter-spacing: 0.04em;
     color: var(--greyColor1);

     @media screen and (max-width: 500px) {
          font-size: 14px;
     }
`;

export const TextDescContainer = styled.div`

`;

export const TextDesc = styled.p`
     margin-left: 45px;
     color: var(--greyColor1);

     @media screen and (max-width: 500px) {
          font-size: 13px;
	  margin-left: 38px;
    	  text-align: justify;
     }
`;

export const RightContentContainer = styled.div`
     width: 50%;
     margin-top: 10px;
     display: flex;
     justify-content: center;

     @media screen and (max-width: 500px) {
          width: 400px;
          height: 300px;
          margin-bottom: 40px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          width: 500px;
          height: 400px;
          margin-bottom: 40px;
     }

     @media screen and (max-width: 400px) {
          width: 80vw;
          height: 200px;
     }
`;

export const RightImageContainer = styled.div`
     width: 600px;
     height: 500px;
     display: flex;
     align-items: center;
     justify-content: center;
     background: linear-gradient(137.73deg, rgba(255, 255, 255, 0) 4.16%, rgba(255, 255, 255, 0.5) 102.02%);
     filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
     backdrop-filter: blur(80px);
     border-radius: 30px;
     box-shadow: 0px 4px 4px 0px #00000040;

     @media screen and (max-width: 500px) {
          height: 100%;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          height: 100%;
     }
`;

export const RightImage = styled.img`
     width: 90%;
     height: 90%;
     border-radius: 30px;
     object-fit: cover;
`;