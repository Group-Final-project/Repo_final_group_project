require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/LayerList"
], function(Map, MapView, FeatureLayer, Layerlist) {

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
    url: "https://services1.arcgis.com/M68M8H7oABBFs1Pf/arcgis/rest/services/Austin_Census_Tract/FeatureServer",
    opacity: 0.5,
    title: "Population"
  })

// bus stop of austin metro area
  var BusStop = new FeatureLayer({
    url: "https://services8.arcgis.com/xvsG9Sjv8JeqcA3P/arcgis/rest/services/Capital_Metro_Shapefiles___JANUARY_2025/FeatureServer/0",
    title: "Bus stops",
    definitionExpression: "STOP_TYPE <> 'Rail Station'",
    //adjusts the symbology of the points
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "orange",
        size: 6,
        outline: {color: "red", width: 0.5}
      }
    }
  })
//similar to the bus stops but shows the metro rail stops
  var RailStop = new FeatureLayer({
    url: "https://services8.arcgis.com/xvsG9Sjv8JeqcA3P/arcgis/rest/services/Capital_Metro_Shapefiles___JANUARY_2025/FeatureServer/0",
    title: "Rail Stations",
    definitionExpression: "STOP_TYPE = 'Rail Station'",
    //adjusts the symbology of the points
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "blue",
        size: 6,
        outline: {width: 0.5}
      }
    }
  })

  map.addMany([ CensusTract, BusStop, RailStop ]);
  var layerlist = new Layerlist({
    view: view,
    //below allows the legend to sit inside of the list to save room and readability
    listItemCreatedFunction: function(event) {
      var item = event.item;
      item.panel = {
        content: "legend",
        open: false
      };
    }
  })
  view.ui.add(layerlist, { position: "top-right"
});
});
