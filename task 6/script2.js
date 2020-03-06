const longestPalindrome = function(string){
  const length = string.length;
  let result = "";


  const centeredPalindrome = function(left, right){
   
    while(left>= 0 && right < length&& string[left] === string[right]){
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (var i = 0; i < string.length; i++) {

    const evenPal = centeredPalindrome(i, i);

    const oddPal = centeredPalindrome(i-1, i);

    if(oddPal.length > result.length){
      result = oddPal;
    }

    if(evenPal.length > result.length){
      result = evenPal;
    }
  }
  return result;
};

console.log(longestPalindrome("gghggjjjjkjjjjhhhghhh")); 