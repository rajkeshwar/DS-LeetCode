

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  let result = '';

  while (S.length > 0) {
    if (S.slice(0, 5) === 'minus') {
      result += '-';
      S = S.slice(5);
    }

    if (S.slice(0, 4) === 'plus') {
      result += '+';
      S = S.slice(4);
    }
  }

  return result;
}


var ret = solution('minusplusminus');
console.log(ret);