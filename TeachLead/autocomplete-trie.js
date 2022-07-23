
// https://www.youtube.com/watch?v=QGVCnjXmrNg

class Node {
  constructor(children, isWord) {
    this.children = children
    this.isWord = isWord;
  }
}

class Solution {
  
  build(words) {
    this.trie = new Node({}, false)

    for (let word of words) {
      let current = this.trie;
      for (let char of word.split('')) {
        if (!(char in current.children)) {
          current.children[char] = new Node({}, false)
        }
        current = current.children[char]
      }
      current.isWord = true
    }
  }

  autocomplete(word) {
    let current = this.trie
    console.log(this.trie, word)
    for (let char of word.split('')) {
      if (!(char in current.children)) {
        return []
      }
      current = current.children[char]
    }
    return this._findWordsForNode(current, word)
  }

  _findWordsForNode(node, prefix) {
    let words = []
    if (node.isWord) {
      words.push(prefix)
    }

    for (let char in node.children) {
      words.push(...this._findWordsForNode(node.children[char], prefix + char))
    }

    return words;
  }
}

const solution = new Solution()
solution.build(['dog', 'dark', 'cat', 'door', 'dodge'])
console.log(solution.autocomplete('do'))