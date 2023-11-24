import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const { auth, setAuth } = useAuth();
  console.log(auth.token);
  useEffect(() => {
    const authCheck = async () => {
      const res = await fetch("http://localhost:8000/api/auth/user-auth", {
        headers: {
          authorization: auth?.token,
        },
      });
      const result = await res.json();
      if (result.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
