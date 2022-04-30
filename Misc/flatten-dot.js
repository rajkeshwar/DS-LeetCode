function flattenPath(key, value, result = {}) {

  if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
    result[key.join('.')] = value;
    return;
  }

  if (Object.prototype.toString.call(value) === '[object Array]') {
    for (let i = 0; i < value.length; i++) {
      flattenPath([`${key}[${i}]`], value[i], result);
    }
  }

  if (Object.prototype.toString.call(value) === '[object Object]') {
    for (let prop in value) {
      flattenPath([...key, prop], value[prop], result);
    }
  }

  return result;
}

var data = {
  city: 'Hyderabad',
  users: [
    { name: 'Raj', id: 10 },
    { name: 'Sumit', id: 11 },
    { name: 'Mohan', id: 12 },
  ]
}

const res = flattenPath([], data);

console.log(res)