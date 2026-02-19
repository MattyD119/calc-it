// input variables
const c1Perc = document.getElementById("c1-perc");
const c1Total = document.getElementById("c1-total");
const c2Val = document.getElementById("c2-val");
const c2Total = document.getElementById("c2-total");
const c3Base = document.getElementById("c3-base");
const c3Perc = document.getElementById("c3-perc");
const c4From = document.getElementById("c4-from");
const c4To = document.getElementById("c4-to");
const c5Val = document.getElementById("c5-val");
const c5Perc = document.getElementById("c5-perc");
const c6Init = document.getElementById("c6-init");
const c6Final = document.getElementById("c6-final");

// toggle variables
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

// result boxes
const c1Res = document.getElementById("c1-res");

// button variables
const c1Btn = document.getElementById("c1-btn");
const c2Btn = document.getElementById("c2-btn");
const c3Btn = document.getElementById("c3-btn");
const c4Btn = document.getElementById("c4-btn");
const c5Btn = document.getElementById("c5-btn");
const c6Btn = document.getElementById("c6-btn");

// event listeners
c1Btn.addEventListener("click", percentageOf);
c2Btn.addEventListener("click", percentageCalculator);
c3Btn.addEventListener("click", addSubtract);
c4Btn.addEventListener("click", increaseDecrease);
c5Btn.addEventListener("click", ofWhat);
c6Btn.addEventListener("click", percentageChange);

function percentageOf() {
  const percentage = parseFloat(c1Perc.value);
  const figure = parseFloat(c1Total.value);

  c1Res.textContent = "";

  if (isNaN(percentage) || isNaN(figure)) {
    alert("Fields must have numbers in them");
  } else {
    let result = (percentage / 100) * figure;

    c1Res.textContent = result.toLocaleString();
  }
}

function percentageCalculator() {}

function addSubtract() {}

function increaseDecrease() {}

function ofWhat() {}

function percentageChange() {}
