import React from "react";
import style from "./adminDashboard.module.css";
import AdminMenu from "../components/adminMenu/AdminMenu";
import { useAuth } from "../context/auth";

const AdminDashboard = () => {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.sidebar}>
          <AdminMenu />
        </div>
        <div className={style.mainContent}>
          <h1>Welcome To Dashboard Dear {auth?.user?.firstName} {auth?.user?.lastName}</h1>
          <h3>Listings</h3>
          <div className={style.cards}>
          <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
            <div className={style.card}>
              <span className={style.listCategory}> <b>Listing Category:</b>  Bakery</span>
              <span className={style.Website}><b>Website:</b> http://www.alshbakery.com</span>
              <span className={style.phone}> <b>Phone:</b> 770-981-0136</span>
              <span className={style.address}><b>Address:</b> 4808 Flat Shoals Pkwy
                Decatur, Ga.</span>
                <span className={style.zipCode}><b>Zip Code:</b> 30034</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
