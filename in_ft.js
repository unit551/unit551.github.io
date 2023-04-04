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
    // 9 Inch to Feet
    in_ft: 'Divide the length by 12'
    },
	{
    // 1 Feet to Inch
    ft_in: 'Multiply the length by 12'
  },
]

const unitsLength1 = [
	'Feet',
];
const unitsLength2 = [
	'Inch',
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
if ((convertFrom.value === 'Inch') && (convertTo.value === 'Inch')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Feet') && (convertTo.value === 'Feet')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Inch') && (convertTo.value === 'Feet')) {
  result.value = length.value / 12;
  formula.textContent = hints[1].in_ft;
} else if ((convertFrom.value === 'Feet') && (convertTo.value === 'Inch')) {
  result.value = length.value * 12;
  formula.textContent = hints[2].ft_in;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);