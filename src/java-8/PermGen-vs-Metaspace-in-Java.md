### 🧠 `PermGen` vs `Metaspace` in Java

---

| Feature               | **PermGen (before Java 8)**                            | **Metaspace (Java 8+)**                                |
| --------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| **Location**          | Inside **Java heap**                                   | Outside Java heap (in **native memory**)               |
| **Default Size**      | Fixed and small                                        | Dynamically resizable (limited by system memory)       |
| **Configured via**    | `-XX:PermSize`, `-XX:MaxPermSize`                      | `-XX:MetaspaceSize`, `-XX:MaxMetaspaceSize`            |
| **Purpose**           | Store class metadata, interned Strings, static methods | Same purpose, but more flexible                        |
| **Problems**          | `OutOfMemoryError: PermGen space`                      | Less likely, but can get `OutOfMemoryError: Metaspace` |
| **Garbage Collected** | Not fully – led to memory leaks                        | Yes, class metadata is garbage collected properly      |

---

### ✅ Why Java moved to Metaspace?

* PermGen caused **classloader memory leaks**, especially in app servers (e.g. redeploying WAR files).
* Metaspace is **more flexible** and less error-prone.

---

### 🔧 Example JVM Options

#### For PermGen (Java 7 and below):

```bash
-XX:PermSize=64m -XX:MaxPermSize=256m
```

#### For Metaspace (Java 8+):

```bash
-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=512m
```

Let me know if you want a code or memory monitoring example.
