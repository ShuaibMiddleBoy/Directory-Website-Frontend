import React, { useState } from "react";
import style from "./register.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setValue((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const registerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = "http://localhost:8000/api/auth/register";
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (data.success) {
        console.log(data.message);
        toast.success(data.message);
        navigate("/");
      } else {
        console.log(data.message);
        toast.error(data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className={style.register}>
        <h2>Register Here </h2>
        <form className="container" onSubmit={registerFormSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={value.firstName}
              placeholder="Enter your First Name..."
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={value.lastName}
              placeholder="Enter your Last Name..."
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={value.email}
              placeholder="Enter your Email..."
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={value.phone}
              placeholder="Enter your Phone no..."
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={value.password}
              placeholder="Enter your Password..."
              onChange={inputEvent}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cPassword"
              name="cPassword"
              value={value.cPassword}
              placeholder="Enter your Confirm Password..."
              onChange={inputEvent}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
