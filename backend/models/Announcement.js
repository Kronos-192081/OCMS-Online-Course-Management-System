const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    Heading: {
        type: String
    },
    link: {
        type: String
    },
    Subject: {
        type: String
    },
    Time_Duration: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Announcement = mongoose.model('announcement', AnnouncementSchema);
