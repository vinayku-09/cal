const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value); // Use with caution
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
