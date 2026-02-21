// input variables
const payOffBalance = document.getElementById("pay-off-balance");
const payOffIntRate = document.getElementById("pay-off-int-rate");
const monthlyPayment = document.getElementById("monthly-payment");
const monthlyBalance = document.getElementById("monthly-balance");
const monthlyIntRate = document.getElementById("monthly-int-rate");
const desiredMonths = document.getElementById("desired-months");

// button variables
const payOffBtn = document.getElementById("pay-off-btn");
const repaymentBtn = document.getElementById("repayment-btn");

// event listeners
payOffBtn.addEventListener("click");
repaymentBtn.addEventListener("click");

// table variables
const payOffTable = document.getElementById("pay-off-table");
const monthlyTable = document.getElementById("monthly-table");

function calculatePayOff() {
  const balance = parseFloat(payOffBalance.value);
  const intRate = parseFloat(payOffIntRate.value);
  const payment = parseFloat(monthlyPayment.value);
}

function calculateRepayment() {}
