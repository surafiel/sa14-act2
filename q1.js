// Function to fetch weather data from API
function fetchWeather(city) {
    const apiKey = '54af07c6f62d42b5b81201201240304'; // Replace with your API key
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCurrentWeather(data.current);
            displayForecast(data.forecast.forecastday);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to display current weather
function displayCurrentWeather(currentWeather) {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Current Time: ${currentTime}`);
    console.log(`Temperature: ${currentWeather.temp_c}°C`);
    console.log(`Condition: ${currentWeather.condition.text}`);
    console.log(`Humidity: ${currentWeather.humidity}%`);
}

// Function to display forecast
function displayForecast(forecast) {
    forecast.forEach(day => {
        const date = new Date(day.date);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        console.log(`${dayOfWeek}: ${day.day.avgtemp_c}°C - ${day.day.condition.text}`);
    });
}

// Example usage
const city = 'New York'; // Change the city name as per your requirement
fetchWeather(city);