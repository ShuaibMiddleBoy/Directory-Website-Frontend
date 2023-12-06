import React, { useEffect, useState } from 'react';
import style from './directory.module.css';
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Directory = () => {
  const [listings, setListings] = useState([]);
  // console.log(listings);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/listing/all-lists');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
     if(data.success){
      setListings(data.listings)
     }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='directory'>
    <Header/>
    <Navbar/>
<div className={style.directoryContent}>
<p>Black Money Movement is proactively vetting Black Excellence through entrepreneurship. This directory contains 4 – 5 star rated, brick and mortar, Black-owned businesses only. When you want to support businesses that are owned by African Americans, we ask you to support those who work hard to give you the very best that they have to offer. (If a company that you know of isn’t listed, send the name of the business, the owner’s name, and phone number to: blackmoneymovement2022@gmail.com We will connect with them soon after). Thanks for your support of this neverending growing Black owned business community of excellence. -BMM</p>


<form className={style.directoryListingForm}>
  <div className={style.first}>
  <input type="text" placeholder='Search Listings'/>
  <input type="button" value='Find Listings'/>
  </div>
  <div className={style.sec}>
  <input type="button" value='View All Listing'/>
  <input type="button" value='Add Listing'/>
  </div>
</form>
<ul className={style.directoryCategories}>
<li>
  <a href="">Acupuncture </a> &nbsp; (1)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(8)
</li>
<li>
  <a href="">Art Studio </a> &nbsp; (7)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(14)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(9)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(2)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(14)
</li>
<li>
  <a href="">Art Studio </a> &nbsp;(2)
</li>
</ul>

<div className={style.directoryListingLists}>
  {listings.map((listing) => {
    return (
      <div className={style.list} key={listing._id}>
        <h3>{listing.name}</h3> {/* Assuming 'name' is a property of the listing */}
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
  )
}

export default Directory
