import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Header, Nav, Ul, MenuIcon } from "./navbarStyle";
import HeaderLogo from "../../assets/header-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenuLink = () => setIsMenuOpen(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header>
      <Nav>
        <NavLink to="/">
          <img src={HeaderLogo} alt="header logo" />
        </NavLink>
        <Ul isMenuOpen={isMenuOpen}>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              end
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/profile"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              to="/users"
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
            >
              Users
            </NavLink>
          </li>
        </Ul>
        <MenuIcon onClick={handleClick}>
          <Hamburger
            color="#fff"
            onClick={handleClick}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={25}
          />
        </MenuIcon>
      </Nav>
    </Header>
  );
};

export default Navbar;
