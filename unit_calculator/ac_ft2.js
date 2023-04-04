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
    // 9 Acre to Square-Feet
    ac_ft2: 'Multiply the area by 43559.825'
    },
	{
    // 1 Square-Feet to Acre
    ft2_ac: 'Divide the area by 43559.825'
  },
]

const unitsLength1 = [
	'Square-Feet',
];
const unitsLength2 = [
	'Acre',
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
if ((convertFrom.value === 'Acre') && (convertTo.value === 'Acre')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Square-Feet') && (convertTo.value === 'Square-Feet')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Acre') && (convertTo.value === 'Square-Feet')) {
  result.value = length.value * 43559.825;
  formula.textContent = hints[1].ac_ft2;
} else if ((convertFrom.value === 'Square-Feet') && (convertTo.value === 'Acre')) {
  result.value = length.value / 43559.825;
  formula.textContent = hints[2].ft2_ac;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);