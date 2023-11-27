import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const AdminMenu = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Admin Panel
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/admin/create-category">
            Create Category
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/admin/create-listing">Create Listing</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/admin/users">Users</NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminMenu;
