Bhai, **deadlock avoid karna** multithreading ka ek must-know interview question hai. Yahaan crisp points + code example:

---

## ✅ Deadlock Avoidance Techniques in Java

1. **Lock ordering (most common)**

   * Always acquire locks in the same global order across all threads.
   * Prevents circular wait condition.

2. **Try-lock with timeout**

   * Use `tryLock(timeout)` from `ReentrantLock` instead of `synchronized`.
   * Thread gives up after waiting for lock too long → avoids permanent deadlock.

3. **Avoid nested locks**

   * Minimize code where multiple locks are acquired.
   * If required → release one before acquiring another.

4. **Use higher-level concurrency utilities**

   * Prefer `java.util.concurrent` (`ConcurrentHashMap`, `BlockingQueue`, `ExecutorService`) over manual locking.

5. **Deadlock detection + recovery (rare in app-level code)**

   * Monitor threads and forcibly release/restart if detected.

---

## ⚡ Example: Deadlock-Prone Code

```java
class DeadlockExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    public void task1() {
        synchronized (lock1) {
            System.out.println("Task1 acquired lock1");
            synchronized (lock2) {
                System.out.println("Task1 acquired lock2");
            }
        }
    }

    public void task2() {
        synchronized (lock2) {
            System.out.println("Task2 acquired lock2");
            synchronized (lock1) {
                System.out.println("Task2 acquired lock1");
            }
        }
    }
}
```

⚠️ Here `task1` takes `lock1→lock2`, and `task2` takes `lock2→lock1` → classic deadlock.

---

## ✅ Deadlock-Free (Lock Ordering)

```java
class SafeExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    public void task1() {
        synchronized (lock1) {
            System.out.println("Task1 acquired lock1");
            synchronized (lock2) {
                System.out.println("Task1 acquired lock2");
            }
        }
    }

    public void task2() {
        synchronized (lock1) {  // same order: lock1 → lock2
            System.out.println("Task2 acquired lock1");
            synchronized (lock2) {
                System.out.println("Task2 acquired lock2");
            }
        }
    }
}
```

---

👉 **Interview one-liner**:
Deadlocks happen due to **circular wait**. To avoid: **define a lock ordering, use `tryLock` with timeout, and prefer concurrency utilities over manual locking**.

---

Bhai, kya tu chaahta hai main iska **"4 Coffman Conditions of Deadlock"** bhi ek cheat diagram/text me bana kar du? (bohot common interview follow-up hota hai)
