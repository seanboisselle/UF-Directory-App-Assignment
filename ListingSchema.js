/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var date;

/* Create your schema */
var listingSchema = new Schema({
    code: {
  	   type: String,
  	    required: true
  },
    name: {
  	   type: String,
  	    required: true
  },
    coordinate:{
  	   latitude: Number,
  	    longitude: Number
  },
      address: String,
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var date = new Date();
  this.updated_at = date;
  if(!this.created_at){
  	this.created_at = date;
  }
  next();

});

var Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
