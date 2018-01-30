var mongoose = require('mongoose');

var Robot = mongoose.model('Robot', {
    name: String,
    isHost: Boolean,
    isBusy: Boolean,
    position: mongoose.Schema.Types.Mixed,
    direction: String,
    routes: [mongoose.Schema.Types.Mixed],
    _map: { type: mongoose.Schema.Types.ObjectId, ref: 'Map' },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = Robot;