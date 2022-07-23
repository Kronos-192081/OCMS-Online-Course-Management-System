const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Profile:
const Profile = require('../../models/Profile');
//user:
const User = require('../../models/User');

// @ route GET current user's profile

router.post('/', (req, res) => {
    Profile.findOne({ user: req.body.id })
        .then(profile => {
            if(!profile) {
                return res.status(404).json({ NoProfile: 'No such profile'});
            }
            res.json(profile);
        })
        .catch(err => res.status(404));
});

// If you want to delete a field, just write it null to update

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) =>{
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.location)profileFields.location = req.body.location;
    if(req.body.subjects_offered)profileFields.subjects_offered = req.body.subjects_offered;
    if(req.body.Education_Experience)profileFields.Education_Experience = req.body.Education_Experience;
    if(req.body.Terms_Conditions)profileFields.Terms_Conditions = req.body.Terms_Conditions;

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            if(profile) {
                Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true})
                .then(profile => res.json(profile));
            } else {
                // Save Profile
                new Profile(profileFields).save().then(profile => res.json(profile));

            }
        })
        .catch(err => res.status(404));
});

module.exports = router;