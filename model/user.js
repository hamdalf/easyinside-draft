var mongoose = require('mongoose');

var User = mongoose.model('User', {
    oauthID: Number,
    provider: String,
    name: String,
    created: Date,
    userGroup: String,  // users, administrators
    grade: String,   // silent, rustling, stomping
    spaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Space'
    }]
});

module.exports = User;