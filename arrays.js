var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(arr, element){
   arr = [element, ...arr]
   return arr;
}
function destructivelyAddElementToBeginningOfArray(arr, element){
 arr.unshift(element)
 return arr;
}
function addElementToEndOfArray(arr, element){
  return [...arr, element]
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array;
}
function accessElementInArray(array, index){
  return array[index]
}
