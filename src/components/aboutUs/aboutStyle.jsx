import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 95%;
  }
`;
export const Partners = styled.div`
  margin-bottom: 10rem;

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 3.2rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    margin: 0 auto;

    img {
      max-width: 100%;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Row = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }

  h2 {
    color: #f7992b;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 3.2rem;
    font-family: "Oswald", sans-serif;
  }

  p {
    width: 95%;
    line-height: 1.8;

    @media (max-width: ${({ theme }) => theme.mediaQuery.smobile}) {
      width: 100%;
    }
  }

  ul {
    margin-left: 5rem;
    width: 75%;
  }
  li {
    margin-top: 1rem;
  }
`;
export const Col1 = styled.div`
  width: 47%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
export const Col2 = styled(Col1)`
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 4rem;
  }
`;

export const PriceWrapper = styled.div`
  width: 100%;
  background-color: #090909;
  color: #fff;
  padding: 10rem 0 20rem 0;
`;
export const Price = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 120rem;

  & > h4 {
    font-family: "Oswald", sans-serif;
    font-size: 3rem;
    font-weight: 200;
    opacity: 0.9;
  }
  & > p {
    width: 80%;
    margin: 3rem 0 5rem 0;
    opacity: 0.8;
    line-height: 1.8;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  & > div {
    width: 32%;
    height: 55rem;
    padding: 8rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px) scale(1.07);
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 45%;
      margin: 0 auto 4rem auto;
    }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 95%;
    }

    h3,
    h1 {
      font-family: "Oswald", sans-serif;
    }

    h3 {
      font-size: 2.5rem;
    }

    h1 {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 3.5rem;

      span {
        font-size: 6.5rem;
      }
    }

    ul {
      li {
        margin-top: 1.7rem;
        font-size: 1.8rem;
        opacity: 0.8;
        list-style-type: circle;
        position: relative;
      }
    }
  }
`;
