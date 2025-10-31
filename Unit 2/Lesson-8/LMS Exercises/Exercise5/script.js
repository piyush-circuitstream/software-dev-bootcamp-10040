document.getElementById('fetchDataButton').addEventListener('click', async function() {
    // Show the loading spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block';

    // Define the endpoints
    const endpoints = [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'
    ];

    try {
        // Use Promise.all to fetch data from multiple endpoints concurrently
        const responses = await Promise.all(endpoints.map(url => fetch(url)));

        // Check if all responses are okay
        const dataPromises = responses.map(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });

        // Wait for all data to be resolved
        const dataResults = await Promise.all(dataPromises);

        // Combine the results (for demonstration, we'll concatenate them)
        const combinedData = {
            posts: dataResults[0],
            comments: dataResults[1]
        };

        // Display the combined data on the webpage
        document.getElementById('responseMessage').innerText = 
            `Fetched ${combinedData.posts.length} posts and ${combinedData.comments.length} comments.`;
    } catch (error) {
        // Handle errors
        document.getElementById('responseMessage').innerText = `Error: ${error.message}`;
    } finally {
        // Hide the loading spinner
        spinner.style.display = 'none';
    }
});
