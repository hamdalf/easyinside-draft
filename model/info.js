var mongoose = require('mongoose');

var Info = mongoose.model('Info', {
    name: String,
    type: String,
    created: Date,
    modified: Date,
    picFileName: String,
    picFileSize: Number,
    normalized: String,
    description: String,
    contact: String,
    _space: { type: mongoose.Schema.Types.ObjectId, ref: 'Space' },
    _map: { type: mongoose.Schema.Types.ObjectId, ref: 'Map' },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Info;