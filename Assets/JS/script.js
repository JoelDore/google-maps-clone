// Map
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbGRvcmUiLCJhIjoiY2tmNzNpMDd0MGJmZDJ5cXBneThjYmRlMSJ9.AgS8O3TUOhebgqf8iCnx0g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/joeldore/ckhimdsax13ws19n1r68qbsxj', // stylesheet location
    center: [-71.0, 43.05], // starting position [lng, lat]
    zoom: 6.6 // starting zoom
});