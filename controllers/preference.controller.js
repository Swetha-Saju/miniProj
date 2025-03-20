const Preference = require('../models/preference.model');

const savePreference = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const { font, ruler, spacing, lineHeight, readAloud } = req.body;
        const preferences = await Preference.findOne({ user: userId });
        if(!preferences) {
            const newPreference = new Preference({
                user: userId,
                preferences: {
                    font,
                    ruler,
                    spacing,
                    lineHeight,
                    readAloud
                }
            });
            await newPreference.save();
            res.status(201).json({success:true, message: 'Preference saved successfully' });
        }
        preferences.preferences = {
            font,
            ruler,
            spacing,
            lineHeight,
            readAloud
        };
        await preferences.save();
        res.status(200).json({ success:true,message: 'Preference updated successfully' });
    }
    catch (error) {
        res.status(500).json({ success:false, message: error.message });
        console.log(error);
    }
}

const getPreference = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const preferences = await Preference.findOne({ user: userId });
        if(!preferences) {
            return res.status(404).json({ success:false, message: 'Preference not found' });
        }
        res.status(200).json({ success:true, preferences : preferences.preferences });
    }
    catch (error) {
        res.status(500).json({ success:false, message: error.message });
        console.log(error);
    }
}

module.exports = { savePreference, getPreference };