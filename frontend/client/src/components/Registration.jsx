import React, { useState } from "react";
import './Game.css'
import { Routes, Route, Link } from "react-router-dom";
import Roundthree from "./Roundthree";


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
  
fetch("http://localhost:5001/signup", {
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

      <h2 className="header">Sign-Up For Our Newsletter</h2>

      <div className="reg">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="reg">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}><Link to='/Roundthree'>Sign Up?</Link>
</button>
    </>
  );
};

export default Registration;
