import styled from "styled-components";
import bgImg from "../../assets/slide-1.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgb(0 0 0 / 45%) 0px 100em 0px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Contents = styled.div`
  padding: 10rem auto;
  color: #fff;
  margin: 0 auto;
  max-width: 120rem;
  font-family: "Oswald", sans-serif;
  text-align: center;
  width: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  div {
    h1 {
      font-size: 7.5rem;
      font-weight: 700;
      letter-spacing: 0.3rem;
      word-spacing: 0.5rem;
      line-height: 1.2;
      margin-bottom: 1rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 6.5rem;
        margin-bottom: 2rem;
      }
      @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
        font-size: 5rem;
      }
    }

    p {
      font-size: 4rem;
      font-weight: 200;
      color: #f3f1f1;
      letter-spacing: 0.1rem;
      line-height: 1.3;
      margin-bottom: 7rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 3rem;
      }
    }
  }
`;

export const Link = styled(NavLink)`
  padding: 1.8rem 3.8rem;
  background-color: #f7992b;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.7;
  letter-spacing: 0.6rem;
  text-decoration: none;
  border-radius: 0.44rem;
`;
