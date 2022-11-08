import styled from "styled-components";
import bgImg from "../../assets/slide-3.jpg";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  padding: 10rem 0;
  overflow: hidden;
  margin-bottom: 6rem;

  h2 {
    color: #f7992b;
    font-family: "Oswald", sans-serif;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 1.5rem auto 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  @media (max-width: 350px) {
    margin: 6rem auto 0 auto;
  }

  h2 {
    text-align: center;
    line-height: 1.4;
    font-size: 3.5rem;
    margin: 5rem 0 3rem 0;
  }
`;

export const BackLink = styled(Link)`
  font-weight: bold;
  border-left: 0.25rem solid #777;
  border-right: 0.25rem solid #777;
  color: #f7992b;
  padding: 0 1.2rem;
  font-size: 1.9rem;
  text-decoration: none;
`;

export const Form = styled.form`
  text-align: center;
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 85%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 1.2rem 1.5rem;
    margin-top: 2rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    background-color: #ffffffe6;
    border-radius: 0.2rem;
    border: none;
    outline: none;
    color: #000;

    &::placeholder {
      color: #000;
    }

    &:focus {
      border-bottom: 0.3rem solid #c77a22;
    }
  }
`;
export const Btn = styled.button`
  color: #f79c35;
  padding: 1.5rem 4.5rem;
  margin-top: 2rem;

  font-weight: 600;
  background-color: transparent;
  border: 0.2rem solid #f79c35;

  &:hover {
    background-color: #c77a23;
    border: 0.2rem solid #c77a23;
    color: #fff;
  }
`;
