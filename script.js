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

function translatePage(language) {
    const translations = {
        "en": {
            "header": "Bungalow for Sale",
            "detailsTitle": "Bungalow Details",
            "locationLabel": "Location:",
            "location": "Amrutkunj Society, near Sardar Patel Hospital, Chikoowadi, Ankleshwar, Gujarat 393001, India",
            "priceLabel": "Price:",
            "price": "approx. ₹ 3 Crore",
            "sizeLabel": "Size:",
            "size": "2,500 sq. ft.",
            "bedroomsLabel": "Bedrooms:",
            "bedrooms": "4",
            "bathroomsLabel": "Bathrooms:",
            "bathrooms": "3",
            "descriptionLabel": "Description:",
            "description": "This stunning property offers spacious living with modern amenities. Located in a prime area with excellent English medium schools, parks, and shopping centers like DMart nearby.",
            "contactLabel": "Contact:",
            "contactDetails": "<br>Pravin Dave: +91 9004160055 <span class=\"whatsapp-button\" data-number=\"919004160055\"></span>" +
                              "<br>Manoj Dave: +44 7446960920 <span class=\"whatsapp-button\" data-number=\"447446960920\"></span>" +
                              "<br>Mahesh Dave: +91 9833701572 <span class=\"whatsapp-button\" data-number=\"919833701572\"></span>",
            "footerContact": "Contact us for more information: shvmdave@gmail.com",
            "directionsError": "Directions request failed due to an error."
        },
        "hi": {
            "header": "बंगला बिक्री के लिए",
            "detailsTitle": "बंगला विवरण",
            "locationLabel": "स्थान:",
            "location": "अमृतकुंज सोसाइटी, सरदार पटेल अस्पताल के पास, चीकूवाड़ी, अंकलेश्वर, गुजरात 393001, भारत",
            "priceLabel": "मूल्य:",
            "price": "लगभग ₹ 3 करोड़",
            "sizeLabel": "आकार:",
            "size": "2,500 वर्ग फुट",
            "bedroomsLabel": "बेडरूम:",
            "bedrooms": "4",
            "bathroomsLabel": "बाथरूम:",
            "bathrooms": "3",
            "descriptionLabel": "विवरण:",
            "description": "यह शानदार संपत्ति आधुनिक सुविधाओं के साथ विशाल जीवन प्रदान करती है। उत्कृष्ट अंग्रेजी माध्यम स्कूलों, पार्कों और डीमार्ट जैसे शॉपिंग सेंटर के पास प्रमुख क्षेत्र में स्थित है।",
            "contactLabel": "संपर्क करें:",
            "contactDetails": "<br>प्रवीन दवे: +91 9004160055 <span class=\"whatsapp-button\" data-number=\"919004160055\"></span>" +
                              "<br>मनोज दवे: +44 7446960920 <span class=\"whatsapp-button\" data-number=\"447446960920\"></span>" +
                              "<br>महेश दवे: +91 9833701572 <span class=\"whatsapp-button\" data-number=\"919833701572\"></span>",
            "footerContact": "अधिक जानकारी के लिए हमसे संपर्क करें: shvmdave@gmail.com",
            "directionsError": "दिशा अनुरोध एक त्रुटि के कारण विफल हो गया।"
        },
        "gu": {
            "header": "વેચાણ માટે બંગલો",
            "detailsTitle": "બંગલો વિગત",
            "locationLabel": "સ્થાન:",
            "location": "અમૃતકુંજ સોસાયટી, સરદાર પટેલ હોસ્પિટલ પાસે, ચીકુવાડી, અંકલેશ્વર, ગુજરાત 393001, ભારત",
            "priceLabel": "કિંમત:",
            "price": "આશરે ₹ 3 કરોડ",
            "sizeLabel": "વિસ્તાર:",
            "size": "2,500 ચો.મી. ફૂટ",
            "bedroomsLabel": "બેડરૂમ્સ:",
            "bedrooms": "4",
            "bathroomsLabel": "બાથરૂમ્સ:",
            "bathrooms": "3",
            "descriptionLabel": "વર્ણન:",
            "description": "આ અદ્ભુત મિલકત આધુનિક સુવિધાઓ સાથે વિશાળ વસવાટની તક આપે છે. ઉત્તમ અંગ્રેજી માધ્યમની શાળાઓ, ઉદ્યાનો અને નજીકમાં ડીમાર્ટ જેવા શોપિંગ સેન્ટર્સ સાથે પ્રાઇમ એરિયામાં સ્થિત છે.",
            "contactLabel": "સંપર્ક કરો:",
            "contactDetails": "<br>પ્રવિન દવે: +91 9004160055 <span class=\"whatsapp-button\" data-number=\"919004160055\"></span>" +
                              "<br>મનોજ દવે: +44 7446960920 <span class=\"whatsapp-button\" data-number=\"447446960920\"></span>" +
                              "<br>મહેશ દવે: +91 9833701572 <span class=\"whatsapp-button\" data-number=\"919833701572\"></span>",
            "footerContact": "વધુ માહિતી માટે અમારો સંપર્ક કરો: shvmdave@gmail.com",
            "directionsError": "દિશા વિનંતી એક ભૂલને કારણે નિષ્ફળ ગઈ."
        }
    };

    const elements = {
        headerTitle: document.getElementById('header-title'),
        detailsTitle: document.getElementById('details-title'),
        locationLabel: document.getElementById('location-label'),
        location: document.getElementById('location'),
        priceLabel: document.getElementById('price-label'),
        price: document.getElementById('price'),
        sizeLabel: document.getElementById('size-label'),
        size: document.getElementById('size'),
        bedroomsLabel: document.getElementById('bedrooms-label'),
        bedrooms: document.getElementById('bedrooms'),
        bathroomsLabel: document.getElementById('bathrooms-label'),
        bathrooms: document.getElementById('bathrooms'),
        descriptionLabel: document.getElementById('description-label'),
        description: document.getElementById('description'),
        contactLabel: document.getElementById('contact-label'),
        contactDetails: document.getElementById('contact-details'),
        footerContact: document.getElementById('footer-contact')
    };

    const translation = translations[language] || translations.en;

    elements.headerTitle.textContent = translation.header;
    elements.detailsTitle.textContent = translation.detailsTitle;
    elements.locationLabel.textContent = translation.locationLabel;
    elements.location.innerHTML = translation.location;
    elements.priceLabel.textContent = translation.priceLabel;
    elements.price.textContent = translation.price;
    elements.sizeLabel.textContent = translation.sizeLabel;
    elements.size.textContent = translation.size;
    elements.bedroomsLabel.textContent = translation.bedroomsLabel;
    elements.bedrooms.textContent = translation.bedrooms;
    elements.bathroomsLabel.textContent = translation.bathroomsLabel;
    elements.bathrooms.textContent = translation.bathrooms;
    elements.descriptionLabel.textContent = translation.descriptionLabel;
    elements.description.textContent = translation.description;
    elements.contactLabel.textContent = translation.contactLabel;
    elements.contactDetails.innerHTML = translation.contactDetails;
    elements.footerContact.textContent = translation.footerContact;
}

// Load the map once the page is fully loaded
window.onload = initMap;

// Event listeners for language buttons
document.querySelectorAll('.language-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        translatePage(button.getAttribute('data-lang'));
    });
});

// Configuration object for WhatsApp buttons
const whatsappConfig = {
    btnColor: "#16BE45",
    ctaText: "WhatsApp Us",
    cornerRadius: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    btnPosition: "right",
    welcomeMessage: "Hello",
    zIndex: 999999,
    btnColorScheme: "light",
    contactNumbers: {
        en: {
            Pravin: "+91 9004160055",
            Manoj: "+44 7446960920",
            Mahesh: "+91 9833701572"
        },
        hi: {
            Pravin: "+91 9004160055",
            Manoj: "+44 7446960920",
            Mahesh: "+91 9833701572"
        },
        gu: {
            Pravin: "+91 9004160055",
            Manoj: "+44 7446960920",
            Mahesh: "+91 9833701572"
        }
    }
};

// Function to add WhatsApp buttons
function addWhatsAppButtons() {
    // Get all elements with the class 'whatsapp-button'
    const buttons = document.querySelectorAll('.whatsapp-button');

    buttons.forEach(button => {
        // Get the phone number and language from the data attributes
        const phoneNumber = button.getAttribute('data-number');
        const lang = button.getAttribute('data-lang'); // Assuming language is set in a data attribute
        
        // Create an anchor element for WhatsApp
        const link = document.createElement('a');
        link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappConfig.welcomeMessage)}`;
        link.target = "_blank";
        link.textContent = whatsappConfig.ctaText;

        // Append the link to the button container
        button.appendChild(link);
    });
}

// Load the WhatsApp buttons once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addWhatsAppButtons);