

function deflatten(data, result = {}) {
  for (let prop in data) {
    const tokens = prop.split(/\./);
    const keys = [];

    for (let i = 0; i < tokens.length; i++) {
      const [key, indexStr] = tokens[i].split(/\[/);

      keys.push(key);

      if (indexStr !== undefined) {
        let index = Number(indexStr.slice(0, -1));
        keys.push(index);
      }
    }

    console.log(keys)

    let currObj = result;
    for (let k of keys) {
      currObj = currObj[k]
    }
    
  }

  return result;
}


var data = {
  city: 'Hyderabad',
  company: { title: 'CTS', loc: 'Nurnberg' },
  'users[0].name': 'Raj',
  'users[0].id': 10,
  'users[1].name': 'Sumit',
  'users[1].id': 11,
  'users[2].name': 'Mohan',
  'users[2].id': 12
};

const res = deflatten(data);
console.log(res);