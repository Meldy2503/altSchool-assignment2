import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #fff;
  height: fit-content;
`;

export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 5rem auto;
  padding-top: 8rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  @media (max-width: 350px) {
    padding-top: 13rem;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rem;
  padding-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
    margin-top: 5rem;
  }

  div {
    width: 47%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 100%;
    }

    h2 {
      margin-bottom: 1.5rem;
      font-size: 3.2rem;
      font-family: "Oswald", sans-serif;
    }

    P {
      line-height: 1.6;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        margin-bottom: 2rem;
      }
    }
  }

  img {
    max-width: 100%;
  }
`;
