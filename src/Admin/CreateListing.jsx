import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AdminMenu from "../components/adminMenu/AdminMenu";
import toast from "react-hot-toast";
import { Select } from "antd";
const { Option } = Select;

const CreateListing = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    titleName: "",
    websiteLink: "",
    phone: "",
    address: "",
    zipCode: "", // Add the zip code field
  });

  const inputValue = (e) => {
    const { name, value } = e.target;
    setProduct((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // get all categories
  const fetchAllCategories = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/category/categories");
      const data = await res.json();
      if (data.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log("Something went wrong in getting categories");
      console.log("Something went wrong in getting categories");
    }
  };
  
  useEffect(() => {
    fetchAllCategories();
  }, []);

  // create listing
  const handleCreate = async () => {
    console.log({ category, ...product });
    try {
      const res = await fetch("http://localhost:8000/api/listing/create-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          ...product,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success("Listing created successfully");
        // Clear the form fields or reset as needed
        setCategory("");
        setProduct({
          titleName: "",
          websiteLink: "",
          phone: "",
          address: "",
          zipCode: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Listing</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <input
                type="text"
                name="titleName"
                value={product.titleName}
                className="form-control mb-3"
                onChange={inputValue}
                placeholder="Enter title name.."
              />
              <input
                type="text"
                name="websiteLink"
                value={product.websiteLink}
                className="form-control mb-3"
                onChange={inputValue}
                placeholder="Enter website link.."
              />

              <input
                type="text"
                name="phone"
                value={product.phone}
                className="form-control mb-3"
                onChange={inputValue}
                placeholder="Enter phone number"
              />

              <textarea
                type="text"
                name="address"
                value={product.address}
                className="form-control mb-3"
                onChange={inputValue}
                placeholder="Enter address.."
              />
              <input
                type="text"
                name="zipCode"
                value={product.zipCode}
                className="form-control mb-3"
                onChange={inputValue}
                placeholder="Enter zip code"
              />
            </div>
            <button className="btn btn-primary" onClick={handleCreate}>
              Create Listing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateListing;