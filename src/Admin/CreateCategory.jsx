import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AdminMenu from "../components/adminMenu/AdminMenu";
import CategoryForm from "../components/form/CategoryForm";
import toast from "react-hot-toast";
import { Modal } from 'antd';
import style from './createCategory.module.css';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [visible, setvisible] = useState('');
  const [selected, setSelected] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  // create category 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/category/create-category", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: category }),
      });
  
      const data = await res.json();
      if (data.success) {
        toast.success(`${data?.category.name} category is created`);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  // update category 
  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:8000/api/category/update-category/${selected._id}`, {
        method: "PUT", // Use PUT or PATCH for updates
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: updatedName }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setvisible(false);
        fetchAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

    // update category 
    const handleDelete = async (id) => {
      try {
        const res = await fetch(`http://localhost:8000/api/category/delete-category/${id}`, {
          method: "delete", // Use PUT or PATCH for updates
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        const data = await res.json();
        if (data.success) {
          toast.success(`Category Deleted Successfully Deleted`);
          fetchAllCategories();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

  const fetchAllCategories = async (req, res) => {
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

  return (
    <>
      <div className={style.mainContainer}>
          <div className={style.sidebar}>
            <AdminMenu />
            </div>
          <div className={style.mainContent}>
            <h1>Manage Categories</h1>
            <CategoryForm
              handleSubmit={handleSubmit}
              value={category}
              setValue={setCategory}
            />
            <div>
              <table class={style.table}>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
              
                  {categories?.map((c, id) => {
                    return (
                      <tr key={id + 1}>
                        <th>{id + 1}</th>
                        <td>{c.name}</td>
                        <td>
                          <button  onClick={()=>{setvisible(true); setUpdatedName(c.name); setSelected(c)}} visible={visible}>Edit</button>
                          <button onClick={()=>{handleDelete(c._id)}}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
          
              </table>
            </div>
          </div>
          <Modal onCancel={()=>{setvisible(false)}} footer={null} visible={visible}>
            <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
          </Modal>
        </div>

    </>
  );
};

export default CreateCategory;
