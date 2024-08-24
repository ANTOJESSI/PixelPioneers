

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate(); // React Router hook for navigation
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Send the data to the server using axios
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          // Navigate to the dashboard page
          navigate('/land.html'); // Ensure '/dashboard' is correctly defined in React Router
        } else {
          // Handle unsuccessful login
          console.log("Login failed. Please check your credentials.");
          setError("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

        {error && <p className="text-danger text-center mt-3">{error}</p>}

        <p className="text-center mt-3">Don't Have an Account?</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
