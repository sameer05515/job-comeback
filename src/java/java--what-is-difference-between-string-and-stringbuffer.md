The difference between `String` and `StringBuffer` in Java comes down to **mutability, thread safety, and performance**. Here’s a clean, code-heavy breakdown.

---

### 🔑 Core difference

| Feature     | String                      | StringBuffer                 |
| ----------- | --------------------------- | ---------------------------- |
| Mutability  | ❌ Immutable                 | ✅ Mutable                    |
| Thread-safe | ✅ Yes                       | ✅ Yes (synchronized)         |
| Performance | ❌ Slow for frequent changes | ⚠️ Slower than StringBuilder |
| Memory      | Creates new objects         | Modifies same object         |

---

### 🧪 1. Mutability

```java id="1m2s3t"
String s = "hello";
s.concat(" world");

System.out.println(s); // hello (unchanged)
```

```java id="9k8j7h"
StringBuffer sb = new StringBuffer("hello");
sb.append(" world");

System.out.println(sb); // hello world (modified)
```

---

### 🧵 2. Thread Safety

```java id="2a3b4c"
StringBuffer sb = new StringBuffer();

Thread t1 = new Thread(() -> sb.append("A"));
Thread t2 = new Thread(() -> sb.append("B"));

t1.start();
t2.start();
```

* `StringBuffer` methods are **synchronized**
* Safe for multi-threading

---

### ⚡ 3. Performance difference

```java id="5x6y7z"
// ❌ Bad (creates many objects)
String s = "";
for (int i = 0; i < 10000; i++) {
    s += i;
}
```

```java id="8u7v6w"
// ✅ Better
StringBuffer sb = new StringBuffer();
for (int i = 0; i < 10000; i++) {
    sb.append(i);
}
```

---

### 🧠 4. Internal behavior

* `String` → stored in **String Pool**, optimized for reuse
* `StringBuffer` → heap object, expandable buffer

---

### ⚖️ When to use what

* Use `String`:

```java id="s1"
String name = "Prem";
```

* Use `StringBuffer` (multi-threaded updates):

```java id="s2"
StringBuffer log = new StringBuffer();
log.append("Start...");
```

---

### 🚨 Important modern note

In real-world code:

* Prefer `StringBuilder` over `StringBuffer` for single-threaded cases
* `StringBuffer` is mostly **legacy** unless thread safety is required

---

### 🧠 Interview one-liner

> `String` is immutable and thread-safe, while `StringBuffer` is mutable and thread-safe due to synchronization, but slower than `StringBuilder`.

---

If you want, I can also compare **String vs StringBuilder vs StringBuffer** in one diagram + JVM internals.
