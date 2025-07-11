Bilkul bhaiya, niche diya hai **Thread vs Runnable ka short, crisp difference** — interview ready and Java developer-friendly:

---

### ✅ **Thread vs Runnable – Core Difference**

| Feature                      | `Thread` Class                  | `Runnable` Interface                    |
| ---------------------------- | ------------------------------- | --------------------------------------- |
| **Type**                     | Class                           | Functional Interface                    |
| **Inheritance**              | Extends `Thread`                | Implements `Runnable`                   |
| **Multiple inheritance**     | Can't extend any other class    | Can extend other classes                |
| **Reusability**              | Less reusable                   | More reusable (object can be shared)    |
| **Recommended**              | ❌ Not preferred                 | ✅ Preferred way                         |
| **Lambda Support (Java 8+)** | ❌ No                            | ✅ Yes (since it's functional interface) |
| **Syntax Example**           | `class MyThread extends Thread` | `class MyTask implements Runnable`      |

---

### 🔹 **Code Example: `Thread`**

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Running thread...");
    }

    public static void main(String[] args) {
        new MyThread().start();
    }
}
```

---

### 🔹 **Code Example: `Runnable` (Preferred)**

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Running via Runnable...");
    }

    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}
```

---

### 🔹 **Java 8 Lambda Version (Runnable)**

```java
public class LambdaRunnable {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Thread with lambda");
        new Thread(task).start();
    }
}
```

---

### 🔚 TL;DR:

> ✅ Always use **`Runnable` (or Callable)** — it's more flexible, supports lambda, and decouples task from thread creation.

**Boliye Prem bhaiya – aage `Callable vs Runnable` ya `ExecutorService` detail chahiye kya?**
