const removeFromArray = function(array, ...args) {
//   const newArray = [];
//   array.forEach((exArray) => {
//     if (!args.includes(exArray) {
//       newArray.push(exArray);
//     }
//   });
//   return newArray;
return array.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
