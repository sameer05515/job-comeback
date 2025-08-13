# design patterns discussion

Here’s a **Java-focused design patterns discussion** with **minimal theory + quick code samples** so you can recall them fast in interviews.

---

## 1️⃣ Creational Patterns

### **Singleton**

```java
public class Singleton {
    private static final Singleton instance = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() { return instance; }
}
```

**Use when:** One instance only (config, logger, cache).
**Pitfall:** Thread safety in lazy init (use `enum` or `static`).

---

### **Factory Method**

```java
interface Shape { void draw(); }
class Circle implements Shape { public void draw() { System.out.println("Circle"); } }
class ShapeFactory {
    public Shape getShape(String type) {
        return switch(type) {
            case "circle" -> new Circle();
            default -> throw new IllegalArgumentException();
        };
    }
}
```

**Use when:** Object creation logic should be centralized.

---

### **Builder**

```java
class User {
    String name; int age;
    private User(Builder b) { this.name=b.name; this.age=b.age; }
    static class Builder {
        String name; int age;
        Builder name(String n){this.name=n; return this;}
        Builder age(int a){this.age=a; return this;}
        User build(){ return new User(this);}
    }
}
```

**Use when:** Complex object with many optional params.

---

## 2️⃣ Structural Patterns

### **Adapter**

```java
class OldPrinter { void printOld() { System.out.println("Old"); } }
interface NewPrinter { void print(); }
class PrinterAdapter implements NewPrinter {
    private final OldPrinter old;
    PrinterAdapter(OldPrinter o){ this.old=o; }
    public void print() { old.printOld(); }
}
```

**Use when:** Integrating incompatible interfaces.

---

### **Decorator**

```java
interface Coffee { String getDesc(); double cost(); }
class SimpleCoffee implements Coffee {
    public String getDesc() { return "Coffee"; }
    public double cost() { return 10; }
}
class MilkDecorator implements Coffee {
    private final Coffee coffee;
    MilkDecorator(Coffee c){ this.coffee=c; }
    public String getDesc(){ return coffee.getDesc() + ", Milk"; }
    public double cost(){ return coffee.cost() + 2; }
}
```

**Use when:** Add features without modifying core class.

---

## 3️⃣ Behavioral Patterns

### **Observer**

```java
interface Observer { void update(String msg); }
class Subject {
    private List<Observer> obs = new ArrayList<>();
    void addObs(Observer o){ obs.add(o); }
    void notifyObs(String msg){ obs.forEach(o -> o.update(msg)); }
}
class Subscriber implements Observer {
    private String name;
    Subscriber(String n){this.name=n;}
    public void update(String msg){ System.out.println(name+" got "+msg); }
}
```

**Use when:** One-to-many dependency (events, pub/sub).

---

### **Strategy**

```java
interface Payment { void pay(int amt); }
class CardPayment implements Payment {
    public void pay(int amt){ System.out.println("Card: "+amt); }
}
class PaymentContext {
    private Payment p;
    PaymentContext(Payment p){ this.p=p; }
    void execute(int amt){ p.pay(amt); }
}
```

**Use when:** Change algorithm without changing context.

---

If you want, I can make a **side-by-side table** of all patterns with **key intent + 1-line example use case** so you can revise in < 5 mins before interviews.


---
---

# a side-by-side table of all patterns with key intent + 1-line example use case

Here’s your **Java design patterns quick-revision table** ⬇

| **Pattern**                 | **Type**   | **Key Intent**                                                        | **1-Line Example Use Case**                                 |
| --------------------------- | ---------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Singleton**               | Creational | Ensure only one instance exists.                                      | Global config or logger instance.                           |
| **Factory Method**          | Creational | Create objects via a common interface without specifying exact class. | `ShapeFactory` creating Circle, Square, etc.                |
| **Abstract Factory**        | Creational | Create families of related objects without knowing concrete classes.  | UI toolkit producing Windows/Mac buttons and textboxes.     |
| **Builder**                 | Creational | Step-by-step object creation with optional params.                    | Building a `User` with optional fields like address, phone. |
| **Prototype**               | Creational | Clone an existing object instead of creating new.                     | Duplicating a document template.                            |
| **Adapter**                 | Structural | Convert one interface into another the client expects.                | Wrapping old printer API to match new print interface.      |
| **Decorator**               | Structural | Add responsibilities dynamically without altering base class.         | Adding milk/sugar to coffee.                                |
| **Proxy**                   | Structural | Control access to another object.                                     | Lazy-loading images in an editor.                           |
| **Composite**               | Structural | Treat individual and group objects uniformly.                         | Folder/file hierarchy in file explorer.                     |
| **Facade**                  | Structural | Provide a simple interface to a complex subsystem.                    | One method to start a home theater system.                  |
| **Bridge**                  | Structural | Decouple abstraction from implementation.                             | Shape abstraction with different color implementations.     |
| **Flyweight**               | Structural | Reuse shared objects to save memory.                                  | Reusing character objects in a text editor.                 |
| **Observer**                | Behavioral | Notify multiple objects of state change.                              | News app sending push updates to subscribers.               |
| **Strategy**                | Behavioral | Switch between algorithms at runtime.                                 | Payment method selection in checkout.                       |
| **Command**                 | Behavioral | Encapsulate a request as an object.                                   | Undo/redo in a text editor.                                 |
| **Template Method**         | Behavioral | Define skeleton of an algorithm; let subclasses fill steps.           | Abstract data parser with XML/CSV implementations.          |
| **State**                   | Behavioral | Change object behavior based on internal state.                       | Traffic light changing colors.                              |
| **Mediator**                | Behavioral | Centralize communication between objects.                             | Chatroom managing user messages.                            |
| **Iterator**                | Behavioral | Sequentially access elements without exposing internal structure.     | Looping over a custom collection.                           |
| **Memento**                 | Behavioral | Save and restore an object’s state.                                   | Game save/load feature.                                     |
| **Chain of Responsibility** | Behavioral | Pass request along a chain until handled.                             | Servlet filters processing HTTP requests.                   |
| **Interpreter**             | Behavioral | Define grammar and interpret sentences.                               | Evaluating simple math expressions.                         |
| **Visitor**                 | Behavioral | Add operations without modifying objects.                             | Tax calculation for different item types.                   |

---

If you want, I can **add micro Java code snippets next to each** so this becomes a single “interview last-minute sheet.” That way you can glance and remember both intent & syntax instantly.
