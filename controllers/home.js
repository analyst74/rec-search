/**
 * GET /
 * Home page.
 */
const Facility = require('../models/Facility')
const Location = require('../models/Location')

exports.index = (req, res) => {
  Facility.find({ 'FacilityType': { '$regex': req.query.search || '', '$options': 'i' } }, (err, facilities) => {
    if (err) {
      console.log(err)
      return
    }
    const locationIds = facilities.map(f => f['Location ID'])
    // console.log(req.query.search, locationIds.length)
    Location.find({ 'Location ID': { '$in': locationIds } }, (err, locations) => {
      // console.log('locations', locations[0])
      // console.log('facilities', facilities[0])
      locations.map((l) => {
        // console.log(facilities.filter((f) => { return f['Location ID'] === l['Location ID']; }))
        // console.log(facilities.filter(f => f['Location ID'] === l['Location ID']))
        l.Facilities = [...new Set(facilities.filter(f => f['Location ID'] === l['Location ID'])
          // .map(f => f['Facility Type (Display Name)'])
          .map(f => f['FacilityType']))].join(', ')
        l.FacilityCount = l.Facilities.length
        l.Map = 'https://www.google.com/maps/?q=' + l['Location Name']
      })
      // console.log('locations length', locations.map(l => l.facilities))
      res.render('home', {
        title: 'Home',
        headers: [
          'Location Name',
        	'District',
        	'Street No',
        	'Street No Suffix',
        	'Street Name',
        	'Street Type',
        	'Street Direction',
        	'Postal Code'
        ],
        facilities: facilities,
        locations: locations
      });
    })
  })
};
