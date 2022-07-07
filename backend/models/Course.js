const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Post Schema

const CourseSchema = new Schema ({
    course_name:{
        type: String,
        required: true
    },

    note: {
        type: String
    },

    sub_course: [
        {
            Class: {
                type: String,
                required: true
            },

            description: {
                type: String
            },

            subjects: [
                {
                    Name: {
                        type: String
                    },
                    
                    descr: {
                        type: String
                    },

                    links: {
                        type: String
                    },

                    table: [
                        {
                            Topic: {
                                type: String,
                            },

                            details: {
                                type: String,
                            },

                            video_link: {
                                type: String,
                            },

                            reading_link: {
                                type: String
                            }
                        }
                    ]
                }
            ]


        }

    ]
});

module.exports = Course = mongoose.model('course', CourseSchema);