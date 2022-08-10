const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get All users - GET
router.get('/', async (req,res)=> {
    const users= await User.find();
    res.json(users);
})
//Get one user - GET (params)
// create a user - POST
// update a user - 
// delete a user
module.exports = router;