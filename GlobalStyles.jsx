import { createGlobalStyle } from "styled-components";
// import bgImg from "./src/assets/background-img.jpg";
// import bgImg from "../assets/background-img.jpg";
export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    position: relative;


@media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {

        font-size: 60%;

}
   
  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {    
        font-size: 58%; 
    }

  }

  body {
   font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  /* background-color: #000; */
  
}

`;
