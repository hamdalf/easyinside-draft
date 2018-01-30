var mongoose = require('mongoose');

var Map = mongoose.model('Map', {
    name: String,
    created: Date,
    modified: Date,
    voxelSize: Number,      // centimeter
    width: Number,          // centimeter
    height: Number,         // centimeter
    bgImgName: String,
    bgImgSize: Number,
    fileName: String,
    fileSize: Number,
    fileModified: Date,
    optFileName: String,
    optFileSize: Number,
    optModified: Date,
    objFileName: String,
    objFileSize: Number,
    objMofified: Date,
    searchable: Boolean,    // enable to search by other users
    allowRobot: Boolean,
    usePath:Boolean,
    security: String,    // private, password, public
    password: String,
    _space: { type: mongoose.Schema.Types.ObjectId, ref: 'Space' },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Map;