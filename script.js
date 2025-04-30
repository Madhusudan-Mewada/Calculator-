const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    appendValue(key);
  } else if ("+-*/()".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault(); // prevent form submission
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "^") {
    appendValue("**");
  } else if (key === "%") {
    appendValue("%");
  }
});
