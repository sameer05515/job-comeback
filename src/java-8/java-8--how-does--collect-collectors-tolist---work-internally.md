Great question **Premendra**! Let's break down how `collect(Collectors.toList())` works **internally** in Java Streams.

---

## 🔍 What is `.collect(Collectors.toList())`?

It is a **terminal operation** in Stream API that **accumulates** stream elements into a **`List`**.

### Example:

```java
List<String> names = Stream.of("Ram", "Shyam", "Sita")
    .collect(Collectors.toList());
```

---

## ⚙️ How does it work internally?

`Collectors.toList()` returns a **Collector** implementation, which provides:

### Internally, it has:

```java
Collector<T, ?, List<T>> toList()
```

Under the hood, it defines 4 main things:

| Component       | Role                                                   |
| --------------- | ------------------------------------------------------ |
| **supplier**    | `() -> new ArrayList<>()`                              |
| **accumulator** | `(list, item) -> list.add(item)`                       |
| **combiner**    | `(list1, list2) -> list1.addAll(list2)` (for parallel) |
| **finisher**    | `identity()` – returns the same list                   |

---

## 🔧 Internal Equivalent Code:

```java
List<String> result = Stream.of("Ram", "Shyam", "Sita")
    .collect(
        Collector.of(
            ArrayList::new,                // supplier
            List::add,                     // accumulator
            (left, right) -> {             // combiner
                left.addAll(right);
                return left;
            }
        )
    );
```

---

## ⚠️ Note

* `Collectors.toList()` **does not guarantee** the returned list is mutable or of type `ArrayList` (but it usually is).
* If you need guaranteed mutability or a specific list type, use:

```java
List<String> list = stream.collect(Collectors.toCollection(ArrayList::new));
```

---

Let me know if you want similar internal breakdowns for `toSet()`, `joining()`, `groupingBy()`, or `mapping()`.
