# COMP3133 – Lab Test 2 (SpaceX Mission App)

## 📌 Description

This Angular application displays SpaceX mission data using the public SpaceX API.
Users can browse missions, filter them by launch year, and view detailed information about each mission.

The application was built using Angular 17 with standalone components and the HttpClient module.

---

## 🚀 Features Implemented

* Fetch SpaceX mission data using Angular HttpClient
* Display missions in a clean card-based UI
* Filter missions by launch year
* View detailed information for each mission
* Navigation using Angular routing
* Custom pipe for formatting mission data
* Angular 17 modern syntax:

  * `@for` (looping)
  * `@if` (conditional rendering)
  * `@switch` (conditional cases)
  * `signal()` for state management
* Angular Material UI components (toolbar, cards, buttons)

---

## 🧱 Technologies Used

* Angular 17 (Standalone Components)
* TypeScript
* Angular HttpClient
* Angular Forms (FormsModule & ReactiveFormsModule)
* Angular Material
* SpaceX REST API

---

## 🌐 API Used

SpaceX API (v3):
https://api.spacexdata.com/v3/launches

---

## 🖥️ Screenshots

### Mission List Page

Displays all SpaceX missions with key details and filtering option.

### Mission Details Page

Displays detailed information about a selected mission.

*(Add your screenshots here before submission)*

---

## ⚙️ How to Run the Project

1. Clone the repository:

   ```bash
   https://github.com/Ginageegee/101491915-lab-test2-comp3133
   ```

2. Navigate into the project folder:

   ```bash
   cd studentID101491915-lab-test2-comp3133
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ng serve
   ```

5. Open in browser:

   ```text
   http://localhost:4200
   ```

---

## 📦 Deployment

The application is deployed using:

* Vercel / Render (add your link here)

---

## 📁 Project Structure

* `services/` → API calls
* `models/` → TypeScript interfaces
* `missionlist/` → main mission list view
* `missionfilter/` → filter component
* `missiondetails/` → mission details page
* `pipes/` → custom Angular pipe

---

## 📚 Notes

* The app uses Angular 17 modern control flow syntax (`@for`, `@if`, `@switch`)
* Signals are used for reactive state management
* Data is fetched dynamically from the SpaceX API

---

## 👩‍💻 Author

Student Name: Regina Slonimsky
Student ID: 101491915
Course: COMP3133
