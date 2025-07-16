Great question, **Premendra**! In Java Streams, operations are categorized into two types:

---

## 🔁 Intermediate Operations

These are:

* **Lazy**
* **Return another Stream**
* **Chained together to form a pipeline**
* **Executed only when a terminal operation is invoked**

### 🔧 Examples:

| Method        | Description                        |
| ------------- | ---------------------------------- |
| `.map()`      | Transform each element             |
| `.filter()`   | Keep elements that match condition |
| `.sorted()`   | Sort the stream                    |
| `.distinct()` | Remove duplicates                  |
| `.limit(n)`   | Keep first `n` elements            |
| `.skip(n)`    | Skip first `n` elements            |
| `.peek()`     | Debug/log elements during stream   |

---

## ✅ Terminal Operations

These:

* **Trigger the execution of the stream pipeline**
* **Produce a result (or a side-effect like printing)**

### 🎯 Examples:

| Method             | Description                              |
| ------------------ | ---------------------------------------- |
| `.collect()`       | Collect elements into list/map/etc.      |
| `.forEach()`       | Perform action on each element           |
| `.reduce()`        | Combine elements into one (sum/product)  |
| `.count()`         | Count number of elements                 |
| `.anyMatch()`      | Check if any element matches a predicate |
| `.allMatch()`      | Check if all match a predicate           |
| `.noneMatch()`     | Check if none match a predicate          |
| `.findFirst()`     | Get the first matching element           |
| `.findAny()`       | Get any matching element                 |
| `.min()`, `.max()` | Get min/max element                      |

---

## ✅ Simple Example

```java
List<String> names = List.of("Ram", "Shyam", "Sita");

List<String> result = names.stream()              // Stream created
    .filter(n -> n.startsWith("S"))               // Intermediate
    .map(String::toUpperCase)                     // Intermediate
    .collect(Collectors.toList());                // Terminal
```

🔹 Intermediate ops are **not executed until** terminal is called.

---

Let me know if you want a diagram or code tracing of this pipeline in action.
