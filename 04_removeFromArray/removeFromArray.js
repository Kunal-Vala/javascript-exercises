// const removeFromArray = function(arr,...values) {
//     let newArray = [];

//     arr.forEach((item) => {
//         if(!values.includes(item)){
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };

const removeFromArray = function(array, ...args) {
  return array.filter(val => !args.includes(val))
};


// Do not edit below this line
module.exports = removeFromArray;
