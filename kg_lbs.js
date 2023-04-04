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
    // 9 Kilogram to Pound
    kg_lbs: 'Multiply the mass by 2,204'
    },
	{
    // 1 Pound to Kilogram
    lbs_kg: 'Divide the mass by 2,204'
  },
]

const unitsLength1 = [
	'Pound',
];
const unitsLength2 = [
	'Kilogram',
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
if ((convertFrom.value === 'Kilogram') && (convertTo.value === 'Kilogram')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Pound') && (convertTo.value === 'Pound')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Kilogram') && (convertTo.value === 'Pound')) {
  result.value = length.value * 2.20462262;
  formula.textContent = hints[1].kg_lbs;
} else if ((convertFrom.value === 'Pound') && (convertTo.value === 'Kilogram')) {
  result.value = length.value / 2.20462262;
  formula.textContent = hints[2].lbs_kg;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);