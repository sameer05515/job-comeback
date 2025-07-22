The `volatile` keyword in Java ensures **visibility** of changes to variables across threads.

---

### ✅ Role in Multithreading:

1. **Visibility Guarantee**

   * Without `volatile`, one thread might not see the latest value of a variable modified by another thread.
   * With `volatile`, all threads see the most recent write.

2. **No Caching**

   * It tells the JVM **not to cache** the variable value in registers or thread-local memory.

3. **No Atomicity**

   * It does **not make compound actions (like `count++`) atomic**.

---

### 🔧 Example:

```java
public class VolatileExample {
    private static volatile boolean flag = false;

    public static void main(String[] args) {
        Thread writer = new Thread(() -> {
            try { Thread.sleep(1000); } catch (InterruptedException e) {}
            flag = true;
            System.out.println("Flag set to true");
        });

        Thread reader = new Thread(() -> {
            while (!flag) {
                // busy wait
            }
            System.out.println("Reader thread detected flag change");
        });

        writer.start();
        reader.start();
    }
}
```

### ❗ Without `volatile`, the reader may never see the updated value due to caching.

---

Let me know if you want the same with `AtomicBoolean` or use cases like `double-checked locking`.
