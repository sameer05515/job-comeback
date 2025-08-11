Here’s a quick list of **Java 11+ features** (Java 11 up to Java 21 LTS) without long explanations:

---

### **Java 11**

* **`var` in lambda parameters**
* **New String methods**:

  * `isBlank()`, `lines()`, `strip()`, `stripLeading()`, `stripTrailing()`, `repeat(int)`
* **`Files` utility methods**:

  * `readString()`, `writeString()`, `isSameFile()`
* **`Predicate.not()`**
* **HTTP Client API** (standard, non-incubating)
* **Epsilon GC** (no-op garbage collector)
* Removed Java EE & CORBA modules

---

### **Java 12**

* **Switch Expressions (preview)**
* **`Files.mismatch()`**
* **Compact Number Formatting** (`NumberFormat.getCompactNumberInstance`)
* **Shenandoah GC** (experimental)

---

### **Java 13**

* **Text Blocks (preview)**
* **Switch Expressions (2nd preview)**
* **`FileSystems.newFileSystem(Path)`** improvements

---

### **Java 14**

* **Switch Expressions** (standard)
* **`record` keyword** (preview)
* **Pattern Matching for `instanceof`** (preview)
* **Helpful NullPointerExceptions** (prints variable names)

---

### **Java 15**

* **Text Blocks** (standard)
* **Sealed Classes (preview)**
* **Hidden Classes**
* **EdDSA signature algorithm**

---

### **Java 16**

* **`record` keyword** (standard)
* **Pattern Matching for `instanceof`** (standard)
* **`Stream.toList()`**
* **JEP 391: macOS/AArch64 port**

---

### **Java 17** (LTS)

* **Sealed Classes** (standard)
* **Pattern Matching for `switch`** (preview)
* **`RandomGenerator` API** improvements
* **Strong encapsulation of JDK internals**

---

### **Java 18**

* **Simple Web Server** (`jwebserver`)
* **UTF-8 as default charset**
* **`@snippet` in Javadoc**

---

### **Java 19**

* **Virtual Threads (preview)**
* **Record Patterns (preview)**
* **Structured Concurrency (incubator)**

---

### **Java 20**

* **Scoped Values** (incubator)
* **Record Patterns (2nd preview)**
* **Virtual Threads (2nd preview)**

---

### **Java 21** (LTS)

* **Virtual Threads** (standard)
* **Record Patterns** (standard)
* **Pattern Matching for `switch`** (standard)
* **Sequenced Collections API**
* **String Templates (preview)**
* **Key Encapsulation Mechanism API**

---

If you want, I can prepare a **Java 8 → 21 migration cheat sheet** with code examples for each new feature. That would be super useful for interviews.
