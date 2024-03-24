const express = require('express')
const mongoose = require('mongoose'); 
const Cubes = require('./models/cubesModel.js');
const userRoute =  require("./routes/userRoute.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users", userRoute);


app.post('/cube', async(req, res)=>{
    try {
        const cube = await Cubes.create(req.body);
        res.status(200).json({cube});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


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