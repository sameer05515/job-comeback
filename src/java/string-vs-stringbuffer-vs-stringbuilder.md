# ✅ String vs StringBuffer vs StringBuilder in Java


- [Java String vs StringBuilder vs StringBuffer: Best Practices & Performance](https://www.youtube.com/watch?v=HvpUTLSt5XM)

Bahut hi common interview topic 👍.
Niche ek **side-by-side table** de raha hoon:

---

## ✅ String vs StringBuffer vs StringBuilder in Java

| Feature           | **String**                                                          | **StringBuffer**                                                       | **StringBuilder**                                                |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Mutability**    | ❌ Immutable (once created, value can’t change)                      | ✅ Mutable                                                              | ✅ Mutable                                                        |
| **Thread-safety** | ✅ Yes (immutable, so inherently thread-safe)                        | ✅ Yes (methods synchronized → safe for multithreading)                 | ❌ No (not synchronized → faster)                                 |
| **Performance**   | Slower (creates new object on modification)                         | Slower than `StringBuilder` (due to synchronization overhead)          | Faster (no sync overhead)                                        |
| **When to use**   | When string value won’t change frequently (constants, config, keys) | When string value changes frequently **and** thread safety is required | When string value changes frequently in **single-threaded** apps |
| **Introduced in** | Java 1.0                                                            | Java 1.0                                                               | Java 1.5                                                         |

---

### ✅ Example

```java
public class TestStrings {
    public static void main(String[] args) {
        // String (immutable)
        String s1 = "Prem";
        s1.concat(" Kumar");
        System.out.println("String: " + s1);  // Prem (not changed)

        // StringBuffer (mutable, synchronized)
        StringBuffer sb = new StringBuffer("Prem");
        sb.append(" Kumar");
        System.out.println("StringBuffer: " + sb); // Prem Kumar

        // StringBuilder (mutable, non-synchronized)
        StringBuilder sb2 = new StringBuilder("Prem");
        sb2.append(" Kumar");
        System.out.println("StringBuilder: " + sb2); // Prem Kumar
    }
}
```

---

👉 Interview me ek line bolne layak:

* *"Use String when immutability matters, StringBuilder for speed in single-thread, and StringBuffer when thread-safety is needed."*

Chahte ho main ek **performance benchmark code** bhi likh du jo `String` vs `StringBuffer` vs `StringBuilder` ka speed difference show kare?
