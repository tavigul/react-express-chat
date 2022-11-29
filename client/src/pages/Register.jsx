import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

function Register() {
  const handleChange = (e) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!");
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>

        <div>
          <img src={Logo} alt="logo" />
          <h1>Hello!</h1>
        </div>

        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Register</button>
        <span>
          Already have an account? <Link to="login">Login</Link>
        </span>
      </form>
    </div>
  );
}

// const FormContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
//   background-color: #282E33;
// `;

// const LogoImg = styled.img`
//   width: 30px
// `

// const Brand = styled.div``;

export default Register;
