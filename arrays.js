var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  return [element, ...array];
=======
  array.unshift(element);
  return array;
>>>>>>> f800627233ff51f0c9300707685c529c510ce08d
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element);
<<<<<<< HEAD
return array;
}

function addElementToEndOfArray(array, element) {
return [...array, element];
=======
console.log(array);
return;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
>>>>>>> f800627233ff51f0c9300707685c529c510ce08d
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
<<<<<<< HEAD
  return array;
}
function accessElementInArray(array, index) {
   return array[index];

=======
  console.log(array);
  return;
}

function accessElementInArray(array, index) {
  return array[index];
>>>>>>> f800627233ff51f0c9300707685c529c510ce08d
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

<<<<<<< HEAD


function removeElementFromBeginningOfArray(array){
  return array.slice(1);

=======
function removeElementFromEndOfArray(array){
  array.slice(1);
  return array;
>>>>>>> f800627233ff51f0c9300707685c529c510ce08d
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
<<<<<<< HEAD
  return array.slice(0, array.length -1);

=======
  array.slice(0, array.length -1);
  return array;
>>>>>>> f800627233ff51f0c9300707685c529c510ce08d
}
