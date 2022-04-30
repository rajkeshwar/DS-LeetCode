var TrieNode = function () {
  this.children = {}
  this.word = false;
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word.charAt(i);
    if (!(c in curr.children)) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.word = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {

  function dfs(j, curr) {
    for (let i = j; i < word.length; i++) {
      let c = word.charAt(i);
      if (c === '.') {
        for (let child of Object.values(curr.children)) {
          if (dfs(i + 1, child)) return true;
        }
        return false;
      } else {
        if (!(c in curr.children)) {
          return false;
        }
        curr = curr.children[c];
      }
    }
    return curr.word;
  }
  return dfs(0, this.root);
};