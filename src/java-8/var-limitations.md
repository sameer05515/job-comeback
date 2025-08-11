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
