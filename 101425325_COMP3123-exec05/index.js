const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const router = express.Router();
app.use(express.json());

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req, res) => {
  const userFilePath = path.join(__dirname, 'user.json');

  fs.readFile(userFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read user data' });
    }
    
    try {
      const userData = JSON.parse(data); 
      res.json(userData); 
    } catch (parseError) {
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const userFilePath = path.join(__dirname, 'user.json');

  // Asynchronously read the user.json file
  fs.readFile(userFilePath, 'utf8', (err, data) => {
    if (err) {
      // Handle the error (for example, log it and return a server error)
      console.error(err);
      return res.status(500).json({ status: false, message: "Server Error" });
    }
    const userData = JSON.parse(data);
    
    const { username, password } = req.body;

    if (username !== userData.username) {
      return res.json({ status: false, message: "User Name is Invalid" });
    }

    if (password !== userData.password) {
      return res.json({ status: false, message: "Password is Invalid" });
    }
    res.json({ status: true, message: "User is Valid" });
  });
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logout.<b>`)
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error'); 
});

app.use('/', router);

app.listen(process.env.port || 3001);

console.log('Web Server is listening at port '+ (process.env.port || 3001));