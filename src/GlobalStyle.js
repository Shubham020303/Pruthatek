import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --whiteColor1: #FFFFFF;
    --blackColor1: #000000;
    --blackColor2: #242A33;
    --blueColor1: #1861AA;
    --blueColor2: #2BA9D9;
    --blueColor3: #4E92F9;
    --greyColor1: #666666;
    --greyColor2: #848484;
    --yellowColor1: #EFA706;
    --greenColor1: #7FBA00;
    --orangeColor1: #F25022;
    --fontNormal: 16px;
    --fontBig: 30px;
    --fontBigger: 40px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
    }
  }
`;
