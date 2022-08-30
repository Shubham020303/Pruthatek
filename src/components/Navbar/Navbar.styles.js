import styled from "styled-components";

export const Wrapper = styled.div`
     width: 100%;
     padding: 20px 50px;
     display: flex;
     align-items: center;
     justify-content: space-between;

     .open{
          display: none;
          cursor: pointer;

          @media screen and (max-width: 500px) {
               display: block;
          }
     }

     @media screen and (max-width: 500px) {
          padding: 10px 20px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px) {
          flex-direction: column;
          padding: 20px 0;
     }
`;

export const Navlink = styled.nav`
     ul{
          display: flex;
          list-style-type: none;
          position: relative;
          padding: 0;
     }
     li{
          padding: 0 10px;
          color: var(--greyColor2);
          font-size: var(--fontNormal);
          font-weight: 500;
          text-transform: uppercase;

          @media screen and (max-width: 768px) and (min-width: 500px)  {
               font-size: 12px;
          }
     }

     @media screen and (max-width: 500px) {
          display: none;
     }
`;

export const Image = styled.img`
     width: 200px;
     height: 100%;

     @media screen and (max-width: 500px) {
          width: 130px;
     }

     @media screen and (max-width: 768px) and (min-width: 500px)  {
          width: 150px;
     }
`;

export const SidebarContainer = styled.div`
     height: 100vh;
     width: 30%;
     position: fixed;
     top: 0;
     left: -600%;
     z-index: 999;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: var(--whiteColor1);
     box-shadow: 0px 4px 40px 0px #00000040;
     transition: all .4s ease-in;

     .close{
          top: 20px;
          right: 30px;
          position: absolute;
          cursor: pointer;
     }

     @media screen and (max-width: 500px) {
          width: 100vw;
          height: auto;
          position: fixed;
          top: 0;
     }

     ul{
          margin: 30px 0 0 0;
          padding: 0;
          list-style: none;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          @media screen and (max-width: 500px) {
               margin-top: 60px;
          }
     }

     li{
          padding: 20px;
          width: 100%;
          text-align: center;
          margin: 5px;

          :hover{
               background-color: #eee;
          }
     }

     li:nth-child(1){
          text-decoration: underline;
          background: linear-gradient(to right, #030B29 0%, #1861AA 100%);
          color: var(--whiteColor1);
     }

     li:nth-child(1)::after{
          content: " ";
          height: 100px;
          width: 100px;
          z-index: -1;
     }
`;