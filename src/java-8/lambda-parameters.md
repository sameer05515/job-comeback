In Java, **lambda parameters** are the input variables you pass to a **lambda expression**, similar to method parameters.

---

### **Syntax**

```java
(parameters) -> expression
(parameters) -> { statements }
```

---

### **Rules for Lambda Parameters**

1. **Type declaration is optional**

   * The compiler can infer parameter types from the target functional interface.

   ```java
   (String name) -> System.out.println(name);
   name -> System.out.println(name); // type inferred
   ```

2. **Parentheses can be omitted** if there's **exactly one parameter** and no type declared.

   ```java
   name -> System.out.println(name);
   ```

3. **Multiple parameters require parentheses**.

   ```java
   (a, b) -> a + b;
   ```

4. **If types are declared, all must be declared**.

   ```java
   (String a, String b) -> a + b;  // ✅
   (a, String b) -> a + b;        // ❌ Error
   ```

5. **No `var` and explicit type mixing** — but since Java 11, you can use `var` for all parameters (must be for all, not mixed).

   ```java
   (var a, var b) -> a + b; // ✅ Java 11+
   ```

6. **Parameters act like `final`** — you cannot reassign them inside the lambda.

   ```java
   name -> {
       // name = "Other"; // ❌ Error
       System.out.println(name);
   };
   ```

---

### **Example**

```java
import java.util.*;

public class LambdaParamsExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane", "Mark");

        // Single parameter, no type
        names.forEach(name -> System.out.println(name));

        // Multiple parameters with type
        Comparator<String> comp = (String a, String b) -> a.compareToIgnoreCase(b);
        names.sort(comp);

        // Using var (Java 11+)
        names.forEach((var n) -> System.out.println(n.toUpperCase()));
    }
}
```

---

If you want, I can also make a **table of lambda parameter syntax variations** for quick interview revision. That would make it easy to memorize.

---
---

# Table of lambda parameter syntax variations for quick interview revision

Here’s a **quick reference table** for Java lambda parameter syntax variations you can revise before interviews:

| **Scenario**                                                 | **Syntax**                         | **Example**                                  |
| ------------------------------------------------------------ | ---------------------------------- | -------------------------------------------- |
| **Single parameter, type omitted, parentheses omitted**      | `param -> expression`              | `n -> System.out.println(n)`                 |
| **Single parameter, type omitted, parentheses present**      | `(param) -> expression`            | `(n) -> System.out.println(n)`               |
| **Single parameter, explicit type**                          | `(Type param) -> expression`       | `(String n) -> System.out.println(n)`        |
| **Multiple parameters, types omitted**                       | `(p1, p2) -> expression`           | `(a, b) -> a + b`                            |
| **Multiple parameters, explicit types**                      | `(Type p1, Type p2) -> expression` | `(String a, String b) -> a + b`              |
| **Multiple parameters, `var` (Java 11+)**                    | `(var p1, var p2) -> expression`   | `(var a, var b) -> a + b`                    |
| **Mixing `var` and inferred/explicit types (❌ Not allowed)** | `(var p1, Type p2)`                | ❌ Compile-time error                         |
| **Block body with multiple statements**                      | `(params) -> { /* code */ }`       | `(a, b) -> { int sum = a + b; return sum; }` |
| **No parameters**                                            | `() -> expression`                 | `() -> System.out.println("Hello")`          |

---

If you want, I can also prepare a **Java Lambda Interview Q\&A sheet** with such short syntax tables + key rules. That would cover 90% of what’s asked in interviews.
