var mongoose = require('mongoose');

var Space = mongoose.model('Space', {
    name: String,
    description: String,
    searchable: Boolean,    // enable to search by other users
    published: Boolean,
    created: Date,
    maps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Map'
    }],
    defaultMap: { type: mongoose.Schema.Types.ObjectId, ref: 'Map' },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Space;