import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import {
  IconsContainer,
  Header,
  Nav,
  Ul,
  Navlink,
  MenuIcon,
} from "./navbarStyle";
import HeaderLogo from "../../assets/header-logo.png";
import data from "./data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenuLink = () => setIsMenuOpen(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header>
      {data.map((list) => {
        return (
          <IconsContainer key={list.id}>
            <a href={list.link} target="_blank" rel="noreferrer">
              <span>{list.icon}</span>
            </a>
          </IconsContainer>
        );
      })}
      <div>
        <Nav>
          {/* <div> */}
          <img src={HeaderLogo} alt="header logo" />
          <Ul isMenuOpen={isMenuOpen}>
            <li>
              <Navlink to="/">home</Navlink>
            </li>
            <li>
              <Navlink to="/profile">Profile</Navlink>
            </li>
            <li>
              <Navlink to="/users">Users</Navlink>
            </li>
          </Ul>
          <MenuIcon onClick={handleClick}>
            <Hamburger
              onClick={handleClick}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={25}
            />
          </MenuIcon>
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;
