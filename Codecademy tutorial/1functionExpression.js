//returns true if day is Wednesday
const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
      return true;
  } else {
    return false;
  }
  
};

console.log( plantNeedsWater('Tuesday') );//returns false
console.log( plantNeedsWater('Wednesday') );//returns true