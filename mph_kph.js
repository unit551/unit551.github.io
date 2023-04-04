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
    // 9 mph to kph
    mph_kph: 'Multiply the acceleration by 1.60934'
    },
	{
    // 1 kph to mph
    kph_mph: 'Divide the acceleration by 1.60934'
  },
]

const unitsLength1 = [
	'kph',
];
const unitsLength2 = [
	'mph',
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
if ((convertFrom.value === 'mph') && (convertTo.value === 'mph')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'kph') && (convertTo.value === 'kph')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'mph') && (convertTo.value === 'kph')) {
  result.value = length.value * 1.60934;
  formula.textContent = hints[1].mph_kph;
} else if ((convertFrom.value === 'kph') && (convertTo.value === 'mph')) {
  result.value = length.value / 1.60934;
  formula.textContent = hints[2].kph_mph;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);