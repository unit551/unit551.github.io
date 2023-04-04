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
    // 9 Liter to US-Gallon
    l_usgal: 'Multiply the volume by 0.264'
    },
	{
    // 9 Liter to US-Gallon
    l_ukgal: 'Multiply the volume by 0.219'
    },
	{
    // 1 US-Gallon to Liter
    usgal_l: 'Multiply the volume by 3.785'
  },
	{
    // 1 US-Gallon to Liter
    usgal_ukgal: 'Multiply the volume by 0.832'
  },
	{
    // 1 US-Gallon to Liter
    ukgal_l: 'Multiply the volume by 4.546'
  },
	{
    // 1 US-Gallon to Liter
    ukgal_usgal: 'Multiply the volume by 1.200'
  },
]

const unitsLength1 = [
	'US-Gallon',
	'UK-Gallon'
];
const unitsLength2 = [
	'Liter',
	'UK-Gallon',
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
if ((convertFrom.value === 'Liter') && (convertTo.value === 'Liter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'US-Gallon') && (convertTo.value === 'US-Gallon')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
if ((convertFrom.value === 'UK-Gallon') && (convertTo.value === 'UK-Gallon')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}
    if ((convertFrom.value === 'Liter') && (convertTo.value === 'US-Gallon')) {
  result.value = length.value * 0.264;
  formula.textContent = hints[1].l_usgal;
} else if ((convertFrom.value === 'Liter') && (convertTo.value === 'UK-Gallon')) {
  result.value = length.value * 0.219;
  formula.textContent = hints[2].l_ukgal;
} else if ((convertFrom.value === 'US-Gallon') && (convertTo.value === 'Liter')) {
  result.value = length.value * 3.785;
  formula.textContent = hints[3].usgal_l;
} else if ((convertFrom.value === 'US-Gallon') && (convertTo.value === 'UK-Gallon')) {
  result.value = length.value * 0.832;
  formula.textContent = hints[4].usgal_ukgal;
} else if ((convertFrom.value === 'UK-Gallon') && (convertTo.value === 'Liter')) {
  result.value = length.value * 4.546;
  formula.textContent = hints[5].ukgal_l;
} else if ((convertFrom.value === 'UK-Gallon') && (convertTo.value === 'US-Gallon')) {
  result.value = length.value * 1.2009504915;
  formula.textContent = hints[6].ukgal_usgal;
}}

convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);