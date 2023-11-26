import React, { useState } from "react";
import style from "./forgotPassword.module.css";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const { auth, setAuth } = useAuth();
  console.log(auth);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    newPassword: "",
    securityQuestion: "",
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
      const URL = "http://localhost:8000/api/auth/forgot-password";
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (data.success) {
        console.log(data.user);
        console.log(data.token);
        toast.success(data.message);
        navigate("/login");
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
      } else {
        console.log(data.message);
        toast.error(data.message);
        // navigate("/login");
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
        <h2>Forgot Password</h2>
        <form className="container" onSubmit={registerFormSubmit}>
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
            <label htmlFor="securityQuestion" className="form-label">
              Your Fav Cricket Team Name
            </label>
            <input
              type="text"
              className="form-control"
              id="securityQuestion"
              name="securityQuestion"
              value={value.securityQuestion}
              placeholder="Enter your Fav Cricket Team Name"
              onChange={inputEvent}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              value={value.newPassword}
              placeholder="Enter your Password..."
              onChange={inputEvent}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
