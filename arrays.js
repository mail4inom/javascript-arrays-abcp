var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(arr, element){
   arr = [element, ...arr]
   return arr;
}
function destructivelyAddElementToBeginningOfArray(arr, element){
 arr.unshift(element)
 return arr;
}
