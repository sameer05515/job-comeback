✅ Here's a clear difference between **Factory** and **Abstract Factory** design patterns:

---

### 🔹 **Factory Pattern**

* Used to create **one type of object**
* Decides which **subclass** to instantiate based on input
* Focuses on **single product hierarchy**

```java
interface Shape {
    void draw();
}

class Circle implements Shape { public void draw() { System.out.println("Circle"); } }
class Square implements Shape { public void draw() { System.out.println("Square"); } }

class ShapeFactory {
    public Shape getShape(String type) {
        return switch (type) {
            case "circle" -> new Circle();
            case "square" -> new Square();
            default -> null;
        };
    }
}
```

---

### 🔹 **Abstract Factory Pattern**

* Used to create **families of related objects**
* Groups multiple factories under a common interface
* Focuses on **multiple product hierarchies**

```java
interface Button { void click(); }
interface Checkbox { void select(); }

class WindowsButton implements Button { public void click() { System.out.println("Windows Button"); } }
class MacButton implements Button { public void click() { System.out.println("Mac Button"); } }

class WindowsCheckbox implements Checkbox { public void select() { System.out.println("Windows Checkbox"); } }
class MacCheckbox implements Checkbox { public void select() { System.out.println("Mac Checkbox"); } }

interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

class WindowsFactory implements GUIFactory {
    public Button createButton() { return new WindowsButton(); }
    public Checkbox createCheckbox() { return new WindowsCheckbox(); }
}

class MacFactory implements GUIFactory {
    public Button createButton() { return new MacButton(); }
    public Checkbox createCheckbox() { return new MacCheckbox(); }
}
```

---

### 🔹 ✅ Difference Table

| Feature             | **Factory Pattern**              | **Abstract Factory Pattern**                      |
| ------------------- | -------------------------------- | ------------------------------------------------- |
| Purpose             | Create one object based on input | Create related objects without specifying classes |
| Product family      | One                              | Multiple                                          |
| Complexity          | Simple                           | More complex                                      |
| Example             | `ShapeFactory → Circle/Square`   | `GUIFactory → Button + Checkbox`                  |
| Design Pattern Type | Creational                       | Creational                                        |

---

### ✅ Summary Line for Interview:

> "Factory Pattern creates objects from a single product family based on input, whereas Abstract Factory creates families of related objects across multiple product types without exposing their implementations."


---
---

✅ **Abstract Factory Pattern** is a **creational design pattern** that provides an interface for creating **families of related objects** without specifying their concrete classes.

---

### 🔹 **When to Use:**

* When your code needs to **work with multiple product families** (e.g., UI for Windows vs Mac)
* You want to **switch implementations** easily (e.g., MySQL vs MongoDB DAOs)
* You want to **enforce consistency** among objects used together

---

### 🔹 **Real-Life Analogy:**

> A "Furniture Factory" can create a **Chair**, **Sofa**, and **Table**.
> There can be VictorianFurnitureFactory and ModernFurnitureFactory — each creates a consistent set of furniture.

---

### ✅ **Java Example**

#### 1. **Product Interfaces**

```java
interface Button {
    void render();
}

interface Checkbox {
    void check();
}
```

#### 2. **Concrete Products**

```java
class WindowsButton implements Button {
    public void render() { System.out.println("Windows Button"); }
}

class MacButton implements Button {
    public void render() { System.out.println("Mac Button"); }
}

class WindowsCheckbox implements Checkbox {
    public void check() { System.out.println("Windows Checkbox"); }
}

class MacCheckbox implements Checkbox {
    public void check() { System.out.println("Mac Checkbox"); }
}
```

#### 3. **Abstract Factory Interface**

```java
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}
```

#### 4. **Concrete Factories**

```java
class WindowsFactory implements GUIFactory {
    public Button createButton() { return new WindowsButton(); }
    public Checkbox createCheckbox() { return new WindowsCheckbox(); }
}

class MacFactory implements GUIFactory {
    public Button createButton() { return new MacButton(); }
    public Checkbox createCheckbox() { return new MacCheckbox(); }
}
```

#### 5. **Client Code**

```java
class Application {
    private final Button button;
    private final Checkbox checkbox;

    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }

    public void run() {
        button.render();
        checkbox.check();
    }
}

public class Main {
    public static void main(String[] args) {
        GUIFactory factory = new MacFactory(); // or WindowsFactory
        Application app = new Application(factory);
        app.run();
    }
}
```

---

### ✅ Summary Line for Interview:

> "The Abstract Factory Pattern provides an interface to create families of related objects without binding to specific implementations — useful when consistency across families is required, like UI components or DB integrations."
