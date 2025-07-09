✅ **Singleton Pattern** is a **creational design pattern** that ensures a **class has only one instance** and provides a global access point to it.

---

### 🔹 **Why Use Singleton?**

* Shared resource: Logger, Config, Cache, DB Connection Pool
* Ensure only **one instance** exists

---

### 🔹 **Key Rules**

* Private constructor
* Static instance
* Global accessor (`getInstance()`)

---

### ✅ **Basic Thread-safe Singleton (Eager Initialization)**

```java
public class EagerSingleton {
    private static final EagerSingleton instance = new EagerSingleton();

    private EagerSingleton() { }

    public static EagerSingleton getInstance() {
        return instance;
    }
}
```

---

### ✅ **Lazy Initialization with Double-Checked Locking**

```java
public class LazySingleton {
    private static volatile LazySingleton instance;

    private LazySingleton() { }

    public static LazySingleton getInstance() {
        if (instance == null) {
            synchronized (LazySingleton.class) {
                if (instance == null) {
                    instance = new LazySingleton();
                }
            }
        }
        return instance;
    }
}
```

---

### ✅ **Best Practice: Singleton with `enum` (Thread-safe + Serialization-safe)**

```java
public enum SingletonEnum {
    INSTANCE;

    public void show() {
        System.out.println("Singleton using enum");
    }
}
```

**Usage:**

```java
SingletonEnum.INSTANCE.show();
```

---

### ✅ Summary Line for Interview:

> "Singleton ensures a class has only one instance and provides a global access point. In Java, we implement it using a private constructor, static instance, and thread-safe `getInstance()`, or the `enum` way which is safest."
