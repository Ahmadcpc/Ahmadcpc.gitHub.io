// Get the input field and results container
const searchInput = document.getElementById('searchInput');
const autocompleteResults = document.getElementById('autocompleteResults');

// Event listener for input changes
searchInput.addEventListener('input', function() {
    // Fetch data based on the input value
    const inputValue = this.value.trim();
    if (inputValue.length === 0) {
        autocompleteResults.innerHTML = ''; // Clear the results if input is empty
        return;
    }

    // Send an AJAX request to fetch autocomplete suggestions
    // Replace this with your actual backend API endpoint
    fetch(`/api/search?q=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            // Display autocomplete suggestions
            autocompleteResults.innerHTML = '';
            data.forEach(result => {
                const option = document.createElement('div');
                option.textContent = result;
                autocompleteResults.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching autocomplete suggestions:', error);
        });
});

// Event listener for form submission
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const searchQuery = searchInput.value.trim();
    if (searchQuery.length > 0) {
        // Redirect to search results page with the query
        window.location.href = `/search-results?q=${encodeURIComponent(searchQuery)}`;
    }
});
