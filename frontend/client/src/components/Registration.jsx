import React, { useState } from "react";
import './Game.css'

const Registration = () => {
  //useState used to store all the input field values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const pageReload = (e) => {
    e.preventDefault();
  };

const handleSubmit=async()=>{
    //object to hold user registration data
    const requestData = {
    firstName: "Test",
    lastName: "Testy",
    email: "test@example.com",
    username: "gottatestemall",
    password: "Password123?",
  };
  
fetch("http://localhost:5001/registration", {
    method: "POST",
    headers: {
      "Content-type": "application/json", //must include this to prevent cors error
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestData), //converting json data to text for the input fields
  })
    .then(response => {
      if (response.ok) {
        // Handle a successful response (status code 2xx)
        return response.json();
      } else if (response.status === 400) {
        // Handle bad request (status code 400)
        return response.text().then(errorMessage => {
          throw new Error(errorMessage);
        });
      } else {
        // Handle other error responses
        throw new Error('An error occurred');
      }
    })
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error(error);
    });
}


  
  return (
    <>
      <h2 className="header">User Registration</h2>
      <div className="reg">
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="reg">
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="reg">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="reg">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="reg">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Register</button>
    </>
  );
};

export default Registration;
