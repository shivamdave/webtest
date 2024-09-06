// Initialize and add the map
function initMap() {
    // Location of the property
    const propertyLocation = { lat: 21.630311245405288, lng: 73.00013539177549 }; // Replace with actual latitude and longitude

    // The map, centered at the property location with default view as satellite
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 60, // Adjust this number to your desired zoom level within the valid range
        center: propertyLocation,
        mapTypeId: 'satellite' // Set default view to satellite
    });

    // The marker, positioned at the property location
    const marker = new google.maps.Marker({
        position: propertyLocation,
        map: map,
        title: "Property Location"
    });
}

// Function to calculate and display the route from a start location to the property
function calculateAndDisplayRoute() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Adjust this number to your desired zoom level within the valid range
        center: { lat: 21.630311245405288, lng: 73.00013539177549 },
        mapTypeId: 'satellite'
    });
    directionsRenderer.setMap(map);

    const startLocation = document.getElementById('start-location').value;

    const request = {
        origin: startLocation,
        destination: { lat: 21.630311245405288, lng: 73.00013539177549 },
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
        } else {
            window.alert(getTranslation('directions-error'));
        }
    });
}

// Function to handle translation
function translatePage(language) {
    const translations = {
        en: {
            header: "Bungalow for Sale",
            detailsTitle: "Bungalow Details",
            locationLabel: "Location:",
            priceLabel: "Price:",
            sizeLabel: "Size:",
            bedroomsLabel: "Bedrooms:",
            bathroomsLabel: "Bathrooms:",
            descriptionLabel: "Description:",
            contactLabel: "Contact:",
            footerContact: "Contact us for more information: shvmdave@gmail.com",
            directionsError: "Directions request failed due to an error."
        },
        hi: {
            header: "बंगला बिक्री के लिए",
            detailsTitle: "बंगला विवरण",
            locationLabel: "स्थान:",
            priceLabel: "मूल्य:",
            sizeLabel: "आकार:",
            bedroomsLabel: "बेडरूम:",
            bathroomsLabel: "बाथरूम:",
            descriptionLabel: "विवरण:",
            contactLabel: "संपर्क:",
            footerContact: "अधिक जानकारी के लिए हमसे संपर्क करें: shvmdave@gmail.com",
            directionsError: "निर्देश अनुरोध त्रुटि के कारण विफल हो गया।"
        },
        gu: {
            header: "બંગલો વેચાણ માટે",
            detailsTitle: "બંગલો વિગત",
            locationLabel: "સ્થાન:",
            priceLabel: "કિંમત:",
            sizeLabel: "કંટાળો:",
            bedroomsLabel: "ખાતરો:",
            bathroomsLabel: "બાથરૂમ:",
            descriptionLabel: "વર્ણન:",
            contactLabel: "સંપર્ક:",
            footerContact: "વધુ માહિતી માટે અમને સંપર્ક કરો: shvmdave@gmail.com",
            directionsError: "દિશા વિનંતી ખોટા પરિણામે નિષ્ફળ ગઈ."
        }
    };

    const elements = {
        headerTitle: document.getElementById('header-title'),
        detailsTitle: document.getElementById('details-title'),
        locationLabel: document.getElementById('location-label'),
        priceLabel: document.getElementById('price-label'),
        sizeLabel: document.getElementById('size-label'),
        bedroomsLabel: document.getElementById('bedrooms-label'),
        bathroomsLabel: document.getElementById('bathrooms-label'),
        descriptionLabel: document.getElementById('description-label'),
        contactLabel: document.getElementById('contact-label'),
        footerContact: document.getElementById('footer-contact')
    };

    const translation = translations[language] || translations.en;

    elements.headerTitle.textContent = translation.header;
    elements.detailsTitle.textContent = translation.detailsTitle;
    elements.locationLabel.textContent = translation.locationLabel;
    elements.priceLabel.textContent = translation.priceLabel;
    elements.sizeLabel.textContent = translation.sizeLabel;
    elements.bedroomsLabel.textContent = translation.bedroomsLabel;
    elements.bathroomsLabel.textContent = translation.bathroomsLabel;
    elements.descriptionLabel.textContent = translation.descriptionLabel;
    elements.contactLabel.textContent = translation.contactLabel;
    elements.footerContact.textContent = translation.footerContact;
}

// Load the map once the page is fully loaded
window.onload = initMap;

// Function to handle translation based on button clicks
document.querySelectorAll('.language-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const language = button.getAttribute('data-lang');
        translatePage(language);
    });
});
