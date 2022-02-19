var addStrings = function(num1, num2) {
  let carry = 0;
  let result = '';
  
  let i = num1.length;
  let j = num2.length;
  
  while (i >= 0 || j >= 0 || carry !== 0) {
      
      let ival = 0;
      let jval = 0;
      let sum = 0;
      
      if (i >= 0) {
          ival = Number(num1.charAt(i));
      }
      
      if (j >= 0) {
          jval = Number(num2.charAt(j));
      }
      
      sum = ival + jval + carry;
      carry = Math.floor(sum / 10);
      sum = sum % 10;
      
      result = sum + result;
      
      i--;
      j--;
  }
  
  return result;
};

addStrings('11', '123');