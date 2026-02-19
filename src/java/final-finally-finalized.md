
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
