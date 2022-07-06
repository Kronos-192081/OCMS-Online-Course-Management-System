const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Course = require('../../models/Course');

router.get('/', (req, res) => {
    Course.find()
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ NoCourses: 'No courses found' }));
});

router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ NoCourse: 'No Course with that ID found' }));
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newCourse = new Course({
        course_name: req.body.course_name,
        note: req.body.note
    });

    newCourse.save().then(course => res.json(course));
})

router.post('/:id/update', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (req.body.course_name != undefined) {
                course.course_name = req.body.course_name;
            }
            if (req.body.note != undefined) {
                course.note = req.body.note;
            }
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            //Delete
            course.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ NoCourse: 'No course with that ID Found' }));
});

// Add Sub Course
router.post('/sub/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            const newsub = {
                Class: req.body.Class,
                description: req.body.description
            }

            course.sub_course.unshift(newsub);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

// Update Sub Course
router.post('/:id/update/sub/:sub_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (course.sub_course.filter(sub => sub._id.toString() === req.params.sub_id).length === 0) {
                return res.status(404).json({ nosub_course: 'Sub_Course does not exist' });
            }
            const ind = course.sub_course
                .map(item => item._id.toString())
                .indexOf(req.params.sub_id);
            console.log(ind)
            course.sub_course[ind].Class = req.body.Class;
            course.sub_course[ind].description = req.body.description;
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ NoCourse: 'No course with that ID found' }));
});

// Delete a Sub_Course
router.delete('/sub/:id/:sub_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (course.sub_course.filter(sub => sub._id.toString() === req.params.sub_id).length === 0) {
                return res.status(404).json({ nosub_course: 'Sub_Course does not exist' });
            }
            const ind = course.sub_course
                .map(item => item._id.toString())
                .indexOf(req.params.sub_id);
            course.sub_course.splice(ind, 1);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ nosub_course: 'Sub_Course does not exist' }));
});

router.post('/sub/subject/:id/:sub_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (course.sub_course.filter(sub => sub._id.toString() === req.params.sub_id).length === 0) {
                return res.status(404).json({ nosub_course: 'Sub_Course does not exist' });
            }
            const ind = course.sub_course
                .map(item => item._id.toString())
                .indexOf(req.params.sub_id);
            const newSubject = {
                descr: req.body.description,
                links: req.body.links
            }
            course.sub_course[ind].subjects.unshift(newSubject);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Update Subjects under a sub-course
router.post('/sub/subject/:id/:sub_id/subject_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (course.sub_course.filter(sub => sub._id.toString() === req.params.sub_id).length === 0) {
                return res.status(404).json({ nosub_course: 'Sub_Course does not exist' });
            }
            const ind = course.sub_course
                .map(item => item._id.toString())
                .indexOf(req.params.sub_id);
            if (course.sub_course[ind].subjects.filter(subject => subject._id.toString() === req.params.subject_id).length === 0) {
                return res.status(404).json({ nosubject: 'Subject does not exist' });
            }
            const ind1 = course.sub_course[ind].subjects
                .map(item => item._id.toString())
                .indexOf(req.params.subject_id);
            course.sub_course[ind].subjects[ind1].descr = req.body.description;
            course.sub_course[ind].subjects[ind1].links = req.body.links;
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Delete Subjects under a sub-course
router.delete('/sub/subject/:id/:sub_id/subject_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Course.findById(req.params.id)
        .then(course => {
            if (course.sub_course.filter(sub => sub._id.toString() === req.params.sub_id).length === 0) {
                return res.status(404).json({ nosub_course: 'Sub_Course does not exist' });
            }
            const ind = course.sub_course
                .map(item => item._id.toString())
                .indexOf(req.params.sub_id);
            if (course.sub_course[ind].subjects.filter(subject => subject._id.toString() === req.params.subject_id).length === 0) {
                return res.status(404).json({ nosubject: 'Subject does not exist' });
            }
            const ind1 = course.sub_course[ind].subjects
                .map(item => item._id.toString())
                .indexOf(req.params.subject_id);
                course.sub_course[ind].subjects.splice(ind1, 1);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});





