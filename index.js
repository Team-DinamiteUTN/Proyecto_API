const express = require('express')
const mongoose = require('mongoose'); 
const userRoute =  require("./routes/userRoute.js")
const cubeRoute =  require("./routes/cubeRoute.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users", userRoute);
app.use("/cubes", cubeRoute);




  mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is Running on port 3000');
    });
  })
  .catch(()=>{
    console.log('Connection Failed');
  })