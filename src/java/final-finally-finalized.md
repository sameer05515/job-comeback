
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
