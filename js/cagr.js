const startingValue = document.getElementById("starting-value");
const endingValue = document.getElementById("ending-value");
const years = document.getElementById("years");
const months = document.getElementById("months");
const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", calculateCAGR);

function calculateCAGR() {
  const initialFigure = parseFloat(startingValue.value);
  const finalFigure = parseFloat(endingValue.value);
  const yearFigure = parseFloat(years.value);
  const monthsFigure = parseFloat(months.value);
  const totalTime = yearFigure + monthsFigure / 12;

  if (totalTime === 0 || initialFigure === 0) {
    alert("Time cannot be zero");
  }
}
