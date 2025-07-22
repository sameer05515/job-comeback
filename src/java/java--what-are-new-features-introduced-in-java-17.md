Here are **some major features introduced in Java 17**, which is a **Long-Term Support (LTS)** version:

---

### ✅ **1. Sealed Classes (JEP 409)**

```java
public sealed class Shape permits Circle, Square {}

final class Circle extends Shape {}
final class Square extends Shape {}
```

* Restricts which classes can extend or implement a class/interface.

---

### ✅ **2. Pattern Matching for `switch` (Preview - JEP 406)**

```java
static String test(Object obj) {
  return switch (obj) {
    case Integer i -> "Integer";
    case String s -> "String";
    default -> "Unknown";
  };
}
```

* More powerful and readable `switch` cases.

---

### ✅ **3. New `record` type (Stable from Java 16)**

```java
public record Person(String name, int age) {}
```

* Auto-generates constructor, getters, `equals()`, `hashCode()`, `toString()`.

---

### ✅ **4. Strong Encapsulation of JDK Internals (JEP 403)**

* `sun.misc.Unsafe` and other internal APIs are inaccessible by default.

---

### ✅ **5. Removed RMI Activation (JEP 407)**

* Java RMI Activation was outdated and removed.

---

### ✅ **6. Deprecate and remove Applet API (JEP 398)**

* Applets are obsolete and removed.

---

### ✅ **7. New macOS rendering pipeline (JEP 382)**

* Uses Metal instead of OpenGL on macOS.

---

### ✅ **8. Foreign Function & Memory API (Incubator - JEP 412)**

* Calls native libraries without JNI.

---

Let me know if you want working code examples of any feature.
