var ids = {
    'development': {
        google: {   // https://console.developers.google.com
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/google/callback'
        },
        facebook: { // https://developers.facebook.com/apps/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'email', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        },
        twitter: {  // https://apps.twitter.com/
            consumerKey: '',
            consumerSecret: '',
            callbackURL: 'https://localhost:3000/auth/twitter/callback'
        },
        github: {   // https://github.com/settings/developers
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/github/callback'
        },
        instagram: {    // https://instagram.com/developer/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/instagram/callback'
        },
        pinterest: {    // https://developers.pinterest.com/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/pinterest/callback'
        }
    },
    'staging': {
        google: {   // https://console.developers.google.com
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/google/callback'
        },
        facebook: { // https://developers.facebook.com/apps/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'email', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        },
        twitter: {  // https://apps.twitter.com/
            consumerKey: '',
            consumerSecret: '',
            callbackURL: 'https://localhost:3000/auth/twitter/callback'
        },
        github: {   // https://github.com/settings/developers
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/github/callback'
        },
        instagram: {    // https://instagram.com/developer/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/instagram/callback'
        },
        pinterest: {    // https://developers.pinterest.com/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://localhost:3000/auth/pinterest/callback'
        }
    },
    'preproduction': {
        google: {   // https://console.developers.google.com
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://easyinside.net/auth/google/callback'
        },
        facebook: { // https://developers.facebook.com/apps/
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://easyinside.net/auth/facebook/callback',
            profileFields: ['id', 'email', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        },
        twitter: {  // https://apps.twitter.com/
            consumerKey: '',
            consumerSecret: '',
            callbackURL: 'http://easyinside.net/auth/twitter/callback'
        },
        github: {   // https://github.com/settings/developers
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://easyinside.net/auth/github/callback'
        },
        instagram: {    // https://instagram.com/developer/
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://easyinside.net/auth/instagram/callback'
        },
        pinterest: {    // https://developers.pinterest.com/
            clientID: '',
            clientSecret: '',
            callbackURL: 'http://easyinside.net/auth/pinterest/callback'
        }
    },
    'production': {
        google: {   // https://console.developers.google.com
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://easyinside.net/auth/google/callback'
        },
        facebook: { // https://developers.facebook.com/apps/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://easyinside.net/auth/facebook/callback',
            profileFields: ['id', 'email', 'locale', 'name', 'timezone', 'updated_time', 'verified']
        },
        twitter: {  // https://apps.twitter.com/
            consumerKey: '',
            consumerSecret: '',
            callbackURL: 'https://easyinside.net/auth/twitter/callback'
        },
        github: {   // https://github.com/settings/developers
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://easyinside.net/auth/github/callback'
        },
        instagram: {    // https://instagram.com/developer/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://easyinside.net/auth/instagram/callback'
        },
        pinterest: {    // https://developers.pinterest.com/
            clientID: '',
            clientSecret: '',
            callbackURL: 'https://easyinside.net/auth/pinterest/callback'
        }
    }
};

module.exports = ids[process.env.NODE_ENV];