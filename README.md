🌦️ Weather App

A simple and interactive weather application that allows users to search for any city and view the current weather conditions.

This project uses the Visual Crossing Weather API to fetch real-time weather data and dynamically updates the UI based on weather conditions.

📌 Features

🔍 Search weather by city name

🌡️ Displays:

Date

Temperature

Humidity

Feels-like temperature

Weather condition

Precipitation type

Precipitation probability

🌧️ Dynamic weather icons (rain, snow, sun, wind, clouds)

🎨 Background changes for rainy weather

⚠️ Error handling for invalid cities

🛠️ Technologies Used

HTML

CSS

JavaScript (ES6)

Fetch API

Visual Crossing Weather API


⚙️ How It Works

User enters a city name.

When the search button is clicked:

The app sends a request to the Visual Crossing API.

Weather data is fetched using fetch().

The app extracts:

Temperature

Humidity

Conditions

Weather icon

The UI updates dynamically with:

Weather details

Corresponding weather image

Background changes (if raining)

🔑 API Information

This app uses:

Visual Crossing Weather API



⚠️ Important:
It is recommended to store your API key in an environment variable instead of hardcoding it inside index.js for security reasons.



