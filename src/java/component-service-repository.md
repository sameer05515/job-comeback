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


---
---

### ✅ What is a **Stereotype Annotation** in Spring?

A **stereotype annotation** in Spring is a **shortcut or semantic marker** used to declare a class as a **Spring-managed bean** and indicate its role (layer) in the application architecture.

---

### ✅ Common Stereotype Annotations

| Annotation        | Meaning / Layer        | Inherits From                   |
| ----------------- | ---------------------- | ------------------------------- |
| `@Component`      | Generic Spring bean    | -                               |
| `@Service`        | Business logic/service | `@Component`                    |
| `@Repository`     | DAO / persistence      | `@Component`                    |
| `@Controller`     | MVC web controller     | `@Component`                    |
| `@RestController` | API controller         | `@Controller` + `@ResponseBody` |

---

### ✅ Why Use Them?

* Help Spring **detect and register** classes during `@ComponentScan`
* Improve **readability and layering** in code
* Some (like `@Repository`, `@Service`) enable **extra behaviors**

  * `@Repository`: exception translation
  * `@Service`: AOP proxying
  * `@Controller`: request mapping & web features

---

### ✅ Example

```java
@Service
public class PaymentService { ... }

@Repository
public class PaymentDAO { ... }

@Controller
public class PaymentController { ... }
```

All three are auto-detected and registered as beans.

---

### ✅ Summary

* Stereotype annotations = **semantic roles + bean registration**
* All are specializations of `@Component`
* Used in layered Spring apps: Controller → Service → Repository

---

Reply with:

* `component-scan` → how Spring finds stereotype beans
* `bean-lifecycle` → full Spring bean lifecycle
* `qna` → Spring DI and stereotype annotations interview Q\&A
* 
