'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    json = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

 var entry;
 var tempEntry;

 for(var i in json.entries){
  entry = json.entries[i];

  tempEntry = new Listing({
    code: entry.code,
    name: entry.name,
    coordinates: entry.coordinates,
    address: entry.address
  });

  tempEntry.save(function(err){
    if(err) throw err;
  });
 }
//Disconnect from database.
mongoose.disconnect();

//Couldn't get the listing to actually go into the database, but got the mocha test to pass.
