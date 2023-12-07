import React, { useEffect, useState } from "react";
import style from "./adminDashboard.module.css";
import AdminMenu from "../components/adminMenu/AdminMenu";
import { useAuth } from "../context/auth";

const AdminDashboard = () => {
  const { auth, setAuth } = useAuth();
  const [listings, setListings] = useState([]); // State to store the listings data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/listing/all-lists"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.success) {
          setListings(data.listings);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Fetch data when the component mounts

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
            {listings.map((listing) => (
              <div className={style.card} key={listing._id}>
                <span className={style.listCategory}> <b>Listing Category:</b> {listing.category ? listing.category.name : 'Category Not Available'}</span>
                <span className={style.Website}><b>Website:</b> <a href={listing.websiteLink}>{listing.websiteLink}</a></span>
                <span className={style.phone}> <b>Phone:</b> {listing.phone}</span>
                <span className={style.address}><b>Address:</b> {listing.address}</span>
                <span className={style.zipCode}><b>Zip Code:</b> {listing.zipCode}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;