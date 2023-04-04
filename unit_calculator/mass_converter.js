// JavaScript Document
const mass = document.querySelector('#amount_mass');
const convertFrom2 = document.querySelector('#from_mass');
const convertTo2 = document.querySelector('#to_mass');
const formula2 = document.querySelector('.content_mass');
const result2 = document.querySelector('#result_mass');
const selectElem2 = document.querySelectorAll('select');

const hints2 = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    g_kg: 'Divide the mass by 1000'
  },
  {
    g_mg: 'Multiply the mass by 1000'
  },
  {
    g_lb: 'Divide the mass by 453.59237'
  },
  {
    g_mt: 'Divide the mass by 1000000'
  },
  {
    g_lt: 'Divide the mass by 1016046.9088'
  },
  {
    g_st: 'Divide the mass by 907184.74'
  },
  {
    g_oz: 'Divide the mass by 28.34952'
  },
  {
    g_ct: 'Multiply the mass by 5'
  },
  {
    // 1 kg to gram
    kg_g: 'Multiply the mass by 1000'
  },
  {
    // 2 kg to milligram
    kg_mg: 'Multiply the mass by 1e+6'
  },
  {
    // 3 kg to pound
    kg_lb: 'Multiply the mass by 2.20462'
  },
  {
    // 4 kg to metric ton
    kg_mt: 'Divide the mass by 1000'
  },
  {
    // 5 kg to long ton
    kg_lt: 'Divide the mass by 1016.04691'
  },
  {
    // 6 kg to short ton
    kg_st: 'Divide the mass by 907.18474'
  },
  {
    // 7 kg to ounce
    kg_oz: 'Multiply the mass by 35.27396'
  },
  {
    // 8 kg to carat
    kg_ct: 'Multiply the mass by 5000'
  },
  {
    // 2 milligram to kilogram
    mg_kg: 'Divide the mass by 1e+6'
  },
  {// 1 milligram to gram
    mg_g: 'Divide the mass by 1000'
  },
  {
    // 3 milligram to pound
    mg_lb: 'Divide the mass by 453592.37'
  },
  {
    // 4 milligram to metric ton
    mg_mt: 'Divide the mass by 1e+9'
  },
  {
    // 5 milligram to long ton
    mg_lt: 'Divide the mass by 1.016e+9'
  },
  {
    // 6 milligram to short ton
    mg_st: 'Divide the mass by 907185'
  },
  {
    // 7 milligram to ounce
    mg_oz: 'Divide the mass by 28349.523125'
  },
  {
    // 8 milligram to carat
    mg_ct: 'Divide the mass by 200'
  },
  {
    lb_kg: 'Multiply the mass by 0.45359237'
  },
  {
    lb_g: 'Multiply the mass by 453.59237'
  },
  {
    lb_mg: 'Multiply the mass by 453592.37'
  },
  {
    lb_mt: 'Multiply the mass by 0.00045359237'
  },
  {
    lb_lt: 'Multiply the mass by 0.00044642857'
  },
  {
    lb_st: 'Multiply the mass by 6.35029318'
  },
  {
    lb_oz: 'Multiply the mass by 16'
  },
  {
    lb_ct: 'Multiply the mass by 2267.96185'
  },
  {
    mt_kg: 'Multiply the mass by 1000'
  },
  {
    mt_g: 'Multiply the mass by 1e+6'
  },
  {
    mt_lb: 'Multiply the mass by 2204.62'
  },
  {
    mt_mg: 'Multiply the mass by 1e+9'
  },
  {
    mt_lt: 'Divide the mass by 0.984207'
  },
  {
    mt_st: 'Divide the mass by 0.907185'
  },
  {
    mt_oz: 'Multiply the mass by 35274'
  },
  {
    mt_ct: 'Multiply the mass by 5e+6'
  },
  {
    lt_kg: 'Multiply the mass by 1016.0469088'
  },
  {
    lt_g: 'Multiply the mass by 1.0160e+6'
  },
  {
    lt_mg: 'Multiply the mass by 1.0160e+9'
  },
  {
    lt_lb: 'Multiply the mass by 2240'
  },
  {
    lt_mt: 'Multiply the mass by 1.0160469088'
  },
  {
    lt_st: 'Multiply the mass by 160'
  },
  {
    lt_oz: 'Multiply the mass by 35840'
  },
  {
    lt_ct: 'Multiply the mass by 5.080e+6'
  },
  {
    st_kg: 'Multiply the mass by 907.18474'
  },
  {
    st_g: 'Multiply the mass by 907184.74'
  },
  {
    st_mg: 'Multiply the mass by 907184000'
  },
  {
    st_lb: 'Multiply the mass by 2000'
  },
  {
    st_mt: 'Multiply the mass by 0.90718474'
  },
  {
    st_lt: 'Multiply the mass by 0.89285714'
  },
  {
    st_oz: 'Multiply the mass by 32000'
  },
  {
    st_ct: 'Multiply the mass by 45359237'
  },
  {
    oz_g: 'Multiply the mass by 28.35'
  },
  {
    oz_kg: 'Divide the mass by 35.274'
  },
  
  {
    oz_mg: 'Multiply the mass by 28349.5'
  },
  {
    oz_lb: 'Divide the mass by 16'
  },
  {
    oz_mt: 'Divide the mass by 35273.962'
  },
  {
    oz_lt: 'Divide the mass by 35840'
  },
  {
    oz_st: 'Divide the mass by 32000'
  },
  {
    oz_ct: 'Multiply the mass by 141.748'
  },
  {
    ct_g: 'Multiply the mass by 0.2'
  },
  {
    ct_kg: 'Multiply the mass by 0.0002'
  },
  {
    ct_mg: 'Multiply the mass by 200'
  },
  {
    ct_lb: 'Multiply the mass by 0.0004409245244'
  },
  {
    ct_mt: 'Multiply the mass by 2e-7'
  },
  {
    ct_lt: 'Multiply the mass by 1.9684e-7'
  },
  {
    ct_st: 'Multiply the mass by 2.2046e-7'
  },
  {
    ct_oz: 'Multiply the mass by 0.00705479239'
  },
  {
    ct_mg: 'Multiply the mass by 200'
  },
  
];

const unitsMass = [
    'Kilogram',
    'Milligram',
    'Pound',
    'Metric-Ton',
    'Long-Ton',
    'Short-Ton',
    'Ounce',
    'Carat',
];

for (let i = 0; i < unitsMass.length; i++) {
	let option2 = ` <option value=${unitsMass[i]}>${unitsMass[i]}</option>`;
	selectElem2[2].firstElementChild.insertAdjacentHTML('afterend', option2);	
}
for (let i = 0; i < unitsMass.length; i++) {
	let option2 = ` <option value=${unitsMass[i]}>${unitsMass[i]}</option>`;
	selectElem2[3].firstElementChild.insertAdjacentHTML('afterend', option2);	
}

function convertUnits2 (){
    if ((convertFrom2.value === 'Gram') && (convertTo2.value === 'Gram')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Kilogram') && (convertTo2.value === 'Kilogram')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Milligram') && (convertTo2.value === 'Milligram')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Pound') && (convertTo2.value === 'Pound')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Metric-Ton') && (convertTo2.value === 'Metric-Ton')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Long-Ton') && (convertTo2.value === 'Long-Ton')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Short-Ton') && (convertTo2.value === 'Short-Ton')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Ounce') && (convertTo2.value === 'Ounce')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
} else if ((convertFrom2.value === 'Carat') && (convertTo2.value === 'Carat')) {
  result2.value = mass.value;
  formula2.textContent = hints2[0].sameUnit;
}
if (convertFrom2.value === 'Gram') {
  if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value / 1000;
    formula2.textContent = hints2[1].g_kg;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 1000;
    formula2.textContent = hints2[2].g_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value / 453.592;
    formula2.textContent = hints2[3].g_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 1000000;
    formula2.textContent = hints2[4].g_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 1016046.91;
    formula2.textContent = hints2[5].g_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 907.185;
    formula2.textContent = hints2[6].g_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value / 28.3495;
    formula2.textContent = hints2[7].g_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value / 0.2;
    formula2.textContent = hints2[8].g_ct;
  }
}
if (convertFrom2.value === 'Kilogram') {
  if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 1000;
    formula2.textContent = hints2[9].kg_g;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 1000000;
    formula2.textContent = hints2[10].kg_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value * 2.20462;
    formula2.textContent = hints2[11].kg_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 1000;
    formula2.textContent = hints2[12].kg_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 1016.04691;
    formula2.textContent = hints2[13].kg_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 907.18474;
    formula2.textContent = hints2[14].kg_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 35.27396;
    formula2.textContent = hints2[15].kg_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 5000;
    formula2.textContent = hints2[16].kg_ct;
  }
}
if (convertFrom2.value === 'Milligram') {
  if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value / 1000000;
    formula2.textContent = hints2[17].mg_kg;
  } else if (convertTo2.value === 'Gram') {
    result2.value = mass.value / 1000;
    formula2.textContent = hints2[18].mg_g;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value / 453592.37;
    formula2.textContent = hints2[19].mg_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 1000000000;
    formula2.textContent = hints2[20].mg_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 1016046908.8;
    formula2.textContent = hints2[21].mg_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 907184.74;
    formula2.textContent = hints2[22].mg_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value / 28349.5231;
    formula2.textContent = hints2[23].mg_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value / 200;
    formula2.textContent = hints2[24].mg_ct;
  }
}
if (convertFrom2.value === 'Pound') {
  if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value / 2.20462;
    formula2.textContent = hints2[25].lb_kg;
  } else if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 453.592;
    formula2.textContent = hints2[26].lb_g;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 453592.37;
    formula2.textContent = hints2[27].lb_mg;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 2204.62;
    formula2.textContent = hints2[28].lb_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 2240;
    formula2.textContent = hints2[29].lb_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 2000;
    formula2.textContent = hints2[30].lb_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 16;
    formula2.textContent = hints2[31].lb_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 2267.96;
    formula2.textContent = hints2[32].lb_ct;
  }
}
if (convertFrom2.value === 'Metric-Ton') {
  if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 1000000;
    formula2.textContent = hints2[34].mt_g;
  } else if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value * 1000;
    formula2.textContent = hints2[33].mt_kg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value * 2204.62;
    formula2.textContent = hints2[35].mt_lb;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 1e+9;
    formula2.textContent = hints2[36].mt_mg;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 1.016;
    formula2.textContent = hints2[37].mt_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 0.907185;
    formula2.textContent = hints2[38].mt_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 35274;
    formula2.textContent = hints2[39].mt_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 5e+6;
    formula2.textContent = hints2[40].mt_ct;
  }
}
if (convertFrom2.value === 'Long-Ton') {
  if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value * 1016.047;
    formula2.textContent = hints2[41].lt_kg;
  } else if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 1.016e+6;
    formula2.textContent = hints2[42].lt_g;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 1.016e+9;
    formula2.textContent = hints2[43].lt_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value * 2240;
    formula2.textContent = hints2[44].lt_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 0.98421;
    formula2.textContent = hints2[45].lt_mt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value * 1.12;
    formula2.textContent = hints2[46].lt_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 35840;
    formula2.textContent = hints2[47].lt_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 5.08023e+6;
    formula2.textContent = hints2[48].lt_ct;
  }
}
if (convertFrom2.value === 'Short-Ton') {
  if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value * 907.18474;
    formula2.textContent = hints2[49].st_kg;
  } else if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 907184.74;
    formula2.textContent = hints2[50].st_g;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 907184000;
    formula2.textContent = hints2[50].st_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value * 2000;
    formula2.textContent = hints2[52].st_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value * 0.90718474;
    formula2.textContent = hints2[53].st_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value * 0.89285714;
    formula2.textContent = hints2[54].st_lt;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 32000;
    formula2.textContent = hints2[55].st_oz;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 45359237;
    formula2.textContent = hints2[56].st_ct;
  }
}
if (convertFrom2.value === 'Ounce') {
  if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 28.3495;
    formula2.textContent = hints2[57].oz_g;
  } else if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value * 0.0283495;
    formula2.textContent = hints2[58].oz_kg;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 28349.5;
    formula2.textContent = hints2[59].oz_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value / 16;
    formula2.textContent = hints2[60].oz_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value / 35273.962;
    formula2.textContent = hints2[61].oz_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value / 35840;
    formula2.textContent = hints2[62].oz_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value / 32000;
    formula2.textContent = hints2[63].oz_st;
  } else if (convertTo2.value === 'Carat') {
    result2.value = mass.value * 141.748;
    formula2.textContent = hints2[64].oz_ct;
  }
}
if (convertFrom2.value === 'Carat') {
  if (convertTo2.value === 'Gram') {
    result2.value = mass.value * 0.2;
    formula2.textContent = hints2[65].ct_g;
  } else if (convertTo2.value === 'Kilogram') {
    result2.value = mass.value * 0.0002;
    formula2.textContent = hints2[66].ct_kg;
  } else if (convertTo2.value === 'Milligram') {
    result2.value = mass.value * 200;
    formula2.textContent = hints2[67].ct_mg;
  } else if (convertTo2.value === 'Pound') {
    result2.value = mass.value * 0.0004409245244;
    formula2.textContent = hints2[68].ct_lb;
  } else if (convertTo2.value === 'Metric-Ton') {
    result2.value = mass.value * 2e-7;
    formula2.textContent = hints2[69].ct_mt;
  } else if (convertTo2.value === 'Long-Ton') {
    result2.value = mass.value * 1.9684130552e-7;
    formula2.textContent = hints2[70].ct_lt;
  } else if (convertTo2.value === 'Short-Ton') {
    result2.value = mass.value * 2.20462e-7;
    formula2.textContent = hints2[71].ct_st;
  } else if (convertTo2.value === 'Ounce') {
    result2.value = mass.value * 0.00705479239;
    formula2.textContent = hints2[72].ct_oz;
  }
}
}
	


convertFrom2.addEventListener('change',convertUnits2);
convertTo2.addEventListener('change',convertUnits2);
mass.addEventListener('input',convertUnits2);
