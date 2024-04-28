// scripts.js
document.getElementById('country-search').addEventListener('input', function() {
    const searchQuery = this.value.trim();

    if (searchQuery.length > 1) { // To avoid too many requests on single character input
        fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log data or handle it
                displayCountries(data.map(country => country.name.common));
            })
            .catch(error => console.error('Error fetching countries:', error));
    }
});

function displayCountries(countries) {
    const suggestions = document.getElementById('country-suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions
    countries.forEach(country => {
        const div = document.createElement('div');
        div.textContent = country;
        suggestions.appendChild(div);
    });
}

