import styled from "styled-components";

export const Wrapper = styled.div`
     height: 40vh;
     width: 40vw;
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
`;

export const Image = styled.img`
     width: 45px;
     padding: 8px;
     border-radius: 50%;
     position: absolute;
     background-color: var(--greyColor2);

     &.connect{
          border-radius: 50%;
          padding: 10px;
          padding-right: 11px;
          cursor: pointer;
     }
`;