const S3FS = require('s3fs');
const config = require('../../config.js');

// AWS setting
var S3Options = {
  region: config.region,
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey
};

var S3FileSystem = function() {
    this.fsImpl = new S3FS('dumpdumpdraft', S3Options);
};

S3FileSystem.prototype.writeFile = function(fileName, content, folder, options, callback) {
    var self = this;
    var promise = new Promise(function (resolve, reject) {
        var fullFileName = (folder) ? folder + '/' + fileName : fileName;
        self.fsImpl.writeFile(fullFileName, content, options, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });

    if (!callback) {
        return promise;
    }

    promise.then(function(res) {
        callback(null, res);
    }, function(reason) {
        callback(reason);
    });
}

S3FileSystem.prototype.stat = function(path, callback) {
    var self = this;
    var promise = new Promise(function (resolve, reject) {
        self.fsImpl.stat(path, (err, stat) => {
            if (err) {
                return reject(err);
            }
            resolve(stat);
        });
    });

    if (!callback) {
        return promise;
    }

    promise.then(function(res) {
        callback(null, res);
    }, function(reason) {
        callback(reason);
    });
}

S3FileSystem.prototype.unlink = function(name, callback) {
    var self = this;
    var promise = new Promise(function(resolve, reject) {
        self.fsImpl.unlink(name, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });

    if (!callback) {
        return promise;
    }

    promise.then(function(res) {
        callback(null, res);
    }, function(reason) {
        callback(reason);
    });
}

S3FileSystem.prototype.readFile = function(name, callback) {
    var self = this;
    var promise = new Promise(function (resolve, reject) {
        self.fsImpl.readFile(name, {encoding:'utf8'}, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
    if (!callback) {
        return promise;
    }

    promise.then(function(res) {
        callback(null, res);
    }, function(reason) {
        callback(reason);
    });
}

module.exports = S3FileSystem;