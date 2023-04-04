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
    // 9 Gram to Ounc
    g_oz: 'Divide the mass by 28.34952'
    },
	{
    // 1 Ounc to Gram
    oz_g: 'Multiply the mass by 28.34952'
  },
]

const unitsLength1 = [
	'Ounce',
];
const unitsLength2 = [
	'Gram',
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
if ((convertFrom.value === 'Gram') && (convertTo.value === 'Gram')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Ounce') && (convertTo.value === 'Ounce')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Gram') && (convertTo.value === 'Ounce')) {
  result.value = length.value / 28.34952;
  formula.textContent = hints[1].g_oz;
} else if ((convertFrom.value === 'Ounce') && (convertTo.value === 'Gram')) {
  result.value = length.value * 28.34952;
  formula.textContent = hints[2].oz_g;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);