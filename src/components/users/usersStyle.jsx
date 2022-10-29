import styled from "styled-components";

export const Container = styled.section`
  background-color: #3d3d3d;
  width: 100%;
  color: #fff;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  padding: 15rem 0 18rem 0;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  @media (max-width: 350px) {
    padding: 22rem 0;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  color: #f7992b;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  font-weight: bold;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10rem;
`;
export const Card = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #090909;
  margin: 1rem;
  box-shadow: -1rem -0.9rem 1rem 0.5rem #000;
  position: relative;
  margin-bottom: 9rem;
  transition: all 0.3s;
  z-index: 1;

  &:hover {
    transform: translateY(-5px) scale(0.95);
    background-color: #d48122;
    font-size: 2rem;

    img {
      transform: scale(1.2);
      border: 0.5rem solid #1d1d1d;
      box-shadow: 0.2rem 0.5rem 1rem 0.5rem #000;
    }

    h3 {
      color: #fff;
    }
  }
`;
export const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  position: absolute;
  top: -6rem;
  border: 0.5rem solid #f7992b;
  transition: all 0.3s;
`;
export const CardContents = styled.div`
  margin-top: 9rem;
  line-height: 1.4;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 2rem 1rem 3rem 1rem;

  h3 {
    text-align: center;
    color: #f7992b;
    transition: all 0.3s;
  }

  h4 {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const PgNo = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
`;
export const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: #f7992b;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1.6rem;
`;
export const PgNosBtn = styled.button`
  margin: 0 0.2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  border: 0.18rem solid #f7992b;
  outline: none;
  background-color: transparent;
  color: #fff;
`;
