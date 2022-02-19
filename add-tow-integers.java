class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        int carry = 0;
        int sum = 0;
        int len = num.length - 1;
        List<Integer> list = new ArrayList<>();
        
        while (len >= 0 || carry != 0 || k != 0) {
            
            sum = (len >= 0 ? num[len] : 0) + (k % 10) + carry;
            carry = sum / 10;
            sum = sum % 10;
            
            list.add(sum);
            k = k / 10;
            len--;
        }
        
        Collections.reverse(list);
            
        return list;
    }
}