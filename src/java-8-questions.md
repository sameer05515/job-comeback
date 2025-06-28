Here are 🔥 **Java 8 Only Interview Questions** – focused purely on Java 8 features (no Spring, no Java 11+):

---

### ✅ **Basic Java 8 Interview Questions**

1. **What are the key features introduced in Java 8?**

2. **What is a Functional Interface?**

> Name a few built-in ones from `java.util.function`.

3. **How do Lambda Expressions improve code readability?**

4. **What is the syntax of a Lambda Expression?**

```java
(x, y) -> x + y
```

5. **What are method references? When to use them?**

```java
System.out::println
```

6. **What is the Optional class used for? How is it better than null checks?**

---

### ✅ **Stream API Questions**

7. **What is the Stream API? How is it different from Collections?**

8. **Explain the difference between `map()` and `flatMap()`.**

9. **What is the difference between intermediate and terminal operations?**

10. **How does lazy evaluation work in streams?**

11. **How to filter and sort a list using streams?**

12. **What does `reduce()` do in Java 8?**

13. **How to count duplicate elements in a list using streams?**

14. **How to convert a List to a Map using streams?**

---

### ✅ **Advanced Java 8 Q\&A**

15. **How do you avoid `ConcurrentModificationException` using streams?**

16. **What are default and static methods in interfaces? Why introduced in Java 8?**

17. **Can we override default methods? What if two interfaces have the same default method?**

18. **Explain `Predicate`, `Function`, `Consumer`, and `Supplier` interfaces.**

19. **What is the difference between `findFirst()` and `findAny()`?**

20. **How does `parallelStream()` work? When should you avoid using it?**

---

### ✅ Optional + Real Use

21. **How to use `Optional.map()`, `Optional.filter()` in chaining?**

22. **What happens if you call `get()` on an empty `Optional`?**

23. **How to throw custom exception if `Optional` is empty?**

```java
opt.orElseThrow(() -> new RuntimeException("Not found"));
```

---

Reply with:

* `mcq-java8` → Java 8 multiple choice quiz
* `code-task` → Java 8 coding challenges
* `stream-qna` → focused stream Q\&A
* `interview-set2` → 20 more Java 8-only questions
* 
