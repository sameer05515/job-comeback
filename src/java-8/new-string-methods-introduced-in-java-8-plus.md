Here’s a **Java 8+ String methods** quick list for interview prep:

---

### **Java 8**

* `join(CharSequence delimiter, CharSequence... elements)`

  ```java
  String result = String.join("-", "A", "B", "C"); // "A-B-C"
  ```

---

### **Java 11**

* `isBlank()` → `true` if string is empty or only whitespace.
* `strip()` → Removes leading/trailing whitespace (Unicode-aware).
* `stripLeading()` / `stripTrailing()` → Removes leading or trailing spaces.
* `lines()` → Returns a Stream of lines.
* `repeat(int count)` → Repeats the string.

  ```java
  "Hi".repeat(3); // "HiHiHi"
  ```

---

### **Java 12**

* `indent(int n)` → Adds/removes indentation.
* `transform(Function<String, R>)` → Transforms the string using a function.

  ```java
  String result = "hello".transform(s -> s.toUpperCase()); // "HELLO"
  ```

---

### **Java 15**

* Text Blocks (`""" ... """`) → Multi-line string literals.

  ```java
  String text = """
      Line 1
      Line 2
      """;
  ```

---

### **Java 17**

* No new String methods, but pattern matching updates for `instanceof` and `switch`.

---

If you want, I can prepare a **table version** of this so you can revise in 30 seconds before an interview.
