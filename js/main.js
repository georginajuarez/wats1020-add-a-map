/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

$( document ).ready(function() {

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
  

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:
 

  
  //Street Layer
var streetLay = L.tileLayer('https://api.mapbox.com/styles/v1/georginaj/cizxj905p002t2smj9nek0aey/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvcmdpbmFqIiwiYSI6ImNpeXRya3VwYTAwMWIzMm1teXkxOHRwNWIifQ.nk06wXItEzOgZNWLcMMCLQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
});
  
 
  //Outdoors Layer
 var outdoorLay =L.tileLayer('https://api.mapbox.com/styles/v1/georginaj/cizxjaeyi002u2smjs911xvvs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvcmdpbmFqIiwiYSI6ImNpeXRya3VwYTAwMWIzMm1teXkxOHRwNWIifQ.nk06wXItEzOgZNWLcMMCLQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
});
  
  
  var mapLayers = {
    "Streets": streetLay,
    "Outdoors": outdoorLay
  }

//Mt. Rainer map coord.
var mymap = L.map('map-container').setView([46.876217, -121.728493], 13);  
  
L.control.layers(mapLayers).addTo(mymap);
  streetLay.addTo(mymap);

  
// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

  
  
L.marker([46.852, -121.760]).addTo(mymap)
marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");


L.marker([46.806813, -121.812239]).addTo(mymap);
marker.bindPopup("<b>Welcome to Pyramid Peak!");

L.marker([46.919832, -121.632077]).addTo(mymap);
marker.bindPopup("<b>Welcome to Antler Peak!");

  
});//onClick closing tag
 
