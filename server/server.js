const express= require('express');
const app = express();
const port = 5001
const bcrypt = require('bcrypt');
const winston = require('winston')
const cors = require('cors')

app.use(
    cors({
      origin: "*" //change * to deployed front end link when done
    })
  );

app.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})


app.listen(port, ()=>{console.log(`Server running on port: ${port}`)})