const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
// const Profile = require('../../models/Profile');

//@routes GET api requests
//@desc   Test Post Route
//@access Public
router.get('/test', (req, res) => res.json({msg: 'Posts works'}));
//@routes GET api requests
//@desc   Test Post Route
//@access Public
router.get('/', (req, res)=> {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
});
//get post by id
router.get('/:id', (req, res)=> {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ NoBlog: 'No post found with that ID'}));
});
//@routes POST api requests
//@desc   Create Post
//@access Private

router.post('/', (req, res) => {
    const newPost= new Post({
        title: req.body.title,
        heading: req.body.heading,
        link: req.body.link 
    });
    //console.log(newPost);

    newPost.save().then(post => res.json(post));
});

//update a post , Private

router.post('/:id/update', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            if(req.body.title != undefined)
            {
            post.title = req.body.title;
            }
            if(req.body.heading != undefined)
            {
            post.heading = req.body.heading;
            }
            post.link = req.body.link;
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ noBlog: 'No post found'}));

});

//Add main Body
//Private

router.post('/mb/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            const newmb = {
                Question: req.body.Question,
                Answer: req.body.Answer
            }

            post.main_body.unshift(newmb);
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ noBlog: 'No post found'}));
});

//Update Main Body
//Private
router.post('/:id/update/mb/:mb_id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            if(post.main_body.filter(mb => mb._id.toString() ===req.params.mb_id).length === 0) {
                return res.status(404).json({ nocontent: 'Content does not exist'});
            }
            const ind = post.main_body
                .map(item => item._id.toString())
                .indexOf(req.params.mb_id);
            console.log(ind)
            post.main_body[ind].Question = req.body.Question;
            post.main_body[ind].Answer = req.body.Answer;
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
})

// Remove main Body
//Private

router.delete('/mb/:id/:mb_id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            if(post.main_body.filter(mb => mb._id.toString() ===req.params.mb_id).length === 0) {
                return res.status(404).json({ nocontent: 'Content does not exist'});
            }
            const ind = post.main_body
                .map(item => item._id.toString())
                .indexOf(req.params.mb_id);
            post.main_body.splice(ind, 1);
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
})

// Delete Post 
// Private

router.delete('/:id', (req, res)=>{
    // After Validation
    // Profile.findOne({ user: req.user.id})
    // .then(profile => {
    //     Post.findById(req.params.id)
    //         .then(post =>{
    //             //Check Post Owner
    //             if(post.user.toString() !== req.user.id)
    //             {
    //                 return res.status(401).json({ Unauthorized: 'User is Not Authroized' });
    //             }

    //             //Delete
    //             post.remove().then(()=> res.json({ success: true}));
    //         })
    //         .catch(err=>res.status(404).json({ NoBlog: 'No post Found'}));
    // });

    Post.findById(req.params.id)
            .then(post =>{
                //Delete
                post.remove().then(()=> res.json({ success: true}));
            })
            .catch(err=>res.status(404).json({ NoBlog: 'No post Found'}));

});

//likes

router.post('/like/:id', (req, res)=>{
    Post.findById(req.params.id)
        .then(post => {
            post.likes = post.likes + 1;

            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post Found'}));
});

//comments
//Add comments to the post (Public)

router.post('/comment/:id', (req, res)=>{
    Post.findById(req.params.id)
        .then(post => {
            const newComment = {
                text: req.body.text,
                name: req.body.name
            }

            post.comments.unshift(newComment);

            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
})

// Reply, Public

router.post('/recomment/:id/:comment_id', (req, res)=>{
    Post.findById(req.params.id)
        .then(post => {
            if(post.comments.filter(comment => comment._id.toString() ===req.params.comment_id).length === 0) {
                return res.status(404).json({ nocomment: 'Comment does not exist'});
            }
            const ind = post.comments
                .map(item => item._id.toString())
                .indexOf(req.params.comment_id);
            const newRecomment = {
                f_name: req.body.name,
                comm_reply: req.body.recomment
            }
            // console.log(post.comments[ind].recomment);
            post.comments[ind].recomment.unshift(newRecomment);
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
})

// Delete , Private

router.delete('/:id/:comment_id', (req, res)=>{
    Post.findById(req.params.id)
        .then(post => {
            if(post.comments.filter(comment => comment._id.toString() ===req.params.comment_id).length === 0) {
                return res.status(404).json({ nocomment: 'Comment does not exist'});
            }
            const ind = post.comments
                .map(item => item._id.toString())
                .indexOf(req.params.comment_id);
            post.comments.splice(ind, 1);
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ NoBlog: 'No post found'}));
})



module.exports = router;

// passport.authenticate('jwt', {session: false})