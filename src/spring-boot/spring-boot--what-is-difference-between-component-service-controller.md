In Spring, `@Component`, `@Service`, and `@Controller` are **stereotype annotations** used for **auto-detection and dependency injection**. They all make a class a **Spring-managed bean**, but differ in **semantics and use-case**.

---

### 🔸 `@Component`

* Generic stereotype for any Spring-managed component.
* Used when the class doesn’t fall into service/controller/repository category.

```java
@Component
public class FileUtil {
    public void compressFile(String file) { ... }
}
```

---

### 🔸 `@Service`

* Specialization of `@Component`.
* Indicates that the class holds **business logic** or **service layer code**.
* Helps with AOP and transaction management clarity.

```java
@Service
public class StudentService {
    public Student getById(String id) { ... }
}
```

---

### 🔸 `@Controller`

* Specialization of `@Component`.
* Indicates a **web controller** in the MVC pattern.
* Used with `@RequestMapping` and other mapping annotations.

```java
@Controller
public class StudentController {
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable String id) { ... }
}
```

---

### ✅ Summary Table

| Annotation    | Purpose             | Layer          | Notes                      |
| ------------- | ------------------- | -------------- | -------------------------- |
| `@Component`  | Generic Spring bean | Utility/Helper | Used when no specific role |
| `@Service`    | Business logic bean | Service        | Indicates service layer    |
| `@Controller` | Web request handler | Controller     | Used in Spring MVC apps    |

All are detected by **component scanning** and can be **autowired**.
