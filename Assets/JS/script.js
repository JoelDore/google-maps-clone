
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbGRvcmUiLCJhIjoiY2tmNzNpMDd0MGJmZDJ5cXBneThjYmRlMSJ9.AgS8O3TUOhebgqf8iCnx0g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(loc) {
    setMap([loc.coords.longitude, loc.coords.latitude])
}

function errorLocation(err) { console.log('Error: could not get current location') }

function setMap(center) {

    // Initialize map zoomed out
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/joeldore/ckhimdsax13ws19n1r68qbsxj', // stylesheet location
        center: center, // starting position [lng, lat]
        zoom: 4 // starting zoom
    });

    // Add nav control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');
    // Add geolocate control
    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });
    map.addControl(geolocate);
    map.on('load', function () {
        geolocate.trigger();
    });
}
