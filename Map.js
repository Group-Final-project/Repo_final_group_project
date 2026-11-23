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

  var myShapefile = new FeatureLayer({
    url: "https://geotxst.maps.arcgis.com/apps/mapviewer/index.html?webmap=966ea824a67e4afdaa98fa1b223f3216"
  });

  map.add(myShapefile);

});
