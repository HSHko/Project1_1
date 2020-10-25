import { createGlobalStyle } from "styled-components";

const fontSize = {
  h1: "6rem",
  h2: "4rem",
  h3: "3rem",
  h4: "2rem",
  h5: "1.5rem",
  h6: "1.25rem",
};

const globalStyle = createGlobalStyle`
  * {margin: 0; padding: 0;}
  *, *::before, *::after {box-sizing: border-box;}

  body {
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  h1, .h1 {font-size: ${fontSize.h1};}
  h2, .h2 {font-size: ${fontSize.h2};}
  h3, .h3 {font-size: ${fontSize.h3};}
  h4, .h4 {font-size: ${fontSize.h4};}
  h5, .h5 {font-size: ${fontSize.h5};}
  h6, .h6 {font-size: ${fontSize.h6};}  

  a, button {
    display: flex;
    margin: auto 0.5rem;
    padding: 0.25rem 0.5rem;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    font-size: ${fontSize.h6};
  }

  .styledBtn {
    
  }
  
  .text-center {text-align: center;}
  .disp-flex {display: flex;}
  .disp-inline {display: inline;}
  .width80 {width: 80%;}
  .width60 {width: 60%;}
  .width50 {width: 50%;}
  .width40 {width: 40%;}
  .width20 {width: 20%;}
`;

export default globalStyle;
