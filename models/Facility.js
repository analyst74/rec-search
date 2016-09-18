const mongoose = require('mongoose');

var facilitySchema = new mongoose.Schema({
  'Facility Id': Number,
  'Location ID': Number,
  'Facility Type (Display Name)': String,
  'Permit': String,
  'FacilityType': String,
  'Facility Rating': String,
  'Asset Name': String
});

var Facility = mongoose.model('Facility', facilitySchema);
module.exports = Facility;
