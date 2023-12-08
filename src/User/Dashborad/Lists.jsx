import React, { useEffect, useState } from "react";
import UserMenu from "../../components/userMenu/UserMenu";
import style from "./lists.module.css";

const Lists = () => {
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const jsonData = localStorage.getItem("auth");
  const data = JSON.parse(jsonData);

  useEffect(() => {
    // Define a function to fetch the user's listings
    const fetchMyListings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/listing/my-listings", {
          method: "GET",
          headers: {
            Authorization: data.token,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setMyListings(responseData.listings);
          setLoading(false);
        } else {
          // Handle error cases here
          console.error("Failed to fetch user's listings");
        }
      } catch (error) {
        console.error("Error while fetching user's listings:", error);
      }
    };

    // Call the fetchMyListings function to load the user's listings when the component mounts
    fetchMyListings();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.mainContainer}>
          <div className={style.sidebar}>
            <UserMenu />
          </div>
          <div className={style.mainContent}>
            <h3>Your Lists</h3>
            <div className={style.cards}>
              {myListings.map((listing) => (
                <div className={style.card} key={listing._id}>
                  {/* Render listing details here */}
                  <span className={style.listCategory}>
                    <b>Category:</b> {listing.category.name}
                  </span>
                  <span className={style.Website}>
                    <b>Website:</b> {listing.websiteLink}
                  </span>
                  <span className={style.phone}>
                    <b>Phone:</b> {listing.phone}
                  </span>
                  <span className={style.address}>
                    <b>Address:</b> {listing.address}
                  </span>
                  <span className={style.zipCode}>
                    <b>Zip Code:</b> {listing.zipCode}
                  </span>
                  <div>
                    <button>Update</button>
                    <button>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Lists;