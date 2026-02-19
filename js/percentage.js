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
const c2Res = document.getElementById("c2-res");
const c3Res = document.getElementById("c3-res");
const c4Res = document.getElementById("c4-res");
const c5Res = document.getElementById("c5-res");
const c6Res = document.getElementById("c6-res");

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
    alert("Fields cannot be empty");
  } else {
    let result = (percentage / 100) * figure;

    // c1Res.textContent = formattedResult.toLocaleString();
    c1Res.textContent = result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

function percentageCalculator() {
  const value = parseFloat(c2Val.value);
  const total = parseFloat(c2Total.value);

  c2Res.textContent = "";

  if (isNaN(value) || isNaN(total)) {
    alert("Fields cannot be empty");
  } else {
    let result = (value / total) * 100;

    c2Res.textContent = result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

function addSubtract() {
  const base = parseFloat(c3Base.value);
  const percentage = parseFloat(c3Perc.value);

  c3Res.textContent = "";

  if (isNaN(base) || isNaN(percentage)) {
    alert("Fields cannot be empty");
  } else {
    let addResult = base + base * (percentage / 100);
    let minusResult = base - base * (percentage / 100);

    if (plus.checked) {
      c3Res.textContent = addResult.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      c3Res.textContent = minusResult.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  }
}

function increaseDecrease() {
  const fromFigure = parseFloat(c4From.value);
  const toFigure = parseFloat(c4To.value);

  c4Res.textContent = "";

  if (isNaN(fromFigure) || isNaN(toFigure) || fromFigure === 0) {
    alert("Fields cannot be empty");
  } else {
    let result = ((toFigure - fromFigure) / fromFigure) * 100;

    c4Res.textContent =
      result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + "%";
  }
}

function ofWhat() {
  const value = parseFloat(c5Val.value);
  const percentage = parseFloat(c5Perc.value);

  c5Res.textContent = "";

  if (isNaN(value) || isNaN(percentage)) {
    alert("Fields cannot be empty");
  } else {
    let result = value / (percentage / 100);

    c5Res.textContent = result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

function percentageChange() {
  const initialFigure = parseFloat(c6Init.value);
  const finalFigure = parseFloat(c6Final.value);

  c6Res.textContent = "";

  if (isNaN(initialFigure) || isNaN(finalFigure) || initialFigure === 0) {
    alert("Fields cannot be empty");
  } else {
    let result = ((finalFigure - initialFigure) / initialFigure) * 100;

    c6Res.textContent =
      result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + "%";
  }
}
