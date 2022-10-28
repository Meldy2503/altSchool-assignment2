import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Contents, Heading } from "./profileStyle";

const Profile = () => {
  return (
    <Container>
      <Contents>
        <NavLink to="/profile/users">Users</NavLink>
        <NavLink to="/profile/items">items</NavLink>
        <Heading>Profiles</Heading>
      </Contents>
    </Container>
  );
};

export default Profile;
