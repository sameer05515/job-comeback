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


---
---

# How to use `reduce()` with `Optional<T>` variant

Here’s how you can use the **`reduce()` method with Optional<T>** variant in Java Stream API:

---

### ✅ Syntax:

```java
Optional<T> reduce(BinaryOperator<T> accumulator)
```

* No identity is provided.
* It returns an `Optional<T>` because the stream might be **empty**.

---

### 🔸 Examples:

#### 1. Find sum without identity

```java
Optional<Integer> sum = List.of(1, 2, 3, 4).stream()
    .reduce((a, b) -> a + b);

sum.ifPresent(System.out::println);  // Output: 10
```

#### 2. Find max element

```java
Optional<Integer> max = List.of(10, 35, 2, 48, 25).stream()
    .reduce((a, b) -> a > b ? a : b);

max.ifPresent(System.out::println);  // Output: 48
```

#### 3. Concatenate strings

```java
Optional<String> combined = List.of("Java", "Stream", "Reduce").stream()
    .reduce((a, b) -> a + "-" + b);

combined.ifPresent(System.out::println);  // Output: Java-Stream-Reduce
```

---

### 🔹 Empty Stream Example:

```java
Optional<Integer> result = List.<Integer>of().stream()
    .reduce((a, b) -> a + b);

System.out.println(result.orElse(0));  // Output: 0 (default provided via orElse)
```

Let me know if you want a `reduce()` with parallel stream or custom object too.


---
---

# Few more reduction operation

Here are **a few more practical reduction operations** using `Stream.reduce()` with `Optional<T>`:

---

### 1. **Product of all numbers**

```java
Optional<Integer> product = List.of(2, 3, 4).stream()
    .reduce((a, b) -> a * b);

product.ifPresent(System.out::println);  // Output: 24
```

---

### 2. **Find minimum value**

```java
Optional<Integer> min = List.of(15, 3, 9, 20).stream()
    .reduce((a, b) -> a < b ? a : b);

min.ifPresent(System.out::println);  // Output: 3
```

---

### 3. **Find longest string**

```java
Optional<String> longest = List.of("Java", "Stream", "Reduce", "API").stream()
    .reduce((a, b) -> a.length() > b.length() ? a : b);

longest.ifPresent(System.out::println);  // Output: "Stream"
```

---

### 4. **Merge list of lists**

```java
List<List<Integer>> data = List.of(List.of(1, 2), List.of(3), List.of(4, 5));
Optional<List<Integer>> merged = data.stream()
    .reduce((a, b) -> {
        List<Integer> combined = new ArrayList<>(a);
        combined.addAll(b);
        return combined;
    });

merged.ifPresent(System.out::println);  // Output: [1, 2, 3, 4, 5]
```

---

### 5. **Custom object reduction (e.g., sum salary)**

```java
class Employee {
    String name;
    int salary;
    Employee(String n, int s) { name = n; salary = s; }
}

List<Employee> emps = List.of(
    new Employee("A", 5000),
    new Employee("B", 6000),
    new Employee("C", 7000)
);

Optional<Integer> totalSalary = emps.stream()
    .map(e -> e.salary)
    .reduce((a, b) -> a + b);

totalSalary.ifPresent(System.out::println);  // Output: 18000
```

---

Let me know if you want the same examples using identity + accumulator version of `reduce()`.
