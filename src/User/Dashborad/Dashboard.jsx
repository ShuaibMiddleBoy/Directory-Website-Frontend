import React from "react";
import style from "./dashboard.module.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import UserMenu from "../../components/userMenu/UserMenu";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;