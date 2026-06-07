const atkInput = document.getElementById("atk");
const output = document.getElementById("output");

atkInput.addEventListener("input", function() {
  const value = parseFloat(atkInput.value);
  output.textContent = "Result: " + value * 2; // placeholder calc
});