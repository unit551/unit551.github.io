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
    // 9 Meter to Feet
    m_ft: 'Multiply the length by 3.281'
    },
	{
    // 1 Feet to Meter
    ft_m: 'Multiply the length by 0.3048'
  },
]

const unitsLength1 = [
	'Feet',
];
const unitsLength2 = [
	'Meter',
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
if ((convertFrom.value === 'Meter') && (convertTo.value === 'Meter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Feet') && (convertTo.value === 'Feet')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Meter') && (convertTo.value === 'Feet')) {
  result.value = length.value * 3.281;
  formula.textContent = hints[1].m_ft;
} else if ((convertFrom.value === 'Feet') && (convertTo.value === 'Meter')) {
  result.value = length.value * 0.3048;
  formula.textContent = hints[2].ft_m;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);// JavaScript Document