Great question, **Premendra**! Here's a crisp comparison of **`Stream` vs `Collection`** in Java:

---

## 🔍 Key Differences: `Stream` vs `Collection`

| Feature                   | `Collection`                      | `Stream`                                        |
| ------------------------- | --------------------------------- | ----------------------------------------------- |
| **Stored in memory?**     | Yes — stores all elements         | No — computes elements on demand (lazy)         |
| **Can be reused?**        | Yes — iterable multiple times     | No — can be used only once                      |
| **Nature**                | Data structure (e.g., List, Set)  | Functional pipeline of data processing          |
| **When evaluated?**       | Eager — fully loaded into memory  | Lazy — operations evaluated only on terminal op |
| **Supports parallelism?** | Not inherently                    | Yes — `parallelStream()` supports parallel ops  |
| **Mutability**            | Mutable (can add/remove elements) | Immutable (does not change source)              |
| **Processing type**       | External iteration (for-loop)     | Internal iteration (functional)                 |
| **Purpose**               | Storing and managing data         | Processing/transformation of data               |

---

## ✅ Example to Show Difference

### 🔹 Collection:

```java
List<String> names = List.of("Ram", "Shyam", "Sita");
for (String name : names) {
    System.out.println(name);
}
```

### 🔹 Stream:

```java
List<String> names = List.of("Ram", "Shyam", "Sita");
names.stream()
     .filter(n -> n.startsWith("S"))
     .map(String::toUpperCase)
     .forEach(System.out::println);  // Output: SHYAM, SITA
```

---

## 🧠 Summary

* Use **Collection** when you need to store and retrieve elements.
* Use **Stream** when you want to **process or transform data** using functional operations.

Let me know if you want examples for stream transformations like `map`, `filter`, `reduce` or `collect`.


---
---

# Examples for stream transformations like `map`, `filter`, `reduce` or `collect`


Here are simple and practical examples for key **Stream transformations** in Java:

---

### ✅ `map()` – Transform Each Element

```java
List<String> names = List.of("ram", "shyam", "mohan");

List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(upperNames);  // [RAM, SHYAM, MOHAN]
```

---

### ✅ `filter()` – Filter Elements by Condition

```java
List<Integer> nums = List.of(10, 25, 40, 55);

List<Integer> even = nums.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

System.out.println(even);  // [10, 40]
```

---

### ✅ `reduce()` – Combine Elements to One Result

```java
List<Integer> nums = List.of(1, 2, 3, 4, 5);

int sum = nums.stream()
    .reduce(0, Integer::sum);  // identity + accumulator

System.out.println(sum);  // 15
```

---

### ✅ `collect()` – Terminal Operation for Aggregation

#### 👉 To List:

```java
List<String> result = names.stream()
    .filter(name -> name.length() > 3)
    .collect(Collectors.toList());
```

#### 👉 To Map:

```java
Map<Integer, String> idToName = List.of(
    new User(1, "Ram"),
    new User(2, "Shyam"))
    .stream()
    .collect(Collectors.toMap(User::getId, User::getName));
```

---

### ✅ `sorted()` – Sorting Elements

```java
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());

System.out.println(sorted);  // [mohan, ram, shyam]
```

---

### ✅ `distinct()` – Remove Duplicates

```java
List<Integer> unique = List.of(1, 2, 2, 3, 3, 3).stream()
    .distinct()
    .collect(Collectors.toList());

System.out.println(unique);  // [1, 2, 3]
```

---

### ✅ `limit()` and `skip()`

```java
List<Integer> firstTwo = nums.stream()
    .limit(2)
    .collect(Collectors.toList());  // [10, 25]

List<Integer> skipTwo = nums.stream()
    .skip(2)
    .collect(Collectors.toList());  // [40, 55]
```

---

Let me know if you want these with real-world data like employee objects, todo lists, etc.
