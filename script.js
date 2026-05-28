function createTable() {
    //Write your code here
   // Get number of rows
  let rn = prompt("Input number of rows");

  // Get number of columns
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate input
  if (
    isNaN(rn) ||
    isNaN(cn)
  ) {
    return;
  }

  if (
    rn <= 0 ||
    cn <= 0
  ) {
    alert("Please enter positive numbers");
    return;
  }

  // Get table
  const table = document.getElementById("myTable");

  // Clear previous table
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rn; i++) {

    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {

      const cell = document.createElement("td");

      cell.textContent =
        `Row-${i} Column-${j}`;

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

}
