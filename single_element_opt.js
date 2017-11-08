var singleNonDuplicate = function(nums) {
  let start = 0;
  let last = nums.length - 1;
  while(last > start){
    let mid = (start +last)/2;
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid+1]){
        start = mid + 2;
    } else if (nums[mid] === nums[mid-1]) {
        last = mid - 2 ;
    } else {
        return nums[mid];
    }
  }
  return nums[start];
};


singleNonDuplicate([1,2,2,3,3]);
