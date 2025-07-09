# How would you implement the Singleton Pattern in a thread-safe manner using Java 8 features?

✅ Here's a **thread-safe Singleton implementation** using **Java 8 features** — clean, lazy-loaded, and efficient.

---

### ✅ **1. Using `enum` (Best & Simplest Way)**

```java
public enum SingletonEnum {
    INSTANCE;

    public void doSomething() {
        System.out.println("Singleton using enum");
    }
}
```

**Usage:**

```java
SingletonEnum.INSTANCE.doSomething();
```

✅ Thread-safe by default
✅ Serialization-safe
✅ Reflection-safe

---

### ✅ **2. Using `Lazy Initialization` with `synchronized` and `Optional`**

```java
public class SingletonOptional {
    private static volatile SingletonOptional instance;

    private SingletonOptional() {
    }

    public static SingletonOptional getInstance() {
        if (instance == null) {
            synchronized (SingletonOptional.class) {
                if (instance == null) {
                    instance = new SingletonOptional();
                }
            }
        }
        return instance;
    }

    public void show() {
        System.out.println("Singleton using double-checked locking");
    }
}
```

---

### ✅ **3. Java 8 Supplier + Holder Pattern (Lazy + Thread-safe)**

```java
import java.util.function.Supplier;

public class SingletonSupplier {
    private SingletonSupplier() {}

    private static class Holder {
        static final SingletonSupplier INSTANCE = new SingletonSupplier();
    }

    public static SingletonSupplier getInstance() {
        return Holder.INSTANCE;
    }

    public void show() {
        System.out.println("Singleton using holder class with Supplier");
    }
}
```

---

### ✅ Summary Line for Interview:

> "The best way to implement a thread-safe Singleton in Java 8 is using an `enum`. Alternatively, the static holder pattern or double-checked locking with volatile fields are efficient, safe, and lazy-initialized approaches."
