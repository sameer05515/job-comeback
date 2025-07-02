Here is a **key terminology list for Design Patterns** — with code-oriented examples and usage contexts (great for Java/Spring-based interviews too):

---

### ✅ **Creational Patterns**

| Pattern              | Purpose                                             | Example                                                      |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| **Singleton**        | Ensure a class has only one instance                | `private static final Singleton instance = new Singleton();` |
| **Factory Method**   | Create objects without exposing instantiation logic | `ShapeFactory.getShape("CIRCLE")`                            |
| **Abstract Factory** | Create families of related objects                  | `GUIFactory.createButton()`                                  |
| **Builder**          | Step-by-step object construction                    | `new CarBuilder().setColor("red").build();`                  |
| **Prototype**        | Clone an existing object                            | `car.clone()`                                                |

---

### ✅ **Structural Patterns**

| Pattern       | Purpose                                   | Example                                         |
| ------------- | ----------------------------------------- | ----------------------------------------------- |
| **Adapter**   | Bridge between incompatible interfaces    | `MediaAdapter implements MediaPlayer`           |
| **Decorator** | Add behavior at runtime                   | `new EncryptedDataSource(new FileDataSource())` |
| **Proxy**     | Control access to another object          | `ImageProxy.load()`                             |
| **Facade**    | Simplify complex subsystems               | `new VideoConverter().convert("file.avi")`      |
| **Composite** | Treat groups and single objects uniformly | `Folder.add(File)`                              |
| **Bridge**    | Decouple abstraction from implementation  | `RemoteControl(Device)`                         |

---

### ✅ **Behavioral Patterns**

| Pattern                     | Purpose                                  | Example                                             |
| --------------------------- | ---------------------------------------- | --------------------------------------------------- |
| **Observer**                | Event-based pub/sub                      | `addObserver(user)`                                 |
| **Strategy**                | Select algorithm at runtime              | `CompressionContext.setStrategy(new ZipStrategy())` |
| **Command**                 | Encapsulate request as object            | `Command.execute()`                                 |
| **State**                   | Object behavior based on state           | `TV.setState(new MuteState())`                      |
| **Template Method**         | Define skeleton of an algorithm          | `processOrder()` in abstract class                  |
| **Mediator**                | Centralize communication between objects | `ChatRoom.showMessage()`                            |
| **Chain of Responsibility** | Pass requests along a chain              | `Handler.setNext(handler)`                          |
| **Iterator**                | Access elements sequentially             | `Iterator.next()`                                   |
| **Memento**                 | Save/restore object state                | `editor.save()` and `editor.undo()`                 |

---

### ✅ **Concurrency Patterns (Bonus)**

| Pattern               | Purpose                                     | Example                   |
| --------------------- | ------------------------------------------- | ------------------------- |
| **Thread Pool**       | Manage multiple threads efficiently         | `ExecutorService` in Java |
| **Producer-Consumer** | Decouple producers from consumers           | `BlockingQueue`           |
| **Read-Write Lock**   | Allow concurrent reads but exclusive writes | `ReentrantReadWriteLock`  |

---

Reply with:

* `java-examples` → to get code for all these in Java
* `spring-boot-usage` → to see where these patterns are used in Spring
* `interview-questions` → for design pattern Q\&A set
