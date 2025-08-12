# What is difference between volatile, synchronized and atomic variables

Here’s a crisp **Java concurrency cheat table** for `volatile`, `synchronized`, and `atomic` variables:

---

| Feature         | `volatile`                                                     | `synchronized`                                                        | `Atomic` (e.g. `AtomicInteger`)                                                 |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Purpose**     | Ensures **visibility** of changes to variables across threads. | Ensures **mutual exclusion** + **visibility** (atomicity + ordering). | Provides **lock-free thread-safe operations** on single variables.              |
| **Atomicity**   | ❌ No — only visibility guaranteed.                             | ✅ Yes — all code inside the block executes atomically.                | ✅ Yes — for provided operations (`incrementAndGet()`, `compareAndSet()`, etc.). |
| **Locks used**  | None                                                           | Monitor lock                                                          | None (uses CAS – Compare-And-Swap)                                              |
| **Performance** | Faster (no locking)                                            | Slower (locking overhead)                                             | Faster than `synchronized` (but limited to single-variable ops)                 |
| **Scope**       | Variable-level (only for reads/writes)                         | Code block or method                                                  | Single variable or object reference                                             |
| **When to use** | For flags, simple state updates without compound actions.      | For complex critical sections involving multiple steps/variables.     | For counters, accumulators, and simple atomic updates.                          |
| **Example**     |                                                                |                                                                       |                                                                                 |

```java
volatile boolean flag = true;
```

```java
synchronized void update() { ... }
```

````java
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();
``` |

---

💡 **Quick Rules**  
- `volatile` → **visibility only** (no race condition protection for multiple-step operations).  
- `synchronized` → **visibility + atomicity** (slower, but works for complex operations).  
- `Atomic` → **visibility + atomicity** for **single variable updates** without locks (uses CPU instructions).  

---

If you want, I can give you a **one-glance diagram** showing which one to pick in which scenario — perfect for interviews.
````
