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
    // 9 Kilometer to Feet
    km_ft: 'Multiply the length by 3280.84'
    },
	{
    // 1 Feet to Kilometer
    ft_km: 'Multiply the length by 0.0003048'
  },
]

const unitsLength1 = [
	'Feet',
];
const unitsLength2 = [
	'Kilometer',
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
if ((convertFrom.value === 'Kilometer') && (convertTo.value === 'Kilometer')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Feet') && (convertTo.value === 'Feet')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Kilometer') && (convertTo.value === 'Feet')) {
  result.value = length.value * 3280.84;
  formula.textContent = hints[1].km_ft;
} else if ((convertFrom.value === 'Feet') && (convertTo.value === 'Kilometer')) {
  result.value = length.value * 0.0003048;
  formula.textContent = hints[2].ft_km;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);