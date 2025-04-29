const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const sumArr = arr.reduce((total,item) => total + item,0);
  return sumArr;
};

const multiply = function(arr) {
	const mulArr = arr.reduce((total,item) => total * item,1);
  return mulArr;
};

const power = function(a,b) {
  let ans = 1;
	for(let i = 1;i<= b;i++){
    ans = a*ans;
  }
  return ans;
};

const factorial = function(a) {
	let flag = 1;
  for(let i =1;i<= a;i++){
    flag = flag*i;
  }
  return flag;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
