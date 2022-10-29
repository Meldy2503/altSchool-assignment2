import styled from "styled-components";
import bgImg2 from "../../assets/slide-2.jpg";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 6rem;
`;

export const Row = styled.div`
  background-color: #fff;
  color: #fff;
  display: flex;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }

  h2 {
    color: #f7992b;
    font-weight: bold;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
  }

  p {
    width: 70%;
    line-height: 2;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 85%;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
      width: 100%;
    }
  }

  ul {
    margin-left: 5rem;
    width: 70%;
  }
  li {
    margin-top: 1.5rem;
  }
`;
export const Col1 = styled.div`
  background-color: #000;
  width: 75%;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  & > div {
    max-width: 70rem;
    margin: 0 auto;
    height: 100%;
    width: 70%;
    padding: 13rem 0rem 13rem 0;

    @media (max-width: 1200px) {
      margin: 0 10%;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      padding: 8rem 2.5rem;
      margin: 0;
      max-width: 100%;
      width: 100%;
    }
  }
`;
export const Col2 = styled.div`
  background-image: url(${bgImg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  margin-top: 15rem;
  margin-left: -25rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    margin-top: 0;
    margin-left: 0;
  }

  & > div {
    background-color: rgb(247, 153, 43, 0.55);
    height: 100%;
    padding: 12rem 0 12rem 10rem;

    @media (max-width: 1200px) {
      padding: 10rem 0 10rem 3rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      padding: 8rem 2.5rem;
      margin: 0;
    }
  }

  h2 {
    color: #fff;
  }
`;
