function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const status = parseStatus(row.cells[3].dataset.available);
    const age = row.cells[1].textContent;
    const gender = row.cells[2].textContent;

    if (age < 18) {
      row.style.textDecoration = "line-through";
    }

    row.classList.add(gender === "m" ? "male" : "female");

    switch (status) {
    case true:
      row.classList.add("available");
      break;

    case false:
      row.classList.add("unavailable");
      break;

    default:
      row.setAttribute("hidden", true);
      break;
    }
  }
}

function parseStatus(statusDataset) {
  try {
    return JSON.parse(statusDataset);
  } catch (e) {
    return "undefined";
  }
}
