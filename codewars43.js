var findTheDifference = function(s, t) {
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();
  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i] !== sArr[i]) {
      return tArr[i];
    }
  }
};
