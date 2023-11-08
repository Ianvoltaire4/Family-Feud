import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  //useState used to store all the input field values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    //object to hold user registration data.
    const registrationData = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    //fetch from the registration endpoint in my server folder
    fetch("http://localhost:5001/registration", {
      method: "POST",
      headers: {
        "Content-type": "application/json", //must include this to prevent cors error
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(registrationData), //converting json data to text for the input fields
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle success (e.g., navigate to a success page).
          console.log("Registration successful");
        } else {
          // Handle error (e.g., display an error message).
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        // Handle network or other errors.
        console.error("Network error", error);
      });
  };
  const handleLogin = () => {
    //object to hold user registration data.
    const loginData = {
      email,
      password,
    };
    //fetch from the registration endpoint in my server folder
    fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json", //must include this to prevent cors error
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(loginData), //converting json data to text for the input fields
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle success (e.g., navigate to a success page).
          console.log("Login successful");
        } else {
          // Handle error (e.g., display an error message).
          console.error("Login failed");
        }
      })
      .catch((error) => {
        // Handle network or other errors.
        console.error("Network error", error);
      });
  };

  return (
    <>
      <h2>User Registration</h2>

      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleRegistration}>Register</button>
      <button to='/RoundTwo' onClick={handleLogin}><Link to='/RoundTwo'>Book of Life</Link></button>

    </>


  );
};

export default Registration;
