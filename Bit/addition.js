

function add(a, b) {

  let sum, carry;

  while (b !== 0) {
    let carry = a & b;

    a = a ^ b;

    b = carry << 1;
  }

  return a;
}


console.log(add(10, 2))