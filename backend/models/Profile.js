const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String
    },
    subjects_offered: {
        type: String
    },
    Education_Experience: {
        type: String
    },
    Terms_Conditions: {
        type: String
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
