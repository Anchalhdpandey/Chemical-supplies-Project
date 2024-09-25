// Embedded JSON data (1D Array)
let chemicalData = [
    {
      id: 1,
      chemicalName: "Ammonium Persulfate",
      vendor: "LG Chem",
      density: 3525.92,
      viscosity: 60.63,
      packaging: "Bag",
      packSize: 100,
      unit: "kg",
      quantity: 6495.18,
    },
    {
      id: 2,
      chemicalName: "Caustic Potash",
      vendor: "Formosa",
      density: 3172.15,
      viscosity: 48.22,
      packaging: "Bag",
      packSize: 100,
      unit: "kg",
      quantity: 8751.9,
    },
    {
      id: 3,
      chemicalName: "Dimethylaminopropylamino",
      vendor: "LG Chem",
      density: 8435.37,
      viscosity: 12.62,
      packaging: "Barrel",
      packSize: 75,
      unit: "L",
      quantity: 5964.61,
    },
    // Add more chemical data here...
  ];
  
  // Function to load the table
  function loadTable() {
    const tbody = document.querySelector("#chemicalTable tbody");
    tbody.innerHTML = ""; // Clear existing data
  
    chemicalData.forEach((chemical, index) => {
      const row = document.createElement("tr");
  
      // Add checkbox column
      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "rowCheckbox";
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);
  
      // Add each chemical property to the row
      const idCell = document.createElement("td");
      idCell.innerText = chemical.id;
      row.appendChild(idCell);
  
      const nameCell = document.createElement("td");
      nameCell.innerText = chemical.chemicalName;
      row.appendChild(nameCell);
  
      const vendorCell = document.createElement("td");
      vendorCell.innerText = chemical.vendor;
      row.appendChild(vendorCell);
  
      const densityCell = document.createElement("td");
      densityCell.innerText = chemical.density;
      row.appendChild(densityCell);
  
      const viscosityCell = document.createElement("td");
      viscosityCell.innerText = chemical.viscosity;
      row.appendChild(viscosityCell);
  
      const packagingCell = document.createElement("td");
      packagingCell.innerText = chemical.packaging;
      row.appendChild(packagingCell);
  
      const packSizeCell = document.createElement("td");
      packSizeCell.innerText = chemical.packSize;
      row.appendChild(packSizeCell);
  
      const unitCell = document.createElement("td");
      unitCell.innerText = chemical.unit;
      row.appendChild(unitCell);
  
      const quantityCell = document.createElement("td");
      quantityCell.innerText = chemical.quantity;
      row.appendChild(quantityCell);
  
      // Add edit button column with pencil icon
      const editCell = document.createElement("td");
      const editButton = document.createElement("i");
      editButton.className = "fa-solid fa-pencil";
      editButton.style.cursor = "pointer"; // Make the icon clickable
      editButton.addEventListener("click", () => editRow(index));
      editCell.appendChild(editButton);
      row.appendChild(editCell);
  
      tbody.appendChild(row);
    });
  }
  
  // Function to edit a row
  function editRow(index) {
    const newChemicalName = prompt(
      "Enter new chemical name:",
      chemicalData[index].chemicalName
    );
    const newQuantity = prompt(
      "Enter new quantity:",
      chemicalData[index].quantity
    );
  
    if (newChemicalName && newQuantity) {
      chemicalData[index].chemicalName = newChemicalName;
      chemicalData[index].quantity = newQuantity;
      loadTable(); // Reload the table after editing
      saveToLocalStorage(); // Save updated data to localStorage
    }
  }
  
  // Function to save data to localStorage
  function saveToLocalStorage() {
    localStorage.setItem("chemicalData", JSON.stringify(chemicalData));
  }
  
  // Function to load data from localStorage if available
  function loadFromLocalStorage() {
    const storedData = localStorage.getItem("chemicalData");
    if (storedData) {
      chemicalData = JSON.parse(storedData);
    }
    loadTable(); // Load the table with either stored data or default data
  }
  
  // Function to delete selected rows
  function deleteSelectedRows() {
    const checkboxes = document.querySelectorAll(".rowCheckbox");
    const selectedRows = [];
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedRows.push(index);
      }
    });
  
    // Remove selected rows from chemicalData
    selectedRows.reverse().forEach((rowIndex) => {
      chemicalData.splice(rowIndex, 1);
    });
  
    loadTable(); // Reload the table after deletion
    saveToLocalStorage(); // Save updated data to localStorage
  }
  
  // Add event listeners for toolbar icons
  document.querySelector(".fa-plus").addEventListener("click", () => {
    const newChemical = {
      id:
        chemicalData.length > 0
          ? chemicalData[chemicalData.length - 1].id + 1
          : 1,
      chemicalName: prompt("Enter chemical name:"),
      vendor: prompt("Enter vendor name:"),
      density: parseFloat(prompt("Enter density:")),
      viscosity: parseFloat(prompt("Enter viscosity:")),
      packaging: prompt("Enter packaging:"),
      packSize: parseFloat(prompt("Enter pack size:")),
      unit: prompt("Enter unit:"),
      quantity: parseInt(prompt("Enter quantity:")),
    };
  
    if (newChemical.chemicalName && newChemical.vendor && !isNaN(newChemical.density)) {
      chemicalData.push(newChemical);
      loadTable(); // Reload table with new row
      saveToLocalStorage(); // Save updated data to localStorage
    }
  });
  
  document
    .querySelector(".fa-trash")
    .addEventListener("click", deleteSelectedRows);
  
  // Initialize table on page load
  loadFromLocalStorage();
  