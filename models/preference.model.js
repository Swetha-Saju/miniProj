const mongoose = require('mongoose');
const User = require('./user.model');
const preferenceSchema = new mongoose.Schema({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
    preferences: {
        font: {
          enabled: {type: Boolean},
          type: {
            type: String,
          },
          size: {type: Number}
        },
        ruler: {
          enabled: Boolean,
          height: Number
        },
        spacing: {
          enabled: Boolean,
          wordSpacing: Number,
          letterSpacing: Number
        },
        lineHeight: {
          enabled: Boolean,
          value: Number
        },
        readAloud: {
          enabled: Boolean
        }
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
});
    
    // Update the 'updatedAt' field on save
preferenceSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});
    
module.exports = mongoose.model('Preference', preferenceSchema);