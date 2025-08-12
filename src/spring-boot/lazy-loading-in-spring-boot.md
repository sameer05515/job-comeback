In **Spring Boot**, *lazy loading* means that beans are **not created at application startup**, but **only when they are first needed**.

---

## **1. Normal (Eager) Loading**

* By default, Spring loads all singleton beans eagerly at application startup.
* This ensures dependencies are ready but increases **startup time**.

---

## **2. Lazy Loading**

### **Enable globally**

```java
@SpringBootApplication
@EnableLazyInitialization
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

### **Enable for a specific bean**

```java
@Component
@Lazy
public class HeavyBean {
    public HeavyBean() {
        System.out.println("HeavyBean created");
    }
}
```

### **Inject with Lazy**

```java
@Component
public class MyService {
    @Autowired
    @Lazy
    private HeavyBean heavyBean;
}
```

* Here, `HeavyBean` is **not created** until `heavyBean` is accessed in `MyService`.

---

## **3. Why use lazy loading?**

✅ Reduces **startup time**
✅ Saves **memory** when certain beans are rarely used
❌ If used incorrectly, may cause **unexpected delays** at runtime when the bean is first accessed

---

If you want, I can give you a **short Spring Boot project** that clearly logs the bean creation time so you can *visually see* the difference between eager and lazy loading. That’s great for interviews.
