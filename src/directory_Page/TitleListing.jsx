import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TitleListing = () => {
  const { titleName } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/listing/by-title/${titleName}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("data ", data);

        if (data.success) {
          setListings(data.listings);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [titleName]);

  return (
    <div>
      <h2>Listings for {titleName}</h2>
      <ul>
        {listings.map((listing) => (
          <>
            <div key={listing._id}></div>
            <h3>{listing.titleName}</h3>
            <p>
              Website: <a href={listing.websiteLink}>{listing.websiteLink}</a>
            </p>
            <p>Phone: {listing.phone}</p>
            <p>Address: {listing.address}</p>
            <p>Zip Code: {listing.zipCode}</p>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TitleListing;
