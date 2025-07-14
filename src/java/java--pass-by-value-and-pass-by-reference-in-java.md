In **Java**, everything is **pass-by-value** — but this often causes confusion, especially with objects.

---

### ✅ Key Rule:

> Java **always** passes **copies of variables** to methods — even for objects.

---

### 🔹 1. **Primitives (int, double, etc.)**

* A **copy of the value** is passed.
* Changes inside the method **do not affect** the original.

```java
void change(int x) {
    x = 50;
}

int num = 10;
change(num);
System.out.println(num); // 👉 10 (unchanged)
```

---

### 🔹 2. **Objects (like String, ArrayList, etc.)**

* A **copy of the reference** is passed.
* You can **modify the object's internal state**, but **reassigning the reference won't affect the original**.

```java
void modify(List<String> list) {
    list.add("Java");
}

List<String> names = new ArrayList<>();
modify(names);
System.out.println(names); // 👉 [Java] ✅
```

```java
void reassign(List<String> list) {
    list = new ArrayList<>();
    list.add("Python");
}

List<String> names = new ArrayList<>();
reassign(names);
System.out.println(names); // 👉 [] ❌ (no change)
```

---

### 🔍 Summary Table

| Type      | What is passed    | Can original be changed? |
| --------- | ----------------- | ------------------------ |
| Primitive | Copy of value     | ❌ No                     |
| Object    | Copy of reference | ✅ Yes (internals only)   |

---

📌 **Java never gives direct access to memory references like C++ (true pass-by-reference).**

Let me know if you want real-world examples with `String`, `Array`, or `Custom POJO`.
