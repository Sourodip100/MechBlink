const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');


mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("MongoDB connected Successfully")}).catch((err)=>{console.log("Error connecting to MongoDB", err);})

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/locations", locationRoutes);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})