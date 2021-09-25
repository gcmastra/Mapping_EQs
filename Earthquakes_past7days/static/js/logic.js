// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.5, 30.5], 3);


// default size 10 pixels instead of meters // also shift location 0.2 degrees lon
// L.circleMarker([34.0522, -118.0437],{
//   radius: 200,
//   color: "black",
//   fillColor: "#ffaa11"
// }).addTo(map);

// UNO DODGE ST  = 41.259339,-96.021814
let marker1 = L.marker([41.259339,-96.021814]).addTo(map);
// GEOGRAPHIC CENTER OF CONUS 39.8282, -98.5696 in Kansas
let marker2 = L.marker([39.8282, -98.5696]).addTo(map);

// Replace the next line with the line after it as it appears inside the tile layer URL
// https://api.mapbox.com/styles/v1/{id}/tiles/
// https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/
// changed to dark style using styles/v1/mapbox/dark-v10/tiles/


// this next line is the dark layer that is in section 13.4.1
// We create the tile layer that will be the background of our map.
// change back to daytime map in section 13.4.3
// satellite-streets-v11 
// keep this to restore daytime streets https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
  });
  streets.addTo(map);


// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/gcmastra/Mapping_EQs/main/majorAirports.json";
// option 2 works if you are working from local copy but you must launch localhost:8000 first
// let airportData = "../majorAirports.json";

// option 3 - get the last 7 days from USGS
// Retrieve the earthquake GeoJSON data.
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });

// Creating a GeoJSON layer with the retrieved data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {

  // We turn each feature into a circleMarker on the map.
  
  pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
      }).addTo(map);
  });

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2><br><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();  
  }
}).addTo(map);


