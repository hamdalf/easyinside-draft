var mongoose = require('mongoose');

var Geometry = mongoose.model('Geometry', {
    name: String,
    data: String,
    created: Date,
    modified: Date,
    published: Boolean,
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Geometry;