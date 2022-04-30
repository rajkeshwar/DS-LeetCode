var productExceptSelf = function (nums) {
  const N = nums.length;
  const leftProducts = Array(N);
  const rightProducts = Array(N);
  const result = Array(N);

  leftProducts[0] = 1;
  rightProducts[N - 1] = 1;

  for (let i = 1; i < N; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  for (let j = N - 2; j >= 0; j--) {
    rightProducts[j] = rightProducts[j + 1] * nums[j + 1];
  }

  for (let k = 0; k < N; k++) {
    result[k] = leftProducts[k] * rightProducts[k];
  }

  return result;
};

const ret = productExceptSelf([1, 2, 3, 4]);
console.log(ret);