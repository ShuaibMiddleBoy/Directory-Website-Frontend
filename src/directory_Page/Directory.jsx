import React, { useEffect, useState } from 'react';
import style from './directory.module.css';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Directory = () => {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingResponse = await fetch('http://localhost:8000/api/listing/all-lists');
        const categoryResponse = await fetch('http://localhost:8000/api/category/categories');

        if (!listingResponse.ok || !categoryResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const listingData = await listingResponse.json();
        const categoryData = await categoryResponse.json();

        if (listingData.success) {
          setListings(listingData.listings);
        }

        if (categoryData.success) {
          setCategories(categoryData.categories);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  // Function to calculate the count of listings for each category
  const getCountForCategory = (categoryId) => {
    return listings.filter((listing) => listing.category._id === categoryId).length;
  };

  return (
    <div id='directory'>
      <Header />
      <Navbar />
      <div className={style.directoryContent}>
        <p>Black Money Movement is proactively vetting Black Excellence through entrepreneurship. This directory contains 4 – 5 star rated, brick and mortar, Black-owned businesses only. When you want to support businesses that are owned by African Americans, we ask you to support those who work hard to give you the very best that they have to offer. (If a company that you know of isn’t listed, send the name of the business, the owner’s name, and phone number to: blackmoneymovement2022@gmail.com We will connect with them soon after). Thanks for your support of this neverending growing Black-owned business community of excellence. -BMM</p>

        <form className={style.directoryListingForm}>
          <div className={style.first}>
            <input type="text" placeholder='Search Listings' />
            <input type="button" value='Find Listings' />
          </div>
          <div className={style.sec}>
            <input type="button" value='View All Listing' />
            <input type="button" value='Add Listing' />
          </div>
        </form>

        <ul className={style.directoryCategories}>
          {categories.map((category) => (
            <li key={category._id}>
              <Link to={`/directory/${category.slug}`}>{category.name}</Link> &nbsp; ({getCountForCategory(category._id)})
            </li>
          ))}
        </ul>

<div className={style.directoryListingLists}>
  {listings.map((listing) => {
    return (
      <div className={style.list} key={listing._id}>
        <h3>HELLLO</h3> {/* Assuming 'name' is a property of the listing */}
        <hr />
        <div className={style.listDetails}>
          <table>
            <tbody>
              <tr>
                <td className={style.label}>Listing Category</td>
                <td className={style.value}>
                  {/* Accessing the category name from the listing */}
                  <a href="#">{listing.category.name}</a> 
                </td>
              </tr>
              <tr>
                <td className={style.label}>Website</td>
                <td className={style.value}>
                  <a href={listing.websiteLink}>{listing.websiteLink}</a>
                </td>
              </tr>
              <tr>
                <td className={style.label}>Phone</td>
                <td className={style.value}>
                  {listing.phone}
                </td>
              </tr>
              <tr>
                <td className={style.label}>Address</td>
                <td className={style.value}>
                  {listing.address}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  })}
</div>

</div>
    <Footer/>
    </div>
  );
}

export default Directory;
