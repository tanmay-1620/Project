document.addEventListener("DOMContentLoaded", function() {
    const filtersButton = document.getElementById("filters-button");
    const filtersPopup = document.getElementById("filters-popup");

    filtersButton.addEventListener("click", function() {
        filtersPopup.style.display = filtersPopup.style.display === "block" ? "none" : "block";
    });
});
 // Fetch countries from REST Countries API and populate the passport select dropdown
 fetch('https://restcountries.com/v3.1/all')
 .then(response => response.json())
 .then(data => {
     // Extract country names from the response
     const countryNames = data.map(country => country.name.common);

     // Sort country names alphabetically
     countryNames.sort();

     // Populate dropdown with country names
     const selectElement = document.getElementById('passport-select');
     countryNames.forEach(country => {
         const option = document.createElement('option');
         option.text = country;
         selectElement.add(option);
     });
 })
 .catch(error => console.error('Error fetching countries:', error));
