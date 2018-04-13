const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('accessToken',accessToken);
        console.log('refreshToken 2',refreshToken);
        console.log('profile 3',profile);
        console.log('done 4',done);
      }
    )
  );