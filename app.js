// https://www.omnicalculator.com/conversion/pounds-to-lbs

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const poundsRadio = document.getElementById('poundsRadio');
const milligramsRadio = document.getElementById('milligramsRadio');

let pounds;
let milligrams = v; 

// labels of the inpust
const variable = document.getElementById('variable');

poundsRadio.addEventListener('click', function() {
  variable.textContent = 'Milligrams';
  milligrams = v;
  result.textContent = '';
});

milligramsRadio.addEventListener('click', function() {
  variable.textContent = 'Pounds';
  pounds = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(poundsRadio.checked)
    result.textContent = `Pounds = ${computepounds().toFixed(5)}`;

  else if(milligramsRadio.checked)
    result.textContent = `Milligrams = ${computemilligrams().toFixed(5)}`;
})

// calculation

function computepounds() {
  return Number(milligrams.value) / 453600;
}

function computemilligrams() {
  return Number(pounds.value) * 453600;
}