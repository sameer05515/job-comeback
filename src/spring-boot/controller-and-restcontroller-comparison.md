**`@Controller` vs `@RestController` in Spring Boot**

| Feature                 | `@Controller`                                                                                                                                           | `@RestController`                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Purpose**             | Used to define a web controller that returns **views (HTML/JSP)**.                                                                                      | Used to define a REST API controller that returns **JSON/XML**.                                                  |
| **Return Value**        | Returns a **view name** (resolved by `ViewResolver`) or `ModelAndView`.                                                                                 | Returns **data directly** (usually JSON) to the HTTP response body.                                              |
| **Annotation Behavior** | Combination of `@Controller` + you must use `@ResponseBody` for JSON/XML responses.                                                                     | Internally **`@Controller` + `@ResponseBody`**, so every method returns data directly.                           |
| **Example**             | `java @Controller public class MyCtrl { @GetMapping("/hello") public String hello(Model model) { model.addAttribute("msg", "Hi"); return "hello"; } } ` | `java @RestController public class MyRestCtrl { @GetMapping("/hello") public String hello() { return "Hi"; } } ` |
| **When to Use**         | When you’re building **server-side rendered** web pages (e.g., Thymeleaf, JSP).                                                                         | When you’re building **RESTful APIs**.                                                                           |

---

💡 **Shortcut rule for interviews**

* **HTML pages** → `@Controller`
* **JSON API** → `@RestController`

Do you want me to also prepare a **one-page Spring Boot annotations cheat sheet** like the Lambda + Streams one you liked earlier? That could pair well for interviews.


---
---

# **one-page Spring Boot annotations cheat sheet**

Here’s your **One-Page Spring Boot Annotations Cheat Sheet** for quick interview revision:

---

## **Spring Boot Annotations – Quick Reference**

### **1. Core Stereotype Annotations**

| Annotation        | Purpose                                                               |
| ----------------- | --------------------------------------------------------------------- |
| `@Component`      | Generic Spring bean.                                                  |
| `@Service`        | Marks service/business logic layer bean (specialized `@Component`).   |
| `@Repository`     | Marks DAO/repository bean, adds exception translation.                |
| `@Controller`     | MVC controller for returning views (HTML/JSP).                        |
| `@RestController` | Controller returning data (JSON/XML) → `@Controller + @ResponseBody`. |

---

### **2. Request Mapping**

| Annotation                                                                          | Purpose                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------- |
| `@RequestMapping(path, method)`                                                     | Map HTTP requests to handler methods.           |
| `@GetMapping` / `@PostMapping` / `@PutMapping` / `@DeleteMapping` / `@PatchMapping` | HTTP method-specific shortcuts.                 |
| `@PathVariable`                                                                     | Bind URI template variable to method parameter. |
| `@RequestParam`                                                                     | Bind query/form parameter to method parameter.  |
| `@RequestBody`                                                                      | Bind request JSON/XML to method parameter.      |
| `@ResponseBody`                                                                     | Bind method return value to HTTP response body. |

---

### **3. Dependency Injection**

| Annotation   | Purpose                                             |
| ------------ | --------------------------------------------------- |
| `@Autowired` | Inject bean by type (constructor, field, setter).   |
| `@Qualifier` | Select specific bean when multiple exist.           |
| `@Value`     | Inject property value from config.                  |
| `@Lazy`      | Delay bean initialization until first use.          |
| `@Primary`   | Mark preferred bean when multiple candidates exist. |

---

### **4. Configuration & Bean Definition**

| Annotation       | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `@Configuration` | Marks class with Spring bean definitions.            |
| `@Bean`          | Declares bean from method in `@Configuration` class. |
| `@ComponentScan` | Specify base packages for scanning beans.            |
| `@Import`        | Import additional `@Configuration` classes.          |

---

### **5. Spring Boot Specific**

| Annotation                                       | Purpose                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| `@SpringBootApplication`                         | Combines `@Configuration + @EnableAutoConfiguration + @ComponentScan`. |
| `@EnableAutoConfiguration`                       | Enable Spring Boot’s auto-config mechanism.                            |
| `@ConditionalOnProperty` / `@ConditionalOnClass` | Conditional bean creation.                                             |

---

### **6. Data & JPA**

| Annotation                                                | Purpose                                        |
| --------------------------------------------------------- | ---------------------------------------------- |
| `@Entity`                                                 | Marks JPA entity.                              |
| `@Id`                                                     | Primary key field.                             |
| `@GeneratedValue`                                         | Primary key generation strategy.               |
| `@Table` / `@Column`                                      | Map entity/table/column names.                 |
| `@OneToMany` / `@ManyToOne` / `@OneToOne` / `@ManyToMany` | Entity relationships.                          |
| `@Transactional`                                          | Marks method/class for transaction management. |

---

### **7. Validation**

| Annotation                            | Purpose                                 |
| ------------------------------------- | --------------------------------------- |
| `@Valid`                              | Trigger validation on method parameter. |
| `@NotNull`, `@Size`, `@Pattern`, etc. | Jakarta Bean Validation constraints.    |

---

✅ **Interview Tip:**
If the question is “What’s the difference between `@Controller` and `@RestController`?” — always mention **return type** (view vs JSON) and **`@ResponseBody` presence**.

---

If you want, I can prepare **a side-by-side “Spring Boot + Java Core” master sheet** so you can revise Lambdas, Streams, and Spring Boot annotations together in one glance before interviews. That way you don’t need three separate sheets.
