var env = {
    'development': {
        Address: 'localhost',
        Port: '3000',
        DBconnection: 'mongodb://localhost/easyinside',
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
    },
    'staging': {
        Address: 'localhost',
        Port: '3000',
        DBconnection: 'mongodb://',
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
    },
    'preproduction': {
        Address: 'easyinside.net',
        Port: '3000',
        DBconnection: 'mongodb://',
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
    },
    'production': {
        Address: 'easyinside.net',
        Port: '3000',
        DBconnection: 'mongodb://',
        accessKeyId: '',
        secretAccessKey: '',
        region: ''
    }
};

module.exports = env[process.env.NODE_ENV];