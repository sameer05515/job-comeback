If a `transient` variable is **serialized**, it will be:

### ❌ **Not saved** in the serialized stream.

---

### 🔁 During deserialization:

* The `transient` field will be set to its **default value**:

  * `0` for numeric types (`int`, `long`, etc.)
  * `false` for `boolean`
  * `null` for objects (`String`, custom types)

---

### ✅ Example:

```java
import java.io.*;

class User implements Serializable {
    String name;
    transient String password;
    
    User(String name, String password) {
        this.name = name;
        this.password = password;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        User user = new User("Prem", "secret123");

        // Serialize
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"));
        oos.writeObject(user);
        oos.close();

        // Deserialize
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.ser"));
        User deserializedUser = (User) ois.readObject();
        ois.close();

        System.out.println(deserializedUser.name);     // Prem
        System.out.println(deserializedUser.password); // null ← because it's transient
    }
}
```

---

### ✅ Conclusion:

A `transient` variable is **skipped** during serialization and gets its **default value** after deserialization.
