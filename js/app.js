// Generate the map
// TO DO:  upon initialization, read in the './assets/data.csv' file and convert the data into a readible array.  build function to generate a cluster of leaflet markers that can then be displayed onto the leaflet map.
var mymap = L.map('mapid').setView([35.87521, -78.84062], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianVsaWVoYXJyb3ciLCJhIjoiY2lyZTZhc3NqMDAyZGcwbmtqc2Zpa2c4ayJ9.jtoqLvEz44up8XlShevhbg', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);


// add popup indicating lat/long of the user selection, and bound the point by a 5000 meter circle
// TO DO: store the lat/long of the user's selection on the map
// TO DO: parse the CSV file into an array of searchable latitudes and longitudes
// TO DO: identify all of those IP latitudes and longitudes that fall within 5000 meters of the user's selection


var popup = L.popup();
var circle = L.circle();
function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + e.latlng.toString())
  .openOn(mymap);
  circle
  .setLatLng(e.latlng)
  .addTo(mymap);
}
mymap.on('click', onMapClick);

var circle = L.circle([35.87521, -78.84062], 5000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap);


// 
// getBoundingCircle = function (centerPoint, radius) {
//   var center_lat = centerPoint[0];
//   var center_lng = centerPoint[1];
//   var radius = radius;
//
// SELECT *,(((acos(sin((@orig_lat*pi()/180)) * sin((dest.latitude*pi()/180))+cos((@orig_lat*pi()/180))*cos((dest.latitude*pi()/180))*cos(((@orig_lon-dest.longitude)*pi()/180))))*180/pi())*60*1.1515*1609.344) as distance FROM nodes AS dest HAVING distance < @dist ORDER BY distance ASC LIMIT 100;
// };
