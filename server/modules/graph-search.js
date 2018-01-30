var path = require('path'),
    s3fs = require('./s3file'),
    binaryHeap = require('./binaryheap'),
    graph = require('./graph'),
    aStar = require('./astar'),
    WALL = 0;

var GraphSearch = function () {
    this.graph = null;
    this.startPoint = null;
    this.endPoint = null;
    this.astar = new aStar();
    this.mapId = null;
    this.floorFile = null;
    this.deskFile = null;
    this.xLength = null;
    this.yLength = null;
    this.optimized = false;
    this.nodeRow = null;
    this.nodes = null;
    this.callback = null;
};

GraphSearch.prototype = {
    init: function (nodes) {
        this.graph = new graph(nodes);
    },
    setPoint: function (x1, y1, x2, y2) {
        this.startPoint = this.graph.grid[x1][y1];
        this.endPoint = this.graph.grid[x2][y2];
    },
    set: function (mId, r, callback) {
        var reload = r ? r : false;
        this.callback = callback;
        if (this.mapId == null || reload == true) {
            this.mapId = mId;
            this.nodes = [];
            var nodeRow;
            
            for (var x = 0; x < this.xLength; x++) {
                nodeRow = [];
                for (var y = 0; y < this.yLength; y++) {
                    nodeRow.push(WALL);
                }
                this.nodes.push(nodeRow);
            }

            var fs = new s3fs();
            fs.readFile(this.floorFile).then(function(that) {
                var t = that;
                return function(data) {
                    t.setFloorData(data);
                }
            }(this));
        } else {
            console.log('return from cache');
        }
    },
    setFloorData: function(data) {
        var floorData = JSON.parse(data);
        var xHalf = Math.floor(this.xLength / 2);
        var yHalf = Math.floor(this.yLength / 2);
        for (var i = 0; i < floorData.d.length; i++) {
            this.nodes[floorData.d[i].x + xHalf][floorData.d[i].z + yHalf] = floorData.d[i].p;
        }

        var fs = new s3fs();
        fs.readFile(this.deskFile).then(function(that) {
            var t = that;
            return function(data) {
                t.setDeskData(data);
            }
        }(this));
    },
    setDeskData: function(data) {
        var deskData = JSON.parse(data);
        var xHalf = Math.floor(this.xLength / 2);
        var yHalf = Math.floor(this.yLength / 2);
        var fW, tW, fH, tH, typeArr, minW, maxW, minH, maxH;
        for (var i = 0; i < deskData.length; i++) {
            if (deskData[i].p == 'desk') {
                if (deskData[i].n.indexOf('160') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 5;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 3;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 8;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 8;
                    } else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 8;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 8;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 5;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 3;
                    }
                } else if (deskData[i].n.indexOf('200') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 10;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 10;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 20;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 20;
                    } else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 20;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 20;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 10;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 10;
                    }
                }
            } else {
                typeArr = deskData[i].n.substr(deskData[i].n.indexOf(' ')).split('x');
                if (deskData[i].r == true) {
                    if (typeArr[0] % 2 === 0) {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        } else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        }
                    } else {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        } else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        }
                    }
                    fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                    tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                    tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                } else {
                    if (typeArr[0] % 2 === 0) {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    } else {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW + 1;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    }
                    if (typeArr[1] % 2 === 0) {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    } else {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH + 1;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    }
                }
            }
            
            for (var x = fW; x < tW; x++) {
                for (var y = fH; y < tH; y++) {
                    this.nodes[x][y] = WALL;
                }
            }
        }

        this.init(this.nodes);
        if (this.callback) {
            this.callback(this);
        }
    },
    getNearestPoint: function(x1, y1) {
        var x1 = parseInt(x1),
            y1 = parseInt(y1),
            x, y, tmpLmt;

        for (var l = 0; l < 50; l++) {
            //console.log(l);
            x = (x1 - l >= 0) ? x1 - l : 0;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log('part1:',x, y, y1+l);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            y = (y1 - l >= 0) ? y1 - l : 0;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            y = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            x = (x1 + l < this.xLength) ? x1 + l  : this.xLength - 1;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
        }
        return false;
    },
    reload: function() {
        this.set(this.mapId, true);
    }
};

module.exports = GraphSearch;