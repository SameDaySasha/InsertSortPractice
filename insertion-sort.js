// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let copy = arr.slice();
  let sorted = [];

  while(copy.length){
    console.log(sorted.join(','));

    let curr = copy.pop();
    sorted.push(null);
    let breakpoint = 0;

    for(let i=sorted.length-1; i>0; i--){
      if(sorted[i - 1] < curr){
        breakpoint = i;
        break;
      } else {
        sorted[i] = sorted[i-1];
      }
    }
    sorted[breakpoint] = curr;
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  //way 1:
  // let pointer = 1;

  // while(pointer < arr.length) {
  //   console.log(arr.join(','));
  //   let val = arr[pointer];
  //   let i = pointer;

  //   while(i>0) {
  //     if(arr[i-1] < val){
  //       break;
  //     } else {
  //       arr[i] = arr[i-1];
  //       i--;
  //     }
  //   }
  //   arr[i] = val;
  //   pointer++;

  // }
  // return arr;
  //way2
  for(let i=1; i < arr.length; i++) {
    console.log(arr.join(','));
    for(let j=i; j >0; j--){
      if(arr[j] < arr[j-1]){
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      }
    }
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
