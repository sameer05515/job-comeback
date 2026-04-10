Code-first, minimal theory 👇

---

## 🔹 1. Basic Exception (Custom)

```java id="ex1"
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
```

---

## 🔹 2. Throw Exception (Service / Controller)

```java id="ex2"
@GetMapping("/employee/{id}")
public Employee getEmployee(@PathVariable int id) {
    return repo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
}
```

---

## 🔹 3. Global Exception Handler (`@RestControllerAdvice`)

```java id="ex3"
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponse("NOT_FOUND", ex.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGeneric(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse("ERROR", "Something went wrong"));
    }
}
```

---

## 🔹 4. Error Response DTO

```java id="ex4"
import java.time.LocalDateTime;

public class ErrorResponse {
    private String code;
    private String message;
    private LocalDateTime time = LocalDateTime.now();

    public ErrorResponse(String code, String message) {
        this.code = code;
        this.message = message;
    }

    // getters
}
```

---

## 🔹 5. Validation Exception Handling

```java id="ex5"
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<?> handleValidation(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getFieldErrors()
      .forEach(err -> errors.put(err.getField(), err.getDefaultMessage()));

    return ResponseEntity.badRequest().body(errors);
}
```

---

## 🔹 6. Example Request DTO with Validation

```java id="ex6"
import jakarta.validation.constraints.*;

public class EmployeeRequest {

    @NotBlank
    private String name;

    @Min(1)
    private int salary;

    // getters/setters
}
```

---

## 🔹 7. Controller with Validation

```java id="ex7"
@PostMapping("/employee")
public Employee create(@Valid @RequestBody EmployeeRequest req) {
    return service.save(req);
}
```

---

## 🔹 8. Clean JSON Response Example

```json id="ex8"
{
  "code": "NOT_FOUND",
  "message": "Employee not found",
  "time": "2026-04-10T12:00:00"
}
```

---

## 🔹 Interview One-Liner 🔥

```text id="ex9"
Spring Boot me exception handling @RestControllerAdvice + @ExceptionHandler se globally manage hota hai, jisse clean and consistent API error response milta hai.
```

---

Agar chaho toh main **production-grade setup (logging + traceId + custom error codes + Kafka DLQ)** bhi bana deta hoon 🚀


----

# what is difference between RestControllerAdvice and ControllerAdvice

Short, crisp + code 👇

---

## 🔹 Core Difference

```text
@ControllerAdvice  → Works with MVC (returns View OR JSON)
@RestControllerAdvice → @ControllerAdvice + @ResponseBody (always JSON)
```

---

## 🔹 1. `@ControllerAdvice`

* Used for **global exception handling**
* Can return **View (JSP/Thymeleaf)** OR **JSON**
* Need `@ResponseBody` manually for REST

```java id="ca1"
@ControllerAdvice
public class GlobalHandler {

    @ExceptionHandler(Exception.class)
    @ResponseBody // required for JSON
    public String handle(Exception ex) {
        return "Error: " + ex.getMessage();
    }
}
```

---

## 🔹 2. `@RestControllerAdvice`

* Specialized for **REST APIs**
* Automatically adds `@ResponseBody`
* Always returns **JSON response**

```java id="ca2"
@RestControllerAdvice
public class GlobalHandler {

    @ExceptionHandler(Exception.class)
    public Map<String, String> handle(Exception ex) {
        return Map.of("error", ex.getMessage());
    }
}
```

---

## 🔹 3. Internal Working

```java id="ca3"
// roughly equivalent
@RestControllerAdvice
=
@ControllerAdvice + @ResponseBody
```

---

## 🔹 4. When to Use

```text id="ca4"
Use @ControllerAdvice → MVC app (JSP/HTML views)
Use @RestControllerAdvice → REST API (JSON responses)
```

---

## 🔹 5. Real Example (Best Practice)

```java id="ca5"
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handle(ResourceNotFoundException ex) {
        return ResponseEntity.status(404)
                .body(Map.of("error", ex.getMessage()));
    }
}
```

---

## 🔹 Interview One-Liner 🔥

```text id="ca6"
@RestControllerAdvice is a convenience annotation that combines @ControllerAdvice and @ResponseBody, making it ideal for REST APIs.
```

---

Agar chaho toh main **Spring Boot full error-handling architecture (ProblemDetails + RFC7807 + logging + filters)** bhi bana deta hoon 🚀
