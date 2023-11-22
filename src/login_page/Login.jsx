import React, { useState } from "react";
import style from "./login.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
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
      const URL = "http://localhost:8000/api/auth/login";
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
      <div className={style.register}>
        <h2>Register Here </h2>
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
