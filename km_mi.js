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
    // 9 Kilometer to Mile
    km_mi: 'Multiply the length by 0.62137'
    },
	{
    // 1 Mile to Kilometer
    mi_km: 'Multiply the length by 1.60934'
  },
]

const unitsLength1 = [
	'Mile',
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
if ((convertFrom.value === 'Mile') && (convertTo.value === 'Mile')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Kilometer') && (convertTo.value === 'Mile')) {
  result.value = length.value * 0.62137;
  formula.textContent = hints[1].km_mi;
} else if ((convertFrom.value === 'Mile') && (convertTo.value === 'Kilometer')) {
  result.value = length.value * 1.60934;
  formula.textContent = hints[2].mi_km;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);