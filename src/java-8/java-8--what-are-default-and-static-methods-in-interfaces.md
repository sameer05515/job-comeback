In **Java 8**, interfaces were enhanced with the ability to include **`default`** and **`static`** methods. These allow interfaces to provide some method implementations — a big change from previous versions where interfaces could only have abstract methods.

---

## ✅ `default` Methods in Interfaces

* Provide a **default implementation**
* Can be **overridden** in implementing classes

### 🔹 Syntax:

```java
interface Vehicle {
    default void start() {
        System.out.println("Vehicle is starting...");
    }
}
```

### 🔹 Use Case:

* To **add new methods** to interfaces without breaking existing implementations

---

## ✅ `static` Methods in Interfaces

* Belong to the **interface itself**, not instances
* Cannot be overridden

### 🔹 Syntax:

```java
interface Vehicle {
    static void service() {
        System.out.println("Servicing vehicle...");
    }
}
```

### 🔹 Use Case:

* For **utility/helper** methods related to the interface

---

## 💡 Example

```java
interface Engine {
    default void run() {
        System.out.println("Engine is running...");
    }

    static void diagnostics() {
        System.out.println("Running diagnostics...");
    }
}

class Car implements Engine {
    @Override
    public void run() {
        System.out.println("Car engine is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.run();                   // "Car engine is running..."
        Engine.diagnostics();      // "Running diagnostics..."
    }
}
```

---

## 🔍 Summary

| Feature       | `default`                    | `static`       |
| ------------- | ---------------------------- | -------------- |
| Inherited?    | Yes                          | No             |
| Overridable?  | Yes                          | No             |
| Accessed via  | Object of implementing class | Interface name |
| Introduced in | Java 8                       | Java 8         |

Let me know if you want to see real usage in Spring Boot interfaces or functional interfaces too!
