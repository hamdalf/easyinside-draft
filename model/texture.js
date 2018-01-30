var mongoose = require('mongoose');

var Texture = mongoose.model('Texture', {
    name: String,
    shading: String,    // 'THREE.FlatShading'
    color: String,      // '0.21, 0.15, 0.09' => RGB
    map: String,        // 'floor_wood2.jpg' => in tmaps folder of S3
    opacity: Number,    // 0 ~ 1
    created: Date,
    modified: Date,
    published: Boolean,
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Texture;