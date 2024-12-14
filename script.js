// Function to handle the showing and hiding of content in destination.html
function showSpots() {
    document.getElementById("spots").classList.remove("hidden");
    document.getElementById("stations").classList.add("hidden");
    document.getElementById("cafes").classList.add("hidden");
}

function showStations() {
    document.getElementById("stations").classList.remove("hidden");
    document.getElementById("spots").classList.add("hidden");
    document.getElementById("cafes").classList.add("hidden");
}

function showCafes() {
    document.getElementById("cafes").classList.remove("hidden");
    document.getElementById("spots").classList.add("hidden");
    document.getElementById("stations").classList.add("hidden");
}

// Fare Calculation logic in transport.html
function calculateFare() {
    const destination = document.getElementById("destination").value;
    const vehicle = document.getElementById("vehicle").value;
    let fare = 0;
    
    // Example fares for different distances and vehicles
    const distances = {
        shirgaon: 10,
        kaldurg: 5,
        kelve: 4,
        mahalaxmi: 11,
        breeze: 6
    };

    const rates = {
        car: 10,
        bus: 20,
        auto: 5,
        echo: 25
    };

    const km = distances[destination];
    const rate = rates[vehicle];
    fare = km * rate;

    document.getElementById("fare").textContent = fare;
    document.getElementById("fare-result").classList.remove("hidden");
}

function bookFare() {
    alert("Fare booked successfully!");
    window.location.href = "index.html";  // Redirect to home page
}
