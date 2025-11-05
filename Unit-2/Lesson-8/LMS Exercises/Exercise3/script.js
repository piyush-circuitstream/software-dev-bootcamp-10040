let infoForm = document.getElementById('infoForm');

infoForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create the data object
    const data = {
        name: name,
        email: email
    };

    try {
        // Make the POST request using Fetch API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const jsonResponse = await response.json();
        
        // Display the response on the webpage
        document.getElementById('responseMessage').innerText = `Success! ID: ${jsonResponse.id}`;
    } catch (error) {
        // Handle errors
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    }
});
