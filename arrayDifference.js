// // You’ve got two arrays with numbers. Your task is to
// // get unique values out of each array.
// // Then you need to create an array with those unique values.

// my thought process...
// merge the array and sort it
// the run map function and if the index-1 && index+1 equals current index skip else push into array

const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];
function diffArrayInt(array1, array2) {
  // 1. Create new array
  const newArr = [];
  // 2. Combine the two array and sort
  const orderedArr = [...array1, ...array2].sort();
  // 3. Loop through the ordered Array
  orderedArr.map((item, index) => {
  // 4. If given element is not repeated, it's unique
  if (item !== orderedArr[index - 1] && item !== orderedArr[index + 1]) {
  // 5. Add unique element to the new array
  newArr.push(item); }
  console.log(newArr)
  })
}

diffArrayInt(arrayOne, arrayTwo)
