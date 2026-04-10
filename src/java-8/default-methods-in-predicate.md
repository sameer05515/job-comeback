In Java 8, `Predicate<T>` (from java.util.function) provides **default methods** to combine and manipulate predicates.

### 🔹 Core Default Methods

```java
import java.util.function.Predicate;

public class Demo {
    public static void main(String[] args) {

        Predicate<Integer> isEven = x -> x % 2 == 0;
        Predicate<Integer> isGreaterThan10 = x -> x > 10;

        // 1. AND
        Predicate<Integer> andPredicate = isEven.and(isGreaterThan10);
        System.out.println(andPredicate.test(12)); // true

        // 2. OR
        Predicate<Integer> orPredicate = isEven.or(isGreaterThan10);
        System.out.println(orPredicate.test(9)); // false

        // 3. NEGATE
        Predicate<Integer> negatePredicate = isEven.negate();
        System.out.println(negatePredicate.test(3)); // true

        // 4. IS EQUAL (static method, not default)
        Predicate<String> isEqual = Predicate.isEqual("Prem");
        System.out.println(isEqual.test("Prem")); // true
    }
}
```

---

### 🔥 Summary (quick interview ready)

```java
// Default methods in Predicate
p1.and(p2)     // both true
p1.or(p2)      // any true
p1.negate()    // reverse result

// Static method
Predicate.isEqual(obj)
```

---

### 🧠 One-liner memory trick

👉 **AND = both pass, OR = any pass, NEGATE = flip result**

---

If you want, I can give tricky interview questions on Predicate chaining (very commonly asked).


---
---

# Please give tricky interview questions on Predicate chaining (very commonly asked).

Here are **tricky Predicate chaining interview questions** (code-heavy, minimal talk) — try predicting output before running 👇

---

## 🔥 Q1: Order matters (AND + NEGATE)

```java id="q1x9a"
import java.util.function.Predicate;

public class Q1 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> x > 5;
        Predicate<Integer> p2 = x -> x % 2 == 0;

        Predicate<Integer> result1 = p1.and(p2).negate();
        Predicate<Integer> result2 = p1.and(p2.negate());

        System.out.println(result1.test(8)); // ?
        System.out.println(result2.test(8)); // ?
    }
}
```

---

## 🔥 Q2: Short-circuit behavior

```java id="q2k3p"
import java.util.function.Predicate;

public class Q2 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> {
            System.out.println("p1");
            return x > 10;
        };

        Predicate<Integer> p2 = x -> {
            System.out.println("p2");
            return x % 2 == 0;
        };

        Predicate<Integer> result = p1.and(p2);

        System.out.println(result.test(5)); // Output order?
    }
}
```

---

## 🔥 Q3: OR chaining trap

```java id="q3z8m"
import java.util.function.Predicate;

public class Q3 {
    public static void main(String[] args) {

        Predicate<String> p1 = s -> s.startsWith("A");
        Predicate<String> p2 = s -> s.endsWith("Z");

        Predicate<String> result = p1.or(p2).and(p1.negate());

        System.out.println(result.test("ABZ")); // ?
    }
}
```

---

## 🔥 Q4: Predicate reuse confusion

```java id="q4v2r"
import java.util.function.Predicate;

public class Q4 {
    public static void main(String[] args) {

        Predicate<Integer> p = x -> x > 5;

        p = p.and(x -> x < 20);

        System.out.println(p.test(10)); // ?
        System.out.println(p.test(25)); // ?
    }
}
```

---

## 🔥 Q5: isEqual + null trap

```java id="q5h7t"
import java.util.function.Predicate;

public class Q5 {
    public static void main(String[] args) {

        Predicate<String> p = Predicate.isEqual(null);

        System.out.println(p.test(null));   // ?
        System.out.println(p.test("ABC"));  // ?
    }
}
```

---

## 🔥 Q6: Chaining with multiple negates

```java id="q6n4c"
import java.util.function.Predicate;

public class Q6 {
    public static void main(String[] args) {

        Predicate<Integer> p = x -> x > 10;

        Predicate<Integer> result = p.negate().negate().and(x -> x < 20);

        System.out.println(result.test(15)); // ?
        System.out.println(result.test(25)); // ?
    }
}
```

---

## 🔥 Q7: Hidden precedence (important)

```java id="q7p1w"
import java.util.function.Predicate;

public class Q7 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> x > 5;
        Predicate<Integer> p2 = x -> x < 15;
        Predicate<Integer> p3 = x -> x % 2 == 0;

        Predicate<Integer> result = p1.and(p2).or(p3);

        System.out.println(result.test(4));  // ?
        System.out.println(result.test(7));  // ?
    }
}
```

---

## 🔥 Q8: Real-world filter (Streams + Predicate)

```java id="q8d9s"
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Q8 {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(3, 7, 12, 18, 21);

        Predicate<Integer> p = x -> x > 10;
        Predicate<Integer> q = x -> x % 3 == 0;

        List<Integer> result = list.stream()
                .filter(p.and(q.negate()))
                .collect(Collectors.toList());

        System.out.println(result); // ?
    }
}
```

---

## 💥 Want next level?

I can give:

* 💣 **MCQ traps (Amazon / Infosys level)**
* 💣 **Stream + Predicate combo puzzles**
* 💣 **Custom Predicate builder design (very asked in senior roles)**

Just say: **“level up”** 🚀


---
---

# Level Up

Level up 🚀 — **real interview-grade Predicate chaining traps + patterns (Streams + design)**

---

## 💣 Q9: Complex chaining (mental model breaker)

```java id="q9a2x"
import java.util.function.Predicate;

public class Q9 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> x > 5;
        Predicate<Integer> p2 = x -> x < 20;
        Predicate<Integer> p3 = x -> x % 2 == 0;

        Predicate<Integer> result =
                p1.and(p2.or(p3.negate())).negate();

        System.out.println(result.test(10)); // ?
        System.out.println(result.test(21)); // ?
    }
}
```

---

## 💣 Q10: Stream + Predicate reuse (side-effect trap)

```java id="q10s4k"
import java.util.*;
import java.util.function.Predicate;

public class Q10 {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(5, 10, 15, 20);

        Predicate<Integer> p = x -> x > 10;

        list.stream()
            .filter(p)
            .peek(x -> System.out.print(x + " "))
            .filter(p.negate())
            .forEach(System.out::print); // ?
    }
}
```

---

## 💣 Q11: Dynamic Predicate Builder (VERY IMPORTANT)

```java id="q11builder"
import java.util.function.Predicate;

class Employee {
    int age;
    String dept;

    Employee(int age, String dept) {
        this.age = age;
        this.dept = dept;
    }
}

public class Q11 {
    public static void main(String[] args) {

        Predicate<Employee> p = e -> true; // base

        p = p.and(e -> e.age > 25);
        p = p.and(e -> "IT".equals(e.dept));

        Employee e1 = new Employee(30, "IT");
        Employee e2 = new Employee(22, "IT");

        System.out.println(p.test(e1)); // ?
        System.out.println(p.test(e2)); // ?
    }
}
```

---

## 💣 Q12: Predicate vs Function confusion

```java id="q12fn"
import java.util.function.*;

public class Q12 {
    public static void main(String[] args) {

        Predicate<String> p = s -> s.length() > 3;

        Function<String, Boolean> f = p::test;

        System.out.println(f.apply("Java")); // ?
        System.out.println(p.test("Go"));    // ?
    }
}
```

---

## 💣 Q13: Multiple OR chaining (short-circuit mastery)

```java id="q13or"
import java.util.function.Predicate;

public class Q13 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> {
            System.out.print("A ");
            return x > 10;
        };

        Predicate<Integer> p2 = x -> {
            System.out.print("B ");
            return x > 5;
        };

        Predicate<Integer> p3 = x -> {
            System.out.print("C ");
            return x > 1;
        };

        Predicate<Integer> result = p1.or(p2).or(p3);

        System.out.println(result.test(7)); // print order?
    }
}
```

---

## 💣 Q14: Real-world filter builder (production pattern)

```java id="q14prod"
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

class User {
    int age;
    String city;
    boolean active;

    User(int age, String city, boolean active) {
        this.age = age;
        this.city = city;
        this.active = active;
    }
}

public class Q14 {
    public static void main(String[] args) {

        List<User> users = Arrays.asList(
                new User(25, "Delhi", true),
                new User(35, "Mumbai", false),
                new User(40, "Delhi", true)
        );

        Predicate<User> filter = u -> true;

        // dynamic conditions
        filter = filter.and(u -> u.age > 30);
        filter = filter.and(u -> "Delhi".equals(u.city));
        filter = filter.and(u -> u.active);

        List<User> result = users.stream()
                .filter(filter)
                .collect(Collectors.toList());

        System.out.println(result.size()); // ?
    }
}
```

---

## 💣 Q15: Negate trap with OR

```java id="q15trap"
import java.util.function.Predicate;

public class Q15 {
    public static void main(String[] args) {

        Predicate<Integer> p1 = x -> x > 10;
        Predicate<Integer> p2 = x -> x < 5;

        Predicate<Integer> result = p1.or(p2).negate();

        System.out.println(result.test(3));  // ?
        System.out.println(result.test(7));  // ?
        System.out.println(result.test(15)); // ?
    }
}
```

---

## ⚡ Ultra-Important Patterns (remember)

```java id="patterns"
// 1. Always start dynamic predicate with TRUE
Predicate<T> p = t -> true;

// 2. AND chaining (incremental filtering)
p = p.and(condition);

// 3. OR chaining (fallback conditions)
p = p.or(condition);

// 4. Negate carefully (wrap logic mentally)
p.negate();

// 5. Short-circuit:
// AND -> stops if false
// OR  -> stops if true
```

---

## 🚀 Next Level (Senior/Architect)

If you want, I’ll go deeper into:

* 🔥 Custom Predicate DSL (like Spring Specification)
* 🔥 Combining Predicate + Comparator + Streams
* 🔥 Performance traps (boxing, lambda allocations)
* 🔥 Real interview case: **search API filter builder**

Just say: **“architect level”** 💀


---
---

# Architect Level

Alright 💀 — **Architect Level: Predicate DSL + Real System Design (Java 8+)**

---

## 🔥 1. Generic Predicate Builder (Reusable DSL)

```java id="arch1dsl"
import java.util.function.Predicate;

public class PredicateBuilder<T> {

    private Predicate<T> predicate;

    private PredicateBuilder() {
        this.predicate = t -> true;
    }

    public static <T> PredicateBuilder<T> builder() {
        return new PredicateBuilder<>();
    }

    public PredicateBuilder<T> and(Predicate<T> p) {
        predicate = predicate.and(p);
        return this;
    }

    public PredicateBuilder<T> or(Predicate<T> p) {
        predicate = predicate.or(p);
        return this;
    }

    public PredicateBuilder<T> not(Predicate<T> p) {
        predicate = predicate.and(p.negate());
        return this;
    }

    public Predicate<T> build() {
        return predicate;
    }
}
```

---

## 🔥 2. Real Entity + Dynamic Filter (Search API style)

```java id="arch2entity"
class Product {
    String name;
    String category;
    double price;
    boolean inStock;

    Product(String n, String c, double p, boolean s) {
        name = n; category = c; price = p; inStock = s;
    }
}
```

---

## 🔥 3. Request DTO (API input simulation)

```java id="arch3dto"
class ProductFilterRequest {
    String category;
    Double minPrice;
    Double maxPrice;
    Boolean inStock;
}
```

---

## 🔥 4. Build Dynamic Predicate (CORE INTERVIEW LOGIC)

```java id="arch4core"
import java.util.function.Predicate;

public class ProductPredicate {

    public static Predicate<Product> build(ProductFilterRequest req) {

        PredicateBuilder<Product> builder = PredicateBuilder.builder();

        if (req.category != null) {
            builder.and(p -> p.category.equalsIgnoreCase(req.category));
        }

        if (req.minPrice != null) {
            builder.and(p -> p.price >= req.minPrice);
        }

        if (req.maxPrice != null) {
            builder.and(p -> p.price <= req.maxPrice);
        }

        if (req.inStock != null) {
            builder.and(p -> p.inStock == req.inStock);
        }

        return builder.build();
    }
}
```

---

## 🔥 5. Usage (Service Layer Simulation)

```java id="arch5usage"
import java.util.*;
import java.util.stream.Collectors;

public class Demo {
    public static void main(String[] args) {

        List<Product> list = Arrays.asList(
                new Product("iPhone", "Mobile", 80000, true),
                new Product("Samsung", "Mobile", 50000, false),
                new Product("MacBook", "Laptop", 150000, true)
        );

        ProductFilterRequest req = new ProductFilterRequest();
        req.category = "Mobile";
        req.minPrice = 60000.0;
        req.inStock = true;

        List<Product> result = list.stream()
                .filter(ProductPredicate.build(req))
                .collect(Collectors.toList());

        result.forEach(p -> System.out.println(p.name)); // ?
    }
}
```

---

## 💣 6. EXTREME: Combine Predicate + Comparator (Sorting + Filtering)

```java id="arch6combo"
import java.util.*;
import java.util.function.Predicate;

public class Combo {
    public static void main(String[] args) {

        List<Product> list = Arrays.asList(
                new Product("A", "Mobile", 30000, true),
                new Product("B", "Mobile", 70000, true),
                new Product("C", "Mobile", 50000, true)
        );

        Predicate<Product> filter = p -> p.price > 40000;

        list.stream()
            .filter(filter)
            .sorted(Comparator.comparingDouble(p -> p.price))
            .forEach(p -> System.out.println(p.name));
    }
}
```

---

## 💣 7. Performance Trap (IMPORTANT)

```java id="arch7perf"
// BAD ❌ (creates new lambda each time)
list.stream().filter(x -> x > 10).filter(x -> x < 20);

// BETTER ✅ (reuse predicate)
Predicate<Integer> p = x -> x > 10 && x < 20;
list.stream().filter(p);
```

---

## 💣 8. Specification Pattern (Spring-like thinking)

```java id="arch8spec"
interface Specification<T> {
    boolean test(T t);

    default Specification<T> and(Specification<T> other) {
        return t -> this.test(t) && other.test(t);
    }

    default Specification<T> or(Specification<T> other) {
        return t -> this.test(t) || other.test(t);
    }
}
```

---

## 🧠 Architect Insights (INTERVIEW GOLD)

```java id="arch9notes"
// 1. Predicate = behavior, not data
// 2. Always build dynamically (avoid if-else explosion)
// 3. Combine using AND/OR like query engine
// 4. Same concept used in:
//    - Spring Data JPA Specification
//    - QueryDSL
//    - Elasticsearch filters
// 5. Keep predicates reusable + composable
```

---

## 🔥 Real Interview Question They Ask

👉 “Design flexible search API without 20 if-else conditions”

Your answer:

* Use Predicate Builder ✅
* Dynamic chaining ✅
* Reusable filters ✅
* Stream pipeline ✅

---

## 🚀 If you want NEXT LEVEL++

I can push you into:

* 💀 **Spring JPA Specification (real DB queries)**
* 💀 **QueryDSL style builder**
* 💀 **ElasticSearch filter mapping**
* 💀 **Multi-field OR/AND nested groups (hardest)**

Just say: **“god level”** 😈
