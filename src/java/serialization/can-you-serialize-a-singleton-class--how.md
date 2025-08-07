Yes, **you can serialize a singleton class**, but it requires special handling to maintain the **singleton property** after deserialization.

---

### ❗Problem:

Serialization creates a **new instance** during deserialization, which breaks the singleton pattern.

---

### ✅ Solution:

Implement `readResolve()` method to **return the existing singleton instance**.

---

### ✅ Example:

```java
import java.io.*;

class Singleton implements Serializable {

    private static final long serialVersionUID = 1L;

    private static final Singleton INSTANCE = new Singleton();

    private Singleton() {
        System.out.println("Singleton Constructor");
    }

    public static Singleton getInstance() {
        return INSTANCE;
    }

    // Ensure same instance is returned after deserialization
    protected Object readResolve() {
        return INSTANCE;
    }
}
```

---

### ✅ Test Serialization:

```java
public class SingletonTest {
    public static void main(String[] args) throws Exception {
        Singleton s1 = Singleton.getInstance();

        // Serialize
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("singleton.obj"));
        out.writeObject(s1);
        out.close();

        // Deserialize
        ObjectInputStream in = new ObjectInputStream(new FileInputStream("singleton.obj"));
        Singleton s2 = (Singleton) in.readObject();
        in.close();

        System.out.println("s1 hash: " + s1.hashCode());
        System.out.println("s2 hash: " + s2.hashCode());
        System.out.println("Same instance? " + (s1 == s2));
    }
}
```

---

### ✅ Output:

```
Singleton Constructor
s1 hash: 12345678
s2 hash: 12345678
Same instance? true
```

Let me know if you want a version using `enum` (another way to implement singleton).
