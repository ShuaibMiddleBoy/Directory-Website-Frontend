import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AdminMenu from "../components/adminMenu/AdminMenu";
import style from './users.module.css'

const Users = () => {
  return (
    <>
      <div className={style.mainContainer}>
          <div className={style.sidebar}>
            <AdminMenu />
          </div>
          <div className={style.mainContent}>
            <h1>All Users</h1>
            <table className={style.table}>
            <tr>
    <th>#</th>
    <th>User Name</th>
    <th>User Email</th>
    <th>User Address</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Shuaib Khan</td>
    <td>skhan.csit@gmail.com</td>
    <td>Kp, Swat </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Shuaib Khan</td>
    <td>skhan.csit@gmail.com</td>
    <td>Kp, Swat </td>
  </tr>
  <tr>
    <td>3</td>
    <td>Shuaib Khan</td>
    <td>skhan.csit@gmail.com</td>
    <td>Kp, Swat </td>
  </tr>
  <tr>
    <td>4</td>
    <td>Shuaib Khan</td>
    <td>skhan.csit@gmail.com</td>
    <td>Kp, Swat </td>
  </tr>
  <tr>
    <td>5</td>
    <td>Shuaib Khan</td>
    <td>skhan.csit@gmail.com</td>
    <td>Kp, Swat </td>
  </tr>

            </table>
          </div>
        </div>
      
    </>
  );
};

export default Users;
