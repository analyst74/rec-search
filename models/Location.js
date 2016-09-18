const mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  'Location ID' : Number,
	'Parent Location ID' : Number,
	'Location Name' : String,
	'Location Type' : String,
	'Accessibility' : String,
	'Intersection' : String,
	'TTC Information' : String,
	'District' : String,
	'Street No' : Number,
	'Street No Suffix' : String,
	'Street Name' : String,
	'Street Type' : String,
	'Street Direction' : String,
	'Postal Code' : String,
	'Description' : String
});

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;
