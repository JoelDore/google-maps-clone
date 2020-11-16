
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lbGRvcmUiLCJhIjoiY2tmNzNpMDd0MGJmZDJ5cXBneThjYmRlMSJ9.AgS8O3TUOhebgqf8iCnx0g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(loc) {
    setMap([loc.coords.longitude, loc.coords.latitude])
}

function errorLocation() { setMap([74, 41]) }

function setMap(center) {

    // Initialize map zoomed out
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/joeldore/ckhimdsax13ws19n1r68qbsxj', // stylesheet location
        center: center, // starting position [lng, lat]
        zoom: 4 // starting zoom
    });
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    const nav = new mapboxgl.NavigationControl();
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });


    map.on('load', function () {
        geolocate.trigger();
    });
    map.addControl(nav, 'bottom-right');
    map.addControl(geolocate);
    map.addControl(directions, 'top-left');
    directions.setOrigin(center)
}
