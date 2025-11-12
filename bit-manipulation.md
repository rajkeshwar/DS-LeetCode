## 🧠 1. What Is Bit Manipulation?

Every integer is represented in **binary** — a sequence of 0s and 1s (bits).
Bit manipulation means **performing operations directly on bits** using **bitwise operators**.

---

## ⚙️ 2. Core Bitwise Operators

| Operator | Name        | Example                       | Effect                      |         |                |                      |
| -------- | ----------- | ----------------------------- | --------------------------- | ------- | -------------- | -------------------- |
| `&`      | AND         | `5 & 3 → 101 & 011 = 001 (1)` | Bit is 1 only if both are 1 |         |                |                      |
| `        | `           | OR                            | `5                          | 3 → 101 | 011 = 111 (7)` | Bit is 1 if any is 1 |
| `^`      | XOR         | `5 ^ 3 → 101 ^ 011 = 110 (6)` | Bit is 1 if bits differ     |         |                |                      |
| `~`      | NOT         | `~5 → -(5+1) = -6`            | Flips all bits              |         |                |                      |
| `<<`     | Left Shift  | `5 << 1 → 1010 (10)`          | Multiply by 2               |         |                |                      |
| `>>`     | Right Shift | `5 >> 1 → 10 (2)`             | Divide by 2                 |         |                |                      |

---

## 🔢 3. Common Bit Tricks and Patterns

### 1️⃣ Check if the **i-th bit** is set

```python
if n & (1 << i):  # True if bit i is 1
```

### 2️⃣ Set the **i-th bit**

```python
n = n | (1 << i)
```

### 3️⃣ Clear the **i-th bit**

```python
n = n & ~(1 << i)
```

### 4️⃣ Toggle the **i-th bit**

```python
n = n ^ (1 << i)
```

### 5️⃣ Count number of set bits (Hamming weight)

```python
count = 0
while n:
    n &= n - 1
    count += 1
```

### 6️⃣ Check if a number is a **power of two**

```python
n > 0 and (n & (n - 1)) == 0
```

### 7️⃣ Get the **lowest set bit**

```python
n & -n
```

### 8️⃣ Remove the **lowest set bit**

```python
n = n & (n - 1)
```

---

## 💡 4. Binary Number Insights

| Concept       | Binary Form          | Example      |
| ------------- | -------------------- | ------------ |
| Even numbers  | End with `0`         | `100 → 4`    |
| Odd numbers   | End with `1`         | `101 → 5`    |
| Multiply by 2 | Left shift (`<< 1`)  | `3 << 1 = 6` |
| Divide by 2   | Right shift (`>> 1`) | `5 >> 1 = 2` |

---

## 🧩 5. Classic Bit Manipulation Problems (with category)

| Category                    | Problem                      | Core Idea                        |
| --------------------------- | ---------------------------- | -------------------------------- |
| **Counting Bits**           | Count set bits (`n & (n-1)`) | Brian Kernighan’s trick          |
| **Parity Check**            | Odd/even                     | `n & 1`                          |
| **Bit Reversal**            | Reverse 32 bits              | Shift + mask                     |
| **Missing Number**          | One missing in `[0, n]`      | XOR trick                        |
| **Single Number**           | All appear twice except one  | XOR cancels duplicates           |
| **Sum Without + or -**      | Add via XOR + carry          | Bitwise simulation               |
| **Power of Two**            | Only one bit set             | `(n & (n - 1)) == 0`             |
| **Counting Bits in Range**  | Dynamic Programming          | `ans[i] = ans[i >> 1] + (i & 1)` |
| **Reverse Bits of Integer** | Flip bit order               | Shift & combine                  |
| **Hamming Distance**        | XOR then count bits          | `count = bin(a ^ b).count("1")`  |

---

## 🧩 6. Practice Progression (In Order)

### 🔹 Level 1: Fundamentals

1. Count Set Bits
2. Check if Power of Two
3. Get ith Bit, Set ith Bit, Clear ith Bit
4. Single Number (XOR all elements)

### 🔹 Level 2: Intermediate

5. Reverse Bits
6. Missing Number
7. Add Without `+` or `-`
8. Hamming Distance
9. Counting Bits for All Numbers (DP relation)

### 🔹 Level 3: Advanced

10. Subsets generation using bitmasking
11. Find two unique numbers in array (using XOR partition)
12. Reverse bits of a specific portion (e.g., 16 bits)
13. Bit DP problems (e.g., “AND Sum” or “Bitwise OR subsets”)

---

## 🧰 7. Visualization Tip

When learning, use **binary visualization**:

```python
print(f"{n:08b}")  # 8-bit binary format
```

Example:

```python
n = 13
print(f"{n:08b}")   # 00001101
print(f"{(n & (n-1)):08b}")  # removes lowest set bit
```

---

## 🎯 8. Real-World Relevance

Bit manipulation powers:

* **Compression** (packing multiple flags in one int)
* **Graphics / shaders / color channels**
* **Hashing & checksums**
* **Cryptography**
* **Embedded systems & WebAssembly low-level ops**

You’re already exploring WASM and runtime efficiency — understanding bits will **boost your performance-level coding** drastically.

---

## 🚀 9. Recommended Problems to Practice (LeetCode or similar)

| #   | Problem             | Difficulty |
| --- | ------------------- | ---------- |
| 191 | Number of 1 Bits    | Easy       |
| 231 | Power of Two        | Easy       |
| 136 | Single Number       | Easy       |
| 190 | Reverse Bits        | Easy       |
| 268 | Missing Number      | Easy       |
| 371 | Sum of Two Integers | Medium     |
| 338 | Counting Bits       | Easy       |
| 461 | Hamming Distance    | Easy       |
| 260 | Single Number III   | Medium     |
| 89  | Gray Code           | Medium     |

---
