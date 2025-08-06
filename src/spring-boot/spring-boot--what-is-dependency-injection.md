**Dependency Injection (DI)** is a design pattern used to achieve **loose coupling** between classes by injecting their dependencies from outside rather than creating them internally.

---

### 🔧 Example Without DI (Tight Coupling):

```java
class Car {
    Engine engine = new Engine();  // tightly coupled
}
```

---

### ✅ With Dependency Injection:

```java
class Car {
    private Engine engine;

    // Dependency injected via constructor
    Car(Engine engine) {
        this.engine = engine;
    }
}
```

Now, `Car` doesn't create its own `Engine`. You can inject any engine (e.g., PetrolEngine, DieselEngine), making it more testable and flexible.

---

### 🧰 In Spring Boot:

Spring automatically injects dependencies using annotations like:

```java
@Component
class Engine {}

@Service
class Car {
    private final Engine engine;

    @Autowired
    public Car(Engine engine) {
        this.engine = engine;
    }
}
```

---

### ✅ Types of Dependency Injection in Spring:

* Constructor Injection (Recommended)
* Setter Injection
* Field Injection

---

Let me know if you'd like a working Spring Boot example.
