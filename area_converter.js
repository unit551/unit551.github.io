// JavaScript Document
const area = document.querySelector('#amount_area');
const convertFrom4 = document.querySelector('#from_area');
const convertTo4 = document.querySelector('#to_area');
const formula4 = document.querySelector('.content_area');
const result4 = document.querySelector('#result_area');
const selectElem4 = document.querySelectorAll('select');

const hints4 = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    m2_km2: 'Divide the area by 1,000,000'
  },
  {
    m2_cm2: 'Multiply the area by 1,000'
  },
  {
    m2_mm2: 'Multiply the area by 100,000,'
  },
  {
    m2_um2: 'Multiply the area by 1 × 10^12'
  },
  {
    m2_hm2: 'Divide the area by 1,000'
  },
  {
    m2_mi2: 'Multiply the area by 3.8610E-7'
  },
  {
    m2_yd2: 'Multiply the area by 1.1959'
  },
  {
    m2_ft2: 'Multiply the area by 10.7639'
  },
  {
    m2_in2: 'Multiply the area by 1550.0031'
  },
  {
    m2_ac2: 'Multiply the area by 2.4710 × 10-4'
  },
  {
    km2_m2: 'Multiply the area by 1000000'
  },
  {
    km2_cm2: 'Multiply the area by 1 × 10^10'
  },
  {
    km2_mm2: 'Multiply the area by 1 × 10^12'
  },
  {
    km2_um2: 'Multiply the area by 1 × 10^18'
  },
  {
    km2_hm2: 'Divide the area by 100'
  },
  {
    km2_mi2: 'Multiply the area by 3.8610E-1'
  },
  {
    km2_yd2: 'Multiply the area by 1.1959 × 10^6'
  },
  {
    km2_ft2: 'Multiply the area by 1.7639 x 10^7'
  },
  {
    km2_in2: 'Multiply the area by 1.5500 x 10^9'
  },
  {
    km2_ac2: 'Multiply the area by 2.4710 × 10^2'
  },
  {
    cm2_m2: 'Divide the area by 10,000'
  },
  {
    cm2_km2: 'Divide the area by 10,000,000,000'
  },
  {
    cm2_mm2: 'Multiply the area by 100'
  },
  {
    cm2_um2: 'Multiply the area by 10,000,000'
  },
  {
    cm2_hm2: 'Divide the area by 1,000,000'
  },
  {
    cm2_mi2: 'Multiply the area by 3.8610E-11'
  },
  {
    cm2_yd2: 'Multiply the area by 0.000119599'
  },
  {
    cm2_ft2: 'Multiply the area by 0.00107639'
  },
  {
    cm2_in2: 'Multiply the area by 0.155'
  },
  {
    cm2_ac2: 'Multiply the area by 2.4710 × 10-6'
  },
  { mm2_m2: 'Divide the area by 1,000,000' },
  { mm2_km2: 'Divide the area by 1,000,000,000,000' },
  { mm2_cm2: 'Multiply the area by 0.01' },
  { mm2_um2: 'Multiply the area by 1,000' },
  { mm2_hm2: 'Divide the area by 10,000,000' },
  { mm2_mi2: 'Multiply the area by 3.8610E-10' },
  { mm2_yd2: 'Multiply the area by 0.001196' },
  { mm2_ft2: 'Multiply the area by 0.010764' },
  { mm2_in2: 'Multiply the area by 0.00155' },
  { mm2_ac2: 'Multiply the area by 2.4710 × 10-7' },
  {
    um2_m2: 'Divide the area by 1,000,000,000'
  },
  {
    um2_km2: 'Divide the area by 1,000,000,000,000,000,000'
  },
  {
    um2_cm2: 'Multiply the area by 100'
  },
  {
    um2_mm2: 'Multiply the area by 10,000'
  },
  {
    um2_hm2: 'Divide the area by 10,000,000'
  },
  {
    um2_mi2: 'Multiply the area by 3.8610 × 10-13'
  },
  {
    um2_yd2: 'Multiply the area by 1.196 × 10-6'
  },
  {
    um2_ft2: 'Multiply the area by 1.076 × 10-5'
  },
  {
    um2_in2: 'Multiply the area by 1.55 × 10-3'
  },
  {
    um2_ac2: 'Multiply the area by 2.471 × 10-10'
  },
  {
    hm2_m2: 'Multiply the area by 10,000'
  },
  {
    hm2_km2: 'Divide the area by 100'
  },
  {
    hm2_cm2: 'Multiply the area by 10,000,000,000'
  },
  {
    hm2_mm2: 'Multiply the area by 1 × 10^14'
  },
  {
    hm2_um2: 'Multiply the area by 1 × 10^18'
  },
  {
    hm2_mi2: 'Multiply the area by 0.00386102'
  },
  {
    hm2_yd2: 'Multiply the area by 11959.9005'
  },
  {
    hm2_ft2: 'Multiply the area by 107639.1042'
  },
  {
    hm2_in2: 'Multiply the area by 15500031'
  },
  {
    hm2_ac2: 'Multiply the area by 2.471'
  },
  {
    mi2_m2: 'Multiply the area by 2.59 × 10^6'
  },
  {
    mi2_km2: 'Multiply the area by 2.59'
  },
  {
    mi2_cm2: 'Multiply the area by 2.59 × 10^10'
  },
  {
    mi2_mm2: 'Multiply the area by 2.59 × 10^12'
  },
  {
    mi2_um2: 'Multiply the area by 2.59 × 10^18'
  },
  {
    mi2_hm2: 'Multiply the area by 25.9'
  },
  {
    mi2_yd2: 'Multiply the area by 3.0976 × 10^6'
  },
  {
    mi2_ft2: 'Multiply the area by 2.788 × 10^7'
  },
  {
    mi2_in2: 'Multiply the area by 4.014 × 10^9'
  },
  {
    mi2_ac2: 'Multiply the area by 640'
  },
  { yd2_m2: 'Multiply the area by 0.836127' },
  { yd2_km2: 'Multiply the area by 8.36127 × 10-7' },
  { yd2_cm2: 'Multiply the area by 8361.27' },
  { yd2_mm2: 'Multiply the area by 836127' },
  { yd2_um2: 'Multiply the area by 8.36127 × 10+11' },
  { yd2_hm2: 'Multiply the area by 8.36127 × 10-5' },
  { yd2_mi2: 'Multiply the area by 3.2283057851 × 10-7' },
  { yd2_ft2: 'Multiply the area by 9' },
  { yd2_in2: 'Multiply the area by 1296' },
  { yd2_ac2: 'Multiply the area by 0.0002066116' },
  {
    ft2_m2: 'Divide the area by 10.7639'
  },
  {
    ft2_km2: 'Divide the area by 10,763,910'
  },
  {
    ft2_cm2: 'Multiply the area by 929.03'
  },
  {
    ft2_mm2: 'Multiply the area by 92903'
  },
  {
    ft2_um2: 'Multiply the area by 9.2903 × 10^10'
  },
  {
    ft2_hm2: 'Divide the area by 107639.10417'
  },
  {
    ft2_mi2: 'Divide the area by 27878400'
  },
  {
    ft2_yd2: 'Divide the area by 9'
  },
  {
    ft2_in2: 'Multiply the area by 144'
  },
  {
    ft2_ac2: 'Divide the area by 43560'
  },
  {
in2_m2: 'Divide the area by 1550.0031'
},
{
in2_km2: 'Divide the area by 1.55 × 10^9'
},
{
in2_cm2: 'Multiply the area by 6.4516'
},
{
in2_mm2: 'Multiply the area by 645.16'
},
{
in2_um2: 'Multiply the area by 6.4516 × 10^8'
},
{
in2_hm2: 'Divide the area by 1.55 × 10^7'
},
{
in2_mi2: 'Multiply the area by 2.490977 × 10^-10'
},
{
in2_yd2: 'Divide the area by 1296'
},
{
in2_ft2: 'Divide the area by 144'
},
{
in2_ac2: 'Divide the area by 6,272,640'
},
{
    ac2_m2: 'Multiply the area by 4046.8564224'
  },
{
    ac2_km2: 'Multiply the area by 0.0040468564224'
  },

  {
    ac2_cm2: 'Multiply the area by 40468564.224'
  },
  {
    ac2_mm2: 'Multiply the area by 4046856422400'
  },
  {
    ac2_um2: 'Multiply the area by 4.0468564224 × 10^18'
  },
  {
    ac2_hm2: 'Divide the area by 100'
  },
  {
    ac2_mi2: 'Multiply the area by 0.0015625'
  },
  {
    ac2_yd2: 'Multiply the area by 4840'
  },
  {
    ac2_ft2: 'Multiply the area by 43560'
  },
  {
    ac2_in2: 'Multiply the area by 6272640'
  },
  
]

const unitsArea = [
	'Square-Kilometer',
	'Square-Centimeter',
	'Square-Millimeter',
	'Square-Micrometer',
	'Hectare',
	'Square-Mile',
	'Square-Yard',
	'Square-Foot',
	'Square-Inch',
	'Acre',
];

for (let i = 0; i < unitsArea.length; i++) {
	let option4 = ` <option value=${unitsArea[i]}>${unitsArea[i]}</option>`;
	selectElem4[10].firstElementChild.insertAdjacentHTML('afterend', option4);	
}
for (let i = 0; i < unitsArea.length; i++) {
	let option4 = ` <option value=${unitsArea[i]}>${unitsArea[i]}</option>`;
	selectElem4[11].firstElementChild.insertAdjacentHTML('afterend', option4);	
}
function convertUnits4 (){
if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Meter')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Kilometer')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Centimeter')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Millimeter')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Micrometer')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Hectare')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Mile')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Yard')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Foot')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Inch')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Acre')) {
result4.value = area.value;
formula4.textContent = hints4[0].sameUnit;
}
if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Kilometer')) {
result4.value = area.value * 0.000001;
formula4.textContent = hints4[1].m2_km2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Centimeter')) {
result4.value = area.value * 10000;
formula4.textContent = hints4[2].m2_cm2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Millimeter')) {
result4.value = area.value * 1000000;
formula4.textContent = hints4[3].m2_mm2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Micrometer')) {
result4.value = area.value * 1000000000000;
formula4.textContent = hints4[4].m2_um2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Hectare')) {
result4.value = area.value * 0.0001;
formula4.textContent = hints4[5].m2_hm2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Mile')) {
result4.value = area.value * 3.861018768E-7;
formula4.textContent = hints4[6].m2_mi2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Yard')) {
result4.value = area.value * 1.1959900463;
formula4.textContent = hints4[7].m2_yd2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Foot')) {
result4.value = area.value * 10.763910417;
formula4.textContent = hints4[8].m2_ft2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Square-Inch')) {
result4.value = area.value * 1550.0031;
formula4.textContent = hints4[9].m2_in2;
} else if ((convertFrom4.value === 'Square-Meter') && (convertTo4.value === 'Acre')) {
result4.value = area.value * 0.0002471054;
formula4.textContent = hints4[10].m2_ac2;
}
if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Meter')) {
result4.value = area.value * 1000000;
formula4.textContent = hints4[11].km2_m2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Centimeter')) {
result4.value = area.value * 10000000000;
formula4.textContent = hints4[12].km2_cm2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Millimeter')) {
result4.value = area.value * 1000000000000;
formula4.textContent = hints4[13].km2_mm2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Micrometer')) {
result4.value = area.value * 1000000000000000000;
formula4.textContent = hints4[14].km2_um2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Hectare')) {
result4.value = area.value * 100;
formula4.textContent = hints4[15].km2_hm2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Mile')) {
result4.value = area.value * 0.3861018768;
formula4.textContent = hints4[16].km2_mi2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Yard')) {
result4.value = area.value * 1195990.0463;
formula4.textContent = hints4[17].km2_yd2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Foot')) {
result4.value = area.value * 10763910.417;
formula4.textContent = hints4[18].km2_ft2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Square-Inch')) {
result4.value = area.value * 1550003100;
formula4.textContent = hints4[19].km2_in2;
} else if ((convertFrom4.value === 'Square-Kilometer') && (convertTo4.value === 'Acre')) {
result4.value = area.value * 247.10538147;
formula4.textContent = hints4[20].km2_ac2;
}
if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value / 10000;
  formula4.textContent = hints4[21].cm2_m2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value / 10000000000;
  formula4.textContent = hints4[22].cm2_km2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value * 100;
  formula4.textContent = hints4[23].cm2_mm2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 1000000;
  formula4.textContent = hints4[24].cm2_um2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value / 100000000;
  formula4.textContent = hints4[25].cm2_hm2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value / 258998811.03;
  formula4.textContent = hints4[26].cm2_mi2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value / 8361.2736;
  formula4.textContent = hints4[27].cm2_yd2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value / 929.0304;
  formula4.textContent = hints4[28].cm2_ft2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value / 6.4516;
  formula4.textContent = hints4[29].cm2_in2;
} else if ((convertFrom4.value === 'Square-Centimeter') && (convertTo4.value === 'Acre')) {
  result4.value = area.value / 40468564.224;
  formula4.textContent = hints4[30].cm2_ac2;
}
if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value / 1000000;
  formula4.textContent = hints4[31].mm2_m2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value / 1000000000000;
  formula4.textContent = hints4[32].mm2_km2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value / 100;
  formula4.textContent = hints4[33].mm2_cm2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 1000000;
  formula4.textContent = hints4[34].mm2_um2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value / 100000000;
  formula4.textContent = hints4[35].mm2_hm2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value * 3.8610E-10;
  formula4.textContent = hints4[36].mm2_mi2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value / 1195990.0463;
  formula4.textContent = hints4[37].mm2_yd2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value / 92903.04;
  formula4.textContent = hints4[38].mm2_ft2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value / 645.16;
  formula4.textContent = hints4[39].mm2_in2;
} else if ((convertFrom4.value === 'Square-Millimeter') && (convertTo4.value === 'Acre')) {
  result4.value = area.value / 40468564.224;
  formula4.textContent = hints4[40].mm2_ac2;
}
if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value / 1000000000000;
  formula4.textContent = hints4[41].um2_m2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value / 1000000000000000000;
  formula4.textContent = hints4[42].um2_km2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value / 100;
  formula4.textContent = hints4[43].um2_cm2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value / 1000000;
  formula4.textContent = hints4[44].um2_mm2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value / 10000000000;
  formula4.textContent = hints4[45].um2_hm2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value * 3.8610e-13;
  formula4.textContent = hints4[46].um2_mi2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value / 1195991000;
  formula4.textContent = hints4[47].um2_yd2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value / 10763910000;
  formula4.textContent = hints4[48].um2_ft2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value / 1550003100;
  formula4.textContent = hints4[49].um2_in2;
} else if ((convertFrom4.value === 'Square-Micrometer') && (convertTo4.value === 'Acre')) {
  result4.value = area.value / 4046856422;
  formula4.textContent = hints4[50].um2_ac2;
}
if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value * 10000;
  formula4.textContent = hints4[51].hm2_m2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value / 100;
  formula4.textContent = hints4[52].hm2_km2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value * 100000000;
  formula4.textContent = hints4[53].hm2_cm2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value * 10000000000;
  formula4.textContent = hints4[54].hm2_mm2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 10000000000000000;
  formula4.textContent = hints4[55].hm2_um2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value * 0.00386102;
  formula4.textContent = hints4[56].hm2_mi2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value * 11959.900463;
  formula4.textContent = hints4[57].hm2_yd2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value * 107639.10417;
  formula4.textContent = hints4[58].hm2_ft2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value * 15500031;
  formula4.textContent = hints4[59].hm2_in2;
} else if ((convertFrom4.value === 'Hectare') && (convertTo4.value === 'Acre')) {
  result4.value = area.value * 2.4710538147;
  formula4.textContent = hints4[60].hm2_ac2;
}
if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value * 2589988.1103;
  formula4.textContent = hints4[61].sameUnit;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value * 2.5899881103;
  formula4.textContent = hints4[62].mi2_km2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value * 25899881103;
  formula4.textContent = hints4[63].mi2_cm2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value * 2.5899881103e+12;
  formula4.textContent = hints4[64].mi2_mm2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 2.5899881103e+18;
  formula4.textContent = hints4[65].mi2_um2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value * 258.99881103;
  formula4.textContent = hints4[66].mi2_hm2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value * 3097600;
  formula4.textContent = hints4[67].mi2_yd2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value * 27878400;
  formula4.textContent = hints4[68].mi2_ft2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value * 4014489600;
  formula4.textContent = hints4[69].mi2_in2;
} else if ((convertFrom4.value === 'Square-Mile') && (convertTo4.value === 'Acre')) {
  result4.value = area.value * 640;
  formula4.textContent = hints4[70].mi2_ac2;
}
if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Meter')) {
result4.value = area.value * 0.83612736;
formula4.textContent = hints4[71].yd2_m2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Kilometer')) {
result4.value = area.value * 8.3612736e-7;
formula4.textContent = hints4[72].yd2_km2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Centimeter')) {
result4.value = area.value * 8361.2736;
formula4.textContent = hints4[73].yd2_cm2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Millimeter')) {
result4.value = area.value * 836127.36;
formula4.textContent = hints4[74].yd2_mm2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Micrometer')) {
result4.value = area.value * 8.3612736e+8;
formula4.textContent = hints4[75].yd2_um2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Hectare')) {
result4.value = area.value * 0.000083612736;
formula4.textContent = hints4[76].yd2_hm2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Mile')) {
result4.value = area.value * 3.228305785e-7;
formula4.textContent = hints4[77].yd2_mi2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Foot')) {
result4.value = area.value * 9;
formula4.textContent = hints4[78].yd2_ft2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Square-Inch')) {
result4.value = area.value * 1296;
formula4.textContent = hints4[79].yd2_in2;
} else if ((convertFrom4.value === 'Square-Yard') && (convertTo4.value === 'Acre')) {
result4.value = area.value * 0.00020661157;
formula4.textContent = hints4[80].yd2_ac2;
}
if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Meter')) {
result4.value = area.value * 0.092903;
formula4.textContent = hints4[81].ft2_m2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Kilometer')) {
result4.value = area.value * 9.2903e-8;
formula4.textContent = hints4[82].ft2_km2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Centimeter')) {
result4.value = area.value * 929.0304;
formula4.textContent = hints4[83].ft2_cm2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Millimeter')) {
result4.value = area.value * 92903.04;
formula4.textContent = hints4[84].ft2_mm2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Micrometer')) {
result4.value = area.value * 92903040000;
formula4.textContent = hints4[85].ft2_um2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Hectare')) {
result4.value = area.value * 0.0000092903;
formula4.textContent = hints4[86].ft2_hm2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Mile')) {
result4.value = area.value * 3.58701e-8;
formula4.textContent = hints4[87].ft2_mi2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Yard')) {
result4.value = area.value * 0.111111;
formula4.textContent = hints4[88].ft2_yd2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Square-Inch')) {
result4.value = area.value * 144;
formula4.textContent = hints4[89].ft2_in2;
} else if ((convertFrom4.value === 'Square-Foot') && (convertTo4.value === 'Acre')) {
result4.value = area.value * 0.0000229568;
formula4.textContent = hints4[90].ft2_ac2;
}
if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value * 0.00064516;
  formula4.textContent = hints4[91].in2_m2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value * 6.4516E-10;
  formula4.textContent = hints4[92].in2_km2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value * 6.4516;
  formula4.textContent = hints4[93].in2_cm2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value * 645.16;
  formula4.textContent = hints4[94].in2_mm2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 645160000;
  formula4.textContent = hints4[95].in2_um2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value * 6.4516E-8;
  formula4.textContent = hints4[96].in2_hm2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value * 2.49098E-7;
  formula4.textContent = hints4[97].in2_mi2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value * 0.000771605;
  formula4.textContent = hints4[98].in2_yd2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value * 0.00694444;
  formula4.textContent = hints4[99].in2_ft2;
} else if ((convertFrom4.value === 'Square-Inch') && (convertTo4.value === 'Acre')) {
  result4.value = area.value * 1.59423E-7;
  formula4.textContent = hints4[100].in2_ac2;
}
if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Meter')) {
  result4.value = area.value * 4046.85642;
  formula4.textContent = hints4[101].ac2_m2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Kilometer')) {
  result4.value = area.value * 0.00404685642;
  formula4.textContent = hints4[102].ac2_km2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Centimeter')) {
  result4.value = area.value * 40468564.224;
  formula4.textContent = hints4[103].ac2_cm2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Millimeter')) {
  result4.value = area.value * 4046856422.4;
  formula4.textContent = hints4[104].ac2_mm2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Micrometer')) {
  result4.value = area.value * 4046856422400000;
  formula4.textContent = hints4[105].ac2_um2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Hectare')) {
  result4.value = area.value * 0.404685642;
  formula4.textContent = hints4[106].ac2_hm2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Mile')) {
  result4.value = area.value * 0.0015625;
  formula4.textContent = hints4[107].ac2_mi2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Yard')) {
  result4.value = area.value * 4840;
  formula4.textContent = hints4[108].ac2_yd2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Foot')) {
  result4.value = area.value * 43560;
  formula4.textContent = hints4[109].ac2_ft2;
} else if ((convertFrom4.value === 'Acre') && (convertTo4.value === 'Square-Inch')) {
  result4.value = area.value * 6272640;
  formula4.textContent = hints4[110].ac2_in2;
}
}


convertFrom4.addEventListener('change',convertUnits4);
convertTo4.addEventListener('change',convertUnits4);
area.addEventListener('input',convertUnits4);