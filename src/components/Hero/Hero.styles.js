import styled from "styled-components";

export const Wrapper = styled.div`
     width: 100%;
     height: 30vh;
     margin-top: 80px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     position: relative;

     @media screen and (max-width: 500px) {
          padding: 0 20px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          padding: 0 20px;
     }
`;

export const Background = styled.div`
     position: absolute;
     width: 250px;
     height: 250px;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background: radial-gradient(50% 50% at 50% 50%, rgba(255, 61, 37, 0.5) 0%, rgba(255, 0, 17, 0) 100%);
     filter: blur(50px);
`;

export const Title = styled.h1`
     font-weight: 800;
     font-size: 30px;
     text-align: center;
     letter-spacing: 0.205em;
     text-transform: uppercase;
     color: var(--blackColor1);

     @media screen and (max-width: 500px) {
          font-size: 20px;
          letter-spacing: 1px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          font-size: 25px;
          letter-spacing: 1.5px;
     }
`;

export const Desc = styled.p`
     font-weight: 400;
     font-size: 16px;
     text-align: center;
     letter-spacing: 0.03em;
     color: var(--greyColor2);
     width: 70%;

     @media screen and (max-width: 500px) {
          font-size: 15px;
          width: 100%;
          text-align: justify;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          font-size: 14px;
     }
`;