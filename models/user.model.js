const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    phone:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    gender:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    dob:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    state : {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    country:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    terms:{
        type: Boolean,
        required: true,
    },
    profilePicture:{
        type: String,
        default: 'https://robohash.org/username'
    },
    isQuizCompleted:{
        type: Boolean,
        default: false
    },
    scores:{
        normalScore:{
            type: Number,
            default: 0  
        },
        dyslexicIndicatorScore:{
            type: Number,
            default: 0
        },
    }
  }, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;