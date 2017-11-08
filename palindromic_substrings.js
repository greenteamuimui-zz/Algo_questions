var countSubstrings = function(s) {
  let length = s.length;
  let count = 0;
  let centers = 2*length - 1;
  for (let i = 0;  i < centers+1; i++){
    let left = Math.floor(i/2);
    let right = left + Math.floor(i % 2);
    while(left >= 0 && right < length && s[left]===s[right]){
      count++;
      left--;
      right++;
    }
  }
  return count;
};

// countSubstrings("abc") 3 "a","b","c"
// countSubstrings("aaa") 6 "a',"a","a", "aa","aa","aaa"
