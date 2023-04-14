import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../actions/auth";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
    gender:"",
    city:""
  });

  const { fullName, email, password, password2, gender, city } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      register({ fullName, email, password, gender, city});
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <form
          className="bg-blue-50 rounded px-2 pt-0 pb-0 mb-0"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fullName"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              value={fullName}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          {/* /////////////////////////////////// */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            Male{"   "}
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={onChange}
              checked={formData.gender==="male"}
            />{"                               "}
            Female{"   "}
            <input
              
              type="radio"
              name="gender"
              value="female"
              onChange={onChange}
              checked={formData.gender==="female"}
            />{"                               "}
            Others{"   "}
            <input
              
              type="radio"
              name="gender"
              value="others"
              onChange={onChange}
              checked={formData.gender==="others"}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your city name"
              name="city"
              value={city}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="mt-4">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
