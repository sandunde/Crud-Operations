import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Edit = () => {
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

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/edit_user/${id}`, data[0])
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1 className="text-center">Edit User {id}</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/" className="btn btn-success">
            Back
          </Link>
        </div>
        {data.map((student) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  value={student.name}
                  type="text"
                  name="name"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], name: e.target.value }])
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  value={student.email}
                  type="email"
                  name="email"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], email: e.target.value }])
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  value={student.gender}
                  type="text"
                  name="gender"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], gender: e.target.value }])
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  value={student.age}
                  type="number"
                  name="age"
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], age: e.target.value }])
                  }
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-warning">
                  Save
                </button>
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Edit;
