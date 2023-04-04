const length = document.querySelector('#amount_length');
const convertFrom = document.querySelector('#from_length');
const convertTo = document.querySelector('#to_length');
const formula = document.querySelector('.content_length');
const result = document.querySelector('#result_length');
const selectElem = document.querySelectorAll('select');



// display formula hints
const hints = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    // 1 centimeter to meter
    c_m: 'Divide the length by 100'
  },
  {
    // 2 centimeter to kilometer
    c_km: 'Divide the length by 100000'
  },
  {
    // 3 centimeter to millimeter
    c_mm: 'Multiply the length by 10'
  },
  {
    // 4 centimeter to micrometer
    c_um: 'Multiply the length by 10000'
  },
  {
    // 5 centimeter to nanometer
    c_nm: 'Multiply the length by 10000000'
  },
  {
    // 6 centimeter to mile
    c_mi: 'Divide the length by 160934.4'
  },
  {
    // 7 centimeter to yard
    c_yd: 'Divide the length by 91.44'
  },
  {
    // 8 centimeter to foot
    c_ft: 'Divide the length by 30.48'
  },
  {
    // 9 centimeter to inch
    c_in: 'Divide the length by 2.54'
  },
  {
    // 10 centimeter to Light-Year
    c_ly: 'Divide the length by 9.461e+17'
  }, 
  {
    // 1 meter to centimeter
    m_c: 'Multiply the length by 100'
  },
  {
    // 2 meter to kilometer
    m_km: 'Divide the length by 1000'
  },
  {
    // 3 meter to millimeter
    m_mm: 'Multiply the length by 1000'
  },
  {
    // 4 meter to micrometer
    m_um: 'Multiply the length by 1e+6'
  },
  {
    // 5 meter to nanometer
    m_nm: 'Multiply the length by 1e+9'
  },
  {
    // 6 meter to mile
    m_mi: 'Divide the length by 1609.344'
  },
  {
    // 7 meter to yard
    m_yd: 'Multiply the length by 1.094'
  },
  {
    // 8 meter to foot
    m_ft: 'Multiply the length by 3.281'
  },
  {
    // 9 meter to inch
    m_in: 'Multiply the length by 39.37'
  },
  {
    // 10 meter to Light-Year
    m_ly: 'Divide the length by 9.461e+15'
  },
  {
    // 1 kilometer to centimeter
    km_c: 'Multiply the length by 100000'
  },
  {
    // 2 kilometer to meter
    km_m: 'Multiply the length by 1000'
  },
  {
    // 3 kilometer to millimeter
    km_mm: 'Multiply the length by 1e+6'
  },
  {
    // 4 kilometer to micrometer
    km_um: 'Multiply the length by 1e+9'
  },
  {
    // 5 kilometer to nanometer
    km_nm: 'Multiply the length by 1e+12'
  },
  {
    // 6 kilometer to mile
    km_mi: 'Multiply the length by 0.62137'
  },
  {
    // 7 kilometer to yard
    km_yd: 'Multiply the length by 1093.61'
  },
  {
    // 8 kilometer to foot
    km_ft: 'Multiply the length by 3280.84'
  },
  {
    // 9 kilometer to inch
    km_in: 'Multiply the length by 39370.1'
  },
  {
    // 10 kilometer to Light-Year
    km_ly: 'Divide the length by 9.461e+12'
  },
  {
    // 1 millimeter to centimeter
    mm_c: 'Divide the length by 10'
  },
  {
    // 2 millimeter to meter
    mm_m: 'Divide the length by 1000'
  },
  {
    // 3 millimeter to micrometer
    mm_um: 'Multiply the length by 1000'
  },
  {
    // 4 millimeter to nanometer
    mm_nm: 'Multiply the length by 1e+6'
  },
  {
    // 5 millimeter to mile
    mm_mi: 'Divide the length by 1.609e+6'
  },
  {
    // 6 millimeter to yard
    mm_yd: 'Divide the length by 914.4'
  },
  {
    // 7 millimeter to foot
    mm_ft: 'Divide the length by 304.8'
  },
  {
    // 8 millimeter to inch
    mm_in: 'Divide the length by 25.4'
  },
  {
    // 9 millimeter to Light-Year
    mm_ly: 'Divide the length by 9.461e+18'
  },
  {
    // 9 millimeter to kilometer
    mm_km: 'Divide the length by 1000000'
  },
  {
    // 1 um to millimeter
    um_mm: 'Divide the length by 1000'
  },
  {
    // 2 um to centimeter
    um_cm: 'Divide the length by 10000'
  },
  {
    // 3 um to meter
    um_m: 'Divide the length by 1e+6'
  },
  {
    // 4 um to kilometer
    um_km: 'Divide the length by 1e+9'
  },
  {
    // 5 um to nanometer
    um_nm: 'Multiply the length by 1000'
  },
  {
    // 6 um to mile
    um_mi: 'Divide the length by 1.609e+9'
  },
  {
    // 7 um to yard
    um_yd: 'Divide the length by 914400'
  },
  {
    // 8 um to foot
    um_ft: 'Divide the length by 304800'
  },
  {
    // 9 um to inch
    um_in: 'Divide the length by 25400'
  },
  {
    // 10 um to Light-Year
    um_ly: 'Divide the length by 9.461e+21'
  },
  {
    // 1 nanometer to micrometer
    nm_um: 'Divide the length by 1000'
  },
  {
    // 2 nanometer to millimeter
    nm_mm: 'Divide the length by 1e+6'
  },
  {
    // 3 nanometer to centimeter
    nm_cm: 'Divide the length by 1e+7'
  },
  {
    // 4 nanometer to meter
    nm_m: 'Divide the length by 1e+9'
  },
  {
    // 5 nanometer to kilometer
    nm_km: 'Divide the length by 1e+12'
  },
  {
    // 6 nanometer to mile
    nm_mi: 'Divide the length by 1.609e+12'
  },
  {
    // 7 nanometer to yard
    nm_yd: 'Divide the length by 9.144e+8'
  },
  {
    // 8 nanometer to foot
    nm_ft: 'Divide the length by 3.048e+8'
  },
  {
    // 9 nanometer to inch
    nm_in: 'Divide the length by 2.54e+7'
  },
  {
    // 10 nanometer to Light-Year
    nm_ly: 'Divide the length by 9.461e+21'
  },
  {
    // 61 mile to kilometer
    mi_km: 'Multiply the length by 1.60934'
  },
  {
    // 62 mile to meter
    mi_m: 'Multiply the length by 1609.34'
  },
  {
    // 63 mile to centimeter
    mi_cm: 'Multiply the length by 160934'
  },
  {
    // 64 mile to millimeter
    mi_mm: 'Multiply the length by 1.609e+6'
  },
  {
    // 65 mile to micrometer
    mi_um: 'Multiply the length by 1.609e+9'
  },
  {
    // 66 mile to nanometer
    mi_nm: 'Multiply the length by 1.609e+12'
  },
  {
    // 67 mile to yard
    mi_yd: 'Multiply the length by 1760'
  },
  {
    // 68 mile to foot
    mi_ft: 'Multiply the length by 5280'
  },
  {
    // 69 mile to inch
    mi_in: 'Multiply the length by 63360'
  },
  {
    // 70 mile to Light-Year
    mi_ly: 'Divide the length by 5.878e+12'
  },
  {
    // 1 foot to inch
    ft_in: 'Multiply the length by 12'
  },
  {
    // 2 foot to yard
    ft_yd: 'Divide the length by 3'
  },
  {
    // 3 foot to meter
    ft_m: 'Multiply the length by 0.3048'
  },
  {
    // 4 foot to kilometer
    ft_km: 'Multiply the length by 0.0003048'
  },
  {
    // 5 foot to mile
    ft_mi: 'Multiply the length by 0.000189394'
  },
  {
    // 6 foot to centimeter
    ft_cm: 'Multiply the length by 30.48'
  },
  {
    // 7 foot to millimeter
    ft_mm: 'Multiply the length by 304.8'
  },
  {
    // 8 foot to micrometer
    ft_um: 'Multiply the length by 304800'
  },
  {
    // 9 foot to nanometer
    ft_nm: 'Multiply the length by 304800000'
  },
  {
    // 10 foot to Light-Year
    ft_ly: 'Divide the length by 3.104e+16'
  },
  {
    // 1 inch to centimeter
    in_cm: 'Multiply the length by 2.54'
  },
  {
    // 2 inch to meter
    in_m: 'Divide the length by 39.37'
  },
  {
    // 3 inch to millimeter
    in_mm: 'Multiply the length by 25.4'
  },
  {
    // 4 inch to micrometer
    in_um: 'Multiply the length by 25400'
  },
  {
    // 5 inch to nanometer
    in_nm: 'Multiply the length by 2.54e+7'
  },
  {
    // 6 inch to kilometer
    in_km: 'Divide the length by 39370.1'
  },
  {
    // 7 inch to mile
    in_mi: 'Divide the length by 63360'
  },
  {
    // 8 inch to yard
    in_yd: 'Divide the length by 36'
  },
  {
    // 9 inch to foot
    in_ft: 'Divide the length by 12'
  },
  {
    // 10 inch to Light-Year
    in_ly: 'Divide the length by 3.725e+17'
  },
  {
    // 1 yard to meter
    yd_m: 'Multiply the length by 0.9144'
  },
  {
    // 2 yard to kilometer
    yd_km: 'Divide the length by 1093.61'
  },
  {
    // 3 yard to centimeter
    yd_cm: 'Multiply the length by 91.44'
  },
  {
    // 4 yard to millimeter
    yd_mm: 'Multiply the length by 914.4'
  },
  {
    // 5 yard to micrometer
    yd_um: 'Multiply the length by 9.144e+8'
  },
  {
    // 6 yard to nanometer
    yd_nm: 'Multiply the length by 9.144e+11'
  },
  {
    // 7 yard to mile
    yd_mi: 'Multiply the length by 0.000568182'
  },
  {
    // 8 yard to foot
    yd_ft: 'Multiply the length by 3'
  },
  {
    // 9 yard to inch
    yd_in: 'Multiply the length by 36'
  },
  {
    // 10 yard to Light-Year
    yd_ly: 'Divide the length by 1.057e+16'
  },
  {
    // 1 Light-Year to meter
    ly_m: 'Multiply the length by 9.461e+15'
  },
  {
    // 2 Light-Year to kilometer
    ly_km: 'Multiply the length by 9.461e+12'
  },
  {
    // 3 Light-Year to centimeter
    ly_cm: 'Multiply the length by 9.461e+17'
  },
  {
    // 4 Light-Year to millimeter
    ly_mm: 'Multiply the length by 9.461e+18'
  },
  {
    // 5 Light-Year to micrometer
    ly_um: 'Multiply the length by 9.461e+21'
  },
  {
    // 6 Light-Year to nanometer
    ly_nm: 'Multiply the length by 9.461e+24'
  },
  {
    // 7 Light-Year to mile
    ly_mi: 'Multiply the length by 5.878e+12'
  },
  {
    // 8 Light-Year to yard
    ly_yd: 'Multiply the length by 1.035e+16'
  },
  {
    // 9 Light-Year to foot
    ly_ft: 'Multiply the length by 3.105e+16'
  },
  {
    // 10 Light-Year to inch
    ly_in: 'Multiply the length by 3.726e+17'
  }
];

const unitsLength = [
	'Meter',
	'Kilometer',
	'Millimeter',
	'Micrometer',
	'Nanometer',
	'Mile',
	'Yard',
	'Foot',
	'Inch',
	'Light-Year'
];

for (let i = 0; i < unitsLength.length; i++) {
	let option = ` <option value=${unitsLength[i]}>${unitsLength[i]}</option>`;
	selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);	
}
for (let i = 0; i < unitsLength.length; i++) {
	let option = ` <option value=${unitsLength[i]}>${unitsLength[i]}</option>`;
	selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);	
}

function convertUnits (){
    if ((convertFrom.value === 'Centimeter') && (convertTo.value === 'Centimeter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Meter') && (convertTo.value === 'Meter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Kilometer') && (convertTo.value === 'Kilometer')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Millimeter') && (convertTo.value === 'Millimeter')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Micrometer') && (convertTo.value === 'Micrometer')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Nanometer') && (convertTo.value === 'Nanometer')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Mile') && (convertTo.value === 'Mile')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Yard') && (convertTo.value === 'Yard')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Foot') && (convertTo.value === 'Foot')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Inch') && (convertTo.value === 'Inch')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
} else if ((convertFrom.value === 'Light-Year') && (convertTo.value === 'Light-Year')) {
  result.value = length.value;
  formula.textContent = hints[0].sameUnit;
}

//conversion code cm
if (convertFrom.value === 'Centimeter') {
  if (convertTo.value === 'Meter') {
    result.value = length.value / 100;
    formula.textContent = hints[1].c_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 100000;
    formula.textContent = hints[2].c_km;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 10;
    formula.textContent = hints[3].c_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 10000;
    formula.textContent = hints[4].c_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 10000000;
    formula.textContent = hints[5].c_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 160934.4;
    formula.textContent = hints[6].c_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 91.44;
    formula.textContent = hints[7].c_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value / 30.48;
    formula.textContent = hints[8].c_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value / 2.54;
    formula.textContent = hints[9].c_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9460730472580800;
    formula.textContent = hints[10].c_ly;
  }
}

//conversion code m
if (convertFrom.value === 'Meter') {
  if (convertTo.value === 'Centimeter') {
    result.value = length.value * 100;
    formula.textContent = hints[11].m_c;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 1000;
    formula.textContent = hints[12].m_km;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 1000;
    formula.textContent = hints[13].m_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 1e+6;
    formula.textContent = hints[14].m_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 1e+9;
    formula.textContent = hints[15].m_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 1609.344;
    formula.textContent = hints[16].m_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value * 1.094;
    formula.textContent = hints[17].m_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value * 3.281;
    formula.textContent = hints[18].m_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value * 39.37;
    formula.textContent = hints[19].m_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9.461e+15;
    formula.textContent = hints[20].m_ly;
  }
}

// conversion code km
if (convertFrom.value === 'Kilometer') {
  if (convertTo.value === 'Centimeter') {
    result.value = length.value * 100000;
    formula.textContent = hints[21].km_c;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value * 1000;
    formula.textContent = hints[22].km_m;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 1e+6;
    formula.textContent = hints[23].km_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 1e+9;
    formula.textContent = hints[24].km_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 1e+12;
    formula.textContent = hints[25].km_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value * 0.62137;
    formula.textContent = hints[26].km_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value * 1093.61;
    formula.textContent = hints[27].km_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value * 3280.84;
    formula.textContent = hints[28].km_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value * 39370.1;
    formula.textContent = hints[29].km_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9.461e+12;
    formula.textContent = hints[30].km_ly;
  }
}

// conversion code mm
if (convertFrom.value === 'Millimeter') {
  if (convertTo.value === 'Centimeter') {
    result.value = length.value / 10;
    formula.textContent = hints[31].mm_c;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value / 1000;
    formula.textContent = hints[32].mm_m;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 1000;
    formula.textContent = hints[33].mm_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 1e+6;
    formula.textContent = hints[34].mm_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 1.609e+6;
    formula.textContent = hints[35].mm_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 914.4;
    formula.textContent = hints[36].mm_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value / 304.8;
    formula.textContent = hints[37].mm_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value / 25.4;
    formula.textContent = hints[38].mm_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9.461e+18;
    formula.textContent = hints[39].mm_ly;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 1000000;
    formula.textContent = hints[40].mm_km;
  } 
}
if (convertFrom.value === 'Micrometer') {
  if (convertTo.value === 'Millimeter') {
    result.value = length.value / 1000;
    formula.textContent = hints[41].um_mm;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value / 10000;
    formula.textContent = hints[42].um_cm;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value / 1e+6;
    formula.textContent = hints[43].um_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 1e+9;
    formula.textContent = hints[44].um_km;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 1000;
    formula.textContent = hints[45].um_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 1.609e+9;
    formula.textContent = hints[46].um_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 914400;
    formula.textContent = hints[47].um_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value / 304800;
    formula.textContent = hints[48].um_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value / 25400;
    formula.textContent = hints[49].um_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9.461e+21;
    formula.textContent = hints[50].um_ly;
  }
}
// conversion code
if (convertFrom.value === 'Nanometer') {
  if (convertTo.value === 'Micrometer') {
    result.value = length.value / 1000;
    formula.textContent = hints[51].nm_um;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value / 1e+6;
    formula.textContent = hints[52].nm_mm;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value / 1e+7;
    formula.textContent = hints[53].nm_cm;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value / 1e+9;
    formula.textContent = hints[54].nm_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 1e+12;
    formula.textContent = hints[55].nm_km;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 1.609e+12;
    formula.textContent = hints[56].nm_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 9.144e+8;
    formula.textContent = hints[57].nm_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value / 3.048e+8;
    formula.textContent = hints[58].nm_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value / 2.54e+7;
    formula.textContent = hints[59].nm_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 9.461e+21;
    formula.textContent = hints[60].nm_ly;
  }
}
if (convertFrom.value === 'Mile') {
  if (convertTo.value === 'Kilometer') {
    result.value = length.value * 1.60934;
    formula.textContent = hints[61].mi_km;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value * 1609.34;
    formula.textContent = hints[62].mi_m;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value * 160934;
    formula.textContent = hints[63].mi_cm;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 1.609e+6;
    formula.textContent = hints[64].mi_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 1.609e+9;
    formula.textContent = hints[65].mi_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 1.609e+12;
    formula.textContent = hints[66].mi_nm;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value * 1760;
    formula.textContent = hints[67].mi_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value * 5280;
    formula.textContent = hints[68].mi_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value * 63360;
    formula.textContent = hints[69].mi_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 5.87849981e+12;
    formula.textContent = hints[70].mi_ly;
  }
}
// conversion code
if (convertFrom.value === 'Foot') {
  if (convertTo.value === 'Inch') {
    result.value = length.value * 12;
    formula.textContent = hints[71].ft_in;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 3;
    formula.textContent = hints[72].ft_yd;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value * 0.3048;
    formula.textContent = hints[73].ft_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value * 0.0003048;
    formula.textContent = hints[74].ft_km;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value * 0.000189394;
    formula.textContent = hints[75].ft_mi;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value * 30.48;
    formula.textContent = hints[76].ft_cm;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 304.8;
    formula.textContent = hints[77].ft_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 304800;
    formula.textContent = hints[78].ft_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 304800000;
    formula.textContent = hints[79].ft_nm;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 3.104e+16;
    formula.textContent = hints[80].ft_ly;
  }
}
// conversion code
if (convertFrom.value === 'Inch') {
  if (convertTo.value === 'Centimeter') {
    result.value = length.value * 2.54;
    formula.textContent = hints[81].in_cm;
  } else if (convertTo.value === 'Meter') {
    result.value = length.value / 39.37;
    formula.textContent = hints[82].in_m;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 25.4;
    formula.textContent = hints[83].in_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 25400;
    formula.textContent = hints[84].in_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 2.54e+7;
    formula.textContent = hints[85].in_nm;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 39370.1;
    formula.textContent = hints[86].in_km;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value / 63360;
    formula.textContent = hints[87].in_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value / 36;
    formula.textContent = hints[88].in_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value / 12;
    formula.textContent = hints[89].in_ft;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 3.725e+17;
    formula.textContent = hints[90].in_ly;
  }
}
// conversion code
if (convertFrom.value === 'Yard') {
  if (convertTo.value === 'Meter') {
    result.value = length.value * 0.9144;
    formula.textContent = hints[91].yd_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value / 1093.61;
    formula.textContent = hints[92].yd_km;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value * 91.44;
    formula.textContent = hints[93].yd_cm;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 914.4;
    formula.textContent = hints[94].yd_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 9.144e+8;
    formula.textContent = hints[95].yd_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 9.144e+11;
    formula.textContent = hints[96].yd_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value * 0.000568182;
    formula.textContent = hints[97].yd_mi;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value * 3;
    formula.textContent = hints[98].yd_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value * 36;
    formula.textContent = hints[99].yd_in;
  } else if (convertTo.value === 'Light-Year') {
    result.value = length.value / 1.057e+16;
    formula.textContent = hints[100].yd_ly;
  }
}
if (convertFrom.value === 'Light-Year') {
  if (convertTo.value === 'Meter') {
    result.value = length.value * 9.461e+15;
    formula.textContent = hints[101].ly_m;
  } else if (convertTo.value === 'Kilometer') {
    result.value = length.value * 9.461e+12;
    formula.textContent = hints[102].ly_km;
  } else if (convertTo.value === 'Centimeter') {
    result.value = length.value * 9.461e+17;
    formula.textContent = hints[103].ly_cm;
  } else if (convertTo.value === 'Millimeter') {
    result.value = length.value * 9.461e+18;
    formula.textContent = hints[104].ly_mm;
  } else if (convertTo.value === 'Micrometer') {
    result.value = length.value * 9.461e+21;
    formula.textContent = hints[105].ly_um;
  } else if (convertTo.value === 'Nanometer') {
    result.value = length.value * 9.461e+24;
    formula.textContent = hints[106].ly_nm;
  } else if (convertTo.value === 'Mile') {
    result.value = length.value * 5.878e+12;
    formula.textContent = hints[107].ly_mi;
  } else if (convertTo.value === 'Yard') {
    result.value = length.value * 1.035e+16;
    formula.textContent = hints[108].ly_yd;
  } else if (convertTo.value === 'Foot') {
    result.value = length.value * 3.106e+16;
    formula.textContent = hints[109].ly_ft;
  } else if (convertTo.value === 'Inch') {
    result.value = length.value * 3.728e+17;
    formula.textContent = hints[110].ly_in;
  }
}

}


// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
length.addEventListener('input',convertUnits);
// JavaScript Document