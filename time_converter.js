// JavaScript Document
const time = document.querySelector('#amount_time');
const convertFrom6 = document.querySelector('#from_time');
const convertTo6 = document.querySelector('#to_time');
const formula6 = document.querySelector('.content_time');
const result6 = document.querySelector('#result_time');
const selectElem6 = document.querySelectorAll('select');

const hints6 = [
  {
    sameUnit: 'Gives the same value'
  },
  {
    s_ms: 'Multiply the time by 1,000'
  },
  {
    s_us: 'Multiply the time by 1,000,000'
  },
  {
    s_ns: 'Multiply the time by 1,000,000,000 '
  },
  {
    s_ps: 'Multiply the area by 1 × 10^12'
  },
  {
    s_min: 'Divide the time by 60'
  },
  {
    s_h: 'Divide the time by 3600'
  },
  {
    s_d: 'Divide the time by 86,400'
  },
  {
    s_w: 'Divide the time by 604,800'
  },
  {
    s_mon: 'Divide the time by 2,629,746'
  },
  {
    s_y: 'Divide the time by 31,556,952'
  },
  {
ms_s: 'Divide the time by 1,000'
},
{
ms_us: 'Multiply the time by 1,000'
},
{
ms_ns: 'Multiply the time by 1,000,000'
},
{
ms_ps: 'Multiply the time by 1 × 10^6'
},
{
ms_min: 'Divide the time by 60,000'
},
{
ms_h: 'Divide the time by 3,600,000'
},
{
ms_d: 'Divide the time by 86,400,000'
},
{
ms_w: 'Divide the time by 604,800,000'
},
{
ms_mon: 'Divide the time by 2,629,746,000'
},
{
ms_y: 'Divide the time by 31,556,952,000'
},
{
    us_s: 'Divide the time by 1000000'
  },
  {
    us_ms: 'Divide the time by 1,000'
  },
  {
    us_ns: 'Multiply the time by 1,000'
  },
  {
    us_ps: 'Multiply the time by 1 × 10^6'
  },
  {
    us_min: 'Divide the time by 60,000,000'
  },
  {
    us_h: 'Divide the time by 3,600,000,000'
  },
  {
    us_d: 'Divide the time by 86,400,000,000'
  },
  {
    us_w: 'Divide the time by 604,800,000,000'
  },
  {
    us_mon: 'Divide the time by 2,629,746,000,000'
  },
  {
    us_y: 'Divide the time by 31,556,952,000,000'
  },
  {
ns_s: 'Divide the time by 1,000,000,000'
},
{
ns_ms: 'Divide the time by 1,000,000'
},
{
ns_us: 'Divide the time by 1,000'
},
{
ns_ps: 'Multiply the time by 1,000'
},
{
ns_min: 'Divide the time by 60,000,000,000'
},
{
ns_h: 'Divide the time by 3.6 × 10^12'
},
{
ns_d: 'Divide the time by 8.64 × 10^13'
},
{
ns_w: 'Divide the time by 6.048 × 10^14'
},
{
ns_mon: 'Divide the time by 2.629746 × 10^15'
},
{
ns_y: 'Divide the time by 3.1556952 × 10^16'
},
{
ps_s: 'Divide the time by 1.E12'
},
{
ps_ms: 'Divide the time by 1.E9'
},
{
ps_us: 'Divide the time by 1000000'
},
{
ps_ns: 'Divide the time by 1,000'
},
{
ps_min: 'Divide the time by 6 × 10^15'
},
{
ps_h: 'Divide the time by  3.6 × 10^14'
},
{
ps_d: 'Divide the time by 8.64 × 10^15'
},
{
ps_w: 'Divide the time by 6.048 × 10^16'
},
{
ps_mon: 'Divide the time by 2.629746 × 10^17'
},
{
ps_y: 'Divide the time by 3.1556952 × 10^18'
},
{
    min_s: 'Multiply the time by 60'
  },
{
    min_ms: 'Multiply the time by 60,000'
  },
  {
    min_us: 'Multiply the time by 3,600,000'
  },
  {
    min_ns: 'Multiply the time by 2,160,000,000 '
  },
  {
    min_ps: 'Multiply the time by 1.296 × 10^14'
  },
  
  {
    min_h: 'Divide the time by 60'
  },
  {
    min_d: 'Divide the time by 1,440'
  },
  {
    min_w: 'Divide the time by 10,080'
  },
  {
    min_mon: 'Divide the time by 43,829.1'
  },
  {
    min_y: 'Divide the time by 525,949.2'
  },
  {
    h_s: 'Multiply the time by 3,600'
  },
  {
    h_ms: 'Multiply the time by 3,600,000'
  },
  {
    h_us: 'Multiply the time by 3,600,000,000'
  },
  {
    h_ns: 'Multiply the time by 3,600,000,000,000'
  },
  {
    h_ps: 'Multiply the time by 3.6 × 10^15'
  },
  {
    h_min: 'Divide the time by 60'
  },
  
  {
    h_d: 'Divide the time by 24'
  },
  {
    h_w: 'Divide the time by 168'
  },
  {
    h_mon: 'Divide the time by 730.484'
  },
  {
    h_y: 'Divide the time by 8,760'
  },
  {
    d_s: 'Multiply the time by 86,400'
  },
  {
    d_ms: 'Multiply the time by 86,400,000'
  },
  {
    d_us: 'Multiply the time by 8.64 × 10^10'
  },
  {
    d_ns: 'Multiply the time by = 8.64 × 10^13'
  },
  {
    d_ps: 'Multiply the time by 8.64 × 10^19'
  },
  {
    d_min: 'Multiply the time by 1,440'
  },
  {
    d_h: 'Multiply the time by 24'
  },
  {
    d_w: 'Divide the time by 7'
  },
  {
    d_mon: 'Divide the time by 30.44'
  },
  {
    d_y: 'Divide the time by 365'
  },
  {
w_s: 'Multiply the time by 604,800'
},
{
w_ms: 'Multiply the time by 604,800,000'
},
{
w_us: 'Multiply the time by 604,800,000,000'
},
{
w_ns: 'Multiply the time by 604,800,000,000,000'
},
{
w_ps: 'Multiply the time by 6.048 × 10^17'
},

{
w_min: 'Multiply the time by 10,080'
},
{
w_h: 'Multiply the time by 168'
},
{
w_d: 'Multiply the time by 7'
},
{
w_mon: 'Divide the time by 4.348'
},
{
w_y: 'Divide the time by 52.143'
},
{
    mon_s: 'Multiply the time by 2,629,746'
  },
  {
    mon_ms: 'Multiply the time by 2,592,000,000'
  },
  {
    mon_us: 'Multiply the time by 2.592 × 10^12'
  },
  {
    mon_ns: 'Multiply the time by 2.592 × 10^15'
  },
  {
    mon_ps: 'Multiply the time by 2.592 × 10^18'
  },
  
  {
    mon_min: 'Multiply the time by 43,829.1'
  },
  {
    mon_h: 'Multiply the time by 730.484'
  },
  {
    mon_d: 'Multiply the time by 30.4368'
  },
  {
    mon_w: 'Multiply the time by 4.34812'
  },
  {
    mon_y: 'Divide the time by 12'
  },
  {
    y_s: 'Multiply the time by 3.155 × 10^7'
  },
  {
    y_ms: 'Multiply the time by 3.155 × 10^10'
  },
  {
    y_us: 'Multiply the time by 3.155 × 10^13'
  },
  {
    y_ns: 'Multiply the time by 3.155 x 10^16'
  },
  {
    y_ps: 'Multiply the time by 3.155 x 10^19'
  },
  {
    y_min: 'Multiply the time by 525,960'
  },
  {
    y_h: 'Multiply the time by 8,766'
  },
  {
    y_d: 'Multiply the time by 365.25'
  },
  {
    y_w: 'Multiply the time by 52.18'
  },
  {
    y_mon: 'Multiply the time by 12'
  },

]

const unitstime = [
	'Millisecond',
	'Microsecond',
	'Nanosecond',
	'Picosecond',
	'Minute',
	'Hour',
	'Day',
	'Week',
	'Month',
	'Year',
];

for (let i = 0; i < unitstime.length; i++) {
	let option6 = ` <option value=${unitstime[i]}>${unitstime[i]}</option>`;
	selectElem6[6].firstElementChild.insertAdjacentHTML('afterend', option6);	
}
for (let i = 0; i < unitstime.length; i++) {
	let option6 = ` <option value=${unitstime[i]}>${unitstime[i]}</option>`;
	selectElem6[7].firstElementChild.insertAdjacentHTML('afterend', option6);	
}
function convertUnits6 (){
if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Second')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Millisecond')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Microsecond')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Nanosecond')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Picosecond')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Minute')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Hour')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Day') && (convertTo6.value === 'Day')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Week')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Month')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Year')) {
result6.value = time.value;
formula6.textContent = hints6[0].sameUnit;
}
if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Millisecond')) {
result6.value = time.value * 1000;
formula6.textContent = hints6[1].s_ms;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Microsecond')) {
result6.value = time.value * 1000000;
formula6.textContent = hints6[2].s_us;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Nanosecond')) {
result6.value = time.value * 1000000000;
formula6.textContent = hints6[3].s_ns;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Picosecond')) {
result6.value = time.value * 1000000000000;
formula6.textContent = hints6[4].s_ps;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Minute')) {
result6.value = time.value * 0.0166666667;
formula6.textContent = hints6[5].s_min;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Hour')) {
result6.value = time.value * 0.0002777778;
formula6.textContent = hints6[6].s_h;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Day')) {
result6.value = time.value* 0.0000115741;
formula6.textContent = hints6[7].s_d;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Week')) {
result6.value = time.value * 0.0000016534 ;
formula6.textContent = hints6[8].s_w;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Month')) {
result6.value = time.value * 3.802570537E-7 ;
formula6.textContent = hints6[9].s_mon;
} else if ((convertFrom6.value === 'Second') && (convertTo6.value === 'Year')) {
result6.value = time.value * 3.168808781E-8;
formula6.textContent = hints6[10].s_y;
}
if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Second')) {
  result6.value = time.value / 1000;
  formula6.textContent = hints6[11].ms_s;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 1000;
  formula6.textContent = hints6[12].ms_us;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 1000000;
  formula6.textContent = hints6[13].ms_ns;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 1000000000;
  formula6.textContent = hints6[14].ms_ps;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Minute')) {
  result6.value = time.value * 0.0000166667;
  formula6.textContent = hints6[15].ms_min;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Hour')) {
  result6.value = time.value * 0.0000002778;
  formula6.textContent = hints6[16].ms_h;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 0.0000000116;
  formula6.textContent = hints6[17].ms_d;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Week')) {
  result6.value = time.value * 0.0000000017;
  formula6.textContent = hints6[18].ms_w;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Month')) {
  result6.value = time.value * 0.0000000004;
  formula6.textContent = hints6[19].ms_mon;
} else if ((convertFrom6.value === 'Millisecond') && (convertTo6.value === 'Year')) {
  result6.value = time.value * 0.00000000003;
  formula6.textContent = hints6[20].ms_y;
}
if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Second')) {
result6.value = time.value / 1000000;
formula6.textContent = hints6[21].us_s;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Millisecond')) {
result6.value = time.value / 1000;
formula6.textContent = hints6[22].us_ms;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Nanosecond')) {
result6.value = time.value * 1000;
formula6.textContent = hints6[23].us_ns;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Picosecond')) {
result6.value = time.value * 1000000;
formula6.textContent = hints6[24].us_ps;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Minute')) {
result6.value = time.value * 0.0000166667;
formula6.textContent = hints6[25].us_min;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Hour')) {
result6.value = time.value * 2.7777777778e-7;
formula6.textContent = hints6[26].us_h;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Day')) {
result6.value = time.value * 1.1574074074e-8;
formula6.textContent = hints6[27].us_d;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Week')) {
result6.value = time.value * 1.6534391534e-9;
formula6.textContent = hints6[28].us_w;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Month')) {
result6.value = time.value * 3.8051750381e-10;
formula6.textContent = hints6[29].us_mon;
} else if ((convertFrom6.value === 'Microsecond') && (convertTo6.value === 'Year')) {
result6.value = time.value * 3.1709791984e-11;
formula6.textContent = hints6[30].us_y;
}
	
if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Second')) {
result6.value = time.value * 0.000000001;
formula6.textContent = hints6[31].ns_s;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Microsecond')) {
result6.value = time.value * 0.001;
formula6.textContent = hints6[32].ns_us;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Millisecond')) {
result6.value = time.value * 0.000001;
formula6.textContent = hints6[33].ns_ms;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Picosecond')) {
result6.value = time.value * 1000;
formula6.textContent = hints6[34].ns_ps;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Minute')) {
result6.value = time.value * 1.66666667e-11;
formula6.textContent = hints6[35].ns_min;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Hour')) {
result6.value = time.value * 2.77777778e-13;
formula6.textContent = hints6[36].ns_h;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Day')) {
result6.value = time.value * 1.15740741e-14;
formula6.textContent = hints6[37].ns_d;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Week')) {
result6.value = time.value * 1.65343915e-15;
formula6.textContent = hints6[38].ns_w;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Month')) {
result6.value = time.value * 3.80517504e-16;
formula6.textContent = hints6[39].ns_mon;
} else if ((convertFrom6.value === 'Nanosecond') && (convertTo6.value === 'Year')) {
result6.value = time.value * 3.16880878e-17;
formula6.textContent = hints6[40].ns_y;
}
if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Second')) {
    result6.value = time.value * 1e-12;
    formula6.textContent = hints6[41].ps_s;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Millisecond')) {
    result6.value = time.value * 1e-9;
    formula6.textContent = hints6[42].ps_ms;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Microsecond')) {
    result6.value = time.value * 1e-6;
    formula6.textContent = hints6[43].ps_us;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Nanosecond')) {
    result6.value = time.value * 1e-3;
    formula6.textContent = hints6[44].ps_ns;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Minute')) {
    result6.value = time.value * 1.66666667e-14;
    formula6.textContent = hints6[45].ps_min;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Hour')) {
    result6.value = time.value * 2.77777778e-16;
    formula6.textContent = hints6[46].ps_h;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Day')) {
    result6.value = time.value * 1.15740741e-17;
    formula6.textContent = hints6[47].ps_d;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Week')) {
    result6.value = time.value * 1.65343915e-18;
    formula6.textContent = hints6[48].ps_w;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Month')) {
    result6.value = time.value * 3.80257054e-19;
    formula6.textContent = hints6[49].ps_mon;
} else if ((convertFrom6.value === 'Picosecond') && (convertTo6.value === 'Year')) {
    result6.value = time.value * 3.16880878e-20;
    formula6.textContent = hints6[50].ps_y;
}
if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Second')) {
  result6.value = time.value * 60;
  formula6.textContent = hints6[51].min_s;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Millisecond')) {
  result6.value = time.value * 60000;
  formula6.textContent = hints6[52].min_ms;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 60000000;
  formula6.textContent = hints6[53].min_us;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 60000000000;
  formula6.textContent = hints6[54].min_ns;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 60000000000000;
  formula6.textContent = hints6[55].min_ps;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Hour')) {
  result6.value = time.value * 0.0166666667;
  formula6.textContent = hints6[56].min_h;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 0.0006944444;
  formula6.textContent = hints6[57].min_d;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Week')) {
  result6.value = time.value * 0.0000992063;
  formula6.textContent = hints6[58].min_w;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Month')) {
  result6.value = time.value * 0.0000228311;
  formula6.textContent = hints6[59].min_mon;
} else if ((convertFrom6.value === 'Minute') && (convertTo6.value === 'Year')) {
  result6.value = time.value * 0.0000019026;
  formula6.textContent = hints6[60].min_y;
}
if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Second')) {
  result6.value = time.value * 3600;
  formula6.textContent = hints6[61].h_s;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Millisecond')) {
  result6.value = time.value * 3600000;
  formula6.textContent = hints6[62].h_ms;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 3600000000;
  formula6.textContent = hints6[63].h_us;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 3600000000000;
  formula6.textContent = hints6[64].h_ns;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 3.6E+15;
  formula6.textContent = hints6[65].h_ps;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Minute')) {
  result6.value = time.value * 60;
  formula6.textContent = hints6[66].h_min;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 0.0416666667;
  formula6.textContent = hints6[67].h_d;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Week')) {
  result6.value = time.value * 0.00595238095;
  formula6.textContent = hints6[68].h_w;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Month')) {
  result6.value = time.value * 0.00136986301;
  formula6.textContent = hints6[69].h_mon;
} else if ((convertFrom6.value === 'Hour') && (convertTo6.value === 'Year')) {
  result6.value = time.value * 0.00011415525;
  formula6.textContent = hints6[70].h_y;
}
if (convertFrom6.value === 'Day' && convertTo6.value === 'Second') {
  result6.value = time.value * 86400;
  formula6.textContent = hints6[71].d_s;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Millisecond') {
  result6.value = time.value * 86400000;
  formula6.textContent = hints6[72].d_ms;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Microsecond') {
  result6.value = time.value * 86400000000;
  formula6.textContent = hints6[73].d_us;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Nanosecond') {
  result6.value = time.value * 86400000000000;
  formula6.textContent = hints6[74].d_ns;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Picosecond') {
  result6.value = time.value * 86400000000000000;
  formula6.textContent = hints6[75].d_ps;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Minute') {
  result6.value = time.value * 1440;
  formula6.textContent = hints6[76].d_min;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Hour') {
  result6.value = time.value * 24;
  formula6.textContent = hints6[77].d_h;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Week') {
  result6.value = time.value * 0.1428571429;
  formula6.textContent = hints6[78].d_w;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Month') {
  result6.value = time.value * 0.0328542094;
  formula6.textContent = hints6[79].d_mon;
} else if (convertFrom6.value === 'Day' && convertTo6.value === 'Year') {
  result6.value = time.value * 0.002739726;
  formula6.textContent = hints6[80].d_y;
}
if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Second')) {
  result6.value = time.value * 604800;
  formula6.textContent = hints6[81].w_s;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Millisecond')) {
  result6.value = time.value * 604800000;
  formula6.textContent = hints6[82].w_ms;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 604800000000;
  formula6.textContent = hints6[83].w_us;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 604800000000000;
  formula6.textContent = hints6[84].w_ns;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 604800000000000000;
  formula6.textContent = hints6[85].w_ps;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Minute')) {
  result6.value = time.value * 10080;
  formula6.textContent = hints6[86].w_min;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Hour')) {
  result6.value = time.value * 168;
  formula6.textContent = hints6[87].w_h;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 7;
  formula6.textContent = hints6[88].w_d;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Month')) {
  result6.value = time.value * 0.229984585;
  formula6.textContent = hints6[89].w_mon;
} else if ((convertFrom6.value === 'Week') && (convertTo6.value === 'Year')) {
  result6.value = time.value * 0.0041666667;
  formula6.textContent = hints6[90].w_y;
}
if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Second')) {
  result6.value = time.value * 2.628e+6;
  formula6.textContent = hints6[91].mon_s;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Millisecond')) {
  result6.value = time.value * 2.628e+9;
  formula6.textContent = hints6[92].mon_ms;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 2.628e+9;
  formula6.textContent = hints6[93].mon_us;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 2.628e+12;
  formula6.textContent = hints6[94].mon_ns;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 2.628e+15;
  formula6.textContent = hints6[95].mon_ps;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Minute')) {
  result6.value = time.value * 43829.1;
  formula6.textContent = hints6[96].mon_min;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Hour')) {
  result6.value = time.value * 730.484;
  formula6.textContent = hints6[97].mon_h;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 30.4368;
  formula6.textContent = hints6[98].mon_d;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Week')) {
  result6.value = time.value * 4.34812;
  formula6.textContent = hints6[99].mon_w;
} else if ((convertFrom6.value === 'Month') && (convertTo6.value === 'Year')) {
  result6.value = time.value * 0.0833333;
  formula6.textContent = hints6[100].mon_y;
}
if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Second')) {
  result6.value = time.value * 31556952;
  formula6.textContent = hints6[101].y_s;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Millisecond')) {
  result6.value = time.value * 31556952000;
  formula6.textContent = hints6[102].y_ms;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Microsecond')) {
  result6.value = time.value * 31556952000000;
  formula6.textContent = hints6[103].y_us;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Nanosecond')) {
  result6.value = time.value * 31556952000000000;
  formula6.textContent = hints6[104].y_ns;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Picosecond')) {
  result6.value = time.value * 31556952000000000000;
  formula6.textContent = hints6[105].y_ps;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Minute')) {
  result6.value = time.value * 525949.2;
  formula6.textContent = hints6[106].y_min;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Hour')) {
  result6.value = time.value * 8765.82;
  formula6.textContent = hints6[107].y_h;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Day')) {
  result6.value = time.value * 365.2425;
  formula6.textContent = hints6[108].y_d;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Week')) {
  result6.value = time.value * 52.1775;
  formula6.textContent = hints6[109].y_w;
} else if ((convertFrom6.value === 'Year') && (convertTo6.value === 'Month')) {
  result6.value = time.value * 12;
  formula6.textContent = hints6[110].y_mon;
}
}

convertFrom6.addEventListener('change',convertUnits6);
convertTo6.addEventListener('change',convertUnits6);
time.addEventListener('input',convertUnits6);