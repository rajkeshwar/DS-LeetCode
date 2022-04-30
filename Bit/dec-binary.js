

function decToBinary1(n) {
  let binaryNum = '';

  while (n > 0) {
    binaryNum = n % 2 + binaryNum;
    n = Math.floor(n / 2);
  }

  return binaryNum;
}

const result1 = decToBinary1(123);
console.log(result1)


function decToBinary2(n) {

  let result = '';

  for (let i = 31; i >= 0; i--) {
    let k = n >> i;

    // k & 1 returns 1 or 0 as reminder when divided by 2
    if ((k & 1 ) > 0) {
      result += 1
    } else {
      result += 0
    }
  }

  return result;
}


const result2 = decToBinary2(123);
console.log(result2)


function decToBinary3(n) {

  let result = '';

  for (let i = 31; i >= 0; i--) {
    let k = n >> i;
    result += k % 2;
  }

  return result;
}


const result3 = decToBinary3(123);
console.log(result3)
