const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Announcement = require('../../models/Announcement');

router.get('/', (req, res)=> {
    Announcement.find()
        .sort({ date: -1})
        .then(announcements => res.json(announcements))
        .catch(err => res.status(404).json({ NoAnn: 'No Announce found'}));
});

router.get('/:id',  (req, res)=> {
    Announcement.findById(req.params.id)
        .then(announcements => res.json(announcements))
        .catch(err => res.status(404).json({ NoAnn: 'No Announcement found with that ID'}));
});

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const newAnnouncement= new Announcement({
        user: req.user.id,
        Heading: req.body.Heading,
        link: req.body.link ,
        Subject: req.body.Subject,
        Time_Duration: req.body.Time_Duration,
        content: req.body.content 
    });
    //console.log(newPost);
    newAnnouncement.save().then(announcement => res.json(announcement));
});

router.post('/:id/update', passport.authenticate('jwt', {session: false}), (req, res) => {
    Announcement.findById(req.params.id)
        .then(announcement => {
            if(req.body.Heading != undefined)
            {
            announcement.Heading = req.body.Heading;
            }
            if(req.body.Subject != undefined)
            {
            announcement.Subject = req.body.Subject;
            }
            announcement.link = req.body.link;
            if(req.body.Time_Duration != undefined)
            {
            announcement.Time_Duration = req.body.Time_Duration;
            }
            if(req.body.content != undefined)
            {
            announcement.content = req.body.content;
            }
            announcement.save().then(announcement => res.json(announcement));
        })
        .catch(err => res.status(404).json({ noAnnouncement: 'No Announcement found'}));

});

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res)=>{
    Announcement.findById(req.params.id)
            .then(announcement =>{
                //Delete
                announcement.remove().then(()=> res.json({ success: true}));
            })
            .catch(err=>res.status(404).json({ NoAnnouncement: 'No Announcement Found'}));

});

module.exports = router;
