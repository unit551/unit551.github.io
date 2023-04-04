// JavaScript Document
const volume = document.querySelector('#amount_volume');
const convertFrom3 = document.querySelector('#from_volume');
const convertTo3 = document.querySelector('#to_volume');
const formula3 = document.querySelector('.content_volume');
const result3 = document.querySelector('#result_volume');
const selectElem3 = document.querySelectorAll('select');

const hints3 = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    m3_km3: 'Divide the volume by 1,000,000,000'
},
{
    m3_cm3: 'Multiply the volume by 1,000,000'
},
{
    m3_mm3: 'Multiply the volume by 1,000,000,000'
},
{
    m3_l: 'Multiply the volume by 1000'
},
{
    m3_ml: 'Multiply the volume by 1,000,000'
},
{
    m3_usgal: 'Multiply the volume by 264.172'
},
{
    m3_usqt: 'Multiply the volume by 1056.688'
},
{
    m3_uspt: 'Multiply the volume by 2113.376'
},
{
    m3_uscup: 'Multiply the volume by 4226.752'
},
{
    m3_ukgal: 'Multiply the volume by 219.969'
},
{
    m3_ukqt: 'Multiply the volume by 879.877'
},
{
    m3_ukpt: 'Multiply the volume by 1759.754'
},
{
    m3_mi3: 'Divide the volume by 4168181825'
},
{
    m3_yd3: 'Multiply the volume by 1.30795'
},
{
    m3_ft3: 'Multiply the volume by 35.31467'
},
{
    m3_in3: 'Multiply the volume by 61023.744'
},
{ km3_m3: 'Multiply the volume by 1,000,000,000'
},
{
km3_cm3: 'Multiply the volume by 1e+18'
},
{
km3_mm3: 'Multiply the volume by 1e+27'
},
{
km3_l: 'Multiply the volume by 1e+12'
},
{
km3_ml: 'Multiply the volume by 1e+15'
},
{
km3_usgal: 'Multiply the volume by 4.168e+12'
},
{
km3_usqt: 'Multiply the volume by 1.667e+13'
},
{
km3_uspt: 'Multiply the volume by 3.335e+13'
},
{
km3_uscup: 'Multiply the volume by 6.71e+13'
},
{
km3_ukgal: 'Multiply the volume by 8.72e+11'
},
{
km3_ukqt: 'Multiply the volume by 3.489e+12'
},
{
km3_ukpt: 'Multiply the volume by 6.978e+12'
},
{
km3_mi3: 'Multiply the volume by 0.2399'
},
{
km3_yd3: 'Multiply the volume by 1.307e+9'
},
{
km3_ft3: 'Multiply the volume by 3.531e+10'
},
{
km3_in3: 'Multiply the volume by 6.102e+13'
},
{
    cm3_m3: 'Divide the volume by 1,000,000'
  },
  {
    cm3_km3: 'Divide the volume by 1,000,000,000,000,000'
  },
  {
    cm3_mm3: 'Multiply the volume by 1000'
  },
  {
    cm3_l: 'Divide the volume by 1000'
  },
  {
    cm3_ml: 'Multiply the volume by 1'
  },
  {
    cm3_usgal: 'Divide the volume by 3785.412'
  },
  {
    cm3_usqt: 'Divide the volume by 946.353'
  },
  {
    cm3_uspt: 'Divide the volume by 473.176'
  },
  {
    cm3_uscup: 'Divide the volume by 236.588'
  },
  {
    cm3_ukgal: 'Divide the volume by 4546.09'
  },
  {
    cm3_ukqt: 'Divide the volume by 1136.522'
  },
  {
    cm3_ukpt: 'Divide the volume by 568.261'
  },
  {
    cm3_mi3: 'Divide the volume by 2.3991275858e+16'
  },
  {
    cm3_yd3: 'Divide the volume by 764554.858'
  },
  {
    cm3_ft3: 'Divide the volume by 28316.847'
  },
  {
    cm3_in3: 'Divide the volume by 16.387'
  },
{
    mm3_m3: 'Divide the volume by 1,000,000,000,000'
  },
  {
    mm3_cm3: 'Divide the volume by 1,000'
  },
  {
    mm3_km3: 'Divide the volume by 1,000,000,000,000,000,000'
  },
  {
    mm3_l: 'Divide the volume by 1,000'
  },
  {
    mm3_ml: 'Multiply the volume by 1'
  },
  {
    mm3_usgal: 'Divide the volume by 3,785,411.78'
  },
  {
    mm3_usqt: 'Divide the volume by 946,352.945'
  },
  {
    mm3_uspt: 'Divide the volume by 473,176.473'
  },
  {
    mm3_uscup: 'Divide the volume by 236,588.2365'
  },
  {
    mm3_ukgal: 'Divide the volume by 4,546,091.88'
  },
  {
    mm3_ukqt: 'Divide the volume by 1,136,522.97'
  },
  {
    mm3_ukpt: 'Divide the volume by 568,261.485'
  },
  {
    mm3_mi3: 'Divide the volume by 4.16818183e+18'
  },
  {
    mm3_yd3: 'Divide the volume by 26,391,994,805.19488'
  },
  {
    mm3_ft3: 'Divide the volume by 28,316,846.592'
  },
  {
    mm3_in3: 'Divide the volume by 16,387.064'
  },
{
    l_m3: 'Divide the volume by 1000'
  },

  {
    l_cm3: 'Multiply the volume by 1000'
  },
  {
    l_mm3: 'Multiply the volume by 1,000,000'
  },
  {
    l_ml: 'Multiply the volume by 1000'
  },
  {
    l_usgal: 'Multiply the volume by 0.264172'
  },
  {
    l_usqt: 'Multiply the volume by 1.056688'
  },
  {
    l_uspt: 'Multiply the volume by 2.113376'
  },
  {
    l_uscup: 'Multiply the volume by 4.226752'
  },
  {
    l_ukgal: 'Multiply the volume by 0.219969'
  },
  {
    l_ukqt: 'Multiply the volume by 0.879877'
  },
  {
    l_ukpt: 'Multiply the volume by 1.759754'
  },
  {
    l_mi3: 'Multiply the volume by 2.399128e-10'
  },
  {
    l_yd3: 'Divide the volume by 0.764555'
  },
  {
    l_ft3: 'Divide the volume by 28.316847'
  },
  {
    l_in3: 'Multiply the volume by 61.023744'
  },
{
    l_km3: 'Multiply the volume by 1.e-12'
  },
{
    ml_l: 'Divide the volume by 1000'
  },
  {
    ml_cm3: 'Gives the same value'
  },
  {
    ml_mm3: 'Multiply the volume by 1000'
  },
  {
    ml_km3: 'Divide the volume by 1e+15'
  },
  {
    ml_usgal: 'Divide the volume by 3785.412'
  },
  {
    ml_usqt: 'Divide the volume by 946.353'
  },
  {
    ml_uspt: 'Multiply the volume by 0.002113'
  },
  {
    ml_uscup: 'Divide the volume by 236.588'
  },
  {
    ml_ukgal: 'Divide the volume by 4546.09'
  },
  {
    ml_ukqt: 'Divide the volume by 1136.522'
  },
  {
    ml_ukpt: 'Divide the volume by 568.261'
  },
  {
    ml_mi3: 'Divide the volume by 2.3991283524362e+22'
  },
  {
    ml_yd3: 'Divide the volume by 764554.858'
  },
  {
    ml_ft3: 'Divide the volume by 28316.847'
  },
  {
    ml_in3: 'Multiply the volume by 0.061024'
  },
{
    ml_m3: 'Multiply the volume by 0.000001'
  },
{
    usgal_m3: 'Divide the volume by 264.172'
  },
  {
    usgal_cm3: 'Multiply the volume by 3785.412'
  },
  {
    usgal_mm3: 'Multiply the volume by 3.785e+6'
  },
  {
    usgal_km3: 'Multiply the volume by 3.78541e-12'
  },
  {
    usgal_l: 'Multiply the volume by 3.785'
  },
  {
    usgal_ml: 'Multiply the volume by 3785.412'
  },
  {
    usgal_usqt: 'Multiply the volume by 4'
  },
  {
    usgal_uspt: 'Multiply the volume by 8'
  },
  {
    usgal_uscup: 'Multiply the volume by 16'
  },
  {
    usgal_ukgal: 'Multiply the volume by 0.8327'
  },
  {
    usgal_ukqt: 'Multiply the volume by 3.331'
  },
  {
    usgal_ukpt: 'Multiply the volume by 6.661'
  },
  {
    usgal_mi3: 'Divide the volume by 1.101e+12'
  },
  {
    usgal_yd3: 'Divide the volume by 201.974'
  },
  {
    usgal_ft3: 'Divide the volume by 7.481'
  },
  {
    usgal_in3: 'Multiply the volume by 231'
  },
{
    usqt_l: 'Multiply the volume by 0.946353'
  },
  {
    usqt_ml: 'Multiply the volume by 946.352946'
  },
  {
    usqt_m3: 'Multiply the volume by 0.000946353'
  },
  {
    usqt_cm3: 'Multiply the volume by 946.352946'
  },
  {
    usqt_mm3: 'Multiply the volume by 946352.946'
  },
  {
    usqt_km3: 'Multiply the volume by 9.463525E-13'
  },
  {
    usqt_usgal: 'Divide the volume by 4'
  },
  {
    usqt_uspt: 'Multiply the volume by 2'
  },
  {
    usqt_uscup: 'Multiply the volume by 4'
  },
  {
    usqt_ukgal: 'Divide the volume by 4.8038'
  },
  {
    usqt_ukpt: 'Multiply the volume by 1.20095'
  },
  {
    usqt_mi3: 'Divide the volume by 1666119435.5'
  },
  {
    usqt_yd3: 'Multiply the volume by 0.0328084'
  },
  {
    usqt_ft3: 'Multiply the volume by 0.8035637'
  },
  {
    usqt_in3: 'Multiply the volume by 57.75'
  },
{
    uspt_m3: 'Divide the volume by 2113.376'
  },
  {
    uspt_cm3: 'Multiply the volume by 473.1765'
  },
  {
    uspt_mm3: 'Multiply the volume by 473176.473'
  },
  {
    uspt_km3: 'Multiply the volume by 4.7317625E-13'
  },
  {
    uspt_l: 'Divide the volume by 2.113376'
  },
  {
    uspt_ml: 'Multiply the volume by 473.1765'
  },
  {
    uspt_usgal: 'Divide the volume by 8'
  },
  {
    uspt_usqt: 'Divide the volume by 2'
  },
  {
    uspt_uscup: 'Multiply the volume by 2'
  },
  {
    uspt_ukgal: 'Divide the volume by 6.661'
  },
  {
    uspt_ukqt: 'Divide the volume by 1.665'
  },
  {
    uspt_ukpt: 'Multiply the volume by 0.9608'
  },
  {
    uspt_mi3: 'Divide the volume by 1.101e+15'
  },
  {
    uspt_yd3: 'Divide the volume by 51.715'
  },
  {
    uspt_ft3: 'Divide the volume by 28.875'
  },
  {
    uspt_in3: 'Multiply the volume by 28.875'
  },
{
    uscup_m3: 'Divide the volume by 4226.7528377'
  },
  {
    uscup_cm3: 'Multiply the volume by 236.5882365'
  },
  {
    uscup_mm3: 'Multiply the volume by 236588.2365'
  },
  {
    uscup_l: 'Divide the volume by 4.2267528377'
  },
  {
    uscup_ml: 'Multiply the volume by 236.5882365'
  },
  {
    uscup_usgal: 'Divide the volume by 4.1666666667'
  },
  {
    uscup_usqt: 'Divide the volume by 1.0408427303'
  },
  {
    uscup_uspt: 'Multiply the volume by 1.971568628'
  },
  {
    uscup_ukgal: 'Divide the volume by 3.330228349'
  },
  {
    uscup_ukqt: 'Divide the volume by 0.832557087'
  },
  {
    uscup_ukpt: 'Multiply the volume by 1.665114174'
  },
  {
    uscup_mi3: 'Divide the volume by 1.101760062E+16'
  },
  {
    uscup_yd3: 'Divide the volume by 9.85216'
  },
  {
    uscup_ft3: 'Divide the volume by 0.0353146667'
  },
  {
    uscup_in3: 'Multiply the volume by 14.4375'
  },
  {
    uscup_km3: 'Divide the volume by 4.2267528377E+12'
  },
{
    ukgal_km3: 'Divide the volume by 4.5461e+12'
  },
  {
    ukgal_m3: 'Divide the volume by 219.969'
  },
  {
    ukgal_cm3: 'Multiply the volume by 4546.09'
  },
  {
    ukgal_mm3: 'Multiply the volume by 4.5461e+9'
  },
  {
    ukgal_l: 'Multiply the volume by 4.5461'
  },
  {
    ukgal_ml: 'Multiply the volume by 4546.09'
  },
  {
    ukgal_usgal: 'Multiply the volume by 1.20095'
  },
  {
    ukgal_usqt: 'Multiply the volume by 4.8038'
  },
  {
    ukgal_uspt: 'Multiply the volume by 9.6076'
  },
  {
    ukgal_uscup: 'Multiply the volume by 19.2152'
  },
  {
    ukgal_mi3: 'Divide the volume by 1.1015e+16'
  },
  {
    ukgal_yd3: 'Divide the volume by 0.004951'
  },
  {
    ukgal_ft3: 'Divide the volume by 0.160544'
  },
  {
    ukgal_in3: 'Multiply the volume by 277.419'
  },
{
    ukqt_cm3: 'Multiply the volume by 1136.5225'
  },
  {
    ukqt_mm3: 'Multiply the volume by 1,136,522.5'
  },
  {
    ukqt_m3: 'Divide the volume by 1014.420681'
  },
  {
    ukqt_km3: 'Divide the volume by 1.014420681e+12'
  },
{
    ukqt_l: 'Divide the volume by 1.7598'
  },
  {
    ukqt_ml: 'Divide the volume by 0.0017598'
  },
  {
    ukqt_usgal: 'Multiply the volume by 1.20095'
  },
  {
    ukqt_usqt: 'Multiply the volume by 1.20095'
  },
  {
    ukqt_uspt: 'Multiply the volume by 2.4019'
  },
  {
    ukqt_uscup: 'Multiply the volume by 4.8038'
  },
  {
    ukqt_ukgal: 'Divide the volume by 4'
  },
  {
    ukqt_ukpt: 'Multiply the volume by 1.2'
  },
  {
    ukqt_mi3: 'Divide the volume by 4.6594e+12'
  },
  {
    ukqt_yd3: 'Divide the volume by 0.00118'
  },
  {
    ukqt_ft3: 'Divide the volume by 0.028317'
  },
  {
    ukqt_in3: 'Multiply the volume by 69.355'
  },
{
    ukpt_cm3: 'Multiply the volume by 568.26125'
  },
  {
    ukpt_mm3: 'Multiply the volume by 568,261.25'
  },
  {
    ukpt_m3: 'Divide the volume by 1759.75398639'
  },
  {
    ukpt_km3: 'Divide the volume by 1.75975398639e+12'
  },
  {
    ukpt_l: 'Divide the volume by 1.75975398639'
  },
  {
    ukpt_ml: 'Multiply the volume by 1000'
  },
  {
    ukpt_usgal: 'Multiply the volume by 1.20094992554'
  },
  {
    ukpt_usqt: 'Multiply the volume by 2.40189985108'
  },
  {
    ukpt_uspt: 'Multiply the volume by 4.80379970216'
  },
  {
    ukpt_uscup: 'Multiply the volume by 9.60759940432'
  },
  {
    ukpt_ukgal: 'Divide the volume by 8'
  },
  {
    ukpt_ukqt: 'Divide the volume by 1.2'
  },
  {
    ukpt_mi3: 'Divide the volume by 2.420928777e+12'
  },
  {
    ukpt_yd3: 'Divide the volume by 0.00454609'
  },
  {
    ukpt_ft3: 'Divide the volume by 0.016387064'
  },
  {
    ukpt_in3: 'Multiply the volume by 34.67743'
  },
{
    mi3_cm3: 'Multiply the volume by 4168181825.4406'
  },
  {
    mi3_mm3: 'Multiply the volume by 4.1681818254406e+15'
  },
  {
    mi3_m3: 'Multiply the volume by 4168181825.4406'
  },
  {
    mi3_km3: 'Divide the volume by 4.16818182544'
  },
  {
    mi3_l: 'Multiply the volume by 4.1681818254406e+6'
  },
  {
    mi3_ml: 'Multiply the volume by 4.1681818254406e+9'
  },
  {
    mi3_usgal: 'Multiply the volume by 1.1010372498991e+10'
  },
  {
    mi3_usqt: 'Multiply the volume by 4.4041489995965e+10'
  },
  {
    mi3_uspt: 'Multiply the volume by 8.8082979991931e+10'
  },
  {
    mi3_uscup: 'Multiply the volume by 1.7616595998386e+11'
  },
  {
    mi3_ukgal: 'Multiply the volume by 3.4100380461254e+9'
  },
  {
    mi3_ukpt: 'Multiply the volume by 2.7350768369003e+10'
  },
  {
    mi3_yd3: 'Multiply the volume by 5451776000'
  },
  {
    mi3_ft3: 'Multiply the volume by 147197952'
  },
  {
    mi3_in3: 'Multiply the volume by 8.44677504e+11'
  }


];

const unitsVolume = [
    'Cubic-Kilometer',
    'Cubic-Centimeter',
    'Cubic-Millimeter',
    'Liter',
    'Milliliter',
    'US-Gallon',
    'US-Quart',
    'US-Pint',
	'US-Cup',
    'UK-Gallon',
    'UK-Quart',
    'UK-Pint',
    'Cubic-Mile',
    'Cubic-Yard',
    'Cubic-Foot',
    'Cubic-Inch',
];

for (let i = 0; i < unitsVolume.length; i++) {
	let option3 = ` <option value=${unitsVolume[i]}>${unitsVolume[i]}</option>`;
	selectElem3[0].firstElementChild.insertAdjacentHTML('afterend', option3);	
}
for (let i = 0; i < unitsVolume.length; i++) {
	let option3 = ` <option value=${unitsVolume[i]}>${unitsVolume[i]}</option>`;
	selectElem3[1].firstElementChild.insertAdjacentHTML('afterend', option3);	
}

function convertUnits3 (){
if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Kilometer')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Meter')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Centimeter')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Millimeter')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Liter')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Milliliter')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'US-Gallon')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'US-Quart')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'US-Pint')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'US-Cup')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'UK-Gallon')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'UK-Quart')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'UK-Pint')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Mile') && (convertTo3.value === 'Cubic-Mile')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Yard') && (convertTo3.value === 'Cubic-Yard')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Foot') && (convertTo3.value === 'Cubic-Foot')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
} else if ((convertFrom3.value === 'Cubic-Inch') && (convertTo3.value === 'Cubic-Inch')) {
result3.value = volume.value;
formula3.textContent = hints3[0].sameUnit;
}
	
if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 1000000000;
  formula3.textContent = hints3[1].m3_km3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 1000000;
  formula3.textContent = hints3[2].m3_cm3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 1000000000;
  formula3.textContent = hints3[3].m3_mm3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value * 1000;
  formula3.textContent = hints3[4].m3_l;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 1000000;
  formula3.textContent = hints3[5].m3_ml;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value * 264.172;
  formula3.textContent = hints3[6].m3_usgal;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value * 1056.69;
  formula3.textContent = hints3[7].m3_usqt;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value * 2113.38;
  formula3.textContent = hints3[8].m3_uspt;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value * 4226.75;
  formula3.textContent = hints3[9].m3_uscup;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value * 219.969;
  formula3.textContent = hints3[10].m3_ukgal;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value * 879.877;
  formula3.textContent = hints3[11].m3_ukqt;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value * 1759.75;
  formula3.textContent = hints3[12].m3_ukpt;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value * 0.000000239912;
  formula3.textContent = hints3[13].m3_mi3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 1.30795;
  formula3.textContent = hints3[14].m3_yd3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 35.3147;
  formula3.textContent = hints3[15].m3_ft3;
} else if ((convertFrom3.value === 'Cubic-Meter') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 61023.7;
  formula3.textContent = hints3[16].m3_in3;
}
if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Meter')) {
result3.value = volume.value * 1000000000;
formula3.textContent = hints3[17].km3_m3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Centimeter')) {
result3.value = volume.value * 1e+15;
formula3.textContent = hints3[18].km3_cm3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Millimeter')) {
result3.value = volume.value * 1e+18;
formula3.textContent = hints3[19].km3_mm3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Liter')) {
result3.value = volume.value * 1e+12;
formula3.textContent = hints3[20].km3_l;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Milliliter')) {
result3.value = volume.value * 1e+15;
formula3.textContent = hints3[21].km3_ml;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'US-Gallon')) {
result3.value = volume.value * 264172052.358;
formula3.textContent = hints3[22].km3_usgal;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'US-Quart')) {
result3.value = volume.value * 1.05668821e+9;
formula3.textContent = hints3[23].km3_usqt;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'US-Pint')) {
result3.value = volume.value * 2.11337642e+9;
formula3.textContent = hints3[24].km3_uspt;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'US-Cup')) {
result3.value = volume.value * 4.22675284e+9;
formula3.textContent = hints3[25].km3_uscup;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'UK-Gallon')) {
result3.value = volume.value * 2.19969248e+8;
formula3.textContent = hints3[26].km3_ukgal;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'UK-Quart')) {
result3.value = volume.value * 8.79876993e+8;
formula3.textContent = hints3[27].km3_ukqt;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'UK-Pint')) {
result3.value = volume.value * 1.75975399e+9;
formula3.textContent = hints3[28].km3_ukpt;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Mile')) {
result3.value = volume.value * 0.2399128636 ;
formula3.textContent = hints3[29].km3_mi3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Yard')) {
result3.value = volume.value * 1307950619.3;
formula3.textContent = hints3[30].km3_yd3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Foot')) {
result3.value = volume.value * 35314666721 ;
formula3.textContent = hints3[31].km3_ft3;
} else if ((convertFrom3.value === 'Cubic-Kilometer') && (convertTo3.value === 'Cubic-Inch')) {
result3.value = volume.value * 61023744094732 ;
formula3.textContent = hints3[32].km3_in3;
}
if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Meter')) {
result3.value = volume.value / 1000000;
formula3.textContent = hints3[33].cm3_m3;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Kilometer')) {
result3.value = volume.value / 1e+15;
formula3.textContent = hints3[34].cm3_km3;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Millimeter')) {
result3.value = volume.value * 1000;
formula3.textContent = hints3[35].cm3_mm3;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Liter')) {
result3.value = volume.value / 1000;
formula3.textContent = hints3[36].cm3_l;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Milliliter')) {
result3.value = volume.value;
formula3.textContent = hints3[37].cm3_ml;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'US-Gallon')) {
result3.value = volume.value / 3785.411784;
formula3.textContent = hints3[38].cm3_usgal;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'US-Quart')) {
result3.value = volume.value / 946.352946;
formula3.textContent = hints3[39].cm3_usqt;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'US-Pint')) {
result3.value = volume.value / 473.176473;
formula3.textContent = hints3[40].cm3_uspt;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'US-Cup')) {
result3.value = volume.value / 236.5882365;
formula3.textContent = hints3[41].cm3_uscup;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'UK-Gallon')) {

result3.value = volume.value / 4546.09;
formula3.textContent = hints3[42].cm3_ukgal;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'UK-Quart')) {
result3.value = volume.value / 1136.5225;
formula3.textContent = hints3[43].cm3_ukqt;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'UK-Pint')) {
result3.value = volume.value / 568.26125;
formula3.textContent = hints3[44].cm3_ukpt;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Mile')) {
result3.value = volume.value / 4.16818183e+15 ;
formula3.textContent = hints3[45].cm3_mi3;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Yard')) {
result3.value = volume.value * 0.000001308 ;
formula3.textContent = hints3[46].cm3_yd33;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Foot')) {
result3.value = volume.value * 0.0000353147 ;
formula3.textContent = hints3[47].cm3_ft3;
} else if ((convertFrom3.value === 'Cubic-Centimeter') && (convertTo3.value === 'Cubic-Inch')) {
result3.value = volume.value * 0.0610237441 ;
formula3.textContent = hints3[48].cm3_in3;
}
if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Meter')) {
result3.value = volume.value / 1000000000;
formula3.textContent = hints3[49].mm3_m3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Kilometer')) {
result3.value = volume.value / 1e+18;
formula3.textContent = hints3[51].mm3_km3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Centimeter')) {
result3.value = volume.value / 1000;
formula3.textContent = hints3[50].mm3_cm3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Liter')) {
result3.value = volume.value / 1000;
formula3.textContent = hints3[52].mm3_l;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Milliliter')) {
result3.value = volume.value;
formula3.textContent = hints3[53].mm3_ml;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'US-Gallon')) {
result3.value = volume.value / 3785411.784;
formula3.textContent = hints3[54].mm3_usgal;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'US-Quart')) {
result3.value = volume.value / 946352.946;
formula3.textContent = hints3[55].mm3_usqt;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'US-Pint')) {
result3.value = volume.value / 473176.473;
formula3.textContent = hints3[56].mm3_uspt;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'US-Cup')) {
result3.value = volume.value / 236588.2365;
formula3.textContent = hints3[57].mm3_uscup;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'UK-Gallon')) {
result3.value = volume.value / 4546090;
formula3.textContent = hints3[58].mm3_ukgal;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'UK-Quart')) {
result3.value = volume.value / 1136522.5;
formula3.textContent = hints3[59].mm3_ukqt;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'UK-Pint')) {
result3.value = volume.value / 568261.25;
formula3.textContent = hints3[60].mm3_ukpt;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Mile')) {
result3.value = volume.value / 4.16818183e+18;
formula3.textContent = hints3[61].mm3_mi3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Yard')) {
result3.value = volume.value / 4.16818183e+18;
formula3.textContent = hints3[62].mm3_yd3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Foot')) {
result3.value = volume.value / 4.16818183e+18;
formula3.textContent = hints3[63].mm3_ft3;
} else if ((convertFrom3.value === 'Cubic-Millimeter') && (convertTo3.value === 'Cubic-Inch')) {
result3.value = volume.value / 4.16818183e+18;
formula3.textContent = hints3[64].mm3_in3;
}
if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 1000;
  formula3.textContent = hints3[65].l_m3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 1e+12;
  formula3.textContent = hints3[80].l_km3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 1000;
  formula3.textContent = hints3[66].l_cm3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 1000;
  formula3.textContent = hints3[67].l_mm3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 1000;
  formula3.textContent = hints3[68].l_ml;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 3.785411784;
  formula3.textContent = hints3[69].l_usgal;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value / 0.946352946;
  formula3.textContent = hints3[70].l_usqt;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value / 0.473176473;
  formula3.textContent = hints3[71].l_uspt;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value / 0.2365882365;
  formula3.textContent = hints3[72].l_uscup;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value / 4.54609;
  formula3.textContent = hints3[73].l_ukgal;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value / 1.1365225;
  formula3.textContent = hints3[74].l_ukqt;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value / 0.56826125;
  formula3.textContent = hints3[75].l_ukpt;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 4.16818183e+12 ;
  formula3.textContent = hints3[76].l_mi3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value / 4.16818183e+12 ;
  formula3.textContent = hints3[77].l_yd3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value / 4.16818183e+12 ;
  formula3.textContent = hints3[78].l_ft3;
} else if ((convertFrom3.value === 'Liter') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value / 4.16818183e+12 ;
  formula3.textContent = hints3[79].l_in3;
}
if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value;
  formula3.textContent = hints3[82].ml_cm3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 1000000;
  formula3.textContent = hints3[96].ml_m3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 1e+12;
  formula3.textContent = hints3[84].ml_km3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 1000;
  formula3.textContent = hints3[83].ml_mm3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value / 1000;
  formula3.textContent = hints3[81].ml_l;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 3785.411784;
  formula3.textContent = hints3[85].ml_usgal;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value / 946.352946;
  formula3.textContent = hints3[86].ml_usqt;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value / 473.176473;
  formula3.textContent = hints3[87].ml_uspt;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value / 236.5882365;
  formula3.textContent = hints3[88].ml_uscup;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value / 4546.09;
  formula3.textContent = hints3[89].ml_ukgal;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value / 1136.5225;
  formula3.textContent = hints3[90].ml_ukqt;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value / 568.26125;
  formula3.textContent = hints3[91].ml_ukpt;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 4.16818183e+12;
  formula3.textContent = hints3[92].ml_mi3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Yard')) {
result3.value = volume.value * 0.0000013079506193141;
formula3.textContent = hints3[93].ml_yd3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Foot')) {
result3.value = volume.value * 0.00003531466672149;
formula3.textContent = hints3[94].ml_ft3;
} else if ((convertFrom3.value === 'Milliliter') && (convertTo3.value === 'Cubic-Inch')) {
result3.value = volume.value * 0.061023744094732;
formula3.textContent = hints3[95].ml_in3;
}
if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Meter')) {
    result3.value = volume.value / 264.17205236;
    formula3.textContent = hints3[97].usgal_m3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Kilometer')) {
    result3.value = volume.value / 2.6417205236e+11;
    formula3.textContent = hints3[100].usgal_km3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Centimeter')) {
    result3.value = volume.value * 3785.411784;
    formula3.textContent = hints3[98].usgal_cm3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Millimeter')) {
    result3.value = volume.value * 3.785411784e+6;
    formula3.textContent = hints3[99].usgal_mm3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Liter')) {
    result3.value = volume.value * 3.785411784;
    formula3.textContent = hints3[101].usgal_l;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Milliliter')) {
    result3.value = volume.value * 3785.411784;
    formula3.textContent = hints3[102].usgal_ml;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'US-Quart')) {
    result3.value = volume.value * 4;
    formula3.textContent = hints3[103].usgal_usqt;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'US-Pint')) {
    result3.value = volume.value * 8;
    formula3.textContent = hints3[104].usgal_uspt;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'US-Cup')) {
    result3.value = volume.value * 16;
    formula3.textContent = hints3[105].usgal_uscup;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'UK-Gallon')) {
    result3.value = volume.value / 1.20095042;
    formula3.textContent = hints3[106].usgal_ukgal;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'UK-Quart')) {
    result3.value = volume.value * 3.330636357;
    formula3.textContent = hints3[107].usgal_ukqt;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'UK-Pint')) {
    result3.value = volume.value * 6.661272714;
    formula3.textContent = hints3[108].usgal_ukpt;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Mile')) {
    result3.value = volume.value / 3.8685416667e+12;
    formula3.textContent = hints3[109].usgal_mi3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Yard')) {
    result3.value = volume.value * 0.0049511294;
    formula3.textContent = hints3[110].usgal_yd3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Foot')) {
    result3.value = volume.value * 0.1336804926;
    formula3.textContent = hints3[111].usgal_ft3;
} else if ((convertFrom3.value === 'US-Gallon') && (convertTo3.value === 'Cubic-Inch')) {
    result3.value = volume.value * 230.99989113;
    formula3.textContent = hints3[112].usgal_in3;
}
if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 1056.68821;
  formula3.textContent = hints3[66].usqt_m3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 1.05668821e+12;
  formula3.textContent = hints3[67].usqt_km3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 946.352946;
  formula3.textContent = hints3[68].usqt_cm3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 946352.946;
  formula3.textContent = hints3[69].usqt_mm3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value / 1.05668821;
  formula3.textContent = hints3[70].usqt_l;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 946.352946;
  formula3.textContent = hints3[71].usqt_ml;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 4;
  formula3.textContent = hints3[72].usqt_usgal;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value * 2;
  formula3.textContent = hints3[73].usqt_uspt;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value * 4;
  formula3.textContent = hints3[74].usqt_uscup;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value / 3.33069373;
  formula3.textContent = hints3[75].usqt_ukgal;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value / 1.66534687;
  formula3.textContent = hints3[76].usqt_ukqt;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value * 1.20095042;
  formula3.textContent = hints3[77].usqt_ukpt;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 1.10189009e+15 ;
  formula3.textContent = hints3[78].usqt_mi;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 0.0012377823 ;
  formula3.textContent = hints3[78].usqt_yd3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 0.0334201231 ;
  formula3.textContent = hints3[78].usqt_ft3;
} else if ((convertFrom3.value === 'US-Quart') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 57.749972783 ;
  formula3.textContent = hints3[78].usqt_in3;
}
if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 2113.376419;
  formula3.textContent = hints3[101].uspt_m3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 2.113376419e+12;
  formula3.textContent = hints3[102].uspt_km3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 473.176473;
  formula3.textContent = hints3[103].uspt_cm3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 473176.473;
  formula3.textContent = hints3[104].uspt_mm3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value * 0.473176473;
  formula3.textContent = hints3[105].uspt_l;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 473.176473;
  formula3.textContent = hints3[106].uspt_ml;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 8;
  formula3.textContent = hints3[107].uspt_usgal;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value / 2;
  formula3.textContent = hints3[108].uspt_usqt;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value / 6.66138679;
  formula3.textContent = hints3[109].uspt_ukgal;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value / 3.320693395;
  formula3.textContent = hints3[110].uspt_ukqt;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value / 1.665346698;
  formula3.textContent = hints3[111].uspt_ukpt;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 8.327593175e+15;
  formula3.textContent = hints3[112].uspt_mi3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 0.0006188915;
  formula3.textContent = hints3[113].uspt_yd3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 0.0167100616;
  formula3.textContent = hints3[113].uspt_yd3;
} else if ((convertFrom3.value === 'US-Pint') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 28.874986392;
  formula3.textContent = hints3[113].uspt_yd3;
}
if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Meter')) {
    result3.value = volume.value / 4226.7528377;
    formula3.textContent = hints3[72].uscup_m3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Kilometer')) {
    result3.value = volume.value / 4.2267528377e+12;
    formula3.textContent = hints3[73].uscup_km3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Centimeter')) {
    result3.value = volume.value * 236.5882365;
    formula3.textContent = hints3[74].uscup_cm3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Millimeter')) {
    result3.value = volume.value * 236588.2365;
    formula3.textContent = hints3[75].uscup_mm3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Liter')) {
    result3.value = volume.value / 4.2267528377;
    formula3.textContent = hints3[76].uscup_l;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Milliliter')) {
    result3.value = volume.value * 236.5882365;
    formula3.textContent = hints3[77].uscup_ml;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'US-Gallon')) {
    result3.value = volume.value / 16;
    formula3.textContent = hints3[78].uscup_usgal;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'US-Quart')) {
    result3.value = volume.value / 4;
    formula3.textContent = hints3[79].uscup_usqt;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'US-Pint')) {
    result3.value = volume.value / 2;
    formula3.textContent = hints3[80].uscup_uspt;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'UK-Gallon')) {
    result3.value = volume.value / 19.215198808;
    formula3.textContent = hints3[81].uscup_ukgal;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'UK-Quart')) {
    result3.value = volume.value / 4.8037997021;
    formula3.textContent = hints3[82].uscup_ukqt;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'UK-Pint')) {
    result3.value = volume.value / 2.401899851;
    formula3.textContent = hints3[83].uscup_ukpt;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Mile')) {
    result3.value = volume.value / 1.101936977e+16;
    formula3.textContent = hints3[84].uscup_mi3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Yard')) {
    result3.value = volume.value * 0.0003094456;
    formula3.textContent = hints3[84].uscup_yd3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Foot')) {
    result3.value = volume.value * 0.0083550308;
    formula3.textContent = hints3[84].uscup_ft3;
} else if ((convertFrom3.value === 'US-Cup') && (convertTo3.value === 'Cubic-Inch')) {
    result3.value = volume.value * 14.437493196;
    formula3.textContent = hints3[84].uscup_in3;
}
if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 219.9692483;
  formula3.textContent = hints3[62].ukgal_m3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 2.199692483e+11;
  formula3.textContent = hints3[63].ukgal_km3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 4546.09;
  formula3.textContent = hints3[64].ukgal_cm3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 4.54609e+6;
  formula3.textContent = hints3[65].ukgal_mm3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value * 4.54609;
  formula3.textContent = hints3[66].ukgal_l;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 4546.09;
  formula3.textContent = hints3[67].ukgal_ml;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 1.20095042;
  formula3.textContent = hints3[68].ukgal_usgal;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value * 1.20095042;
  formula3.textContent = hints3[69].ukgal_usqt;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value * 2.40190084;
  formula3.textContent = hints3[70].ukgal_uspt;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value * 9.60760335;
  formula3.textContent = hints3[71].ukgal_uscup;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value * 4;
  formula3.textContent = hints3[72].ukgal_ukqt;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value * 8;
  formula3.textContent = hints3[73].ukgal_ukpt;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 1.10181047e+12;
  formula3.textContent = hints3[74].ukgal_mi3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 0.0059460612;
  formula3.textContent = hints3[74].ukgal_yd3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 0.1605436532;
  formula3.textContent = hints3[74].ukgal_ft3;
} else if ((convertFrom3.value === 'UK-Gallon') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 277.41943279;
  formula3.textContent = hints3[74].ukgal_in3;
}
// Convert from UK-Quart
if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 879.876993196;
  formula3.textContent = hints3[69].ukqt_m3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 8.79876993196e+14;
  formula3.textContent = hints3[70].ukqt_km3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 1136.5225;
  formula3.textContent = hints3[71].ukqt_cm3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 1136522.5;
  formula3.textContent = hints3[72].ukqt_mm3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value * 1.1365225;
  formula3.textContent = hints3[73].ukqt_l;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 1136.5225;
  formula3.textContent = hints3[74].ukqt_ml;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value / 1.20095042;
  formula3.textContent = hints3[75].ukqt_usgal;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value / 1.20095042;
  formula3.textContent = hints3[76].ukqt_usqt;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value / 0.600475208;
  formula3.textContent = hints3[77].ukqt_uspt;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'US-Cup')) {
  result3.value = volume.value / 0.300237604;
  formula3.textContent = hints3[78].ukqt_uscup;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value / 4;
  formula3.textContent = hints3[79].ukqt_ukgal;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'UK-Pint')) {
  result3.value = volume.value / 2;
  formula3.textContent = hints3[80].ukqt_ukpt;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 3.402823667e+15;
  formula3.textContent = hints3[80].ukqt_mi3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 0.0014865153;
  formula3.textContent = hints3[80].ukqt_yd3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 0.0401359133;
  formula3.textContent = hints3[80].ukqt_ft3;
} else if ((convertFrom3.value === 'UK-Quart') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 69.354858198;
  formula3.textContent = hints3[80].ukqt_in3;
}
if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Meter')) {
  result3.value = volume.value / 1759.75;
  formula3.textContent = hints3[60].ukpt_m3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Kilometer')) {
  result3.value = volume.value / 1.75975e+12;
  formula3.textContent = hints3[61].ukpt_km3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Centimeter')) {
  result3.value = volume.value * 568.26125;
  formula3.textContent = hints3[62].ukpt_cm3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Millimeter')) {
  result3.value = volume.value * 568261.25;
  formula3.textContent = hints3[63].ukpt_mm3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Liter')) {
  result3.value = volume.value * 0.56826125;
  formula3.textContent = hints3[64].ukpt_l;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Milliliter')) {
  result3.value = volume.value * 568.26125;
  formula3.textContent = hints3[65].ukpt_ml;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'US-Gallon')) {
  result3.value = volume.value * 0.150378946;
  formula3.textContent = hints3[66].ukpt_usgal;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'US-Quart')) {
  result3.value = volume.value * 0.300757893;
  formula3.textContent = hints3[67].ukpt_usqt;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'US-Pint')) {
  result3.value = volume.value * 0.601515786;
  formula3.textContent = hints3[68].ukpt_uspt;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'UK-Gallon')) {
  result3.value = volume.value * 0.125;
  formula3.textContent = hints3[67].ukpt_usqt;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'UK-Quart')) {
  result3.value = volume.value * 0.5;
  formula3.textContent = hints3[68].ukpt_uspt;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Mile')) {
  result3.value = volume.value / 1.10791009e+12;
  formula3.textContent = hints3[69].ukpt_mi3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Yard')) {
  result3.value = volume.value * 0.000740278388;
  formula3.textContent = hints3[70].ukpt_yd33;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Foot')) {
  result3.value = volume.value * 0.0209720393;
  formula3.textContent = hints3[71].ukpt_ft3;
} else if ((convertFrom3.value === 'UK-Pint') && (convertTo3.value === 'Cubic-Inch')) {
  result3.value = volume.value * 34.677428;
  formula3.textContent = hints3[72].ukpt_in3;
}
if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Meter') {
  result3.value = volume.value * 4168181825.440579584;
  formula3.textContent = hints3[81].mi3_m3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Kilometer') {
  result3.value = volume.value * 4.16818182544058;
  formula3.textContent = hints3[82].mi3_km3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Centimeter') {
  result3.value = volume.value * 4168181825440579.5;
  formula3.textContent = hints3[83].mi3_cm3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Millimeter') {
  result3.value = volume.value * 4.168181825440579e+21;
  formula3.textContent = hints3[84].mi3_mm3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Liter') {
  result3.value = volume.value * 4168181825440.579;
  formula3.textContent = hints3[85].mi3_l;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Milliliter') {
  result3.value = volume.value * 4.168181825440579e+15;
  formula3.textContent = hints3[86].mi3_ml;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'US-Gallon') {
  result3.value = volume.value * 1.101783776127922e+12;
  formula3.textContent = hints3[87].mi3_usgal;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'US-Quart') {
  result3.value = volume.value * 4.407135104511688e+12;
  formula3.textContent = hints3[88].mi3_usqt;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'US-Pint') {
  result3.value = volume.value * 8.814270209023377e+12;
  formula3.textContent = hints3[89].mi3_uspt;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'US-Cup') {
  result3.value = volume.value * 1.762854041804675e+13;
  formula3.textContent = hints3[90].mi3_uscup;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'UK-Gallon') {
  result3.value = volume.value * 9.977286151580623e+11;
  formula3.textContent = hints3[91].mi3_ukgal;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'UK-Quart') {
  result3.value = volume.value * 3.990914460632249e+12;
  formula3.textContent = hints3[92].mi3_ukqt;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'UK-Pint') {
  result3.value = volume.value * 7334971371002;
  formula3.textContent = hints3[92].mi3_ukpt;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Yard') {
  result3.value = volume.value * 5451773612.4;
  formula3.textContent = hints3[92].mi3_yd3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Foot') {
  result3.value = volume.value * 147197887535;
  formula3.textContent = hints3[92].mi3_ft3;
} else if (convertFrom3.value === 'Cubic-Mile' && convertTo3.value === 'Cubic-Inch') {
  result3.value = volume.value * 254357949660781;
  formula3.textContent = hints3[92].mi3_in3;
}
if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Mile') {
result3.value = volume.value * 1.237987453026166e-10;
formula3.textContent = hints3[93].yd3_mi3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Meter') {
result3.value = volume.value * 0.764554858;
formula3.textContent = hints3[94].yd3_m3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Kilometer') {
result3.value = volume.value * 7.64554858e-7;
formula3.textContent = hints3[95].yd3_km3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Centimeter') {
result3.value = volume.value * 764554.858;
formula3.textContent = hints3[96].yd3_cm3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Millimeter') {
result3.value = volume.value * 764554858;
formula3.textContent = hints3[97].yd3_mm3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Liter') {
result3.value = volume.value * 764.554858;
formula3.textContent = hints3[98].yd3_l;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Milliliter') {
result3.value = volume.value * 764554.858;
formula3.textContent = hints3[99].yd3_ml;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'US-Gallon') {
result3.value = volume.value * 201.97402597;
formula3.textContent = hints3[100].yd3_usgal;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'US-Quart') {
result3.value = volume.value * 807.89610388;
formula3.textContent = hints3[101].yd3_usqt;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'US-Pint') {
result3.value = volume.value * 1615.79220775;
formula3.textContent = hints3[102].yd3_uspt;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'US-Cup') {
result3.value = volume.value * 3231.5844155;
formula3.textContent = hints3[103].yd3_uscup;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'UK-Gallon') {
result3.value = volume.value * 168.17855758;
formula3.textContent = hints3[104].yd3_ukgal;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'UK-Quart') {
result3.value = volume.value * 672.71423033;
formula3.textContent = hints3[105].yd3_ukqt;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'UK-Pint') {
result3.value = volume.value * 1345.4284592;
formula3.textContent = hints3[105].yd3_yd3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Foot') {
result3.value = volume.value * 27;
formula3.textContent = hints3[105].yd3_ft3;
} else if (convertFrom3.value === 'Cubic-Yard' && convertTo3.value === 'Cubic-Inch') {
result3.value = volume.value * 46656;
formula3.textContent = hints3[105].yd3_in3;
}
if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Yard') {
    result3.value = volume.value * 0.037037037037037;
    formula3.textContent = hints3[106].ft3_yd3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Mile') {
    result3.value = volume.value * 6.79357289605169e-12;
    formula3.textContent = hints3[107].ft3_mi3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Meter') {
    result3.value = volume.value * 0.028316846592;
    formula3.textContent = hints3[108].ft3_m3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Kilometer') {
    result3.value = volume.value * 2.8316846592e-8;
    formula3.textContent = hints3[109].ft3_km3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Centimeter') {
    result3.value = volume.value * 28316.846592;
    formula3.textContent = hints3[110].ft3_cm3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Millimeter') {
    result3.value = volume.value * 28316846.592;
    formula3.textContent = hints3[111].ft3_mm3;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Liter') {
    result3.value = volume.value * 28.316846592;
    formula3.textContent = hints3[112].ft3_l;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Milliliter') {
    result3.value = volume.value * 28316.846592;
    formula3.textContent = hints3[113].ft3_ml;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'US-Gallon') {
    result3.value = volume.value * 7.48051948052;
    formula3.textContent = hints3[114].ft3_usgal;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'US-Quart') {
    result3.value = volume.value * 29.922077921;
    formula3.textContent = hints3[115].ft3_usqt;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'US-Pint') {
    result3.value = volume.value * 59.844155842;
    formula3.textContent = hints3[116].ft3_uspt;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'US-Cup') {
    result3.value = volume.value * 119.688311684;
    formula3.textContent = hints3[117].ft3_uscup;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'UK-Gallon') {
    result3.value = volume.value * 6.228835459;
    formula3.textContent = hints3[117].ft3_ukgal;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'UK-Quart') {
    result3.value = volume.value * 24.915341836;
    formula3.textContent = hints3[117].ft3_ukqt;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'UK-Pint') {
    result3.value = volume.value * 49.830683672;
    formula3.textContent = hints3[117].ft3_ukpt;
} else if (convertFrom3.value === 'Cubic-Foot' && convertTo3.value === 'Cubic-Inch') {
    result3.value = volume.value * 1728;
    formula3.textContent = hints3[117].ft3_in3;
}
if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Foot') {
    result3.value = volume.value * 0.000578703704;
    formula3.textContent = hints3[118].in3_ft3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Yard') {
    result3.value = volume.value * 2.1433470507545e-5;
    formula3.textContent = hints3[119].in3_yd3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Mile') {
    result3.value = volume.value * 4.16231425618e-16;
    formula3.textContent = hints3[120].in3_mi3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Meter') {
    result3.value = volume.value * 1.6387064e-5;
    formula3.textContent = hints3[121].in3_m3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Kilometer') {
    result3.value = volume.value * 1.6387064e-14;
    formula3.textContent = hints3[122].in3_km3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Centimeter') {
    result3.value = volume.value * 16.387064;
    formula3.textContent = hints3[123].in3_cm3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Cubic-Millimeter') {
    result3.value = volume.value * 16387.064;
    formula3.textContent = hints3[124].in3_mm3;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Liter') {
    result3.value = volume.value * 0.016387064;
    formula3.textContent = hints3[125].in3_l;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'Milliliter') {
    result3.value = volume.value * 16.387064;
    formula3.textContent = hints3[126].in3_ml;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'US-Gallon') {
    result3.value = volume.value * 0.00432900433;
    formula3.textContent = hints3[127].in3_usgal;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'US-Quart') {
    result3.value = volume.value * 0.01731601732;
    formula3.textContent = hints3[128].in3_usqt;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'US-Pint') {
    result3.value = volume.value * 0.03463203463;
    formula3.textContent = hints3[129].in3_uspt;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'US-Cup') {
    result3.value = volume.value * 0.069264069;
	formula3.textContent = hints3[129].in3_uscup;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'UK-Gallon') {
    result3.value = volume.value * 0.0036046501;
    formula3.textContent = hints3[127].in3_ukgal;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'UK-Quart') {
    result3.value = volume.value * 0.0144186006;
    formula3.textContent = hints3[128].in3_ukqt;
} else if (convertFrom3.value === 'Cubic-Inch' && convertTo3.value === 'UK-Pint') {
    result3.value = volume.value * 0.0288372012;
    formula3.textContent = hints3[129].in3_ukpt;
}
}

	


	
	
convertFrom3.addEventListener('change',convertUnits3);
convertTo3.addEventListener('change',convertUnits3);
volume.addEventListener('input',convertUnits3);