function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

var Trie = function () {
  this.root = new TrieNode();
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  let curr = this.root;

  for (let c of word) {
    if (!(c in curr.children)) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.endOfWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  let curr = this.head;

  for (let c of word) {
    if (!(c in curr.children)) {
      return false;
    }
    curr = curr.children[c];
  }
  return curr.endOfWord;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  let curr = this.head;

  for (let c of word) {
    if (!(c in curr.children)) {
      return false;
    }
    curr = curr.children[c];
  }
  return true;
};


const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True