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


---
---

#  Java Lambda Interview Q&A sheet with such short syntax tables + key rules.

Here’s a **Java Lambda Expressions Quick Interview Sheet** with **syntax variations** + **key rules** so you can revise fast.

---

## **1. Lambda Parameter Syntax Table**

| **Case**                                    | **Syntax**                                 | **Example**                                |
| ------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| **No parameters**                           | `() -> expression`                         | `() -> System.out.println("Hello")`        |
| **Single parameter (type inferred)**        | `x -> expression`                          | `n -> n * 2`                               |
| **Single parameter (type declared)**        | `(String s) -> expression`                 | `(String s) -> s.length()`                 |
| **Multiple parameters (type inferred)**     | `(a, b) -> expression`                     | `(x, y) -> x + y`                          |
| **Multiple parameters (type declared)**     | `(int a, int b) -> expression`             | `(int x, int y) -> x * y`                  |
| **Block body with return**                  | `(a, b) -> { return a + b; }`              | `(x, y) -> { return x + y; }`              |
| **Block body without return**               | `(a, b) -> { System.out.println(a + b); }` | `(x, y) -> { System.out.println(x * y); }` |
| **Single parameter (parentheses optional)** | `s -> s.toUpperCase()`                     | `name -> name.toUpperCase()`               |

---

## **2. Key Lambda Rules**

1. **Type inference** – Java compiler infers parameter types from context (target type from functional interface).
2. **Functional interface required** – Must have exactly **one abstract method** (e.g., `Runnable`, `Comparator`).
3. **Parentheses**:

   * Optional for **1 parameter without type**: `x -> x * x`
   * Mandatory for **0 or multiple parameters** or when **type is declared**.
4. **Return keyword**:

   * Omit `return` if single expression (no `{}`).
   * Must use `return` inside `{}` blocks.
5. **Variable capture**:

   * Can use variables from enclosing scope only if they are **final or effectively final**.
6. **`this` keyword** inside lambda refers to **enclosing class instance**, not lambda itself.
7. **No checked exceptions** unless declared in functional interface method.

---

## **3. Common Built-in Functional Interfaces**

| **Interface**       | **Method**    | **Example Lambda**                |
| ------------------- | ------------- | --------------------------------- |
| `Runnable`          | `run()`       | `() -> System.out.println("Run")` |
| `Callable<T>`       | `call()`      | `() -> "Done"`                    |
| `Predicate<T>`      | `test(T t)`   | `x -> x > 10`                     |
| `Function<T,R>`     | `apply(T t)`  | `x -> x.toString()`               |
| `Consumer<T>`       | `accept(T t)` | `s -> System.out.println(s)`      |
| `Supplier<T>`       | `get()`       | `() -> new Date()`                |
| `BiFunction<T,U,R>` | `apply(T,U)`  | `(a, b) -> a + b`                 |
| `BinaryOperator<T>` | `apply(T,T)`  | `(a, b) -> a * b`                 |

---

## **4. Quick Example**

```java
List<String> names = List.of("John", "Jane", "Mark");

names.stream()
     .filter(s -> s.startsWith("J"))        // Predicate
     .map(String::toUpperCase)              // Function
     .forEach(System.out::println);         // Consumer
```

---

If you want, I can prepare a **similar one-page Q\&A sheet for Java Streams** so you can revise **Lambdas + Streams** together in interviews. That combo is often tested.


---
---

# a **similar one-page Q\&A sheet for Java Streams** so you can revise **Lambdas + Streams** together in interviews

Here’s your **Java Streams Quick Interview Q\&A Sheet** — compact, syntax-focused, and interview-ready.

---

## **1. Stream Creation**

| **Source**         | **Example**                     |
| ------------------ | ------------------------------- |
| From `Collection`  | `list.stream()`                 |
| From `Arrays`      | `Arrays.stream(arr)`            |
| From `Stream.of()` | `Stream.of(1, 2, 3)`            |
| Infinite Stream    | `Stream.iterate(0, n -> n + 2)` |

---

## **2. Intermediate Operations (lazy)**

| **Operation**        | **Purpose**            | **Example**                  |
| -------------------- | ---------------------- | ---------------------------- |
| `filter`             | Keep matching elements | `.filter(x -> x > 5)`        |
| `map`                | Transform elements     | `.map(String::toUpperCase)`  |
| `flatMap`            | Flatten nested streams | `.flatMap(List::stream)`     |
| `distinct`           | Remove duplicates      | `.distinct()`                |
| `sorted()`           | Natural order          | `.sorted()`                  |
| `sorted(Comparator)` | Custom order           | `.sorted((a,b) -> b-a)`      |
| `peek`               | Debug (no change)      | `.peek(System.out::println)` |
| `limit`              | Take first N           | `.limit(5)`                  |
| `skip`               | Skip first N           | `.skip(3)`                   |

---

## **3. Terminal Operations (eager)**

| **Operation** | **Purpose**            | **Example**                       |
| ------------- | ---------------------- | --------------------------------- |
| `forEach`     | Consume elements       | `.forEach(System.out::println)`   |
| `collect`     | Mutable reduction      | `.collect(Collectors.toList())`   |
| `toArray`     | Convert to array       | `.toArray(String[]::new)`         |
| `reduce`      | Immutable reduction    | `.reduce(0, Integer::sum)`        |
| `count`       | Count elements         | `.count()`                        |
| `min/max`     | Find element           | `.max(Comparator.naturalOrder())` |
| `anyMatch`    | At least one match     | `.anyMatch(x -> x > 10)`          |
| `allMatch`    | All match              | `.allMatch(String::isEmpty)`      |
| `noneMatch`   | No matches             | `.noneMatch(String::isEmpty)`     |
| `findFirst`   | First element          | `.findFirst()`                    |
| `findAny`     | Any element (parallel) | `.findAny()`                      |

---

## **4. Collectors**

| **Collector**      | **Example**                                                |
| ------------------ | ---------------------------------------------------------- |
| `toList()`         | `.collect(Collectors.toList())`                            |
| `toSet()`          | `.collect(Collectors.toSet())`                             |
| `toMap()`          | `.collect(Collectors.toMap(k->k, v->v.length()))`          |
| `joining()`        | `.collect(Collectors.joining(", "))`                       |
| `groupingBy()`     | `.collect(Collectors.groupingBy(String::length))`          |
| `partitioningBy()` | `.collect(Collectors.partitioningBy(s -> s.length() > 3))` |
| `counting()`       | `.collect(Collectors.counting())`                          |
| `summarizingInt()` | `.collect(Collectors.summarizingInt(String::length))`      |

---

## **5. Parallel Streams**

```java
list.parallelStream()
    .filter(x -> x > 100)
    .forEach(System.out::println);
```

* Use when operations are **stateless**, **non-blocking**, and data size is large.
* Be careful with **thread safety** for shared mutable state.

---

## **6. Common Pitfalls**

* **Streams are single-use** – once consumed, can’t reuse.
* **Null elements** in source can break terminal ops (e.g., `map(String::length)`).
* Avoid **stateful operations** inside parallel streams.
* Don’t mix parallel + I/O heavy tasks — poor performance.

---

## **7. Quick Example**

```java
List<String> names = List.of("John", "Jane", "Mark", "John");

Map<String, Long> freq =
    names.stream()
         .collect(Collectors.groupingBy(s -> s, Collectors.counting()));

freq.forEach((k,v) -> System.out.println(k + " -> " + v));
```

---

If you want, I can now combine **this Streams sheet** with the **Lambdas sheet** into a **single double-sided interview cheat sheet** so you can print and carry it. That way, both topics are revised together in one glance.
