Here are ⚡ **5 Java 8 Stream Code Tasks** for practice — each task includes input, expected output, and hint.

---

### ✅ **1. Filter Even Numbers**

**Input:**

```java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
```

**Expected Output:**

```
[2, 4, 6]
```

**Hint:**

```java
nums.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
```

---

### ✅ **2. Convert List<String> to Uppercase**

**Input:**

```java
List<String> names = Arrays.asList("prem", "kumar", "java");
```

**Expected Output:**

```
[PREM, KUMAR, JAVA]
```

**Hint:**

```java
names.stream()
     .map(String::toUpperCase)
     .collect(Collectors.toList());
```

---

### ✅ **3. Get Sum of Square of All Odd Numbers**

**Input:**

```java
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);
```

**Expected Output:**

```
35  // (1*1 + 3*3 + 5*5)
```

**Hint:**

```java
nums.stream()
    .filter(n -> n % 2 != 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);
```

---

### ✅ **4. Count Occurrence of Each Word**

**Input:**

```java
List<String> words = Arrays.asList("apple", "banana", "apple", "orange");
```

**Expected Output:**

```
{apple=2, banana=1, orange=1}
```

**Hint:**

```java
words.stream()
     .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
```

---

### ✅ **5. Flatten a List of Lists**

**Input:**

```java
List<List<String>> list = Arrays.asList(
    Arrays.asList("a", "b"),
    Arrays.asList("c", "d"));
```

**Expected Output:**

```
[a, b, c, d]
```

**Hint:**

```java
list.stream()
    .flatMap(Collection::stream)
    .collect(Collectors.toList());
```

---

Type:

* `more-tasks` → 5 more stream-based code challenges
* `project-task` → real-world stream use cases
* `map-tasks` → only Map-based stream problems
* 
