import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIroutes";

function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "justrecentrycreatedname",
    email: "menashetav@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.name });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (!data.status) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  return (
    <>
      <div className="register flex h-screen items-center justify-center">
        <form
          className="form flex flex-col"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-xl text-slate-50	">Sign up form</h1>
          </div>

          <input
            type="text"
            className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Username"
            name="username"
            value="helloworld"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Email"
            name="email"
            value="menashelellel34@gmail.com"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter a password"
            name="password"
            value="12345678"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Confirm password"
            name="confirmPassword"
            value="12345678"
            onChange={(e) => handleChange(e)}
          />

          <button className="button" type="submit">
            Register
          </button>
          <span className="auth-link my-2 text-center">
            Already have an account? <Link to="/login">login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
