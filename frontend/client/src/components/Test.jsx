import React, { useEffect, useState } from "react";


const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  const handleLoad=async()=>{
    console.log("first")
    let response= await fetch("http://localhost:5001/api", {
      method: "GET", //must include type (GET,POST,PUT,DELETE)
      headers: {
        'Content-type': 'application/json', //must include this to prevent cors error
        'Access-Control-Allow-Origin': '*'
      }
    })
    let data = await response.json()
    setBackendData(data);

  }
  useEffect(() => {
    handleLoad()
    }, []);

  return (
    <>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )}
    </>
  );
};

export default App;