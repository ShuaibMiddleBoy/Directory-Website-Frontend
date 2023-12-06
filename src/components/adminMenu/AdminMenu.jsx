import React from "react";
import { NavLink } from "react-router-dom";
import style from './adminMenu.module.css';


const AdminMenu = () => {

  return (
<>
     <ul className={style.ul}>
        <li>
        <NavLink to="/dashboard/admin">
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/create-category">
            Create Category
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dashboard/admin/create-listing">Create Listing</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/users">Users</NavLink>
        </li>
      </ul> 
    </>
  );
};

export default AdminMenu;
