Here are the **limitations of `var`** in Java (introduced in Java 10):

---

1. **Only for local variables**

   * You can’t use `var` for:

     * Method parameters
     * Constructor parameters
     * Class fields

   ```java
   var x = 10; // ✅ local variable
   ```

2. **Requires initializer**

   * `var` needs an explicit initializer so the compiler can infer the type.

   ```java
   var name; // ❌ error
   var name = "Prem"; // ✅
   ```

3. **Cannot be `null` without a type cast**

   ```java
   var obj = null; // ❌ error
   var obj = (String) null; // ✅
   ```

4. **Type is inferred at compile-time**

   * Once inferred, type is fixed (can’t change later).

   ```java
   var x = 10; // int
   x = "abc"; // ❌ error
   ```

5. **No arrays without initialization**

   ```java
   var arr = new int[5]; // ✅
   var arr; // ❌ error
   ```

6. **Not allowed in multiple variable declarations**

   ```java
   var a = 1, b = 2; // ❌ error
   ```

7. **Reduced readability** if overused

   * Overuse can make code harder to understand because the type isn’t explicit.

---

If you want, I can make a **"var – Best Practices vs Pitfalls"** table so you know when to use it in interviews and real projects.


---
---

# var – Best Practices vs Pitfalls" table so you know when to use it in interviews and real projects


Here’s your **`var` – Best Practices vs Pitfalls** interview-friendly table:

---

| **Aspect**                | **Best Practices (✅ Use var when…)**                                                                 | **Pitfalls (❌ Avoid var when…)**                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Readability**           | When the initializer makes the type obvious:<br>`var list = new ArrayList<String>();`                | When type is unclear or non-intuitive:<br>`var data = process();` (What is `data`?)                   |
| **Type Inference**        | For reducing redundancy with generic types:<br>`var map = new HashMap<String, List<Integer>>();`     | When using literals like `var num = 1;` (infers `int`, not `long`) — may cause unintended type issues |
| **Code Clarity**          | In small, local scopes where code is easy to scan                                                    | In public API method signatures or fields — `var` is **only** for local variables                     |
| **Refactoring Safety**    | When constructor clearly shows the type                                                              | When return type of method changes — inferred type may change silently                                |
| **Consistency**           | When working with streams/complex generics:<br>`var result = list.stream().filter(...).collect(...)` | When using it for variables far from their initialization — hurts maintainability                     |
| **Boilerplate Reduction** | Great for lambda/stream results or anonymous classes                                                 | Avoid for `null` initializations — compiler can’t infer type: `var obj = null;` ❌                     |
| **Interviews Tip**        | Show that you know `var` is **not** dynamic typing (still strongly typed at compile time)            | Avoid claiming it makes Java “weakly typed” — it doesn’t                                              |

---

💡 **Key Rules for `var` in Java** (Java 10+):

1. **Local variables only** — can’t be used for method params, return types, fields.
2. Type is **inferred at compile time** and **cannot change**.
3. Improves readability *only* when the type is obvious from context.
4. Works well with generics, lambdas, and stream pipelines.
5. Avoid where it hides important type information.

---

If you like, I can make a **side-by-side code example** showing *good vs bad* `var` usage — very useful for interviews. Would you like me to prepare that next?


---
---

# **side-by-side code example** showing *good vs bad* var usage

Here’s a **side-by-side `var` usage** comparison for interviews:

---

### ✅ Good `var` Usage

```java
public class VarExampleGood {
    public static void main(String[] args) {

        // Type is obvious from constructor
        var list = new ArrayList<String>();
        list.add("Apple");

        // Works well with generics
        var map = new HashMap<String, Integer>();
        map.put("Count", 1);

        // Reduces boilerplate in streams
        var filtered = list.stream()
                           .filter(s -> s.startsWith("A"))
                           .toList();

        // Anonymous class
        var runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("Running");
            }
        };

        System.out.println(filtered);
    }
}
```

---

### ❌ Bad `var` Usage

```java
public class VarExampleBad {
    public static void main(String[] args) {

        // Type not obvious — what is returned by process()?
        var result = process();  // Hides important info

        // Infers int, but developer wanted long
        var num = 1; // int, may cause overflow later

        // Far from initialization — hard to understand later
        var temp = complexCalculation();
        // ... many lines later ...
        System.out.println(temp);

        // Can't use with null — compiler error
        // var obj = null; ❌
    }

    static Object process() {
        return "data";
    }

    static double complexCalculation() {
        return 42.0;
    }
}
```

---

💡 **Interview tip:**
When explaining, emphasize that **`var` doesn't make Java dynamically typed** — the compiler infers the type **once** and it never changes.

---

I can also prepare a **“Good vs Bad” quick-reference table** alongside this code so you can revise it even faster. Would you like me to?
