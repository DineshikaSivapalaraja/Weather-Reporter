# Weather Reporter

A simple, user-friendly web application that displays the **current weather** for Colombo, Sri Lanka by default, and allows users to search for weather in any city worldwide. Built with React and Vite, deployed on Vercel.

---

## Features

- **Current Weather for Colombo:**  
  Shows real-time weather for colombo.

- **Location Search:**  
  Users can search for any city in the world to view its current weather.

- **Geolocation:**  
  “Use My Location” button added to fetches weather for the user’s current location.
  This feature relies on browser’s geolocation API. Sometimes, the detected location may not be accurate. 

- **Weather Details Displayed:**  
  - Local Time (24 hrs format) 
  - Temperature  
  - Humidity  
  - Wind Speed  
  - Weather Condition & Icon 
  - Wind Direction  
  - UV Index  
  - Feels Like Temperature

- **Loading State:**  
  Shows a spinner while fetching data.

- **Error Handling:**  
  User-friendly messages for invalid city names, geolocation errors, and empty input.

- **Clean UI:**  
  Minimal user-friendly design with clear layout..

---

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DineshikaSivapalaraja/Weather-Reporter.git
   cd weather-reporter
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Add your [weatherapi.com](https://www.weatherapi.com/) API key:
     ```
     VITE_WEATHER_API_KEY=your_actual_api_key
     ```

4. **Run the app locally:**
   ```sh
   npm run dev
   ```
---

## Deployment

This app is deployed on [Vercel](https://vercel.com/).

**Live Demo:**  
[https://weather-reporter-five.vercel.app/](https://weather-reporter-five.vercel.app/)

To redeploy or update:
- Push changes to your main branch on GitHub.
- Vercel will automatically redeploy.
- Update your API key in Vercel’s environment variables if needed.

---

## Resources

- [weatherapi.com](https://www.weatherapi.com/) for free weather data.
- [Vercel](https://vercel.com/) for free hosting.

---

## Screenshots

<img width="959" alt="image" src="https://github.com/user-attachments/assets/3324d096-0e21-45aa-a438-45e431c5013b" />

![image](https://github.com/user-attachments/assets/3f38ea8f-4d65-4e2f-8655-cd0bfd14f22b)

---

