import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginRoute } from "../utils/APIroutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
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
    password: "12345678",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.name });
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Password is required.", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
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
      <div className="login flex h-screen items-center justify-center">
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
            value="justrecentrycreatedname"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter a password"
            name="password"
            value="12345678"
            onChange={(e) => handleChange(e)}
          />

          <button className="button" type="submit">
            Login
          </button>
          <span className="auth-link my-2 text-center">
            Already have an account? <Link to="/register">register</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
