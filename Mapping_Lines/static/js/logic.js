// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1725, -120.37], 6);


// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// make it a circle instead of a marker

// circle radius is in meters
L.circle([34.0522, -118.2437], {
  radius: 500
}).addTo(map);

// default size 10 pixels instead of meters // also shift location 0.2 degrees lon
// L.circleMarker([34.0522, -118.0437],{
//   radius: 200,
//   color: "black",
//   fillColor: "#ffaa11"
// }).addTo(map);

// UNO DODGE ST  = 41.259339,-96.021814
let marker = L.marker([41.259339,-96.021814]).addTo(map);

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




