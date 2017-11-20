var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  let max = 0;
  let str = {};
  while (i< s.length && j < s.length) {
    if (!str[s.charAt(j)] || str[s.charAt(j)] !== 1) {
        str[s.charAt(j)] = 1;
        j = j + 1;
        max = Math.max(max, j - i);
    } else {
        str[s.charAt(i)] = 0
        i = i + 1;
    }
      console.log(str);
  }
  return max
};

lengthOfLongestSubstring("abcabcbb") //3
lengthOfLongestSubstring("pwwkew") //3