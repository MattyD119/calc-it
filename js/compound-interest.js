const initialInvestment = document.getElementById("initial-investment");
const interestRate = document.getElementById("interest-rate");
const compoundFrequency = document.getElementById("compound-frequency");
const yearsInvested = document.getElementById("years-invested");
const depositAmount = document.getElementById("deposit-amount");
const depositFrequency = document.getElementById("deposit-frequency");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateCompoundInterest);

function calculateCompoundInterest() {
  const principle = parseFloat(initialInvestment.value);
  const rate = parseFloat(interestRate.value);
  const compFreq = parseFloat(compoundFrequency.value);
  const years = parseFloat(yearsInvested.value);
  const amount = parseFloat(depositAmount.value);
  const depfreq = parseFloat(depositFrequency.value);
}
