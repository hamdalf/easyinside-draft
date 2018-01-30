// Get dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./oauth.js');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const PinterestStrategy = require('passport-pinterest-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const config = require('./config.js');

// DB setting
mongoose.Promise = require('bluebird');
mongoose.connect(config.DBconnection, {useMongoClient: true});
mongoose.connection.on('error', function (ex) {
    console.log('[EasyInside] DB connection error: ' + ex.message);
});
mongoose.connection.on('connected', function () {
    console.log('[EasyInside] DB connection open');
});
mongoose.connection.on('disconnected', function () {
    console.log('[EasyInside] DB connection closed');
});

// passport
var User = require('./model/user');
var checkHamdalf = function(profile) {
    if (profile.provider == 'google') {
        if (profile.email == 'kyoungwoo.ham@gmail.com') {
            return 'administrators';
        }
    }
    return 'users';
};

passport.use(new GoogleStrategy({
    clientID: passportConfig.google.clientID,
    clientSecret: passportConfig.google.clientSecret,
    callbackURL: passportConfig.google.callbackURL,
    passReqToCallback: true
  },
  function (request, accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if (err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now(),
          provider: profile.provider,
          userGroup: checkHamdalf(profile),
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: passportConfig.facebook.clientID,
    clientSecret: passportConfig.facebook.clientSecret,
    callbackURL: passportConfig.facebook.callbackURL,
    profileFields: passportConfig.facebook.profileFields
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.name.givenName + ' ' + profile.name.familyName,
          created: Date.now(),
          provider: profile.provider,
          userGroup: 'users',
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
}));

passport.use(new TwitterStrategy({
    consumerKey: passportConfig.twitter.consumerKey,
    consumerSecret: passportConfig.twitter.consumerSecret,
    callbackURL: passportConfig.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now(),
          provider: profile.provider,
          userGroup: 'users',
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
}));

passport.use(new GithubStrategy({
    clientID: passportConfig.github.clientID,
    clientSecret: passportConfig.github.clientSecret,
    callbackURL: passportConfig.github.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    //console.log(profile);
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.username,
          created: Date.now(),
          provider: profile.provider,
          userGroup: 'users',
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
}));

passport.use(new InstagramStrategy({
    clientID: passportConfig.instagram.clientID,
    clientSecret: passportConfig.instagram.clientSecret,
    callbackURL: passportConfig.instagram.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now(),
          provider: profile.provider,
          userGroup: 'users',
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
}));

passport.use(new PinterestStrategy({
    clientID: passportConfig.pinterest.clientID,
    clientSecret: passportConfig.pinterest.clientSecret,
    callbackURL: passportConfig.pinterest.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ oauthID: profile.id }, function(err, user) {
      if(err) {
        console.log(err);  // handle errors!
      }
      if (!err && user !== null) {
        done(null, user);
      } else {
        user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now(),
          provider: profile.provider,
          userGroup: 'users',
          grade: 'silent'
        });
        user.save(function(err) {
          if(err) {
            console.log(err);  // handle errors!
          } else {
            //console.log("saving user ...");
            done(null, user);
          }
        });
      }
    });
}));

/**
 * get routes
 */
const heartbeat = require('./server/routes/heartbeat');
const api = require('./server/routes/api');     // API routes
const auth = require('./server/routes/auth');   // auth routes
const user = require('./server/routes/user');   // user routes
const space = require('./server/routes/space'); // space routes
const file = require('./server/routes/file');   // file routes
const texture = require('./server/routes/texture');
const geometry = require('./server/routes/geometry');
const ding = require('./server/routes/ding');
const info = require('./server/routes/info');
const robot = require('./server/routes/robot');
const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
//app.use(express.methodOverride());
app.use(session({
  secret: 'site_schlussel',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// passport serialize/deserialize
passport.serializeUser(function(user, done) {
  //console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    if(!err) done(null, user);
    else done(err, null);
  });
});


/**
 * set routes
 */
app.use('/heartbeat', heartbeat);
app.use('/api', api);     // api routes
app.use('/auth', auth);   // auth routes
app.use('/user', user);   // user routes
app.use('/space', space);   // space routes
app.use('/file', file);
app.use('/texture', texture);
app.use('/geometry', geometry);
app.use('/ding', ding);
app.use('/info', info);
app.use('/robot', robot);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || config.Port;
app.set('port', port);

if (process.env.NODE_ENV === 'preproduction' || process.env.NODE_ENV === 'production') {
  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);
  server.listen(app.get('port'), () => console.log(`[EasyInside] HTTP running on localhost:${app.get('port')}`));
} else {
  /**
   * Create HTTPS server
   */
  const server = https.createServer({
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem')
  }, app);
  server.listen(app.get('port'), () => console.log(`[EasyInside] HTTPS running on localhost:${app.get('port')}`));
}