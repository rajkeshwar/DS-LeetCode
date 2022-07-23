var validIPAddress = function (queryIP) {

  // Maybe IPv4 address
  if (queryIP.length >= 7 && queryIP.length <= 15) {
    let tokens = queryIP.split(/\./);
    for (let token of tokens) {
      if (/\w/.test(token) || token.length > 1 && token.slice(0, 1) === '0') {
        return 'Neither';
      }

      try {
        let value = Number(token);
        if (value < 0 || value > 255) {
          return 'Neither';
        }
      } catch (e) { return 'Neither'; }
    }

    return 'IPv4';
  }

  // Maybe IPv6 address
  if (queryIP.length >= 15 && queryIP.length <= 39) {
    let tokens = queryIP.split(/\:/);
    for (let token of tokens) {
      if (!/^[A-Fa-f0-9]{1,4}$/.test(token)) {
        return 'Neither';
      }
    }
    return 'IPv6';
  }

  return 'Neither';
};

console.log(validIPAddress("1e1.4.5.6"))