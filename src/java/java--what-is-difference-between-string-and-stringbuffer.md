Here’s a quick comparison between `String` and `StringBuffer` in Java:

| Feature           | `String`                          | `StringBuffer`                              |
| ----------------- | --------------------------------- | ------------------------------------------- |
| **Mutability**    | Immutable                         | Mutable                                     |
| **Thread Safety** | Not thread-safe                   | Thread-safe (synchronized methods)          |
| **Performance**   | Slower for repeated modifications | Faster for modifications (in single-thread) |
| **Use Case**      | Constant text                     | Text that changes frequently                |
| **Methods**       | `concat()`, `substring()` etc.    | `append()`, `insert()`, `delete()` etc.     |

---

### 🔸 Example

```java
String str = "Hello";
str.concat(" World");
System.out.println(str); // "Hello" (unchanged)
```

```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
System.out.println(sb); // "Hello World"
```

---

> ✅ Use `StringBuffer` when you need thread-safe, mutable string operations.
> ⚠️ For better performance in **non-threaded** environments, use `StringBuilder` instead (same as `StringBuffer` but not synchronized).
