
/**
 * 989. Add to Array-Form of Integer
 * The array-form of an integer num is an array representing its digits in left to right order.
 * 
 * For example, for num = 1321, the array form is [1,3,2,1].
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 */

var addToArrayForm = function (num, k) {
  let carry = 0;
  let len = num.length - 1;

  while (len >= 0 || carry !== 0) {

    let sum = num[len] + k % 10 + carry;
    carry = Math.floor(sum / 10);

    sum = sum % 10;

    num[len] = sum;

    k = Math.floor(k / 10);
    len--;
  }

  return num;
};

addToArrayForm(
  [2, 7, 4], 181
)

