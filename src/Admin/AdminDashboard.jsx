import React from "react";
import style from "./adminDashboard.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AdminMenu from "../components/adminMenu/AdminMenu";
import { useAuth } from "../context/auth";

const AdminDashboard = () => {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 text-center card w-50 m-auto">
            Welcome {auth?.user?.firstName} {auth?.user?.lastName}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
