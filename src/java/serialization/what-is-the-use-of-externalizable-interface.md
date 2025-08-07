The `Externalizable` interface in Java provides **complete control** over the serialization process.

---

### ✅ Key Use:

To **customize** how an object is serialized and deserialized.

---

### 🔧 Declaration:

```java
public interface Externalizable extends Serializable {
    void writeExternal(ObjectOutput out) throws IOException;
    void readExternal(ObjectInput in) throws IOException, ClassNotFoundException;
}
```

---

### 🧠 How it's different from `Serializable`:

| Feature                    | `Serializable`               | `Externalizable`                    |
| -------------------------- | ---------------------------- | ----------------------------------- |
| Control over serialization | JVM handles it automatically | You write custom logic              |
| Methods to implement       | None                         | `writeExternal()`, `readExternal()` |
| Default constructor needed | Not required                 | **Required**                        |

---

### 💡 Example:

```java
import java.io.*;

class User implements Externalizable {
    private String name;
    private int age;

    public User() {} // Mandatory for Externalizable

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(name);
        out.writeInt(age);
    }

    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        name = (String) in.readObject();
        age = in.readInt();
    }

    @Override
    public String toString() {
        return name + " - " + age;
    }
}
```

---

### 📝 Summary:

* Use `Externalizable` when you want **full control**.
* You decide **what** gets serialized and **how**.
* It's more verbose, but useful in performance-sensitive or version-sensitive scenarios.
