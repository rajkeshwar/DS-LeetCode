# 🧠 1. What Is Dynamic Programming?

**Dynamic Programming (DP)** is a way to solve complex problems by **breaking them into smaller overlapping subproblems**, solving each once, and **reusing their results**.

In short:

> **DP = Divide & Conquer + Memoization**

---

## 💡 Example Analogy

Suppose you climb stairs:
You can take **1 step or 2 steps** at a time.
How many ways can you reach the top if there are `n` steps?

If you already solved for smaller steps, you don’t want to recompute them.

That’s **DP** in essence.

---

# ⚙️ 2. Two Core Properties of DP Problems

| Property                    | Meaning                                                             |
| --------------------------- | ------------------------------------------------------------------- |
| **Overlapping Subproblems** | You solve the same subproblem multiple times                        |
| **Optimal Substructure**    | The final answer can be built from optimal solutions to subproblems |

If both hold true → it’s a good DP candidate.

---

# 🧩 3. Fibonacci Example (Classic DP Starter)

### Problem:

Compute the `n`th Fibonacci number:

```
fib(n) = fib(n-1) + fib(n-2)
```

---

## ❌ Naive Recursive Approach (Exponential)

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

* Time complexity: **O(2ⁿ)** — many repeated calls.
* Example: `fib(5)` recomputes `fib(3)` and `fib(2)` multiple times.

---

## ✅ Solution 1: Memoization (Top-Down DP)

We **store** results of subproblems to avoid recomputation.

```python
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
```

✅ Time: O(n)
✅ Space: O(n) recursion + memo

---

## ✅ Solution 2: Tabulation (Bottom-Up DP)

We **build from base cases up to n** iteratively.

```python
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

✅ Time: O(n)
✅ Space: O(n)

---

## ✅ Solution 3: Space Optimization

Since we only need the last two numbers:

```python
def fib_opt(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

✅ Time: O(n)
✅ Space: O(1)

---

# 🔧 4. DP Design Pattern (5-Step Framework)

Whenever you face a DP problem, follow this mental checklist:

| Step | Description                                             |
| ---- | ------------------------------------------------------- |
| 1️⃣  | Define subproblem (`dp[i]` means what?)                 |
| 2️⃣  | Write recurrence relation                               |
| 3️⃣  | Identify base cases                                     |
| 4️⃣  | Choose top-down (memoization) or bottom-up (tabulation) |
| 5️⃣  | Optimize space if possible                              |

---

# 📘 5. Example: Climbing Stairs Problem

> You can climb 1 or 2 steps at a time. How many distinct ways to reach the top?

---

## Recursive relation

```
ways(n) = ways(n-1) + ways(n-2)
```

Same as Fibonacci.

---

### ✅ Bottom-Up DP

```python
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

---

# 💰 6. Example: Coin Change Problem (Classic DP)

> Given coins `[1, 2, 5]` and amount = 11
> Find **minimum number of coins** to make up that amount.

---

### Recurrence:

```
dp[x] = min(dp[x - coin] + 1) for each coin if x >= coin
```

---

### ✅ Implementation

```python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for c in coins:
            if i - c >= 0:
                dp[i] = min(dp[i], dp[i - c] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1
```

**Example:**

```python
print(coin_change([1, 2, 5], 11))  # Output: 3 (5+5+1)
```

---

# 🔍 7. Common DP Problem Types

| Type                     | Example                                   | DP State      |
| ------------------------ | ----------------------------------------- | ------------- |
| 1. **1D DP**             | Fibonacci, Climbing Stairs                | `dp[i]`       |
| 2. **2D DP**             | Knapsack, Grid Path                       | `dp[i][j]`    |
| 3. **String DP**         | Edit Distance, Longest Common Subsequence | `dp[i][j]`    |
| 4. **Bitmask DP**        | Traveling Salesman                        | `dp[mask][i]` |
| 5. **State Compression** | Subset sums                               | bitmask       |

---

# 🧠 8. DP Mindset (What to Look For)

✅ Repeated subproblems
✅ Optimal substructure (e.g., min, max, sum, count)
✅ Smallest unit → Base case
✅ Build from base → Recurrence

If you see “**count**, **min**, **max**, or **ways**” → likely DP!

---

# ⚡ 9. Progression Path (How to Master It)

### 📘 Level 1 – Basics

* Fibonacci
* Climbing Stairs
* House Robber
* Min Cost Climbing Stairs

### 📗 Level 2 – 2D DP

* Unique Paths
* Minimum Path Sum
* Longest Common Subsequence
* Edit Distance

### 📙 Level 3 – Advanced

* Knapsack variants
* Partition Equal Subset Sum
* Coin Change
* Palindromic Subsequence problems
* DP with bitmask or states (e.g., TSP)

---

# 🎯 10. Quick Recap

| Concept         | Example      | Approach                   |
| --------------- | ------------ | -------------------------- |
| Memoization     | Fibonacci    | Top-down recursion + cache |
| Tabulation      | Climb Stairs | Bottom-up iteration        |
| Space Optimized | Fib, Stairs  | Two variables              |
| 2D DP           | LCS, Grid    | 2D table iteration         |

---
