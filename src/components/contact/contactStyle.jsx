import styled from "styled-components";
import bgImg from "../../assets/slide-3.jpg";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  box-shadow: rgb(0 0 0 / 80%) 0px 100em 0px 0px inset;
  padding: 10rem 0;
  overflow: hidden;

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
  text-align: center;
  margin: 0 auto;

  h2 {
    line-height: 1.4;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;
export const Form = styled.form`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 85%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  label {
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