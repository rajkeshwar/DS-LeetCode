/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
  public List<Integer> postorder(Node root) {
      LinkedList<Integer> res = new LinkedList<>();
      LinkedList<Node> stack = new LinkedList<>();
      
      if (root == null) return res;
      
      stack.add(root);
      
      while (!stack.isEmpty()) {
          Node node = stack.pollLast();
          res.addFirst(node.val);
          
          for (Node child: node.children) {
              stack.add(child);
          }
      }
      
      return res;
  }
}