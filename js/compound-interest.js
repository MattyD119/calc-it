const initialInvestment = document.getElementById("initial-investment");
const interestRate = document.getElementById("interest-rate");
const compoundFrequency = document.getElementById("compound-frequency");
const yearsInvested = document.getElementById("years-invested");
const depositAmount = document.getElementById("deposit-amount");
const depositFrequency = document.getElementById("deposit-frequency");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateCompoundInterest);

const tableBody = document.getElementById("table-body");

function calculateCompoundInterest() {
  const principle = parseFloat(initialInvestment.value);
  const rate = parseFloat(interestRate.value);
  const compFreq = parseFloat(compoundFrequency.value);
  const years = parseFloat(yearsInvested.value);
  const amount = parseFloat(depositAmount.value);
  const depfreq = parseFloat(depositFrequency.value);

  tableBody.innerHTML = "";

  let currentBalance = principle;
  let runningInterest = 0;

  for (let year = 1; year <= years; year++) {
    const row = document.createElement("tr");

    const yearCell = document.createElement("td");
    const interestCell = document.createElement("td");
    const accruedCell = document.createElement("td");
    const balanceCell = document.createElement("td");

    const newBalance =
      currentBalance * Math.pow(1 + rate / 100 / compFreq, compFreq * 1);
    let yearsInterest = newBalance - currentBalance;
    currentBalance = newBalance;
    runningInterest += yearsInterest;

    yearCell.textContent = year;
    interestCell.textContent = "£" + yearsInterest.toFixed(2);
    accruedCell.textContent = "£" + runningInterest.toFixed(2);
    balanceCell.textContent = "£" + currentBalance.toFixed(2);

    row.appendChild(yearCell);
    row.appendChild(interestCell);
    row.appendChild(accruedCell);
    row.appendChild(balanceCell);

    tableBody.appendChild(row);
  }
}
