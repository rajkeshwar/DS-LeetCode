

function getValue(data, path, defaultValue) {
  const keys = path.split(/\./);
  for (let token of keys) {
    const [key, indexStr] = token.split(/\[/);
    data = data[key];

    if (indexStr !== undefined) {
      data = data[Number(indexStr.slice(0, -1))]
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

const res = getValue(data, 'users[2].asdf', 'Nahi mila');

console.log(res)