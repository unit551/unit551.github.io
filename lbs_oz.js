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
    // 9 Pound to Ounce
    lbs_oz: 'Multiply the mass by 16'
    },
	{
    // 1 Ounce to Pound
    oz_lbs: 'Divide the mass by 16'
  },
]

const unitsLength1 = [
	'Ounce',
];
const unitsLength2 = [
	'Pound',
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
if ((convertFrom.value === 'Pound') && (convertTo.value === 'Pound')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Ounce') && (convertTo.value === 'Ounce')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Pound') && (convertTo.value === 'Ounce')) {
  result.value = length.value * 16;
  formula.textContent = hints[1].lbs_oz;
} else if ((convertFrom.value === 'Ounce') && (convertTo.value === 'Pound')) {
  result.value = length.value / 16;
  formula.textContent = hints[2].oz_lbs;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);