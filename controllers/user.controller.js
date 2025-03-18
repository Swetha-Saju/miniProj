
const User = require('../models/user.model');
// const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const signUp = async (req, res) => {
    const { username,email, password, phone, fullname,gender,dob,city,state,country,terms} = req.body;
    if(!username || !email || !password || !phone || !fullname || !gender || !dob || !city || !country || !terms ||!state) {
        return res.status(400).json({ success:false,message: 'All fields are required' });
    }
    try{
        const userExists = await User
            .findOne({ email });
        if(userExists) {
            return res.status(400).json({success:false, message: 'User already exists' });
        }
        const userExists1 = await User
            .findOne({ username });
        if(userExists1) {
            return res.status(400).json({ success:false,message: 'Username already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePicture = 'https://robohash.org/' + username;
        const user = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            fullname,
            gender,
            dob,
            city,
            state,
            country,
            terms,
            profilePicture
        });
       const savedUser = await user.save();
       const { password: userPassword, ...rest } = savedUser._doc;
        req.session.user = rest;
        res.status(201).json({ success:true ,message: 'User created successfully' ,isQuizCompleted:rest.isQuizCompleted});
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false, message: 'Error creating user' });
    }

}
const logIn = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({ success:false , message: 'Email and password are required' });
    }
    try {
        const user = await User.findOne({ username });
        if(!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        // const token = generateToken(user);
        const { password: userPassword, ...rest } = user._doc;
        // res.cookie('authToken', token, { httpOnly: true });
        req.session.user = rest;
        res.status(200).json({ success: true, message: 'Sign-in successful',isQuizCompleted:rest.isQuizCompleted });
        // res.status(200).json({ message: 'Sign-in successful' , token: token, user: rest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error signing in' });
    }
}

const logout = (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.status(200).json({success:true, message: 'Logged out successfully' });
}
const saveScore = async (req, res) => {
    const { normalScore, dyslexicIndicatorScore } = req.body;
    if(normalScore === undefined || dyslexicIndicatorScore === undefined) {
        return res.status(400).json({ success: false, message: 'Both score types are required' });
    }
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.session.user._id }, 
            { 
                $set: { 
                    'scores.normalScore': normalScore,
                    'scores.dyslexicIndicatorScore': dyslexicIndicatorScore,
                    isQuizCompleted: true
                }
            }, 
            { new: true }
        );
        res.status(200).json({ success: true, message: 'Score saved successfully' });
    } catch(err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error saving score' });
    }
}


module.exports = { signUp, logIn ,  logout, saveScore };