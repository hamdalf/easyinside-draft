const Map = require('../../model/map');
var GraphSearch = require('./graph-search');

var PathFinder = {
    graphSearchs: {}
};

PathFinder.addGraph = function(mId, callback) {
    if (typeof this.graphSearchs[mId] == 'undefined') {
        Map.findById(mId, (err, map) => {
            if (err) {
                res.send(err);
            }
            this.graphSearchs[mId] = new GraphSearch();
            this.graphSearchs[mId].floorFile = '/maps/' + mId + '.json';
            this.graphSearchs[mId].deskFile = '/desks/' + mId + '.json';
            this.graphSearchs[mId].optimized = true;
            var canvasWidth = Math.floor(10 * map.width / map.voxelSize);
            var canvasHeight = Math.floor(10 * map.height / map.voxelSize);
            this.graphSearchs[mId].xLength = (map.width / map.voxelSize);
            this.graphSearchs[mId].yLength = (map.height / map.voxelSize);
            this.graphSearchs[mId].set(mId, true, callback);

            //callback(this.graphSearchs[mId]);
        });   
    }
};

PathFinder.getGraph = function(mId, callback) {
    if (typeof this.graphSearchs[mId] == 'undefined') {
        this.addGraph(mId, callback);
    } else {
        callback(this.graphSearchs[mId]);
    }
};

module.exports = PathFinder;