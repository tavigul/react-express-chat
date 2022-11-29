import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleChange = (e) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!");
  };
  return (
    <div className="register flex h-screen items-center justify-center">
      <form
        className="form flex flex-col"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 class="text-center text-xl text-slate-50	">Sign up form</h1>
        </div>

        <input
          type="text"
          className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Enter a password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="my-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />

        <button className="button" type="submit">
          Register
        </button>
        <span className="register-link my-2  text-center">
          Already have an account? <Link to="login"></Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
