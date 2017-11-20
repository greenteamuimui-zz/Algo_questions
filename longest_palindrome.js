var longestPalindrome = function(s) {
    let result = "";
    let currentIndex = 0;
    for (let i = 0; i < s.length; i++){
        if(isPalindrome(s,i-currentIndex-1, i)){
            result = s.slice(i-currentIndex-1, i+1);
            currentIndex = currentIndex+2;
        } else if(isPalindrome(s,i-currentIndex, i)){
            result = s.slice(i-currentIndex, i+1);
            currentIndex = currentIndex+1;
        }
    }
    return result;
};

const isPalindrome = function(string, begin, end) {
    if (begin < 0) return false;
  while(begin < end) {
      if (string.charAt(begin) !== string.charAt(end)) return false;
      begin++;
      end--;
  }
    return true;
};

longestPalindrome("babad");