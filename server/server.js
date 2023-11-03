const express= require('express');
const app = express();
const port = 5001
const bcrypt = require('bcrypt');
const winston = require('winston')
const session = require('express-session');

const cors = require('cors')

app.use(express.json());


//cors code
app.use(
    cors({
      origin: "*" //change * to deployed front end link when done
    })
  );
// logger code
  app.all('*', (req, res, next) => {
    try {
        logger.info({
            level: 'info',
            method: req.method,
            body: req.body,
            url: req.url,
            parameters: req.params,
            timestamp: new Date().toLocaleString()
        });
        next();
    } catch (error) {
        logger.error({
            level: 'error',
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toLocaleString()
        });
        res.status(500).send('Error');
    }
});
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
//====================================TEST ENDPOINT========================================

app.get("/api", (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

//====================================LOGIN ENDPOINT========================================

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic here (e.g., checking credentials against a database)
  if (username === Users.username && password === Users.password) {
    res.status(200).send('Login successful' );
  } else {
    res.status(401).send('Invalid username or password');
  }
});




//====================================REGISTRATION ENDPOINT========================================

app.post('/registration', async (req,res)=>{
  const { firstName, lastName, email, username, password } = req.body;
  // Make sure the first and last name only have Uppercase and lowercase letters.
  const nameRegex = /^[A-Za-z]+$/; 
  // Make sure the password has at least 8 characters and allows for upper and lowercasse letters.
  const passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Allows for diffrent email endings.
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|gov|edu)$/;

  if(!emailRegex.test(email)) {
      return res.status(400).send('Invalid email format or ending. Email must end with .com, .net, .gov, or .edu.');
  }
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return res.status(400).send('First name and last name must contain only letters' );
  }
  if (!passwordRegex.test(password)) {
      return res.status(400).send('Password must include at least one uppercase letter, one lowercase letter, one special character, and one number.' );
  }

  const existingEmail = await Users.findOne({where: {email:email}})
  if (existingEmail) {
      return res.status(400).send('This email is already being used');
  }
  const existingUserName = await Users.findOne({ where: { username: username } });
  if (existingUserName) {
      return res.status(400).send('This username is already being used');
  }
  try {
      const saltRounds = 10;
      const hashedPasswords= await bcrypt.hash(password, saltRounds);

      await Users.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          username: req.body.username,
          password: req.body.hashedPasswords
      });
      logger.info({
          level: 'info',
          method: req.method,
          body: req.body,
          url: req.url,
          parameters: req.params,
          timestamp: new Date().toLocaleString()
      });

      res.send('Account created susccessfully' );
  }catch (error) {
      console.error('Error creating user', error);
      res.status(500).send('Failed to create user')
  }
});







app.listen(port, ()=>{console.log(`Server running on port: ${port}`)})