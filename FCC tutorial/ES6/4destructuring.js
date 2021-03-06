//1. destructuring assignement object property
/*
Use destructuring to obtain the average temperature for tomorrow 
from the input object AVG_TEMPERATURES, and assign value with key 
tomorrowto tempOfTomorrowin line.
*/

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    //tempOfTomorrow is assigned the value of  AVG_Temperatures.tomorrow
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


//2. ES6 can be used todestructure nested objects into variables.
/*
Use destructuring assignment to obtain maxof 
forecast.tomorrow and assign it to maxOfTomorrow
*/
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }//nested object
};
  
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow: { max: maxOfTomorrow}} = forecast;//destructuring
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


//3.1
/*
Use destructuring assignment to swap the values of a and b so that a
receives the value stored in b, and b receives the value stored in a
 */
let a = 8, b = 6;
(() => {
  "use strict";
   [b,a] = [a,b]
})();
console.log(a); // should be 6
console.log(b); // should be 8

//3.2
/*
A variable's value can be instantiated by destructuring
 separate from the variable's declaration.
*/
let c, d;//declaration
[c, d] = [1, 2];//instantiation
console.log(c); // 1
console.log(d); // 2

//3.2
/* 
A variable can be assigned a default, in the case that
the value unpacked from the array is undefined
*/
let e, f;
[e=5, f=7] = [1];
console.log(e); // 1
console.log(f); // 7

//4.
/*
Use destructuring assignment with the rest operator to perform 
an effective Array.prototype.slice() so that arr is a sub-array 
of the original array source with the first two elements omitted
*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  
  const [a,b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


//5.
/*
You can destructure the object in a function argument itself.
*/
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
  "use strict";    
   return function half( {max, min} ) {//only sends stats.max and stats.min
     return (max + min) / 2.0;
};
})();
  
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

//6.
/*Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables today and tomorrow the values of today
and tomorrow from the HIGH_TEMPERATURES object.*/
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow} = HIGH_TEMPERATURES;

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80
