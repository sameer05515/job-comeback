Java handles versioning in serialization using the special field:

### 🔐 `serialVersionUID`

---

### 📌 What is `serialVersionUID`?

A unique identifier for each `Serializable` class. It is used to ensure that a **loaded class corresponds exactly to a serialized object**.

```java
private static final long serialVersionUID = 1L;
```

---

### 🔍 Versioning Logic

* **When deserializing**, the JVM compares the `serialVersionUID` of the serialized object with the `serialVersionUID` of the current class.
* If they **match** → deserialization proceeds.
* If they **don’t match** → `InvalidClassException` is thrown.

---

### 🛠 Default Behavior

* If `serialVersionUID` is **not declared manually**, JVM **generates it based on class details** (fields, methods, etc.).
* Even a small change in the class can change the computed ID → breaking deserialization of previously serialized objects.

---

### ✅ Best Practice

Always **declare `serialVersionUID` explicitly** to ensure backward compatibility during class evolution.

---

### 💡 Example

```java
class User implements Serializable {
    private static final long serialVersionUID = 1L;

    String name;
    int age;
}
```

You can now **add fields** or make **non-breaking changes** without breaking deserialization of old data.
