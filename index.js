/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");

function lengthConvert() {
  let lengthP = document.getElementById("length-p");
  let metresToFeet = inputEl.value * 3.281;
  let feetToMetres = inputEl.value / 3.281;
  let lengthText = `${inputEl.value} metres = ${metresToFeet.toFixed(
    3
  )} feet | ${inputEl.value} feet = ${feetToMetres.toFixed(3)} metres`;
  return (lengthP.textContent = lengthText);
}

function volumeConvert() {
  let volumeP = document.getElementById("volume-p");
  let literToGallon = inputEl.value * 0.26;
  let gallonToLitre = inputEl.value / 0.26;
  let volumeText = `${inputEl.value} litres = ${literToGallon.toFixed(3)} | ${
    inputEl.value
  } gallons = ${gallonToLitre.toFixed(3)} litres`;
  return (volumeP.textContent = volumeText);
}

function massConvert() {
  let massP = document.getElementById("mass-p");
  let kilogramToPound = inputEl.value * 2.204;
  let poundToKilogram = inputEl.value / 2.204;
  let massText = `${inputEl.value} kilograms = ${kilogramToPound.toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${poundToKilogram.toFixed(
    3
  )} kilograms`;
  return (massP.textContent = massText);
}

btnEl.addEventListener("click", () => {
  lengthConvert();
  volumeConvert();
  massConvert();
});
