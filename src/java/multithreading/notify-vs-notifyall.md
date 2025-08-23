Bhai ye **`notify()` vs `notifyAll()`** ek *classic multithreading interview question* hai. Dekh:

---

## 🔑 Difference Between `notify()` and `notifyAll()`

| Aspect      | `notify()`                                                                             | `notifyAll()`                                                               |
| ----------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Meaning     | Wakes **only one** waiting thread (chosen arbitrarily)                                 | Wakes **all** waiting threads                                               |
| Scope       | Good when only one thread is needed to proceed                                         | Needed when multiple threads might be waiting on the same monitor           |
| Risk        | Other threads may remain blocked indefinitely (if not chosen) → **risk of starvation** | No starvation, but can cause unnecessary **context switching**              |
| Performance | More efficient, less overhead                                                          | More expensive, because all threads compete for the lock                    |
| Use case    | Single-producer single-consumer scenario                                               | Multiple producers/consumers, or when you’re unsure which condition applies |

---

## ⚡ Example

```java
class SharedResource {
    private boolean available = false;

    public synchronized void produce() {
        available = true;
        System.out.println("Produced, notifying...");
        notify(); // or notifyAll()
    }

    public synchronized void consume() {
        while (!available) {
            try {
                wait();
            } catch (InterruptedException e) {}
        }
        available = false;
        System.out.println("Consumed");
    }
}
```

---

## 🎯 Interview one-liner:

* **`notify()`** → wakes up *one* waiting thread, efficient but may cause starvation.
* **`notifyAll()`** → wakes up *all* waiting threads, prevents starvation but may cause extra context switching.
  👉 Always use `notifyAll()` in complex systems with multiple waiting threads unless you’re absolutely sure only one waiter should proceed.

---

Bhai, kya tu chaahta hai main iska **Producer-Consumer full demo with `notify` vs `notifyAll`** bhi likh ke du (taaki interview me live bol sake)?
