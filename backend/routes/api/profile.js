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

router.post('/edit', passport.authenticate('jwt', {session: false}), (req, res) =>{
    const profileFields = {};
    profileFields.user = req.user.id;
    if(req.body.name)profileFields.name = req.body.name;
    if(req.body.address)profileFields.address = req.body.address;
    if(req.body.subjects)profileFields.subjects = req.body.subjects;
    if(req.body.education)profileFields.education = req.body.education;
    if(req.body.teaching)profileFields.teaching = req.body.teaching;
    if(req.body.contact)profileFields.contact = req.body.contact;

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