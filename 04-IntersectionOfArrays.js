function intersection(arr1, arr2) {
  let merged = arr1.concat(arr2); //merged two arrays
    console.log("All elements in one array:", merged);
  let combined = merged.sort((a, b) => a - b); // sort
  console.log("Sorted and combined:", combined);
  // Remove duplicates
  let noDuplicate = combined.filter((item, index) => {
    return combined.indexOf(item) === index;
  });
  console.log("Without duplicates:", noDuplicate);
  let result = [];
  for (let i = 0; i < noDuplicate.length; i++) {
    if (arr1.includes(noDuplicate[i]) && arr2.includes(noDuplicate[i])) {
        result.push(noDuplicate[i]);
  }
}
  return "Common elements:" +  result;
}

/* // Example 1 - with common elements
const arr1 = [1, 2, 2, 1, 3, 5, 7];
const arr2 = [2, 2, 3, 4, 5, 6];
console.log(intersection(arr1, arr2)); */

/* // Example 2 - without common elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(intersection(arr1, arr2)); */

// Example 3 - with all` common elements
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(intersection(arr1, arr2));

/* // Example 4 - with typical case of empty arrays
const arr1 = [];
const arr2 = [];
console.log(intersection(arr1, arr2)); */


