var removeElement = function(nums, val) {
  let length = nums.length;
  let pointer = 0;
  while (pointer < length) {
    if (val == nums[pointer]) {
      nums.splice(pointer, 1);
    }
    if (val !== nums[pointer]) {
      pointer++;
    }
  }
  return nums.length;
};
