import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AdminMenu from "../components/adminMenu/AdminMenu";
import style from './users.module.css'

const Users = () => {
  const [users, setUsers] = useState([]); // State to store users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auth/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.data); // Set users in state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run once on mount

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.sidebar}>
          <AdminMenu />
        </div>
        <div className={style.mainContent}>
          <h1>All Users</h1>
          <table className={style.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
