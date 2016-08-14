// TO DO: Seed the CSV data into the database and make it available for searching, based on user's selected point on the map + a distance around the point to search.

var mongoose = require('mongoose');

var pointSchema = mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model('Point', pointSchema);
