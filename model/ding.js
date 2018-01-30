var mongoose = require('mongoose');

var Ding = mongoose.model('Ding', {
    name: String,
    type: String,
    geometry: { type: mongoose.Schema.Types.ObjectId, ref: 'Geometry' },
    texture: { type: mongoose.Schema.Types.ObjectId, ref: 'Texture' },
    material: String,
    created: Date,
    modified: Date,
    published: Boolean,
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Ding;