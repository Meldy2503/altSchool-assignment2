import React from "react";
import Profile from "../components/profile/index";
import { Outlet } from "react-router-dom";

const UsersProfile = () => {
  return (
    <div>
      <Profile />
      <Outlet />
    </div>
  );
};

export default UsersProfile;
