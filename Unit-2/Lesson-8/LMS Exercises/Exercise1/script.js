document.getElementById('fetchPostsButton').addEventListener('click', async function() {
    // Show the loading spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block';

    try {
        // Make a GET request to the JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const posts = await response.json();

        // Display the posts on the webpage
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = ''; // Clear previous content

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        // Handle errors
        document.getElementById('postsContainer').innerText = `Error: ${error.message}`;
    } finally {
        // Hide the loading spinner
        spinner.style.display = 'none';
    }
});
