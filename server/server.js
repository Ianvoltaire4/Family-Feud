const express= require('express');
const app = express();
const port = 5001
const bcrypt = require('bcrypt');
const winston = require('winston')
const session = require('express-session');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./models')


const cors = require('cors')

const store = new session.MemoryStore(); //store in db instead of store
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection()



//cors code
app.use(
    cors({
      origin: "*" //change * to deployed front end link when done
    })
  );

//sessions code
app.use(
  session({
    secret: "some secret", //change later to something more secure
    cookie: { maxAge: 30000 }, //how log in milisec until the session exprires
    saveUninitialized: true, //this makes it so that it doesnt generate a new session id everytime a user makes a request to the server and instead generates a new session id when the user logs in
    store: store //replace with the database so that the session will be saved there instead of the memory(store)
  })
);
app.use((req, res, next) => {
  console.log(store); //change to database
  console.log(`${req.method} - ${req.url}`);
  next();
});

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


app.get('/login', async(req, res)=>{
  res.send('')
})

app.post('/login', async (req, res) => {
  console.log(req.sessionID)
  const { username, password } = req.body;
  if (username && password){
    if(req.session.authenticated){
      res.json(req.session)
    }else{
      if(password==='123'){ //change 123 later
        res.session.authenticated=true
        req.session.user={
          username, password
        }
        res.json(req.session)
      }else{
        res.status(403).send('invalid credentials')
      }
    }
    res.send(200)
  }


  try {
    const dbUser = await Users.findOne({ where: { email: email } });
    console.log(dbUser)

    if (dbUser) {
      res.status(200).send('Login successful', dbUser );
    } else {
      res.status(403).send('User not found' );
    }
    if (username === dbUser.username && password === dbUser.password) {
      res.status(200).send('Login successful' );
    } else {
      res.status(401).send('Invalid username or password');
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error connecting to the database` });
  }
  // Perform authentication logic here (e.g., checking credentials against a database)
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
//====================================GAME ENDPOINTS========================================

app.get('/roundTwo', async (req, res)=>{
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = getRandomNumber(1, 7);
  console.log(randomNumber)
  
  const roundTwoQuestion = await Questions.findOne({ where: { questionID: randomNumber } });

  
})






app.listen(port, ()=>{console.log(`Server running on port: ${port}`)})