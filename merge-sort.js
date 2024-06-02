// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);
  // Recursively sort the left half
  let sortedMergeLeft = mergeSort(leftArray);
  // Recursively sort the right half
  let sortedMergeRight = mergeSort(rightArray);

  // Merge the halves together and return
  return merge(sortedMergeLeft, sortedMergeRight);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = [];

  // Point to the first value of each array
  let liftIndex = 0;
  let rightIndex = 0;
  // While there are still values in each array...
  while (liftIndex < arrA.length && rightIndex < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[liftIndex] < arrB[rightIndex]) {
      result.push(arrA[liftIndex]);
      liftIndex++;
    } else {
      result.push(arrB[rightIndex]);
      rightIndex++;
    }

  }

  // Return the return array.
  return result.concat(arrA.slice(liftIndex)).concat(arrB.slice(rightIndex));

}

module.exports = [merge, mergeSort];
