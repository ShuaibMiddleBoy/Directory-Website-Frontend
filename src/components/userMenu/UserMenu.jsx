import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const UserMenu = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          User Panel
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/user/profile">profile</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/user/lists">Lists</NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
