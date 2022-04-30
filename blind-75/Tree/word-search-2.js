/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 */

var TrieNode = function () {
  this.children = {}
  this.isWord = false;
}

TrieNode.prototype.addWord = function (word) {
  let curr = this;

  for (let i = 0; i < word.length; i++) {
    const c = word.charAt(i);
    if (!(c in curr.children)) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.isWord = true;
}

var findWords = function (board, words) {
  const ROWS = board.length;
  const COLS = board[0].length;

  const res = new Set();
  const visited = new Set();

  function dfs(r, c, node, word) {
    const key = r + ',' + c;
    if (r < 0 || r === ROWS
      || c < 0 || c === COLS
      || visited.has(key)
      || !(board[r][c] in node.children)
    ) return;

    visited.add(key);
    node = node.children[board[r][c]]
    word += board[r][c]
    if (node.isWord) res.add(word);

    dfs(r + 1, c, node, word)
    dfs(r - 1, c, node, word)
    dfs(r, c + 1, node, word)
    dfs(r, c - 1, node, word)

    visited.delete(key);
  }

  const root = new TrieNode();

  for (let word of words) {
    root.addWord(word);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dfs(r, c, root, '');
    }
  }

  return [...res];
};