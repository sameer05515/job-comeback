# What is garbage collection in java

-[Garbage Collection in Java](https://www.youtube.com/watch?v=XXOaCV5xm9s)

Here’s a **short but interview-focused** rundown of **Garbage Collection in Java**.

---

## **Garbage Collection (GC) in Java**

Java uses **automatic memory management** — the Garbage Collector frees memory by removing objects **no longer reachable**.

---

### **Key Points**

1. **Purpose:**

   * Reclaim memory from unreachable objects.
   * Prevent memory leaks.
2. **When is an object eligible?**

   * No active reference points to it.
3. **Can we force GC?**

   * `System.gc()` or `Runtime.getRuntime().gc()` → *suggests* GC but does not guarantee.

---

### **GC Process**

* **Mark** – Identify reachable objects.
* **Sweep** – Remove unreachable objects.
* **Compact** – Rearrange memory to reduce fragmentation.

---

### **JVM Memory Areas**

* **Heap** (GC-managed)

  * **Young Generation** (Eden + Survivor spaces) → Frequent collections.
  * **Old Generation** → Long-lived objects.
* **Non-Heap** (e.g., Metaspace for class metadata).

---

### **GC Types**

* **Serial GC** – Single-threaded, simple (good for small apps).
* **Parallel GC** – Multi-threaded, throughput-oriented.
* **G1 GC** – Region-based, low pause times.
* **ZGC / Shenandoah** – Ultra-low pause.

---

### **Important Interview Q\&A**

| Question                           | Short Answer                                                           |
| ---------------------------------- | ---------------------------------------------------------------------- |
| Can GC collect referenced objects? | No, only unreachable ones.                                             |
| Finalization?                      | `finalize()` runs before GC removes an object (deprecated in Java 9+). |
| Stop-the-world?                    | Yes, GC pauses app threads during collection.                          |
| Root references?                   | GC Roots = local variables, static fields, JNI refs.                   |
| Tools?                             | `jmap`, `jvisualvm`, `jconsole`, `GC logs`.                            |

---

If you want, I can give you a **Java code example that clearly shows when an object becomes eligible for GC** — that’s a common interview test.
Do you want me to prepare that?


---
---

# Java code example that clearly shows when an object becomes eligible for GC

Here’s a **simple and clear** Java example showing when objects become eligible for GC:

```java
public class GCDemo {

    static class Person {
        String name;
        Person(String name) { this.name = name; }
        @Override
        protected void finalize() throws Throwable {
            System.out.println(name + " is being garbage collected");
        }
    }

    public static void main(String[] args) {
        // Case 1: Nullifying reference
        Person p1 = new Person("John");
        p1 = null; // Eligible for GC

        // Case 2: Reassigning reference
        Person p2 = new Person("Mike");
        p2 = new Person("David"); // "Mike" object eligible for GC

        // Case 3: Object created inside a method
        createPerson(); // "Alex" eligible after method ends

        // Suggesting GC (not guaranteed)
        System.gc();
    }

    static void createPerson() {
        Person p3 = new Person("Alex");
    }
}
```

---

### **How this works**

* **Case 1** → `p1` no longer points to the "John" object → eligible.
* **Case 2** → reference `p2` now points to "David", leaving "Mike" unreachable.
* **Case 3** → local variable `p3` dies after method execution → "Alex" unreachable.

---

If you run this, you might see output like:

```
John is being garbage collected
Mike is being garbage collected
Alex is being garbage collected
```

*(Order may vary because GC is non-deterministic.)*

---

I can also make a **version showing objects eligible for GC even with circular references**, which is another common trick interviewers use.
Do you want that next?
