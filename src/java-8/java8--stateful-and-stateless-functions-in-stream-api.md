Here’s a quick summary of **stateless** and **stateful** operations in Java Stream API:

---

### ✅ Stateless Operations

* **Do not depend on previous elements**
* Process each element **independently**
* More efficient and parallel-friendly

**Examples:**

```java
stream.filter(x -> x > 10)
stream.map(x -> x * 2)
```

---

### ✅ Stateful Operations

* **Require knowledge of previous elements**
* May need to **store elements temporarily**
* Can affect performance in parallel streams

**Examples:**

```java
stream.sorted()        // Needs to see all elements
stream.distinct()      // Needs to remember seen elements
stream.limit(5)        // Needs position tracking
```

---

### 💡 Example:

```java
List<Integer> list = List.of(5, 2, 3, 2, 1, 3, 5);

// Stateless
list.stream().map(x -> x * 2).forEach(System.out::println);

// Stateful
list.stream().distinct().forEach(System.out::println);
```

Let me know if you want custom code examples for each.



---
---

Here’s a list of common **stateless** and **stateful** Stream API functions:

---

### ✅ Stateless Operations

* `map`
* `filter`
* `flatMap`
* `peek`

---

### ✅ Stateful Operations

* `distinct`
* `sorted`
* `limit`
* `skip`

Let me know if you want only terminal ops or a complete list including them too.
