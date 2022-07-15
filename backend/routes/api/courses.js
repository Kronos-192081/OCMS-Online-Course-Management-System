const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Course = require('../../models/Course');

// Get All Courses (Public)
router.get('/', (req, res) => {
    Course.find()
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ NoCourses: 'No courses found' }));
});

// Get Course of a particular course (Public)
router.get('/:id', (req, res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ NoCourse: 'No Course with that ID found' }));
});

// Rest Below are private

// Create a new course

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newCourse = new Course({
        course_name: req.body.course_name,
        note: req.body.note
    });

    newCourse.save().then(course => res.json(course));
})

//Update a course

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

// Delete a course

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

// Add a Sub-Course

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
                Name: req.body.Name,
                descr: req.body.description,
                links: req.body.links
            }
            course.sub_course[ind].subjects.unshift(newSubject);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Update Subjects under a sub-course
router.post('/sub/subject/:id/:sub_id/:subject_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
            course.sub_course[ind].subjects[ind1].Name = req.body.Name;
            course.sub_course[ind].subjects[ind1].descr = req.body.description;
            course.sub_course[ind].subjects[ind1].links = req.body.links;
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Delete Subjects under a sub-course
router.delete('/sub/subject/:id/:sub_id/:subject_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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

// Add tables
router.post('/sub/subject/table/:id/:sub_id/:subject_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
            const newtable = {
                Topic: req.body.Topic,
                details: req.body.details,
                video_link: req.body.video_link,
                reading_link: req.body.reading_link
            }
            course.sub_course[ind].subjects[ind1].table.push(newtable)
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Update tables
router.post('/sub/subject/table/update/:id/:sub_id/:subject_id/:table_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
            if (course.sub_course[ind].subjects[ind1].table.filter(table => table._id.toString() === req.params.table_id).length === 0) {
                return res.status(404).json({ nosubject: 'Table  does not exist' });
            }
            const ind2 = course.sub_course[ind].subjects[ind1].table
                .map(item => item._id.toString())
                .indexOf(req.params.table_id);

            course.sub_course[ind].subjects[ind1].table[ind2].Topic = req.body.Topic;
            course.sub_course[ind].subjects[ind1].table[ind2].details = req.body.details;
            course.sub_course[ind].subjects[ind1].table[ind2].video_link = req.body.video_link;
            course.sub_course[ind].subjects[ind1].table[ind2].reading_link = req.body.reading_link;
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

//Delete tables
router.delete('/sub/subject/table/delete/:id/:sub_id/:subject_id/:table_id', passport.authenticate('jwt', { session: false }), (req, res) => {
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
            if (course.sub_course[ind].subjects[ind1].table.filter(table => table._id.toString() === req.params.table_id).length === 0) {
                return res.status(404).json({ nosubject: 'Table  does not exist' });
            }
            const ind2 = course.sub_course[ind].subjects[ind1].table
                .map(item => item._id.toString())
                .indexOf(req.params.table_id);

            course.sub_course[ind].subjects[ind1].table.splice(ind2, 1);
            course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ noCourse: 'No course with that ID found' }));
});

module.exports = router;




