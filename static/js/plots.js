// Creating the map object
var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });

  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);



// Getting our GeoJSON data
d3.json("/static/data/us_states.json").then(function(data) {
    
  L.geoJson(data).addTo(myMap);
});

d3.json("/static/data/us_states.json").then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
      // Styling each feature (in this case, a neighborhood)
      style: function(feature) {
        return {
          color: "white",
          fillOpacity: 0.5,
          weight: 1.5
        };
      },
      // This is called on each feature.
      onEachFeature: function(feature, layer) {
        // Set the mouse events to change the map styling.
        layer.on({
          // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.9
            });
          },
          // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.5
            });
          },
          // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
          click: function(event) {
            state = feature.properties.name;
            PlotState(eval(state))
          }
        });
        // Giving each feature a popup with information that's relevant to it
        layer.bindPopup("<h1>" + feature.properties.name + "</h1>");
  
      }
    }).addTo(myMap);
  });

Texas = {"GDP": [1,2,3,4,5,6,7,8,9,10],
"Education": {"High_School": [10,20,30,40,50,60,70,80,90,100], 
              "College": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}, 
"Unemployment":[10,9,8,7,6,5,4,3,2,1]}

Georgia = {"GDP": [12,22,23,42,52,62,72,82,92,120],
"Education": {"High_School": [10,20,30,40,50,60,70,80,90,100], 
              "College": [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}, 
"Unemployment":[10,9,8,7,6,5,4,3,2,1]}


function PlotState(state){
    year = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
   

    let gdp_trace = {
    x: year,
    y: state['GDP'],
    type: 'line'
    };

    let hs_trace = {
        x: year,
        y: state['Education']['High_School'],
        type: 'line'
    };

    let college_trace = {
        x: year,
        y: state['Education']['College'],
        type: 'line'
    };

    let unemployment_trace = {
        x: year,
        y: state['Unemployment'],
        type: 'line'
    };

    // let happiness_trace = {
    //     x: year,
    //     y: state['GDP'],
    //     type: 'line'
    // };

    let data = [gdp_trace,hs_trace,college_trace,unemployment_trace];

    let layout = {
    title: "Happiness of"
    };

    Plotly.newPlot("plot", data, layout);
}

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