function arrayPlusArray(arr1, arr2) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    result2 += arr2[j];
  }
  return result1 + result2;
}
