import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AdminMenu from "../components/adminMenu/AdminMenu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const CreateCategory = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-3">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
