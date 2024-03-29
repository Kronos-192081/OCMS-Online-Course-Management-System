const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Post Schema

const PostSchema = new Schema ({

    title: {
        type: String,
        required: true
    },

    heading: {
        type: String
    },
    
    link: {
        type: String
    },

    main_body: {
        type: String
    },

    content: {
        type: String
    },

    likes: {
        type: Number,
        default: 0
    },

    comments: [
        {
            text: {
                type: String,
                required: true 
            },

            name: {
                type: String, 
                required: true
            },

            recomment: [
                {
                    f_name: {
                        type: String
                    },

                    comm_reply : {
                        type: String
                    }
                }
            ],

            date: {
                type: Date,
                default: Date.now
            }
        }
    ],

    tags: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);