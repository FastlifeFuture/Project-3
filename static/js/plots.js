// Creating the map object
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  console.log("Here")
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  console.log("No, here.")


// Getting our GeoJSON data
d3.json("/static/data/us_states.json").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});

// function PlotState(state){
//     year = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

//     let gdp_trace = {
//     x: year,
//     y: state['GDP'],
//     type: 'line'
//     };

//     let hs_trace = {
//         x: year,
//         y: state['Education']['High School'],
//         type: 'line'
//     };

//     let college_trace = {
//         x: year,
//         y: state['Education']['College'],
//         type: 'line'
//     };

//     let unemployment_trace = {
//         x: year,
//         y: state['Unemployment'],
//         type: 'line'
//     };

//     let happiness_trace = {
//         x: year,
//         y: state['GDP'],
//         type: 'line'
//     };

//     let data = [gdp_trace,hs_trace,college_trace,unemployment_trace,happiness_trace];

//     let layout = {
//     title: "Happiness"
//     };

//     Plotly.newPlot("plot", data, layout);
// }