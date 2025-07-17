The `reduce()` method in Java Stream API is used to **combine stream elements into a single result** — it performs a **reduction operation** (like sum, max, concatenate, etc.).

---

### 📌 Syntax:

```java
T reduce(T identity, BinaryOperator<T> accumulator);
```

* `identity`: initial/default value (e.g., `0` for sum)
* `accumulator`: function to combine two values

---

### ✅ Examples:

#### 1. Sum of integers

```java
int sum = List.of(1, 2, 3, 4).stream()
             .reduce(0, (a, b) -> a + b);
// Output: 10
```

#### 2. Longest word

```java
String longest = List.of("apple", "banana", "pear").stream()
                 .reduce("", (a, b) -> a.length() > b.length() ? a : b);
// Output: banana
```

#### 3. Product of numbers

```java
int product = List.of(1, 2, 3, 4).stream()
               .reduce(1, (a, b) -> a * b);
// Output: 24
```

---

Let me know if you want to use `reduce()` with `Optional<T>` variant too.
