import React, { useState } from "react";

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

  return (
    <>
      <h2>User Registration</h2>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleRegistration}>Register</button>
    </>
  );
};

export default Registration;
