To **prevent a class from being serialized** in Java, you can use one of the following approaches:

---

### ✅ 1. **Do Not Implement `Serializable`**

If the class does **not** implement the `Serializable` interface, it **cannot be serialized** by default.

```java
public class NonSerializableClass {
    private String data;
}
```

---

### ✅ 2. **Throw Exception in `writeObject()`**

If the class **must** implement `Serializable` (e.g. due to inheritance), you can block serialization manually:

```java
import java.io.*;

public class PreventSerialization implements Serializable {

    private String name = "Block me";

    private void writeObject(ObjectOutputStream out) throws IOException {
        throw new NotSerializableException("Serialization not allowed");
    }

    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        throw new NotSerializableException("Deserialization not allowed");
    }
}
```

---

### ✅ 3. **Mark Non-Serializable Fields as `transient`**

If you want to allow partial serialization and **exclude specific fields**, mark them as `transient`.

```java
private transient DatabaseConnection dbConnection;
```

---

Let me know if you want to test this with a full code example.
