import React, { useEffect, useState } from "react";
import style from "./adminDashboard.module.css";
import AdminMenu from "../components/adminMenu/AdminMenu";
import { useAuth } from "../context/auth";
import { Modal, Input, Button } from 'antd';
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const { auth, setAuth } = useAuth();
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    titleName: "",
    websiteLink: "",
    phone: "",
    address: "",
    zipCode: "",
  });

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
  }, []);

  const openUpdateModal = (listing) => {
    setSelectedListing(listing);
    setFormData({
      category: listing.category || "",
      titleName: listing.titleName || "",
      websiteLink: listing.websiteLink || "",
      phone: listing.phone || "",
      address: listing.address || "",
      zipCode: listing.zipCode || "",
    });
    setUpdateModalVisible(true);
  };

  const handleUpdateListing = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/listing/update-list/${selectedListing._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        toast.success(`Listing updated successfully`);
        setUpdateModalVisible(false);
        fetchAllListings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleDeleteListing = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/listing/delete-list/${selectedListing._id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        toast.success(`Listing deleted successfully`);
        setDeleteModalVisible(false);
        fetchAllListings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const fetchAllListings = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/listing/all-lists");
      const data = await response.json();
      if (data.success) {
        setListings(data.listings);
      }
    } catch (error) {
      console.error("Error in getting all listings: ", error);
    }
  };

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
                <span className={style.listCategory}><b>Listing Category:</b> {listing.category ? listing.category.name : 'Category Not Available'}</span>
                <span className={style.Website}><b>Website:</b> <a href={listing.websiteLink}>{listing.websiteLink}</a></span>
                <span className={style.phone}><b>Phone:</b> {listing.phone}</span>
                <span className={style.address}><b>Address:</b> {listing.address}</span>
                <span className={style.zipCode}><b>Zip Code:</b> {listing.zipCode}</span>
                <div>
                  <button onClick={() => openUpdateModal(listing)}>Update</button>
                  <button onClick={() => setDeleteModalVisible(true)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <Modal
        title="Update Listing"
        visible={isUpdateModalVisible}
        onOk={handleUpdateListing}
        onCancel={() => setUpdateModalVisible(false)}
      >
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="titleName">Title Name:</label>
          <Input
            type="text"
            name="titleName"
            value={formData.titleName}
            onChange={(e) => setFormData({ ...formData, titleName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="websiteLink">Website Link:</label>
          <Input
            type="text"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={(e) => setFormData({ ...formData, websiteLink: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <Input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
          />
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal
        title="Delete Listing"
        visible={isDeleteModalVisible}
        onOk={handleDeleteListing}
        onCancel={() => setDeleteModalVisible(false)}
      >
        Are you sure you want to delete this listing?
      </Modal>
    </>
  );
};

export default AdminDashboard;