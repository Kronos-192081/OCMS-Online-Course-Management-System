const { SECRET, DB_USERNAME, DB_PASSWORD } = require('./secret');

module.exports = {
    mongoURI: 'mongodb+srv://' + DB_USERNAME + ':' + DB_PASSWORD + '@cluster0.wwklw8m.mongodb.net/AProj?retryWrites=true&w=majority',
    secretOrKey: SECRET
};