The Chemical Supply List is a web application that allows users to manage a list of chemical supplies, including adding, editing, and deleting items from the list. This application utilizes HTML, CSS, and JavaScript, making it a simple yet effective tool for inventory management.

Features
Display a table of chemical supplies with essential details.
Add new chemicals to the list.
Edit existing chemicals' names and quantities.
Delete selected chemicals from the list.
Persistent storage using localStorage, so data is retained even after page refresh.
Technologies Used
HTML: To structure the web page.
CSS: For styling the application.
JavaScript: To implement dynamic functionalities and handle data.
Installation
To run this project locally:

Clone the repository or download the source files.
Open the index.html file in your web browser.

HTML File: index.html
This file contains the structure of the web application. Key components include:

Meta Tags: For character set and responsive design.
Font Awesome: For icons representing actions (add, edit, delete, etc.).
Table Structure: Defines the columns for chemical data.
Script Tag: Links to the JavaScript file for functionality.
JavaScript File: script.js
This file handles all the logic for the application:

Data Handling:

The chemical data is stored as an array of objects directly in the JavaScript file.
Each object contains properties like id, chemicalName, vendor, density, viscosity, packaging, packSize, unit, and quantity.
Functions:

loadTable(): Loads the chemical data into the HTML table.
editRow(index): Allows editing of chemical details through prompts.
deleteSelectedRows(): Deletes selected rows from the table.
saveToLocalStorage(): Saves the current state of the chemical data to localStorage.
loadFromLocalStorage(): Loads data from localStorage upon initialization.
Event Listeners:

For adding new chemicals, deleting selected ones, and editing existing ones.
JSON Data
I have included the chemical data directly in the JavaScript file as an array of objects. This approach was chosen to ensure the application can function correctly when hosted on platforms like GitHub Pages, where fetching external JSON files might lead to CORS (Cross-Origin Resource Sharing) issues. By embedding the data, we ensure that it is readily available for the application without additional HTTP requests.

Usage
Add Chemicals: Click the "+" icon to prompt for new chemical details.
Edit Chemicals: Click the pencil icon next to a chemical to update its name and quantity.
Delete Chemicals: Select the checkboxes for the chemicals you want to delete and click the trash can icon.