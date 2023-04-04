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
    // 9 Millimeter to inch
    mm_in: 'Divide the length by 25.4'
    },
	{
    // 1 inch to Millimeter
    in_mm: 'Multiply the length by 25.4'
  },
]

const unitsLength1 = [
	'Inch',
];
const unitsLength2 = [
	'Millimeter',
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
if ((convertFrom.value === 'Millimeter') && (convertTo.value === 'Millimeter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'Inch') && (convertTo.value === 'Inch')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Millimeter') && (convertTo.value === 'Inch')) {
  result.value = length.value / 25.4;
  formula.textContent = hints[1].mm_in;
} else if ((convertFrom.value === 'Inch') && (convertTo.value === 'Millimeter')) {
  result.value = length.value *25.4;
  formula.textContent = hints[2].in_mm;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);