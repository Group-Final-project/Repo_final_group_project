require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {

  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-97.9, 29.9],
    zoom: 10
  });

  var CensusTract = new FeatureLayer({
    url: "https://services1.arcgis.com/M68M8H7oABBFs1Pf/arcgis/rest/services/Austin_Census_Tract/FeatureServer"
  })

// bus stop of austin metro area
  var myShapefile = new FeatureLayer({
    url: "https://services8.arcgis.com/xvsG9Sjv8JeqcA3P/arcgis/rest/services/Capital_Metro_Shapefiles___JANUARY_2025/FeatureServer"
  })

  map.addMany([ CensusTract, myShapefile ]);

});
