var map;

function locationFinder() {
    var locations = [];
    /*
    locations.push(bio.contacts.Location);
    education.schools.forEach(function(school) {
        locations.push(school.location);
    });
    work.jobs.forEach(function(job) {
        locations.push(job.location);
    });
    */
    locations = locations.concat(cities);
    return locations;
}

function searchLocations(map, locations) {
    var service = new google.maps.places.PlacesService(map);
    locations.forEach(function(val) {
        var request = {
            query: val
        };
        service.textSearch(request, callback);
    });
}

function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        placeMarker(place[0]);
    }
}

function placeMarker(place) {
    var marker = new google.maps.Marker({
        position: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        },
        map: map
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('mapGoogleDiv'), {
        zoom: 2,
        center: {
            lat: 26,
            lng: 0
        }
    });
    searchLocations(map, locationFinder())

}
