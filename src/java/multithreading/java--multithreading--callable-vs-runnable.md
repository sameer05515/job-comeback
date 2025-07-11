Bilkul Prem bhaiya 🙏
Niche diya gaya hai **Runnable vs Callable** ka clean, interview-style comparison — Java developer ke liye short, sharp, and useful ✅

---

### ✅ Runnable vs Callable — Tabular Difference

| Feature                | `Runnable`                       | `Callable<V>`                        |
| ---------------------- | -------------------------------- | ------------------------------------ |
| **Package**            | `java.lang`                      | `java.util.concurrent`               |
| **Return value**       | ❌ `void run()`                   | ✅ `V call()` returns value           |
| **Exception handling** | ❌ Can't throw checked exceptions | ✅ Can throw checked exceptions       |
| **Used with**          | `Thread`, `ExecutorService`      | Only with `ExecutorService` (submit) |
| **Lambda Support**     | ✅ Yes                            | ✅ Yes                                |
| **Result Tracking**    | ❌ No                             | ✅ Returns `Future<V>`                |
| **Common Use**         | Fire-and-forget tasks            | Tasks where result is needed         |

---

### 🔹 Runnable Example

```java
Runnable task = () -> System.out.println("Running a task");

ExecutorService executor = Executors.newSingleThreadExecutor();
executor.execute(task);
executor.shutdown();
```

---

### 🔹 Callable Example (with `Future`)

```java
Callable<String> task = () -> {
    Thread.sleep(500);
    return "Task Result";
};

ExecutorService executor = Executors.newSingleThreadExecutor();
Future<String> future = executor.submit(task);

System.out.println("Result: " + future.get()); // blocks until done
executor.shutdown();
```

---

### 🔚 TL;DR:

> 🔹 Use **Runnable** when you don’t need a result.
> 🔹 Use **Callable** when you need a **return value** or want to **handle exceptions properly**.

---

**Boliye Prem bhaiya – aage `Future vs CompletableFuture` ya `Callable with timeout` chahiye kya?**
