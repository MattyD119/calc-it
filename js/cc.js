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
const cc2ResMonthly = document.getElementById("cc2-res-monthly");
const cc2ResInterest = document.getElementById("cc2-res-interest");
const cc2ResTotal = document.getElementById("cc2-res-total");

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

function calculateRepayment() {
  const principal = parseFloat(monthlyBalance.value);
  const theIntRate = parseFloat(monthlyIntRate.value);
  const timePeriod = parseFloat(desiredMonths.value);

  const dividedIntRate = theIntRate / 100 / 12;

  const monthlyPayment =
    principal *
    ((dividedIntRate * Math.pow(1 + dividedIntRate, timePeriod)) /
      (Math.pow(1 + dividedIntRate, timePeriod) - 1));

  cc2ResMonthly.textContent = monthlyPayment.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  const interestPaid = monthlyPayment * timePeriod - principal;

  cc2ResInterest.textContent = interestPaid.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  const payBackTotal = principal + interestPaid;

  cc2ResTotal.textContent = payBackTotal.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}
