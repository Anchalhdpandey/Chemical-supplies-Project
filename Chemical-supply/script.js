let chemicalData = [
  {
    "id": 1,
    "chemicalName": "Ammonium Persulfate",
    "vendor": "LG Chem",
    "density": 3525.92,
    "viscosity": 60.63,
    "packaging": "Bag",
    "packSize": 100,
    "unit": "kg",
    "quantity": 6495.18
  },
  {
    "id": 2,
    "chemicalName": "Caustic Potash",
    "vendor": "Formosa",
    "density": 3172.15,
    "viscosity": 48.22,
    "packaging": "Bag",
    "packSize": 100,
    "unit": "kg",
    "quantity": 8751.9
  },
  {
    "id": 3,
    "chemicalName": "Dimethylaminopropylamino",
    "vendor": "LG Chem",
    "density": 8435.37,
    "viscosity": 12.62,
    "packaging": "Barrel",
    "packSize": 75,
    "unit": "L",
    "quantity": 5964.61
  },
  {
    "id": 4,
    "chemicalName": "Mono Ammonium Phosphate",
    "vendor": "Sinopec",
    "density": 1597.65,
    "viscosity": 76.51,
    "packaging": "Bag",
    "packSize": 105,
    "unit": "kg",
    "quantity": 8183.73
  },
  {
    "id": 5,
    "chemicalName": "Ferric Nitrate",
    "vendor": "DowDuPont",
    "density": 364.04,
    "viscosity": 14.9,
    "packaging": "Bag",
    "packSize": 105,
    "unit": "kg",
    "quantity": 4154.33
  },
  {
    "id": 6,
    "chemicalName": "n Pentane",
    "vendor": "Sinopec",
    "density": 4566.67,
    "viscosity": 66.76,
    "packaging": "N/A",
    "packSize": "N/A",
    "unit": "t",
    "quantity": 6272.34
  },
  {
    "id": 7,
    "chemicalName": "Acetone",
    "vendor": "ChemicalCorp",
    "density": 0.79,
    "viscosity": 0.32,
    "packaging": "Bottle",
    "packSize": 5,
    "unit": "L",
    "quantity": 100
  },
  {
    "id": 8,
    "chemicalName": "Sodium Hydroxide",
    "vendor": "LabSupply Co.",
    "density": 2.13,
    "viscosity": 0.54,
    "packaging": "Drum",
    "packSize": 25,
    "unit": "kg",
    "quantity": 50
  },
  {
    "id": 9,
    "chemicalName": "Ethanol",
    "vendor": "GlobalChem",
    "density": 0.789,
    "viscosity": 1.2,
    "packaging": "Bottle",
    "packSize": 10,
    "unit": "L",
    "quantity": 75
  },
  {
    "id": 10,
    "chemicalName": "Hydrochloric Acid",
    "vendor": "ChemicalCorp",
    "density": 1.19,
    "viscosity": 1.9,
    "packaging": "Container",
    "packSize": 20,
    "unit": "L",
    "quantity": 40
  },
  {
    "id": 11,
    "chemicalName": "Sulfuric Acid",
    "vendor": "IndustrialChem",
    "density": 1.84,
    "viscosity": 1.4,
    "packaging": "Drum",
    "packSize": 50,
    "unit": "L",
    "quantity": 25
  },
  {
    "id": 12,
    "chemicalName": "Methanol",
    "vendor": "GlobalChem",
    "density": 0.791,
    "viscosity": 0.59,
    "packaging": "Bottle",
    "packSize": 5,
    "unit": "L",
    "quantity": 90
  },
  {
    "id": 13,
    "chemicalName": "Potassium Hydroxide",
    "vendor": "LabSupply Co.",
    "density": 2.04,
    "viscosity": 0.73,
    "packaging": "Drum",
    "packSize": 30,
    "unit": "kg",
    "quantity": 60
  },
  {
    "id": 14,
    "chemicalName": "Ammonia",
    "vendor": "IndustrialChem",
    "density": 0.73,
    "viscosity": 0.28,
    "packaging": "Cylinder",
    "packSize": 50,
    "unit": "L",
    "quantity": 10
  },
  {
    "id": 15,
    "chemicalName": "Acetic Acid",
    "vendor": "ChemicalCorp",
    "density": 1.05,
    "viscosity": 1.22,
    "packaging": "Bottle",
    "packSize": 15,
    "unit": "L",
    "quantity": 30
  }
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
    chemicalData[index].quantity = parseFloat(newQuantity);
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

// Event listener for adding new chemical
document.querySelector(".fa-plus").addEventListener("click", () => {
  // Get new chemical details from user input
  const newChemicalName = prompt("Enter chemical name:");
  const newVendor = prompt("Enter vendor name:");
  const newDensity = parseFloat(prompt("Enter density:"));
  const newViscosity = parseFloat(prompt("Enter viscosity:"));
  const newPackaging = prompt("Enter packaging:");
  const newPackSize = parseFloat(prompt("Enter pack size:"));
  const newUnit = prompt("Enter unit:");
  const newQuantity = parseFloat(prompt("Enter quantity:"));

  // Validate if required fields are properly filled
  if (
    newChemicalName &&
    newVendor &&
    !isNaN(newDensity) &&
    !isNaN(newViscosity) &&
    newPackaging &&
    !isNaN(newPackSize) &&
    newUnit &&
    !isNaN(newQuantity)
  ) {
    const newChemical = {
      id:
        chemicalData.length > 0
          ? chemicalData[chemicalData.length - 1].id + 1
          : 1,
      chemicalName: newChemicalName,
      vendor: newVendor,
      density: newDensity,
      viscosity: newViscosity,
      packaging: newPackaging,
      packSize: newPackSize,
      unit: newUnit,
      quantity: newQuantity,
    };

    // Add the new chemical to the chemicalData array
    chemicalData.push(newChemical);

    // Reload the table to reflect the new data
    loadTable();

    // Save the updated data to localStorage
    saveToLocalStorage();
  } else {
    alert("Please fill in all the fields with valid data.");
  }
});

// Event listener for deleting selected rows
document
  .querySelector(".fa-trash")
  .addEventListener("click", deleteSelectedRows);

// Initialize table on page load
loadFromLocalStorage();
