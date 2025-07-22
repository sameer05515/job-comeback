In **Java Stream API**, operations are categorized into two types:

---

### ✅ **Intermediate Operations**

* Return another **Stream**
* Are **lazy** – they don't process until a terminal operation is called
* Can be **chained**

**Examples:**

```java
stream.filter(x -> x > 10)
      .map(x -> x * 2)
      .distinct();
```

---

### ✅ **Terminal Operations**

* **Trigger** the execution of stream pipeline
* Return **non-stream** values like `List`, `int`, `Optional`, etc.
* Only one terminal operation is allowed

**Examples:**

```java
List<Integer> result = stream.collect(Collectors.toList());
Optional<Integer> sum = stream.reduce(Integer::sum);
long count = stream.count();
```

---

### 💡 Summary

| Operation Type | Returns    | Laziness | Chaining | Examples                       |
| -------------- | ---------- | -------- | -------- | ------------------------------ |
| Intermediate   | Stream     | Yes      | Yes      | `map`, `filter`, `limit`       |
| Terminal       | Non-Stream | No       | No       | `collect`, `forEach`, `reduce` |

Let me know if you want examples with real data.
