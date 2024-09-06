function initMap() {
    // Location of the property
    const propertyLocation = { lat: 21.630311245405288, lng: 73.00013539177549}; // Replace with actual latitude and longitude

    // The map, centered at the property location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 60,
        center: propertyLocation,
    });

    // The marker, positioned at the property location
    const marker = new google.maps.Marker({
        position: propertyLocation,
        map: map,
    });
}

// Load the map once the page is fully loaded
window.onload = initMap;
