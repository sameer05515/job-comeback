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


---
---
# Few major changes in java collection framework with respect to default and static methods

Sure **Premendra**, here are a few **major changes in the Java Collection Framework** related to **`default`** and **`static`** methods, especially since **Java 8**:

---

## ✅ Why `default` and `static` Methods?

Java 8 introduced `default` and `static` methods in interfaces to:

* Add new functionality **without breaking existing implementations**
* Allow **common utility methods** directly inside interfaces

---

## 🔁 Default Methods in Collection Interfaces

| Interface    | Default Method                              | Purpose                    |
| ------------ | ------------------------------------------- | -------------------------- |
| `Iterable`   | `forEach(Consumer)`                         | Iterate using lambda       |
| `Collection` | `removeIf(Predicate)`                       | Remove items conditionally |
| `List`       | `replaceAll(UnaryOperator)`                 | Modify all elements        |
| `List`       | `sort(Comparator)`                          | Sort list in-place         |
| `Map`        | `forEach(BiConsumer)`                       | Iterate over entries       |
| `Map`        | `getOrDefault(K key, V defaultValue)`       | Safe get                   |
| `Map`        | `putIfAbsent(K key, V value)`               | Only add if key is missing |
| `Map`        | `merge()`, `compute()`, `computeIfAbsent()` | Powerful mutation methods  |

---

## 🧱 Static Methods in Collection Interfaces

| Interface     | Static Method                        | Purpose                    |
| ------------- | ------------------------------------ | -------------------------- |
| `List`        | `List.of(...)`                       | Create immutable list      |
| `Set`         | `Set.of(...)`                        | Create immutable set       |
| `Map`         | `Map.of(...)`, `Map.ofEntries()`     | Create immutable map       |
| `Collections` | `Collections.unmodifiableList()` etc | Make collections read-only |

---

## ✅ Example: `forEach` and `removeIf`

```java
List<String> names = new ArrayList<>(List.of("Ram", "Shyam", "Rita", "Sita"));

names.removeIf(name -> name.startsWith("R"));
names.forEach(System.out::println); // Output: Shyam, Sita
```

---

## ✅ Example: `Map.getOrDefault`

```java
Map<String, Integer> marks = new HashMap<>();
marks.put("Ram", 85);

int score = marks.getOrDefault("Shyam", 0);  // returns 0 if missing
```

---

## ✅ Java 9+: Factory Methods

```java
List<String> list = List.of("A", "B", "C");     // Immutable
Set<String> set = Set.of("X", "Y", "Z");
Map<String, Integer> map = Map.of("A", 1, "B", 2);
```

---

Let me know if you'd like code demos for `computeIfAbsent()`, `merge()`, or Java 9+ collection factory methods in practice.

