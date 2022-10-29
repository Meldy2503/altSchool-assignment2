import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  width: 100%;
`;
export const Contents = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 20rem auto 10rem auto;

  @media (max-width: 350px) {
    margin: 25rem auto 10rem auto;
  }

  h2 {
    margin: 6rem 0 2rem 0;
  }

  P {
    line-height: 1.7;
  }
`;
export const Link = styled(NavLink)`
  font-family: "Oswald", sans-serif;
  color: #f7992b;
  font-weight: 700;
  font-size: 2rem;
  text-decoration: none;
  border-left: 0.2rem solid #333;
  padding: 0 2rem;

  &:hover {
    color: #333;
  }
`;
