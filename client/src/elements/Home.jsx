import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (deleted) {
      setDeleted(false);
      axios
        .get("http://localhost:5000/students")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [deleted]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        setDeleted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid vh-100 vw-100 d-flex flex-column align-items-center">
      <h1 className="title">Students Record</h1>
      <div className="d-flex justify-content-end w-100">
        <Link className="btn btn-success" to="/create">
          <i className="fas fa-plus"></i>
          Add Student
        </Link>
      </div>
      <div className="table-responsive w-100">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>
                  <Link
                    className="btn btn-success mx-2"
                    to={`/read/${student.id}`}
                  >
                    <i className="fas fa-eye"></i> Read
                  </Link>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/edit/${student.id}`}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(student.id)}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
