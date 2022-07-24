const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    subjects: {
        type: String
    },
    education: {
        type: String
    },
    teaching: {
        type: String
    },
    contact: {
        type: String
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
