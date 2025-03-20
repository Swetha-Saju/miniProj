const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

const sendUserDetails = async (req, res) => {
    try{
        //retrive all users other than admin dont retrive passworsd
        // console.log('here')
        const users = await User.find(
            { role: { $ne: 'admin' } }, // Filter out admin users
            { password: 0 } // Exclude password field from results
        );
        return res.status(200).json({
            success: true,
            users: users
        });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = sendUserDetails;