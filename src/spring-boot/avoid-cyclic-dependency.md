Bhai ye bhi **Spring interview ka common sawaal** hai. Cyclic dependency ka matlab hota hai ki do (ya zyada) beans ek doosre par directly/indirectly depend karte hain → `BeanCurrentlyInCreationException` aata hai.

---

## ✅ Ways to Avoid Cyclic Dependency in Spring Boot

### 1. **Constructor Injection vs Field Injection**

* **Cause**: Constructor injection me cyclic dependency easily break nahi hoti (circular constructor call).
* **Fix**: At least one dependency ko **setter injection** ya **field injection** se inject karo.

```java
@Component
class A {
    private B b;
    @Autowired
    public void setB(B b) { this.b = b; }
}
```

---

### 2. **Use `@Lazy` Annotation**

* Spring ko bolte ho ki dependency ko turant initialize na kare, jab zarurat ho tab load kare.

```java
@Component
class A {
    private final B b;
    @Autowired
    public A(@Lazy B b) { this.b = b; }
}
```

---

### 3. **Refactor Design**

* Agar 2 classes strongly dependent hain → SRP (Single Responsibility Principle) break ho raha hai.
* Common functionality ko ek **third bean/service** me nikal lo.

---

### 4. **Use Interfaces**

* Ek class ko directly dusri class par dependent na banao.
* Interface introduce karke loose coupling lao.

---

### 5. **Event Publishing (Spring Events)**

* Direct method call ke bajaye **`ApplicationEventPublisher`** use karo → decoupling hota hai.

---

## ✅ Interview Punchline

*"Cyclic dependencies usually indicate a design smell. In Spring, we can resolve them using `@Lazy`, setter/field injection, refactoring common logic, or by introducing interfaces/events. Best practice is to fix the design instead of relying only on workarounds."*

---

Bhai, chaho to main iska ek **flow diagram (Text-only)** bana dun jo cyclic dependency detection aur resolution ka flow dikhaye?
