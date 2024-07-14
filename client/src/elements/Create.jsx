// Create.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/add_user", values)
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="vh-100 bg-light p-4 d-flex flex-column align-items-center justify-content-center">
      <div className="container bg-white p-5 rounded shadow">
        <h1 className="text-center mb-4">Add Student</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/" className="btn btn-success">
          <i className="fas fa-chevron-left"></i>
            Home
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-warning">
            <i className="fas fa-check"></i>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
