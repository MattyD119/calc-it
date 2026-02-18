const startingValue = document.getElementById("starting-value");
const endingValue = document.getElementById("ending-value");
const years = document.getElementById("years");
const months = document.getElementById("months");
const resultDisplay = document.getElementById("cagr-result");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateCAGR);

const tableBody = document.getElementById("table-body");

function calculateCAGR() {
  const initialFigure = parseFloat(startingValue.value);
  const finalFigure = parseFloat(endingValue.value);
  const yearFigure = parseFloat(years.value);
  const monthsFigure = parseFloat(months.value);
  const totalTime = yearFigure + monthsFigure / 12;

  tableBody.innerHTML = "";

  if (yearFigure === 0 || initialFigure === 0) {
    alert("Time cannot be zero");
  } else {
    let cagr = ((finalFigure / initialFigure) ** (1 / totalTime) - 1) * 100;

    resultDisplay.textContent = cagr.toFixed(2) + "%";

    let currentBalance = initialFigure;
    let yearsInterest = 0;

    for (let year = 1; year <= yearFigure; year++) {
      const row = document.createElement("tr");

      const endOfYear = document.createElement("td");
      const growth = document.createElement("td");
      const value = document.createElement("td");

      const interestSum = currentBalance * (cagr / 100);
      yearsInterest = interestSum;
      currentBalance = currentBalance + yearsInterest;

      endOfYear.textContent = year;
      growth.textContent = "£" + yearsInterest.toFixed(2);
      value.textContent = "£" + currentBalance.toFixed(2);

      row.appendChild(endOfYear);
      row.appendChild(growth);
      row.appendChild(value);

      tableBody.appendChild(row);
    }

    if (monthsFigure > 0) {
      const row = document.createElement("tr");

      const final = document.createElement("td");
      const finalGrowth = document.createElement("td");
      const finalValue = document.createElement("td");

      const finalGrowthFigure = finalFigure - currentBalance;

      final.textContent = "Final " + monthsFigure + " months";
      finalGrowth.textContent = finalGrowthFigure.toFixed(2);
      finalValue.textContent = finalFigure.toFixed(2);

      row.appendChild(final);
      row.appendChild(finalGrowth);
      row.appendChild(finalValue);

      tableBody.appendChild(row);
    }
  }
}
