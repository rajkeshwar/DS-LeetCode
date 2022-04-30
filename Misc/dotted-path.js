

function getValue(data, path, defaultValue) {
  let i = 0, j = 1;
  let index, key;

  while (++j < path.length) {
    if (j + 1 === path.length) {
      key = path.slice(i, j + 1);
      data = data[key];
    }

    if (path.charAt(j) === '.') {
      key = path.slice(i, j);
      data = data[key];
      i = j + 1;
      j = j + 1;
    }

    if (path.charAt(j) === '[') {
      key = path.slice(i, j);
      i = j;
      while (path.charAt(j) !== ']') {
        j++
      }

      index = Number(path.slice(i + 1, j));
      data = data[key][index]

      i = j + 2;
      j = j + 2;
    }

    if (data === undefined) {
      data = defaultValue;
      break;
    }
  }

  return data;
}

var data = {
  users: [
    { name: 'Raj', id: 10 },
    { name: 'Sumit', id: 11 },
    { name: 'Mohan', id: 12 },
  ]
}


const res = getValue(data, 'users[1]', 'Nahi mila');

console.log(res)