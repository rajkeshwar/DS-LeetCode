function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.');

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      const [key, indexStr] = part.split(/\[/);

      target = target[key] = target[key] || (indexStr ? [] : {});

      if (indexStr !== undefined) {
        let index = Number(indexStr.slice(0, -1));
        target = target[index] = target[index] || {};
      }
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath]
  }

  return result;
}


var data = {
  'users[0].name': 'Raj',
  'users[0].id': 10,
  'users[1].name': 'Sumit',
  'users[1].id': 11,
  'users[2].name': 'Mohan',
  'users[2].id': 12
};

const res = deepen(data);
console.log(res);