No, **a class cannot be serialized if it contains a reference to a non-serializable object** — unless that reference is marked as `transient`.

---

### 🔥 If you try to serialize such a class:

You will get a `java.io.NotSerializableException`.

---

### ✅ Solution:

Use `transient` keyword for the non-serializable field:

```java
import java.io.*;

class Address {
    String city;
    Address(String city) {
        this.city = city;
    }
}

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;

    String name;
    transient Address address; // Non-serializable object marked transient

    Employee(String name, Address address) {
        this.name = name;
        this.address = address;
    }
}
```

Now `Employee` can be serialized, but `address` will be **null** after deserialization.

---

### 💡 Tip:

If you want to serialize even non-serializable fields, consider:

* Custom serialization (`writeObject` / `readObject`)
* Making the referenced class serializable if possible.
