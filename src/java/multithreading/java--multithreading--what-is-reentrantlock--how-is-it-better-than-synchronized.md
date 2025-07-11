Bilkul Prem bhaiya 🙏
Yeh raha **`ReentrantLock` vs `synchronized`** ka ekdam interview-aur-project-ready jawab ✅

---

### ✅ What is `ReentrantLock` in Java?

> `ReentrantLock` is a class in `java.util.concurrent.locks` package that provides an **explicit, flexible locking mechanism** similar to `synchronized`, but with **more control and features**.

---

### 🔍 Key Features of `ReentrantLock`

| Feature                     | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| ✅ **Explicit Lock/Unlock**  | You lock/unlock manually → more control                                   |
| ✅ **Try-Lock Support**      | `tryLock()` allows non-blocking attempts                                  |
| ✅ **Timeout Locking**       | `tryLock(timeout)` avoids indefinite blocking                             |
| ✅ **Interruptible Locking** | `lockInterruptibly()` responds to thread interrupts                       |
| ✅ **Fairness Policy**       | Can construct with `true` to give fair access (`new ReentrantLock(true)`) |
| ✅ **Multiple Conditions**   | Allows multiple `Condition` objects like multiple wait/notify groups      |

---

### 🔧 Example – Basic `ReentrantLock` Usage

```java
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock(); // 🔒 acquire lock
        try {
            count++;
        } finally {
            lock.unlock(); // 🔓 release lock
        }
    }

    public int getCount() {
        return count;
    }
}
```

---

### 🔁 Reentrant? Matlab?

* A thread **can acquire the same lock multiple times** without deadlock
* Like `synchronized`, it is **re-entrant**

```java
lock.lock();  // first
lock.lock();  // again → allowed
lock.unlock();
lock.unlock(); // must unlock same number of times
```

---

### 🆚 `synchronized` vs `ReentrantLock`

| Feature                 | `synchronized`        | `ReentrantLock`                      |
| ----------------------- | --------------------- | ------------------------------------ |
| Syntax Simplicity       | ✅ Simple & concise    | ❌ More verbose                       |
| Unlock automatically    | ✅ Yes (on exit)       | ❌ No (must call `unlock()` manually) |
| Try without blocking    | ❌ Not possible        | ✅ `tryLock()` available              |
| Timeout support         | ❌ Not supported       | ✅ `tryLock(timeout)`                 |
| Interruptible lock      | ❌ Not supported       | ✅ `lockInterruptibly()`              |
| Fairness control        | ❌ Not available       | ✅ Optional fairness                  |
| Multiple condition vars | ❌ Only one (`wait()`) | ✅ Can create multiple `Condition`s   |

---

### 🚨 Gotcha:

⚠️ If you **forget to call `unlock()`**, it may cause **deadlocks**.
Always use `try-finally` block for safety.

---

### 🔚 TL;DR:

> ✅ Use `synchronized` for **simple cases**
> 🚀 Use `ReentrantLock` when you need **flexibility, timeout, fairness, or multiple conditions**

---

**Boliye Prem bhaiya – chahiye kya ek `tryLock` based real-world banking example ya `ReentrantReadWriteLock` ka comparison bhi?**
