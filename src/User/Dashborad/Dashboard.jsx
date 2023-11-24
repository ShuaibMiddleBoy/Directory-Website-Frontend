import React from "react";
import style from "./dashboard.module.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1>Dashborad</h1>
      <Footer />
    </>
  );
};

export default Dashboard;
