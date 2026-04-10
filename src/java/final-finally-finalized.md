
## ✅ final vs finally vs finalize (Java)

### 1️⃣ `final` → keyword (restriction apply karta hai)

```java
// final variable → value change nahi hogi
final int x = 10;
// x = 20; // ❌ compile error

// final method → override nahi kar sakte
class A {
    final void show() {
        System.out.println("A show");
    }
}

class B extends A {
    // void show() {} ❌ compile error
}

// final class → inherit nahi kar sakte
final class Test {}

// class Child extends Test {} ❌ compile error
```

---

### 2️⃣ `finally` → exception handling block (always execute hota hai)

```java
try {
    int a = 10 / 0;
} catch (Exception e) {
    System.out.println("Exception");
} finally {
    System.out.println("Always runs");
}
```

Output:

```
Exception
Always runs
```

Even with return:

```java
static int test() {
    try {
        return 1;
    } finally {
        System.out.println("finally");
    }
}
```

---

### 3️⃣ `finalize()` → method (GC call karta hai before object destroy)

⚠️ Deprecated (Java 9+) — use nahi karna recommended.

```java
class Test {
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object destroyed");
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        t = null;
        System.gc();
    }
}
```

---

## 🔥 Interview One-Line Difference

| Feature     | final             | finally            | finalize   |
| ----------- | ----------------- | ------------------ | ---------- |
| Type        | keyword           | block              | method     |
| Use         | restriction       | exception handling | GC cleanup |
| Execute     | compile-time rule | always runs        | before GC  |
| Inheritance | control           | ❌                  | ❌          |

---

## 🚀 Memory Trick

```
final    → cannot change
finally  → always run
finalize → before destroy
```

---

If you want, I can also show **tricky interview programs (output based)** for this topic.


---
---

# yes

## 🔥 Tricky Interview Programs — `final`, `finally`, `finalize`

---

## 1️⃣ finally overrides return value (MOST ASKED)

```java
class Test {
    static int m() {
        try {
            return 10;
        } finally {
            return 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
20
```

👉 finally return dominates try return.

---

## 2️⃣ finally modifies variable but return already decided

```java
class Test {
    static int m() {
        int x = 10;
        try {
            return x;
        } finally {
            x = 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
10
```

👉 return value copied before finally executes.

---

## 3️⃣ finally executes even after exception

```java
class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (Exception e) {
            System.out.println("catch");
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
catch
finally
```

---

## 4️⃣ finally executes even with return

```java
class Test {
    static void m() {
        try {
            System.out.println("try");
            return;
        } finally {
            System.out.println("finally");
        }
    }

    public static void main(String[] args) {
        m();
    }
}
```

✅ Output

```
try
finally
```

---

## 5️⃣ finally does NOT execute (JVM shutdown)

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            System.exit(0);
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
```

👉 finally skipped because JVM stops.

---

## 6️⃣ final reference vs object modification

```java
import java.util.*;

class Test {
    public static void main(String[] args) {
        final List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);

        System.out.println(list);
    }
}
```

✅ Output

```
[10, 20]
```

👉 reference final, object mutable.

---

## 7️⃣ final variable must initialize

```java
class Test {
    final int x;

    Test() {
        x = 10;
    }

    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.x);
    }
}
```

✅ Output

```
10
```

---

## 8️⃣ finalize() execution not guaranteed ⚠️

```java
class Test {
    protected void finalize() {
        System.out.println("finalize called");
    }

    public static void main(String[] args) {
        Test t = new Test();
        t = null;
        System.gc();
        System.out.println("end");
    }
}
```

✅ Possible Output

```
end
finalize called
```

OR

```
end
```

👉 GC behavior unpredictable.

---

## 9️⃣ final method call polymorphism

```java
class A {
    final void show() {
        System.out.println("A");
    }
}

class B extends A { }

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}
```

✅ Output

```
A
```

---

## 🔟 finally with exception in finally (VERY TRICKY)

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            int a = 10 / 0;
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
finally
Exception in thread "main" java.lang.ArithmeticException
```

---

## 🧠 BONUS — return in try + finally both

```java
class Test {
    static int m() {
        try {
            return 1;
        } finally {
            return 2;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
2
```

---

## 🚀 Interview Gold Rule

```
finally always executes except:
1. System.exit()
2. JVM crash
3. Power failure
```

---

If you want, I can also share:

✅ 20 advanced output questions
✅ finalize + GC deep tricky scenarios
✅ Real company interview questions pack

Just tell me 👍


---
---

# Real company interview questions pack

## 🔥 Real Company Interview Questions Pack — `final`, `finally`, `finalize` (Output Based)

---

## 1️⃣ TCS / Infosys

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("A");
            int x = 10 / 0;
            System.out.println("B");
        } catch (Exception e) {
            System.out.println("C");
        } finally {
            System.out.println("D");
        }
        System.out.println("E");
    }
}
```

✅ Output

```
A
C
D
E
```

---

## 2️⃣ Wipro / Capgemini

```java
class Test {
    static int m() {
        try {
            return 10;
        } catch (Exception e) {
            return 20;
        } finally {
            return 30;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
30
```

---

## 3️⃣ Accenture (Very Popular)

```java
class Test {
    public static void main(String[] args) {
        final StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");
        System.out.println(sb);
    }
}
```

✅ Output

```
Hello World
```

---

## 4️⃣ Cognizant

```java
class Test {
    static int m() {
        int x = 5;
        try {
            return x;
        } finally {
            x = 10;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
5
```

---

## 5️⃣ HCL (Tricky finally)

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            return;
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
finally
```

---

## 6️⃣ IBM / Oracle

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            System.exit(0);
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
```

---

## 7️⃣ Amazon (Concept Based)

```java
class Test {
    final int x;

    Test() {
        x = 100;
    }

    public static void main(String[] args) {
        Test t = new Test();
        System.out.println(t.x);
    }
}
```

✅ Output

```
100
```

---

## 8️⃣ Flipkart / Product Companies

```java
class Test {
    protected void finalize() {
        System.out.println("finalize");
    }

    public static void main(String[] args) {
        Test t = new Test();
        t = null;
        System.gc();
        System.out.println("end");
    }
}
```

✅ Output (Not Guaranteed)

```
end
finalize
```

OR

```
end
```

---

## 9️⃣ Deloitte

```java
class Test {
    public static void main(String[] args) {
        try {
            int arr[] = new int[5];
            arr[10] = 50;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("A");
        } catch (Exception e) {
            System.out.println("B");
        } finally {
            System.out.println("C");
        }
    }
}
```

✅ Output

```
A
C
```

---

## 🔟 Mindtree (Return + finally modification)

```java
class Test {
    static String m() {
        String s = "Java";
        try {
            return s;
        } finally {
            s = "Python";
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
Java
```

---

# 🧠 SUPER IMPORTANT INTERVIEW RULES

```
1. final variable → value cannot change
2. final reference → object can change
3. finally → always executes
4. finally return overrides try return
5. finalize() → deprecated, GC dependent
```

---

# 🚀 Want Next Level?

I can share:

✅ 25 advanced MCQs (with traps)
✅ Spring Boot exception handling interview questions
✅ Java exception hierarchy tricky programs
✅ FAANG-level scenario questions

Just tell me 👍


---
---

#  Java exception hierarchy tricky programs

## 🔥 Java Exception Hierarchy — Tricky Programs (Output Based)

---

## 1️⃣ Catch Order Rule (Compile Error)

```java
class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (Exception e) {
            System.out.println("Exception");
        } catch (ArithmeticException e) { // ❌ unreachable
            System.out.println("Arithmetic");
        }
    }
}
```

✅ Result

```
Compile Time Error
```

👉 Parent catch before child → not allowed.

---

## 2️⃣ Correct Catch Order

```java
class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic");
        } catch (Exception e) {
            System.out.println("Exception");
        }
    }
}
```

✅ Output

```
Arithmetic
```

---

## 3️⃣ Finally Executes After Return

```java
class Test {
    static int m() {
        try {
            return 10;
        } finally {
            System.out.println("finally");
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
finally
10
```

---

## 4️⃣ Multiple Exceptions (Hierarchy Selection)

```java
class Test {
    public static void main(String[] args) {
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("NPE");
        } catch (RuntimeException e) {
            System.out.println("Runtime");
        } catch (Exception e) {
            System.out.println("Exception");
        }
    }
}
```

✅ Output

```
NPE
```

👉 Most specific catch executes.

---

## 5️⃣ Checked Exception Compile Rule

```java
import java.io.*;

class Test {
    public static void main(String[] args) {
        FileReader fr = new FileReader("test.txt"); // ❌
    }
}
```

✅ Result

```
Compile Time Error
```

👉 Checked exception must handle or declare.

---

## 6️⃣ Throws vs Try-Catch

```java
class Test {

    static void m() throws Exception {
        throw new Exception("error");
    }

    public static void main(String[] args) {
        try {
            m();
        } catch (Exception e) {
            System.out.println("Handled");
        }
    }
}
```

✅ Output

```
Handled
```

---

## 7️⃣ Return in Catch + Finally Override

```java
class Test {
    static int m() {
        try {
            int a = 10 / 0;
            return 1;
        } catch (Exception e) {
            return 2;
        } finally {
            return 3;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
3
```

---

## 8️⃣ Exception Propagation

```java
class Test {

    static void m() {
        int a = 10 / 0;
    }

    public static void main(String[] args) {
        try {
            m();
        } catch (Exception e) {
            System.out.println("Handled in main");
        }
    }
}
```

✅ Output

```
Handled in main
```

---

## 9️⃣ Finally with Exception

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            int a = 10 / 0;
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
finally
Exception in thread "main" java.lang.ArithmeticException
```

---

## 🔟 System.exit() Special Case

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
            System.exit(0);
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
```

👉 finally skipped.

---

# 🧠 BONUS — Multi Catch (Java 7+)

```java
class Test {
    public static void main(String[] args) {
        try {
            int arr[] = new int[5];
            arr[10] = 50;
        } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
            System.out.println("Exception handled");
        }
    }
}
```

✅ Output

```
Exception handled
```

---

# 🔥 Exception Hierarchy Memory Map

```
Throwable
 ├── Error
 └── Exception
      ├── RuntimeException
      │     ├── ArithmeticException
      │     ├── NullPointerException
      │     ├── ArrayIndexOutOfBoundsException
      │     └── IllegalArgumentException
      └── Checked Exceptions
            ├── IOException
            ├── SQLException
            └── ClassNotFoundException
```

---

# 🚀 Most Asked Interview Rules

```
1. Child catch before parent
2. Checked exception → must handle or declare
3. finally always executes (except System.exit)
4. RuntimeException → unchecked
5. Error → not meant to handle
```

---

If you want next level, I can share:

✅ 30 MCQs with traps
✅ Spring Boot exception interview scenarios
✅ Custom exception real-world examples
✅ FAANG tricky exception questions

Just tell me 👍


---
---

# FAANG tricky exception questions

## 🔥 FAANG-Level Tricky Java Exception Questions (Output + Concepts)

---

## 1️⃣ Try-with-Resources + Finally Order (VERY POPULAR)

```java
class Test {

    static class MyResource implements AutoCloseable {
        public void close() {
            System.out.println("close");
        }
    }

    public static void main(String[] args) {
        try (MyResource r = new MyResource()) {
            System.out.println("try");
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
close
finally
```

👉 Resource closes before finally.

---

## 2️⃣ Suppressed Exception (FAANG Favorite)

```java
class Test {

    static class MyResource implements AutoCloseable {
        public void close() {
            throw new RuntimeException("close exception");
        }
    }

    public static void main(String[] args) {
        try (MyResource r = new MyResource()) {
            throw new RuntimeException("try exception");
        } catch (Exception e) {
            System.out.println(e.getMessage());

            for (Throwable t : e.getSuppressed()) {
                System.out.println(t.getMessage());
            }
        }
    }
}
```

✅ Output

```
try exception
close exception
```

👉 close() exception becomes suppressed.

---

## 3️⃣ Finally Overrides Exception

```java
class Test {
    static void m() {
        try {
            throw new RuntimeException("try");
        } finally {
            throw new RuntimeException("finally");
        }
    }

    public static void main(String[] args) {
        try {
            m();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
```

✅ Output

```
finally
```

👉 finally exception dominates.

---

## 4️⃣ Return + Exception + Finally (Brain Twister)

```java
class Test {
    static int m() {
        try {
            return 1;
        } finally {
            try {
                return 2;
            } finally {
                return 3;
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
3
```

---

## 5️⃣ Checked Exception Polymorphism

```java
class A {
    void m() throws Exception {
        System.out.println("A");
    }
}

class B extends A {
    void m() {
        System.out.println("B");
    }
}

public class Test {
    public static void main(String[] args) throws Exception {
        A obj = new B();
        obj.m();
    }
}
```

✅ Output

```
B
```

👉 Child can remove checked exception.

---

## 6️⃣ Catch with Return + Finally Modify Object

```java
class Test {

    static StringBuilder m() {
        StringBuilder sb = new StringBuilder("A");
        try {
            throw new Exception();
        } catch (Exception e) {
            return sb;
        } finally {
            sb.append("B");
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
AB
```

👉 Reference returned, object modified in finally.

---

## 7️⃣ Multi-Catch + Inheritance Trap

```java
class Test {
    public static void main(String[] args) {
        try {
            String s = null;
            s.length();
        } catch (RuntimeException | NullPointerException e) { // ❌
            System.out.println("caught");
        }
    }
}
```

✅ Result

```
Compile Time Error
```

👉 Alternatives cannot have parent-child relation.

---

## 8️⃣ Exception in Finally Masks Original

```java
class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } finally {
            int b = 20 / 0;
        }
    }
}
```

✅ Result

```
Exception: / by zero (from finally)
```

👉 Original exception lost.

---

## 9️⃣ Try Without Catch (Valid)

```java
class Test {
    public static void main(String[] args) {
        try {
            System.out.println("try");
        } finally {
            System.out.println("finally");
        }
    }
}
```

✅ Output

```
try
finally
```

---

## 🔟 Error vs Exception Catching

```java
class Test {
    public static void main(String[] args) {
        try {
            throw new StackOverflowError();
        } catch (Exception e) {
            System.out.println("Exception");
        } catch (Error e) {
            System.out.println("Error");
        }
    }
}
```

✅ Output

```
Error
```

---

# 🧠 FAANG Interview Concepts They Check

```
1. Suppressed exceptions
2. Try-with-resources lifecycle
3. Finally dominance rules
4. Exception masking
5. Checked exception overriding rules
6. Object mutation vs reference return
7. Multi-catch inheritance restriction
8. Error vs Exception hierarchy
```

---

# 🚀 Ultra-Hard (Google Level)

```java
class Test {

    static int m() {
        try {
            int x = 10 / 0;
            return 1;
        } catch (Exception e) {
            return 2;
        } finally {
            return 3;
        }
    }

    public static void main(String[] args) {
        System.out.println(m());
    }
}
```

✅ Output

```
3
```

---

If you want next pack:

✅ JVM exception internals deep dive
✅ 50 MCQs FAANG level
✅ Spring Boot production exception scenarios
✅ System design failure handling patterns

Just tell me 👍

---
---

# 50 MCQs FAANG level

## 🔥 50 FAANG-Level Java Exception MCQs (With Answers)

---

### ✅ Q1

```java
try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.print("A");
} catch (Exception e) {
    System.out.print("B");
}
```

Answer → **A**

---

### ✅ Q2

```java
try {
    int a = 10 / 0;
} catch (Exception e) {
    System.out.print("A");
} catch (ArithmeticException e) {
    System.out.print("B");
}
```

Answer → **Compile Error**

---

### ✅ Q3

```java
try {
    return;
} finally {
    System.out.print("F");
}
```

Answer → **F**

---

### ✅ Q4

```java
try {
    System.exit(0);
} finally {
    System.out.print("F");
}
```

Answer → **Nothing**

---

### ✅ Q5

```java
try {
    throw new RuntimeException();
} finally {
    System.out.print("F");
}
```

Answer → **F + Exception**

---

### ✅ Q6

```java
static int m() {
    try {
        return 1;
    } finally {
        return 2;
    }
}
```

Answer → **2**

---

### ✅ Q7

```java
static int m() {
    int x = 5;
    try {
        return x;
    } finally {
        x = 10;
    }
}
```

Answer → **5**

---

### ✅ Q8

```java
try {
    String s = null;
    s.length();
} catch (NullPointerException e) {
    System.out.print("N");
} catch (RuntimeException e) {
    System.out.print("R");
}
```

Answer → **N**

---

### ✅ Q9

```java
try {
    int[] arr = new int[2];
    arr[5] = 10;
} catch (RuntimeException e) {
    System.out.print("R");
}
```

Answer → **R**

---

### ✅ Q10

```java
try {
    throw new Error();
} catch (Exception e) {
    System.out.print("E");
}
```

Answer → **Error thrown**

---

### ✅ Q11

```java
try {
    throw new Error();
} catch (Error e) {
    System.out.print("E");
}
```

Answer → **E**

---

### ✅ Q12

```java
try {
    int a = 10;
} finally {
    System.out.print("F");
}
```

Answer → **F**

---

### ✅ Q13

```java
try {
    int a = 10 / 0;
} finally {
    System.out.print("F");
}
```

Answer → **F + Exception**

---

### ✅ Q14

```java
try {
    throw new Exception();
} catch (RuntimeException e) {
    System.out.print("R");
}
```

Answer → **Compile Error**

---

### ✅ Q15

```java
try {
    throw new RuntimeException();
} catch (Exception e) {
    System.out.print("E");
}
```

Answer → **E**

---

### ✅ Q16

```java
try {
    int a = 10 / 0;
} catch (Exception e) {
    return;
} finally {
    System.out.print("F");
}
```

Answer → **F**

---

### ✅ Q17

```java
try {
    int a = 10 / 0;
} catch (Exception e) {
    System.out.print("C");
} finally {
    System.out.print("F");
}
```

Answer → **CF**

---

### ✅ Q18

```java
try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.print("A");
} finally {
    System.out.print("F");
}
```

Answer → **AF**

---

### ✅ Q19

```java
try {
    String s = null;
    s.length();
} catch (Exception e) {
    System.out.print("E");
} finally {
    System.out.print("F");
}
```

Answer → **EF**

---

### ✅ Q20

```java
try {
    throw new RuntimeException();
} finally {
    throw new RuntimeException();
}
```

Answer → **Finally Exception**

---

## 🔥 Try-With-Resources Section

---

### ✅ Q21

```java
try (AutoCloseable r = () -> System.out.print("C")) {
    System.out.print("T");
}
```

Answer → **TC**

---

### ✅ Q22

```java
try (AutoCloseable r = () -> { throw new RuntimeException(); }) {
    throw new RuntimeException();
}
```

Answer → **Try exception + suppressed**

---

### ✅ Q23

```java
try (AutoCloseable r1 = () -> System.out.print("1");
     AutoCloseable r2 = () -> System.out.print("2")) {
    System.out.print("T");
}
```

Answer → **T21**

---

## 🔥 Finally Dominance

---

### ✅ Q24

```java
static int m() {
    try {
        return 10;
    } finally {
        return 20;
    }
}
```

Answer → **20**

---

### ✅ Q25

```java
static int m() {
    try {
        throw new RuntimeException();
    } finally {
        return 5;
    }
}
```

Answer → **5**

---

### ✅ Q26

```java
static int m() {
    try {
        return 1;
    } catch (Exception e) {
        return 2;
    } finally {
        return 3;
    }
}
```

Answer → **3**

---

## 🔥 Multi-Catch

---

### ✅ Q27

```java
catch (IOException | Exception e)
```

Answer → **Compile Error**

---

### ✅ Q28

```java
catch (ArithmeticException | NullPointerException e)
```

Answer → **Valid**

---

## 🔥 Checked Exception Rules

---

### ✅ Q29

```java
void m() {
    throw new Exception();
}
```

Answer → **Compile Error**

---

### ✅ Q30

```java
void m() throws Exception {
    throw new Exception();
}
```

Answer → **Valid**

---

## 🔥 Overriding Exceptions

---

### ✅ Q31

Parent → throws Exception
Child → throws IOException

Answer → **Valid**

---

### ✅ Q32

Parent → throws IOException
Child → throws Exception

Answer → **Compile Error**

---

## 🔥 Runtime vs Checked

---

### ✅ Q33

RuntimeException → **Unchecked**

---

### ✅ Q34

IOException → **Checked**

---

### ✅ Q35

Error → **Unchecked**

---

## 🔥 Propagation

---

### ✅ Q36

Unchecked exception without catch

Answer → **Runtime crash**

---

### ✅ Q37

Checked exception without handling

Answer → **Compile Error**

---

## 🔥 Suppressed Exceptions

---

### ✅ Q38

Try throws + close throws

Answer → **Close becomes suppressed**

---

## 🔥 Edge Cases

---

### ✅ Q39

finally executes after return

Answer → **Yes**

---

### ✅ Q40

finally executes after System.exit

Answer → **No**

---

### ✅ Q41

finally executes after JVM crash

Answer → **No**

---

### ✅ Q42

catch (Throwable t) catches Error

Answer → **Yes**

---

### ✅ Q43

catch (Exception e) catches Error

Answer → **No**

---

### ✅ Q44

Can we have try without catch?

Answer → **Yes (with finally)**

---

### ✅ Q45

Can we have try without finally?

Answer → **Yes (with catch)**

---

### ✅ Q46

Can we have try alone?

Answer → **No**

---

### ✅ Q47

Multiple finally allowed?

Answer → **No**

---

### ✅ Q48

finally always executes?

Answer → **Except System.exit / JVM crash**

---

### ✅ Q49

return in finally good practice?

Answer → **No**

---

### ✅ Q50

finalize() guaranteed?

Answer → **No (deprecated)**

---

# 🧠 FAANG Concepts Covered

```text
✔ Exception hierarchy
✔ Try-with-resources lifecycle
✔ Suppressed exceptions
✔ Finally dominance
✔ Checked vs unchecked rules
✔ Overriding exceptions
✔ JVM termination cases
✔ Edge compiler traps
```

---

# 🚀 If You Want Next

I can provide:

✅ 100 MCQs PDF
✅ JVM internals exception flow
✅ Spring Boot production exception handling
✅ Real FAANG interview scenarios (Amazon / Google)

Just tell me 👍


---
---

# Spring Boot production exception handling

## 🔥 Spring Boot Production Exception Handling — Real Patterns (Code-First)

---

## ✅ 1. Global Exception Handler (`@RestControllerAdvice`)

```java
package com.example.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(ResourceNotFoundException ex, WebRequest req) {

        ApiError error = ApiError.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.NOT_FOUND.value())
                .error("NOT_FOUND")
                .message(ex.getMessage())
                .path(req.getDescription(false))
                .build();

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleGeneric(Exception ex, WebRequest req) {

        ApiError error = ApiError.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .error("INTERNAL_ERROR")
                .message(ex.getMessage())
                .path(req.getDescription(false))
                .build();

        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

---

## ✅ 2. Standard Error Response DTO (Production Format)

```java
package com.example.exception;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ApiError {

    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
    private String path;
}
```

---

## ✅ 3. Custom Exception

```java
package com.example.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
```

---

## ✅ 4. Controller Example

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id) {

        if (id == 0) {
            throw new ResourceNotFoundException("User not found");
        }

        return "User Found";
    }
}
```

---

## ✅ 5. Validation Exception Handling (VERY IMPORTANT)

```java
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ApiError> handleValidation(
        MethodArgumentNotValidException ex,
        WebRequest req) {

    String msg = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .findFirst()
            .orElse("Validation error");

    ApiError error = ApiError.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.BAD_REQUEST.value())
            .error("VALIDATION_ERROR")
            .message(msg)
            .path(req.getDescription(false))
            .build();

    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
}
```

---

## ✅ 6. DTO Validation Example

```java
import jakarta.validation.constraints.*;

public class UserRequest {

    @NotBlank
    private String name;

    @Email
    private String email;

    @Min(18)
    private int age;
}
```

Controller:

```java
@PostMapping
public String createUser(@Valid @RequestBody UserRequest req) {
    return "Created";
}
```

---

## ✅ 7. Handling Access Denied (Security)

```java
@ExceptionHandler(AccessDeniedException.class)
public ResponseEntity<ApiError> handleAccessDenied(AccessDeniedException ex) {

    ApiError error = ApiError.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.FORBIDDEN.value())
            .error("FORBIDDEN")
            .message("Access Denied")
            .build();

    return new ResponseEntity<>(error, HttpStatus.FORBIDDEN);
}
```

---

## ✅ 8. Database Exception Handling

```java
@ExceptionHandler(DataIntegrityViolationException.class)
public ResponseEntity<ApiError> handleDB(DataIntegrityViolationException ex) {

    ApiError error = ApiError.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.CONFLICT.value())
            .error("DB_ERROR")
            .message("Database constraint violation")
            .build();

    return new ResponseEntity<>(error, HttpStatus.CONFLICT);
}
```

---

## ✅ 9. Logging (Production Must)

```java
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handle(Exception ex) {

        log.error("Unhandled exception", ex);

        ApiError error = ApiError.builder()
                .status(500)
                .message("Something went wrong")
                .build();

        return ResponseEntity.internalServerError().body(error);
    }
}
```

---

## ✅ 10. Clean Production Response Example

```json
{
  "timestamp": "2026-02-19T10:15:30",
  "status": 404,
  "error": "NOT_FOUND",
  "message": "User not found",
  "path": "/users/10"
}
```

---

# 🔥 Production Best Practices (FAANG Level)

```text
✔ Never expose stack trace to client
✔ Use global exception handler
✔ Standard error response format
✔ Log internally, return generic message externally
✔ Separate business vs system exceptions
✔ Map exceptions to proper HTTP status
✔ Validation errors must be readable
✔ Use correlationId / traceId
```

---

# 🚀 Advanced (Microservices Ready)

## Correlation ID Filter

```java
@Component
public class CorrelationFilter implements Filter {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        String correlationId = UUID.randomUUID().toString();
        MDC.put("cid", correlationId);

        chain.doFilter(request, response);

        MDC.clear();
    }
}
```

---

# 🚀 If You Want Next Level

I can share:

✅ Complete production-ready starter project
✅ Spring Boot 3 + ProblemDetails (RFC-7807)
✅ Distributed tracing (Zipkin / Sleuth)
✅ Retry + Circuit Breaker exception patterns

Just tell me 👍


---
---

# Distributed tracing (Zipkin / Sleuth)

## 🔥 Spring Boot Distributed Tracing — Micrometer + Zipkin (Production Ready)

> Spring Cloud Sleuth is **deprecated** → use **Micrometer Tracing**

---

## ✅ 1. Dependencies (Spring Boot 3+)

### Maven

```xml
<dependencies>

    <!-- Actuator -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <!-- Micrometer Tracing -->
    <dependency>
        <groupId>io.micrometer</groupId>
        <artifactId>micrometer-tracing-bridge-brave</artifactId>
    </dependency>

    <!-- Zipkin Reporter -->
    <dependency>
        <groupId>io.zipkin.reporter2</groupId>
        <artifactId>zipkin-reporter-brave</artifactId>
    </dependency>

</dependencies>
```

---

## ✅ 2. Run Zipkin (Docker)

```bash
docker run -d -p 9411:9411 openzipkin/zipkin
```

Zipkin UI → [http://localhost:9411](http://localhost:9411)

---

## ✅ 3. application.yml

```yaml
spring:
  application:
    name: order-service

management:
  tracing:
    sampling:
      probability: 1.0   # 100% traces (dev only)

  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans

logging:
  pattern:
    level: "%5p [${spring.application.name:},%X{traceId:-},%X{spanId:-}]"
```

---

## ✅ 4. Automatic Trace in Logs

No code needed — Spring auto injects:

```
INFO [order-service,4f3a2c...,9b1d...] Processing order
```

Fields:

```
traceId → request journey
spanId  → single operation
```

---

## ✅ 5. Controller Example

```java
@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;

    @GetMapping("/{id}")
    public String getOrder(@PathVariable Long id) {
        return service.process(id);
    }
}
```

---

## ✅ 6. Service with Custom Span

```java
@Service
@RequiredArgsConstructor
public class OrderService {

    private final Tracer tracer;

    public String process(Long id) {

        Span span = tracer.nextSpan().name("process-order").start();

        try (Tracer.SpanInScope ws = tracer.withSpan(span)) {

            Thread.sleep(100);
            return "Order " + id;

        } catch (Exception e) {
            span.error(e);
            throw new RuntimeException(e);
        } finally {
            span.end();
        }
    }
}
```

---

## ✅ 7. RestTemplate / WebClient Propagation

### RestTemplate Bean

```java
@Bean
RestTemplate restTemplate(RestTemplateBuilder builder) {
    return builder.build();
}
```

Trace headers auto propagated:

```
traceparent
X-B3-TraceId
X-B3-SpanId
```

---

## ✅ 8. WebClient Example

```java
@Bean
WebClient webClient(WebClient.Builder builder) {
    return builder.build();
}
```

---

## ✅ 9. Manual Trace ID Access (Logging / Debug)

```java
@Autowired
Tracer tracer;

public void logTrace() {
    String traceId = tracer.currentSpan().context().traceId();
    System.out.println(traceId);
}
```

---

## ✅ 10. Exception + Tracing Integration

```java
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @Autowired
    Tracer tracer;

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handle(Exception ex) {

        String traceId = tracer.currentSpan().context().traceId();

        log.error("Error occurred traceId={}", traceId, ex);

        return ResponseEntity.internalServerError()
                .body("Error. traceId=" + traceId);
    }
}
```

---

# 🔥 How Distributed Tracing Works (Flow)

```
Client → API Gateway → Order Service → Payment Service → DB
            SAME TRACE ID FLOWS EVERYWHERE
```

Zipkin shows:

```
Trace
 ├── Gateway Span
 ├── Order Service Span
 ├── Payment Service Span
 └── DB Span
```

---

# 🔥 Production Best Practices

```
✔ Sampling < 1% in production (0.1)
✔ Never log sensitive data
✔ Always include traceId in error response
✔ Use centralized logging (ELK / Loki)
✔ Correlate metrics + traces + logs
✔ Use OpenTelemetry future-ready
```

---

# 🚀 OpenTelemetry Alternative (Future Standard)

Dependencies:

```xml
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-exporter-zipkin</artifactId>
</dependency>
```

---

# 🚀 If You Want Next Level

I can share:

✅ Complete microservices tracing project (Gateway + 2 services)
✅ Grafana Tempo + Loki + Prometheus stack
✅ Resilience4j retry + tracing integration
✅ Kubernetes distributed tracing setup

Just tell me 👍
