
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
