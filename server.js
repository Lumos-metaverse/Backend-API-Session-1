require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("add mongodb url here", { useNewUrlParser: true}); //please add your mongodb connection string here
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", ()=>console.log("Hey! db is connected!"));

app.use(express.json());

const userRouter = require('./routes/users.js');
// app.use('/users', userRouter);

app.listen(3000, () =>console.log("Server Started"));

