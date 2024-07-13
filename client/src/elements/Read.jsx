// Read.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="vh-100 vw-100 bg-light d-flex flex-column align-items-center justify-content-center">
      <div className="container bg-white p-5 rounded shadow">
        <h1 className="text-center mb-4">User {id}</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/" className="btn btn-success">
            Back
          </Link>
        </div>
        {data.map((student) => (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID:</b> {student.id}
            </li>
            <li className="list-group-item">
              <b>Name:</b> {student.name}
            </li>
            <li className="list-group-item">
              <b>Email:</b> {student.email}
            </li>
            <li className="list-group-item">
              <b>Age:</b> {student.age}
            </li>
            <li className="list-group-item">
              <b>Gender:</b> {student.gender}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Read;
