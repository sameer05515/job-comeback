Bilkul Prem bhaiya 🙏
Yeh raha **deadlock in Java** ka ekdum interview-worthy explanation with a real working code demo ✅

---

### ✅ What is Deadlock?

> **Deadlock** occurs when **two or more threads** are waiting for **each other to release a lock**, and neither can proceed — causing all of them to be **stuck forever** 🔁

---

### 🧠 Real-World Analogy

* **Person A** locks **Room 1**, wants **Room 2**
* **Person B** locks **Room 2**, wants **Room 1**
* Both keep waiting → **deadlock**

---

### 🔧 Java Code Example – Classic Deadlock

```java
public class DeadlockExample {

    static final Object lock1 = new Object();
    static final Object lock2 = new Object();

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: locked lock1");

                try { Thread.sleep(100); } catch (Exception e) {}

                synchronized (lock2) {
                    System.out.println("Thread 1: locked lock2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: locked lock2");

                try { Thread.sleep(100); } catch (Exception e) {}

                synchronized (lock1) {
                    System.out.println("Thread 2: locked lock1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
```

---

### ⚠️ Output (Stuck Forever)

```
Thread 1: locked lock1
Thread 2: locked lock2
// Now both are waiting for each other's lock → deadlock
```

---

### 💣 Why It Happens?

* `t1` holds `lock1`, wants `lock2`
* `t2` holds `lock2`, wants `lock1`
* Both are blocked forever — **no thread can proceed**

---

### 🛡️ How to Avoid Deadlocks?

| Strategy                           | Description                                            |
| ---------------------------------- | ------------------------------------------------------ |
| Always acquire locks in same order | Define fixed lock order (e.g., lock1 → lock2)          |
| Use `tryLock()` with timeout       | Prefer `ReentrantLock.tryLock()` to avoid wait forever |
| Avoid nested locking if possible   | Keep critical sections short and simple                |
| Lock timeout + interrupt policy    | Combine with monitoring / fallback logic               |

---

### 🔚 TL;DR:

> 🔒 **Deadlock = Circular wait on locks**
> 💡 Always **lock in consistent order** to avoid deadlock

---

**Boliye Prem bhaiya – chahiye kya iska `ReentrantLock + tryLock()` solution version bhi?**


---
---
# iska `ReentrantLock + tryLock()` solution version

Bilkul Prem bhaiya 🙏
Yeh raha **Deadlock-free version using `ReentrantLock` + `tryLock()`** — ekdam practical aur interview-me-dikhane-layak ✅

---

### ✅ Deadlock-free with `ReentrantLock.tryLock()`

```java
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.TimeUnit;

public class DeadlockFreeExample {

    static ReentrantLock lock1 = new ReentrantLock();
    static ReentrantLock lock2 = new ReentrantLock();

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            try {
                if (lock1.tryLock(1, TimeUnit.SECONDS)) {
                    System.out.println("Thread 1: locked lock1");

                    try {
                        Thread.sleep(100);
                        if (lock2.tryLock(1, TimeUnit.SECONDS)) {
                            try {
                                System.out.println("Thread 1: locked lock2");
                            } finally {
                                lock2.unlock();
                            }
                        } else {
                            System.out.println("Thread 1: could not lock lock2, avoiding deadlock");
                        }
                    } finally {
                        lock1.unlock();
                    }
                } else {
                    System.out.println("Thread 1: could not lock lock1");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                if (lock2.tryLock(1, TimeUnit.SECONDS)) {
                    System.out.println("Thread 2: locked lock2");

                    try {
                        Thread.sleep(100);
                        if (lock1.tryLock(1, TimeUnit.SECONDS)) {
                            try {
                                System.out.println("Thread 2: locked lock1");
                            } finally {
                                lock1.unlock();
                            }
                        } else {
                            System.out.println("Thread 2: could not lock lock1, avoiding deadlock");
                        }
                    } finally {
                        lock2.unlock();
                    }
                } else {
                    System.out.println("Thread 2: could not lock lock2");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        t1.start();
        t2.start();
    }
}
```

---

### 🔎 Output (Sample):

```
Thread 1: locked lock1  
Thread 2: locked lock2  
Thread 1: could not lock lock2, avoiding deadlock  
Thread 2: locked lock1
```

✅ **Deadlock avoided!**
Because agar second lock nahi milta to thread **gracefully back off** karta hai.

---

### 🧠 Benefits of `tryLock()`:

| Feature               | Benefit                               |
| --------------------- | ------------------------------------- |
| ✅ Timeout-based lock  | Avoids infinite blocking              |
| ✅ Conditional locking | Lets thread decide when to proceed    |
| ✅ Better control      | Can build fallback / retry mechanisms |

---

**Boliye Prem bhaiya – aage chahiye `ReentrantReadWriteLock` ka use-case ya `Condition` ke sath example?**
