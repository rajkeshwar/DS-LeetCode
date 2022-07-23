const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

var intToRoman = function (num) {
  let ans = "", N = num;
  for (let i = 0; N > 0; i++)
    while (N >= val[i]) {
      ans += rom[i]
      N -= val[i]
    }
  return ans
};

const ret = intToRoman(2944)
console.log(ret)