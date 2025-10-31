document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the city input
    const city = document.getElementById('cityInput').value;

    // Show the loading spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block';

    try {
        // Make a GET request to the OpenWeatherMap API
        const apiKey = '046d3722a9bad630cabd9380da3d07f4'; // Replace with your OpenWeatherMap API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const weatherData = await response.json();

        // Display the weather results on the webpage
        const weatherResults = document.getElementById('weatherResults');
        weatherResults.innerHTML = `
            <h2>Weather in ${weatherData.name}</h2>
            <p>Temperature: ${weatherData.main.temp} °C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
        `;
    } catch (error) {
        // Handle errors
        document.getElementById('weatherResults').innerText = `Error: ${error.message}`;
    } finally {
        // Hide the loading spinner
        spinner.style.display = 'none';
    }
});
