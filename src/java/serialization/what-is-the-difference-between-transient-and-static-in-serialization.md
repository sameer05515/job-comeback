In Java **serialization**, `transient` and `static` fields are treated differently:

---

### 🔑 `transient` keyword:

* **Purpose**: Excludes a field from serialization.
* **Effect**: The field is **not saved** during serialization and is **set to default value** during deserialization.
* **Used for**: Sensitive data (e.g., passwords) or non-serializable fields.

```java
transient String password;
```

---

### 🔑 `static` keyword:

* **Purpose**: Makes a field belong to the **class**, not the instance.
* **Effect**: `static` fields are **never serialized**, because serialization is for **object state**, and static belongs to **class-level state**.

```java
static String companyName = "ABC Corp";
```

---

### 🔍 Difference Summary:

| Feature                     | `transient`                    | `static`                       |
| --------------------------- | ------------------------------ | ------------------------------ |
| Belongs to                  | Object (instance)              | Class                          |
| Serialized?                 | No                             | No                             |
| Use case                    | Hide sensitive/non-serial data | Shared values across instances |
| Value after deserialization | Default (e.g., null, 0)        | As per current class value     |

---

### ✅ Example:

```java
class User implements Serializable {
    String username;
    transient String password;
    static String platform = "Udemy";
}
```

After deserialization:

* `username` → restored
* `password` → `null`
* `platform` → `"Udemy"` (from current class, not serialized)
