const length = document.querySelector('#amount_length');
const convertFrom = document.querySelector('#from_length');
const convertTo = document.querySelector('#to_length');
const formula = document.querySelector('.content_length');
const result = document.querySelector('#result_length');
const selectElem = document.querySelectorAll('select');

const hints = [
	{
    sameUnit: 'Gives the same value'
  },
	{
    // 9 Celsius to Fahrenheit
    c_f: '°F = °C × 1.8 + 32'
    },
	{
    // 1 Fahrenheit to Celsius
    f_c: '°C = (°F - 32) × 5/9'
  },
]

const unitsLength1 = [
	'Fahrenheit',
];
const unitsLength2 = [
	'Celsius',
];

for (let i = 0; i < unitsLength1.length; i++) {
	let option = ` <option value=${unitsLength1[i]}>${unitsLength1[i]}</option>`;
	selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);	
}
for (let i = 0; i < unitsLength2.length; i++) {
	let option = ` <option value=${unitsLength2[i]}>${unitsLength2[i]}</option>`;
	selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);	
}

function convertUnits (){
if ((convertFrom.value === 'Celsius') && (convertTo.value === 'Celsius')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Fahrenheit') && (convertTo.value === 'Fahrenheit')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Celsius') && (convertTo.value === 'Fahrenheit')) {
  result.value = length.value * 1.8 + 32;
  formula.textContent = hints[1].c_f;
} else if ((convertFrom.value === 'Fahrenheit') && (convertTo.value === 'Celsius')) {
  result.value = (length.value * 1 - 32) * 5/9;
  formula.textContent = hints[2].f_c;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);