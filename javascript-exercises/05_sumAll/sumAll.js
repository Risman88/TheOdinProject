const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 > num2) {
        const num3 = num1;
        num1 = num2;
        num2 = num3;
      }
let finalNum = 0;
for (let x = num1; x <= num2; x++) {
    finalNum += x;
  }
  return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
