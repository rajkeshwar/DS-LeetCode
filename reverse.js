

var reverse = function(x) {

  const result = +String(Math.abs(x)).split('').reverse().join('');

  if (result > 0x7FFFFFFF) return 0;
  
  return x < 0 ? -result : result;
};

reverse(-123)