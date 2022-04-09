function PlotState(state){
    year = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
   

    let gdp_trace = {
    x: year,
    y: state_dict[state]['GDP'],
    type: 'line', 
    name: "GDP ($10,000)"
    };

    let hs_trace = {
        x: year,
        y: state_dict[state]['High School'],
        type: 'line', 
        name: "High school graduation rate"
    };

    let college_trace = {
        x: year,
        y: state_dict[state]['College'],
        type: 'line', 
        name: "Bachelor's or higher rate"
    };

    let employment_trace = {
        x: year,
        y: state_dict[state]['Employment Rate'],
        type: 'line',
        name: "Employment rate"
    };

    // let happiness_trace = {
    //     x: year,
    //     y: state['GDP'],
    //     type: 'line'
    // };

    let data = [gdp_trace, hs_trace,college_trace,employment_trace];

    let layout = {
    title: "Happiness of " + state
    };

    Plotly.newPlot("plot", data, layout);
}

// // Creating the map object
// var myMap = L.map("map", {
//     center: [39.8283, -98.5795],
//     zoom: 4
//   });

  
//   // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);



// // Getting our GeoJSON data
// d3.json("/static/data/us_states.json").then(function(data) {
    
//   L.geoJson(data).addTo(myMap);
// });

// d3.json("/static/data/us_states.json").then(function(data) {
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data, {
//       // Styling each feature (in this case, a neighborhood)
//       style: function(feature) {
//         return {
//           color: "white",
//           fillOpacity: 0.5,
//           weight: 1.5
//         };
//       },
//       // This is called on each feature.
//       onEachFeature: function(feature, layer) {
//         // Set the mouse events to change the map styling.
//         layer.on({
//           // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
//           mouseover: function(event) {
//             layer = event.target;
//             layer.openPopup();
//             layer.setStyle({
//               fillOpacity: 0.9
            
//             });
//           },
//           // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
//           mouseout: function(event) {
//             layer = event.target;
//             layer.closePopup();
//             layer.setStyle({
//               fillOpacity: 0.5
//             });
//           },
//           // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
//           click: function(event) {
//             state = feature.properties.name;
//             layer.getBounds();
//             PlotState(state)
//           }
//         });
//         // Giving each feature a popup with information that's relevant to it
//         layer.bindPopup("<h2>" + feature.properties.name + "</h2>");
  
//       }
//     }).addTo(myMap);
//   });

//   d3.json("/static/data/state_data.json").then(function(data) {
    
//     state_dict = data;
//   });
