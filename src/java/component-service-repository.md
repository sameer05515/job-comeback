### ✅ Difference between `@Component`, `@Service`, and `@Repository` in Spring

All three are **stereotype annotations** and register the class as a Spring **bean**, but they serve different **semantic roles** and have **additional behaviors**.

---

### ✅ 1. `@Component`

* Generic stereotype for **any Spring-managed component**
* Can be used for **utility classes, helpers**, etc.

```java
@Component
public class UtilityService { ... }
```

---

### ✅ 2. `@Service`

* Specialization of `@Component`
* Marks class as **business logic/service layer**
* Helps in **AOP (Aspect-Oriented Programming)** — Spring can apply cross-cutting concerns like logging or transactions here.

```java
@Service
public class OrderService { ... }
```

---

### ✅ 3. `@Repository`

* Specialization of `@Component`
* Marks class as **DAO/repository layer**
* Adds **exception translation**:

  * Converts `SQLException` to `DataAccessException`

```java
@Repository
public class UserRepository { ... }
```

---

### ✅ Summary Table

| Annotation    | Purpose           | Layer             | Extra Behavior               |
| ------------- | ----------------- | ----------------- | ---------------------------- |
| `@Component`  | Generic bean      | Any               | None                         |
| `@Service`    | Business logic    | Service layer     | AOP proxying support         |
| `@Repository` | Data access (DAO) | Persistence layer | Exception translation (JDBC) |

---

### ✅ Bonus Tip for Interviews:

All 3 get picked up during **component scanning** due to `@ComponentScan`. The difference is mostly **semantic + some framework-specific behaviors**.

---

Type:

* `qna` → more Spring core interview Q\&A
* `bean-inject` → difference between bean injection styles
* `custom` → when to create custom annotations
* 
