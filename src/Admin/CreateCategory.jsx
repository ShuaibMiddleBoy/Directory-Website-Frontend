import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AdminMenu from "../components/adminMenu/AdminMenu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Button } from "bootstrap/dist/js/bootstrap.js";
import CategoryForm from "../components/form/CategoryForm";
import toast from "react-hot-toast";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    try {
      const res = await fetch(
        "http://localhost:8000/api/category/create-category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: category }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(`${data.name} category is created`);
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in input form");
    }
  };

  const fetchAllCategories = async (req, res) => {
    try {
      const res = await fetch("http://localhost:8000/api/category/categories");
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manget Categories</h1>
            <CategoryForm
              handleSubmit={handleSubmit}
              value={category}
              setValue={setCategory}
            />
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c, id) => {
                    return (
                      <tr key={id + 1}>
                        <th scope="row">{id + 1}</th>
                        <td>{c.name}</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
