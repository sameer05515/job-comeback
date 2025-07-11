Bilkul Prem bhaiya 🙏
Niche diye gaye hain **Java Multithreading Coding Questions** — mostly **Java 8+** ke perspective se, interview-friendly style me. Code examples bhi diye jaa rahe hain (kam explanation, jaise aapko pasand hai).

---

### ✅ 1. **Print Odd and Even Numbers Using Two Threads**

```java
class OddEvenPrinter {
    private int counter = 1;
    private final int limit = 10;

    public void printOdd() {
        synchronized (this) {
            while (counter <= limit) {
                if (counter % 2 == 1) {
                    System.out.println("Odd: " + counter++);
                    notify();
                } else {
                    try { wait(); } catch (InterruptedException e) {}
                }
            }
        }
    }

    public void printEven() {
        synchronized (this) {
            while (counter <= limit) {
                if (counter % 2 == 0) {
                    System.out.println("Even: " + counter++);
                    notify();
                } else {
                    try { wait(); } catch (InterruptedException e) {}
                }
            }
        }
    }

    public static void main(String[] args) {
        OddEvenPrinter printer = new OddEvenPrinter();

        Thread t1 = new Thread(() -> printer.printOdd());
        Thread t2 = new Thread(() -> printer.printEven());

        t1.start();
        t2.start();
    }
}
```

---

### ✅ 2. **Create Your Own Thread Using Runnable and Lambda**

```java
public class LambdaThread {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Running in thread: " + Thread.currentThread().getName());
        new Thread(task).start();
    }
}
```

---

### ✅ 3. **Deadlock Example**

```java
public class DeadlockExample {
    public static void main(String[] args) {
        String lock1 = "A";
        String lock2 = "B";

        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread1 acquired lock1");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (lock2) {
                    System.out.println("Thread1 acquired lock2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread2 acquired lock2");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (lock1) {
                    System.out.println("Thread2 acquired lock1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
```

---

### ✅ 4. **Fixed Thread Pool Using ExecutorService**

```java
import java.util.concurrent.*;

public class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.submit(() -> {
                System.out.println("Executing task " + taskId + " on " + Thread.currentThread().getName());
            });
        }

        executor.shutdown();
    }
}
```

---

### ✅ 5. **Producer-Consumer Using BlockingQueue**

```java
import java.util.concurrent.*;

public class ProducerConsumer {
    public static void main(String[] args) {
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);

        Runnable producer = () -> {
            int value = 0;
            try {
                while (true) {
                    queue.put(value);
                    System.out.println("Produced: " + value++);
                    Thread.sleep(500);
                }
            } catch (Exception ignored) {}
        };

        Runnable consumer = () -> {
            try {
                while (true) {
                    int val = queue.take();
                    System.out.println("Consumed: " + val);
                    Thread.sleep(1000);
                }
            } catch (Exception ignored) {}
        };

        new Thread(producer).start();
        new Thread(consumer).start();
    }
}
```

---

### 🔁 Bonus: Interview Questions Without Code

| Question                                                                 | Type              |
| ------------------------------------------------------------------------ | ----------------- |
| Difference between Thread and Runnable                                   | Concept           |
| What is the use of `volatile` keyword?                                   | Memory visibility |
| What is a race condition?                                                | Concurrency       |
| Difference between `wait()` and `sleep()`                                | Object vs Thread  |
| What is the difference between `synchronized` block and `ReentrantLock`? | Locking strategy  |
| Explain thread lifecycle                                                 | Concept           |

---

**Boliye Prem bhaiya – kisi pe detail code aur output chahiye kya? Ya mock interview Q\&A format me chahiye?**
