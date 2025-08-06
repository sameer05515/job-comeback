In Java 8, `Predicate<T>` is a functional interface in `java.util.function` package. It represents a boolean-valued function of one argument — often used in filtering collections.

---

### ✅ Syntax:

```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}
```

---

### ✅ Example: Filter even numbers using Predicate

```java
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateDemo {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(10, 15, 20, 25, 30);

        Predicate<Integer> isEven = n -> n % 2 == 0;

        List<Integer> evens = numbers.stream()
                                     .filter(isEven)
                                     .collect(Collectors.toList());

        System.out.println("Even numbers: " + evens);
    }
}
```

---

### ✅ Useful Methods:

* `and()`, `or()`, `negate()` — to combine predicates.

```java
Predicate<String> startsWithA = s -> s.startsWith("A");
Predicate<String> endsWithZ = s -> s.endsWith("Z");

Predicate<String> combined = startsWithA.and(endsWithZ);
```

Let me know if you want examples using `removeIf()`, `filter()`, or combining multiple `Predicate`s.


---
---

# please share examples using removeIf(), filter(), or combining multiple Predicates.

Here are Java 8+ examples demonstrating usage of `Predicate<T>` with `removeIf()`, `filter()`, and combining multiple predicates:

---

### ✅ 1. `removeIf()` with Predicate

```java
import java.util.*;

public class PredicateRemoveIf {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>(List.of("Ankit", "Bob", "Arun", "Alice", "John"));

        // Remove names that start with 'A'
        names.removeIf(name -> name.startsWith("A"));

        System.out.println("After removeIf: " + names);
    }
}
```

---

### ✅ 2. `filter()` with Predicate

```java
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateFilter {
    public static void main(String[] args) {
        List<Integer> nums = List.of(5, 12, 3, 19, 6, 8);

        Predicate<Integer> greaterThanFive = n -> n > 5;

        List<Integer> filtered = nums.stream()
                                     .filter(greaterThanFive)
                                     .collect(Collectors.toList());

        System.out.println("Filtered: " + filtered);
    }
}
```

---

### ✅ 3. Combine Predicates using `and()`, `or()`, `negate()`

```java
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateCombine {
    public static void main(String[] args) {
        List<String> names = List.of("Arun", "Bob", "Ankit", "John", "Andrew");

        Predicate<String> startsWithA = name -> name.startsWith("A");
        Predicate<String> lengthGreaterThan4 = name -> name.length() > 4;

        // Combine using and()
        List<String> resultAnd = names.stream()
                                      .filter(startsWithA.and(lengthGreaterThan4))
                                      .collect(Collectors.toList());

        // Combine using or()
        List<String> resultOr = names.stream()
                                     .filter(startsWithA.or(lengthGreaterThan4))
                                     .collect(Collectors.toList());

        // Use negate()
        List<String> resultNegate = names.stream()
                                         .filter(startsWithA.negate())
                                         .collect(Collectors.toList());

        System.out.println("AND: " + resultAnd);         // [Ankit, Andrew]
        System.out.println("OR: " + resultOr);           // [Arun, Ankit, John, Andrew]
        System.out.println("Negate: " + resultNegate);   // [Bob, John]
    }
}
```

Let me know if you want to apply this on custom objects like `Employee`.
