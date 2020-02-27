function isPalindrome(x) {
  let checkPalin = x.toUpperCase();
  let reversePalin = x
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
  if (checkPalin === reversePalin) {
    return true;
  } else {
    return false;
  }
}
