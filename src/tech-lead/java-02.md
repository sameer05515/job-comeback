### ✅ Common Spring Boot Anti-Patterns I Avoid

---

### 🔹 1. **Using `@Autowired` Everywhere (Field Injection)**

❌ **Field injection** hides dependencies & breaks testing
✅ Prefer **constructor injection**

```java
// ❌ Avoid
@Autowired
private UserService userService;

// ✅ Prefer
public UserController(UserService userService) {
    this.userService = userService;
}
```

---

### 🔹 2. **Fat Controller or Service Classes**

❌ Mixing too many responsibilities
✅ Follow **Single Responsibility Principle (SRP)**
Split into: `Service`, `Helper`, `Validator`, `Mapper`, etc.

---

### 🔹 3. **Too Many Configs in `application.properties`**

❌ Hard to manage/override
✅ Externalize configs to **Spring Cloud Config**, or break into profiles:

```yaml
application.yml
application-dev.yml
application-prod.yml
```

---

### 🔹 4. **Business Logic Inside Controller**

❌ Controllers should only handle request/response
✅ Move business logic to `Service` layer

---

### 🔹 5. **Direct Entity Exposure in APIs**

❌ Returning JPA `@Entity` → leaks DB model
✅ Use **DTOs** and **Mappers**

---

### 🔹 6. **Blocking Calls in Reactive Code**

❌ Mixing `Thread.sleep`, `.get()`, or JDBC in WebFlux
✅ Use **non-blocking libraries** like `R2DBC`, `WebClient`

---

### 🔹 7. **Improper Exception Handling**

❌ Throwing raw exceptions to clients
✅ Use `@ControllerAdvice` + global exception handlers

---

### 🔹 8. **Single Application Class for Everything**

❌ `@SpringBootApplication` file shouldn’t hold beans, logic
✅ Structure packages and isolate bean definitions

---

### 🔹 9. **Not Using Profiles or Environments**

❌ One config file for all
✅ Use `@Profile`, and `spring.profiles.active=dev`

---

### 🔹 10. **Silent Failures in Scheduled Jobs / Tasks**

❌ Swallowed exceptions crash tasks silently
✅ Add proper try-catch + logs or alerts

---

### ✅ Summary Line for Interview:

> "I avoid anti-patterns like field injection, fat controllers, exposing entities, and missing layers by following clean code, layered architecture, and profile-based configuration in Spring Boot."

---

Type:

* `anti-pattern-checklist` → quick review before code review
* `spring-clean-arch-template` → for well-structured Spring Boot apps


---
---

# anti-pattern-checklist

### ✅ Spring Boot Anti-Pattern Checklist (Quick Review)

Use this checklist to avoid common pitfalls while building Spring Boot apps:

---

#### 🧱 **Code Structure**

* [ ] Controllers are thin (no business logic)
* [ ] Services follow SRP (Single Responsibility Principle)
* [ ] DTOs used instead of exposing entities
* [ ] Configuration and constants separated into dedicated classes

---

#### 🔗 **Dependency Injection**

* [ ] No field injection (`@Autowired` on fields)
* [ ] Constructor-based injection used
* [ ] No circular dependencies between beans

---

#### ⚙️ **Configuration Management**

* [ ] `application.yml` or `.properties` is clean and environment-specific
* [ ] Profiles used properly (`@Profile`, `spring.profiles.active`)
* [ ] No hardcoded values; all configs externalized
* [ ] Secrets are not committed (e.g., passwords, keys)

---

#### 💥 **Exception Handling**

* [ ] Global exception handling via `@ControllerAdvice`
* [ ] No generic `Exception` catching without handling
* [ ] Custom exceptions used for business errors
* [ ] HTTP response codes mapped correctly

---

#### 📦 **Database Layer**

* [ ] No logic in repositories
* [ ] Use of Spring Data JPA (or MyBatis) over raw JDBC unless justified
* [ ] Entity-to-DTO mapping handled with MapStruct or manual mapper
* [ ] Transactions handled using `@Transactional` properly

---

#### 🔄 **API Design**

* [ ] Clear REST conventions followed (verbs, plural nouns)
* [ ] Input validation done using `@Valid` and `@Validated`
* [ ] Idempotency considered for PUT/DELETE
* [ ] OpenAPI/Swagger enabled for documentation

---

#### 🧪 **Testing**

* [ ] Unit tests and integration tests are separated
* [ ] Mockito used to mock dependencies, not real services
* [ ] Tests run on random port with `@SpringBootTest(webEnvironment = RANDOM_PORT)`
* [ ] Test config uses H2 or test containers

---

#### 🚫 **Common Mistakes**

* [ ] No business logic in controllers
* [ ] No blocking code inside WebFlux
* [ ] No `Thread.sleep`, `.get()`, `.join()` in reactive code
* [ ] Beans are not created dynamically with reflection or manually unless justified

---

#### 📈 **Monitoring & Observability**

* [ ] Spring Boot Actuator is enabled
* [ ] Health checks are exposed securely
* [ ] Logs include traceId / correlationId
* [ ] Metrics and alerts set up for critical flows

---

Let me know if you want:

* `printable-version`
* `team-review-template`
* `annotated-sample-code` showing these mistakes/fixes
