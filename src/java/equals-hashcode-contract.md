Here’s the **`equals()` and `hashCode()` contract** in Java:

---

### **1. Contract Rules**

#### **`equals()` contract**

If you override `equals()`, it must follow:

1. **Reflexive** – `x.equals(x)` must be `true`.
2. **Symmetric** – `x.equals(y)` must be `true` if and only if `y.equals(x)` is `true`.
3. **Transitive** – if `x.equals(y)` and `y.equals(z)` are true, then `x.equals(z)` must be true.
4. **Consistent** – multiple calls should return the same result unless fields change.
5. **Non-nullity** – `x.equals(null)` must return `false`.

---

#### **`hashCode()` contract**

If you override `equals()`, you **must** override `hashCode()` so that:

1. If `x.equals(y)` is `true`, then `x.hashCode() == y.hashCode()`.
2. If `x.equals(y)` is `false`, they may still have the same hashCode (hash collision allowed).
3. Multiple calls to `x.hashCode()` must return the same value unless fields change.

---

### **2. Why the Contract Matters**

* **Hash-based collections** (`HashMap`, `HashSet`, `Hashtable`) rely on it.
* If you break the contract, objects may:

  * Not be found in a `HashMap` even if present.
  * Cause duplicate entries in a `HashSet`.

---

### **3. Example**

```java
import java.util.Objects;

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age &&
               Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("John", 25);
        Person p2 = new Person("John", 25);

        System.out.println(p1.equals(p2)); // true
        System.out.println(p1.hashCode() == p2.hashCode()); // true
    }
}
```

---

If you want, I can also give you a **broken contract example** where `HashMap` lookup fails.
