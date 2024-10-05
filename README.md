# Land Area Measurement and Survey Project

## Project Overview
This project allows users to measure land areas, convert units, and access Indian geographical information through a simple web interface. The tools provided help farmers and individuals assess land details easily. The project uses **HTML**, **CSS**, **JavaScript**, **Leaflet.js**, **XAMPP**, and **Apache Server**.

## Features

### User Registration and Login
- **register.html**: A page for users to create an account.
- **login.html**: A page for users to log in with their credentials.
- **db.php**: Handles the backend registration and login processes using a database.

### Land Measurement Interface
- **land_measurement.html**: A page that serves as the main dashboard for land measurement, providing the following four options:
  1. **Land Area Calculator**
  2. **Unit Converter**
  3. **Indian Geographical Information**
  4. **Government Website for Farmers**

### Land Area Calculator
- **land.html**: A tool for users to mark land on a map using polygons, polylines, rectangles, and other shapes. After marking the area, the user can download the sketch as a PDF file.

### Updated Features:
- The project uses **Leaflet.js** for creating interactive maps where users can measure land area by drawing shapes directly on the map.
- Users can draw shapes (polygons, rectangles, circles, etc.) on the map to calculate the land area.
- **Tools provided**:
  - Drawing **polylines**, **polygons**, **rectangles**, **circles**, and **markers**.
  - Calculating the area of drawn polygons.
  - Exporting the map sketch as a PDF once the land area is calculated.
- The map is accessible at: `http://localhost/land/land.html`.

### Unit Converter
- **unit.html**: Converts various units like square miles, acres, square yards, square feet, hectares, square meters, and gunthas.

### Indian Geographical Information
- **indian.html**: Provides users with detailed information about India's geographical features, such as land area breakdown, regions, major land features, climate zones, and environmental concerns. It also includes links to government websites for more information.

### Government Websites for Farmers
- **former.html**: Links to important government websites for farmers in Karnataka, including:
  - Crop Survey Karnataka
  - Raitha Mitra
  - Samrakshane Karnataka
  - Crop Survey App  
It helps farmers stay updated with the latest notifications and information.

## Technologies Used
- **HTML/CSS/JavaScript**: For the structure, design, and functionality of the project.
- **Leaflet.js**: For map functionalities, including land area calculations.
- **XAMPP**: For hosting the local server and handling PHP operations.
- **Apache Server**: To serve the project on the local environment.

## How to Run the Project
1. Install **XAMPP** to run PHP and MySQL locally.
2. Clone or download the project files.
3. Place the project folder in the `htdocs` directory of your XAMPP installation.
4. Start the **Apache** and **MySQL** modules in XAMPP.
5. Access the project by visiting `http://localhost/<your-project-folder>` in your browser.
6. Use the provided HTML files to interact with the registration, login, land measurement, and other tools.

## Future Improvements
- Enhance the graphical user interface for better user experience.
- Add more geographical data and real-time information for accurate calculations.
- Integrate with government APIs to directly access land records and updates.

---

### Created by **SAMPATH B S** | **Computer Science and Engineering** | **GECM Hassan**
