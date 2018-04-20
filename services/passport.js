// import { Mongoose } from 'mongoose';

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then((existingUser) => {
            if(existingUser) {
                // We already have a record with the given profile ID
                console.log('Already existing user');
                done(null, existingUser);
                return;
            }
            //  We don't have a user record with this ID, make a new record with the given profile ID
            new User({
                googleId: profile.id,
                name: profile.name.givenName,
                email: profile.emails[0].value
            }).save()
            .then(
                (user) => done(null, user)
            );
        })
      }
    )
  );