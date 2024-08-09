let currentValue = 0;
let electricityValue = 2305;
let electricityEqvValue = 2 * electricityValue;
let electricityEqvUnit = "Tons of carbon saved";

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('electricity').innerText = electricityValue;
  document.getElementById('electricity-eqv').innerText = electricityEqvValue;
  document.getElementById('electricity-eqv-unit').innerText = electricityEqvUnit;
});

function updateValue(amount) {
  currentValue += amount;
  document.getElementById('number-value').innerText = currentValue;
}

function resetValue() {
  currentValue = 0;
  document.getElementById('number-value').innerText = currentValue;
}

function updateEqvValue() {
  electricityEqvValue = 10;
  electricityEqvUnit = "trees planted";
  document.getElementById('electricity-eqv').innerText = electricityEqvValue;
  document.getElementById('electricity-eqv-unit').innerText = electricityEqvUnit;
}