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
