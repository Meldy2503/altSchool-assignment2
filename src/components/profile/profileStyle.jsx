import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #fff;
  height: fit-content;
`;

export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 5rem auto 15rem auto;
  padding-top: 10rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  @media (max-width: 350px) {
    padding-top: 15rem;
  }

  h2 {
    margin: 6rem 0 2rem 0;
  }

  P {
    line-height: 1.7;
  }

  .navLink {
    color: #f7992b;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    text-decoration: none;
    border-left: 0.2rem solid #333;
    padding: 0 2rem;
  }
  .active {
    color: #333;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    text-decoration: none;
    border-left: 0.2rem solid #333;
    padding: 0 2rem;
  }
`;
