❌ **No, static fields are not serialized** in Java.

---

### 📌 Why?

* `static` fields belong to the **class**, not to individual objects.
* Serialization is the process of saving the **state of an object** — so class-level data (static) is excluded.

---

### 🔍 Example:

```java
import java.io.*;

class Demo implements Serializable {
    static int x = 10; // static field
    int y = 20;
}

public class StaticSerializationTest {
    public static void main(String[] args) throws Exception {
        Demo obj = new Demo();
        obj.x = 100;
        obj.y = 200;

        // Serialize
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("demo.ser"))) {
            oos.writeObject(obj);
        }

        // Change static field after serialization
        Demo.x = 999;

        // Deserialize
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("demo.ser"))) {
            Demo deserialized = (Demo) ois.readObject();
            System.out.println("x = " + deserialized.x); // 999
            System.out.println("y = " + deserialized.y); // 200
        }
    }
}
```

---

### 🧾 Output:

```
x = 999
y = 200
```

> As you can see, `x` wasn't restored to 100, proving `static` fields are not part of serialization.
