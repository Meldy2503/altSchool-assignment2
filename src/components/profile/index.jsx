import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Contents } from "./profileStyle";

const Profile = () => {
  return (
    <Container>
      <Contents>
        <NavLink
          to="/profile/about-us"
          className={(navLink) => (navLink.isActive ? "active" : "navLink")}
        >
          About us
        </NavLink>
        <NavLink
          to="/profile/contact-us"
          className={(navLink) => (navLink.isActive ? "active" : "navLink")}
        >
          Contact us
        </NavLink>
        <div>
          <h2>WE CREATE AND TURN IDEAS INTO REALITY</h2>
          <p>
            We apply innovative design solutions to enhance people’s residential
            wellbeing and to help workplaces succeed! All our team collaborates
            with our clients! All our team collaborates with our clients, across
            all of our 3 offices, which are located throughout the US. Our
            mission is to implement the outstanding design ideas and solutions
            for any project we’re working on… During that process we carefully
            combine client’s guidelines, technical possibilities, as well as the
            environmental issues. Engineering and interior design solutions that
            we deliver are usually born after a collaborative process.
          </p>
        </div>
      </Contents>
    </Container>
  );
};

export default Profile;
