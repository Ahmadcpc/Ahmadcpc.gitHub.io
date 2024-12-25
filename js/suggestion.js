// Get the suggestion input and form
const suggestionInput = document.getElementById('suggestionInput');
const suggestionForm = document.getElementById('suggestionForm');

// Event listener for suggestion form submission
suggestionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const suggestion = suggestionInput.value.trim();
    if (suggestion.length > 0) {
        // Send the suggestion to the server using AJAX
        // Replace this with your actual backend API endpoint
        fetch('/api/submit-suggestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ suggestion }),
        })
        .then(response => {
            if (response.ok) {
                // Show a success message to the user
                alert('تم استلام اقتراحك، شكرًا لك!');
                suggestionInput.value = ''; // Clear the input field
            } else {
                throw new Error('Failed to submit suggestion');
            }
        })
        .catch(error => {
            console.error('Error submitting suggestion:', error);
            // Show an error message to the user
            alert('حدث خطأ أثناء إرسال اقتراحك، يرجى المحاولة مرة أخرى.');
        });
    }
});
