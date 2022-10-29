import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const IconsContainer = styled.span`
  margin: 0 auto;
  display: inline-block;
  text-align: center;

  & > a {
    color: #fff;
  }

  span {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
  }
`;
export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  height: 6rem;
  background-color: #000;
  color: #fff;

  & > div {
    color: #fff;
    background-color: #0000004d;
    width: 100%;
    position: absolute;
    cursor: pointer;
    padding: 2rem 0;
    z-index: 5000;
    top: 5rem;
    left: 0;
    right: 0;
  }
`;
export const Nav = styled.nav`
  display: flex;
  max-width: 120rem;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  @media (max-width: 350px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`;
export const Logo = styled.h2``;

export const Ul = styled.ul`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    background-color: #000;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 9rem;
    display: block;
    z-index: 5000;
    height: 100vh;
    text-align: center;
  }

  @media (max-width: 350px) {
    top: 13rem;
  }

  ${(props) => props.isMenuOpen} {
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }
  }

  li {
    list-style-type: none;
    margin-right: 3.5rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin-top: 3rem;
      margin-right: 0;
      border-bottom: 0.2rem solid #333;
      padding-bottom: 1rem;
    }
  }
`;

export const Navlink = styled(NavLink)`
  color: #fff;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;

  &:hover {
    color: #f7992b;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    font-size: 1.8rem;
  }
`;
export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    font-weight: bolder;
  }
`;
