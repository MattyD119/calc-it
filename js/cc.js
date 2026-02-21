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
payOffBtn.addEventListener("click", calculatePayOff);
repaymentBtn.addEventListener("click", calculateRepayment);

// table variables
const payOffTable = document.getElementById("pay-off-table");
const ccResMonths = document.getElementById("cc-res-months");
const ccResInterest = document.getElementById("cc-res-interest");
const ccResTotal = document.getElementById("cc-res-total");
const monthlyTable = document.getElementById("monthly-table");

function calculatePayOff() {
  const balance = parseFloat(payOffBalance.value);
  const intRate = parseFloat(payOffIntRate.value);
  const payment = parseFloat(monthlyPayment.value);

  const minPayment = (balance * (intRate / 100)) / 12;

  if (payment <= minPayment) {
    alert(
      "Your monthly payment is less than the monthly interest charged by this card",
    );
  } else {
    let counter = 0;
    let currentBalance = balance;
    let interest = 0;
    let totalInterest = 0;

    while (currentBalance > 0 && counter < 1000) {
      interest = (currentBalance * (intRate / 100)) / 12;
      currentBalance = currentBalance + interest - payment;
      counter++;
      totalInterest += interest;
    }

    let totalPaid = balance + totalInterest;

    ccResMonths.textContent = counter;
    ccResInterest.textContent =
      "£" +
      totalInterest.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    ccResTotal.textContent =
      "£" +
      totalPaid.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
}

function calculateRepayment() {}
