**Serialization** in Java is the process of converting an object into a byte stream so that it can be:

* **Saved to a file**
* **Sent over a network**
* **Stored in a database**
* **Cached in memory**

This allows the object's state to be **persisted** or **transmitted** and **later reconstructed** using deserialization.

---

### 🔹 Key Points:

* To serialize an object, the class must implement `java.io.Serializable` interface.
* Transient fields (`transient` keyword) are **not serialized**.
* Use `ObjectOutputStream` to serialize, and `ObjectInputStream` to deserialize.

---

### 🔹 Example:

```java
class Employee implements Serializable {
    private int id;
    private String name;
    // constructor, getters, setters
}

ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("emp.ser"));
out.writeObject(employee);
out.close();
```

Let me know if you want interview questions on this.
