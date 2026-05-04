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
