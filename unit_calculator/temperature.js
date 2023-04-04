// JavaScript Document
const temperature = document.querySelector('#amount_temperature');
const convertFrom5 = document.querySelector('#from_temperature');
const convertTo5 = document.querySelector('#to_temperature');
const formula5 = document.querySelector('.content_temperature');
const result5 = document.querySelector('#result_temperature');
const selectElem5 = document.querySelectorAll('select');

const hints5 = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    c_k: 'K = °C + 273.15'
  },
  {
    c_f: '°F = °C × 1.8 + 32'
  },
  {
    k_c: '°C = K - 273.15'
  },
  {
    k_f: '°F = (K − 273.15) × 9/5 + 32'
  },
  {
    f_c: '°C = (°F - 32) × 5/9'
  },
  {
    f_k: 'K = (°F − 32) × 5 ⁄ 9 + 273.15'
  },
]
const unitsTemperature = [
	'Kelvin',
	'Fahrenheit',
];

for (let i = 0; i < unitsTemperature.length; i++) {
	let option5 = ` <option value=${unitsTemperature[i]}>${unitsTemperature[i]}</option>`;
	selectElem5[0].firstElementChild.insertAdjacentHTML('afterend', option5);	
}
for (let i = 0; i < unitsTemperature.length; i++) {
	let option5 = ` <option value=${unitsTemperature[i]}>${unitsTemperature[i]}</option>`;
	selectElem5[1].firstElementChild.insertAdjacentHTML('afterend', option5);	
}
function convertUnits5 (){
if ((convertFrom5.value === 'Celsius') && (convertTo5.value === 'Celsius')) {
result5.value = temperature.value;
formula5.textContent = hints5[0].sameUnit;
} else if ((convertFrom5.value === 'Kelvin') && (convertTo5.value === 'Kelvin')) {
result5.value = temperature.value;
formula5.textContent = hints5[0].sameUnit;
} else if ((convertFrom5.value === 'Fahrenheit') && (convertTo5.value === 'Fahrenheit')) {
result5.value = temperature.value;
formula5.textContent = hints5[0].sameUnit;
}
if ((convertFrom5.value === 'Celsius') && (convertTo5.value === 'Kelvin')) {
result5.value = temperature.value * 1 + 273.15;
formula5.textContent = hints5[1].c_k;
} else if ((convertFrom5.value === 'Celsius') && (convertTo5.value === 'Fahrenheit')) {
result5.value = temperature.value * 1.8 + 32;
formula5.textContent = hints5[2].c_f;
}
if ((convertFrom5.value === 'Kelvin') && (convertTo5.value === 'Celsius')) {
result5.value = temperature.value * 1 - 273.15;
formula5.textContent = hints5[3].k_c;
} else if ((convertFrom5.value === 'Kelvin') && (convertTo5.value === 'Fahrenheit')) {
result5.value = (temperature.value - 273.15) * 1.8 + 32;
formula5.textContent = hints5[4].k_f;
}
if ((convertFrom5.value === 'Fahrenheit') && (convertTo5.value === 'Celsius')) {
result5.value = (temperature.value * 1 - 32) * 5/9;
formula5.textContent = hints5[5].f_c;
} else if ((convertFrom5.value === 'Fahrenheit') && (convertTo5.value === 'Kelvin')) {
result5.value = (temperature.value * 1 - 32) * 5/9 + 273.15;
formula5.textContent = hints5[6].f_k;
}
}
	
convertFrom5.addEventListener('change',convertUnits5);
convertTo5.addEventListener('change',convertUnits5);
temperature.addEventListener('input',convertUnits5);