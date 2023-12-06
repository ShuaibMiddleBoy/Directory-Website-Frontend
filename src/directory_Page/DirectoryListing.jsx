import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DirectoryListing = () => {
  const { categorySlug } = useParams(); // Get the categorySlug from route parameters
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/category/listings-by-category/${categorySlug}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.success) {
          setListings(data.listings);
        } else {
          // No listings found for the category
          setListings([]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [categorySlug]);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Listings for Category: {categorySlug}</h2>
      {listings.length === 0 ? (
        <p>No listings exist for this category.</p>
      ) : (
        <div className="listings-container">
          {listings.map((listing) => (
            <div key={listing._id} className="listing">
              <h3>{listing.titleName}</h3>
              <p>Website: <a href={listing.websiteLink}>{listing.websiteLink}</a></p>
              <p>Phone: {listing.phone}</p>
              <p>Address: {listing.address}</p>
              <p>Zip Code: {listing.zipCode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DirectoryListing;