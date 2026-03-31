# 🌤 Weather Dashboard (Angular 19)

## 📌 Project Overview

This project is a Weather Dashboard built using Angular 19. It allows users to search for cities, view real-time weather data, save cities, compare weather conditions, and track activity logs.

---

## 🚀 Features

* Search city weather using OpenWeatherMap API
* View temperature, humidity, wind speed, and conditions
* Save up to 5 cities
* Prevent duplicate city entries
* Refresh weather data per city
* Compare weather between two cities
* Activity log with timestamps (stored in localStorage)
* Responsive and modern dashboard UI

---

## 🛠️ Setup Instructions

1. Clone the repository or download ZIP

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your OpenWeatherMap API key:

   * Open `weather.service.ts`
   * Replace:

     ```ts
     private apiKey = 'YOUR_API_KEY';
     ```

4. Run the application:

   ```bash
   ng serve
   ```

5. Open browser:

   ```
   http://localhost:4200
   ```

---

## 🧩 Component Structure

* **WeatherDashboardComponent (Parent)**

  * Handles main state and layout

* **CitySearchComponent**

  * Takes user input and emits search event

* **WeatherCardComponent**

  * Displays current weather data

* **SavedCitiesComponent**

  * Displays saved cities list with actions (refresh, remove, compare)

* **ComparisonComponent**

  * Compares two selected cities dynamically

* **ActivityLogComponent**

  * Shows user actions with timestamps

---

## 🔄 Parent-Child Communication

* Used `@Input()` to pass data from parent to child components
* Used `@Output()` and `EventEmitter` to send events from child to parent

### Example:

* CitySearchComponent emits city name → Parent fetches data
* SavedCitiesComponent emits actions → Parent updates state
* Parent passes selected cities → ComparisonComponent displays result

---

## ⚖️ Comparison Logic

Comparison is dynamically calculated using getters:

* Higher temperature
* Higher humidity
* Faster wind speed
* Dynamic summary (e.g., "Delhi is hotter than Mumbai")

---

## 🧠 Assumptions Made

* Maximum 5 cities allowed for simplicity
* API response is mapped to a custom model
* Comparison works only when 2 cities are selected
* LocalStorage is used for activity logs
* UI optimized for desktop view

---

## ❗ Edge Cases Handled

* Invalid city name
* Duplicate city prevention
* Max city limit reached
* Removing city used in comparison
* Independent refresh per city

---

## 🎨 UI Features

* Modern dashboard layout
* Glassmorphism design
* Responsive grid system
* Hover effects and interactions

---

## 📦 Technologies Used

* Angular 19 (Standalone Components)
* TypeScript
* SCSS
* OpenWeatherMap API

---

## 📌 Author

Manish Kumar

---

## 📅 Submission Date

31 March 2026

<img width="1877" height="843" alt="image" src="https://github.com/user-attachments/assets/1126595c-abb1-41eb-9b91-896a3050d140" />
