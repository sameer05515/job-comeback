✅ **Builder Pattern** is a **creational design pattern** used to construct **complex objects step-by-step**, allowing for more **readable, flexible, and maintainable code**, especially when the object has many optional parameters.

---

### 🔹 **Why Use Builder Pattern?**

* Avoid **telescoping constructors**
* Create immutable objects with optional values
* Improves code **readability** and **clarity**

---

### ✅ **Real Example in Java:**

Java classes that use Builder pattern:

* `StringBuilder`
* `java.time.LocalDateTime.Builder`
* `java.lang.ProcessBuilder`
* `Lombok @Builder`
* `HttpClient.newBuilder()`

---

### ✅ **Custom Java Example**

```java
public class User {
    private final String name;
    private final int age;
    private final String email;

    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
    }

    public static class Builder {
        private String name;
        private int age;
        private String email;

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder age(int age) {
            this.age = age;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }

    public String toString() {
        return name + " (" + age + ") <" + email + ">";
    }
}
```

**Usage:**

```java
User user = new User.Builder()
                .name("Prem")
                .age(35)
                .email("prem@example.com")
                .build();

System.out.println(user);
```

---

### ✅ Summary Line for Interview:

> "Builder Pattern helps construct complex objects in a readable and flexible way, especially when many parameters are involved. It's widely used in Java, including `StringBuilder`, `HttpClient`, and POJO creation with Lombok's `@Builder`."


---
---

# telescoping constructors

✅ **Telescoping Constructors** is an anti-pattern where a class provides **multiple overloaded constructors**, each with **more parameters**, to handle different initialization scenarios.

---

### 🔹 **Problem with Telescoping Constructors:**

```java
public class User {
    private String name;
    private int age;
    private String email;
    private String address;

    // Telescoping constructors
    public User(String name) {
        this(name, 0);
    }

    public User(String name, int age) {
        this(name, age, null);
    }

    public User(String name, int age, String email) {
        this(name, age, email, null);
    }

    public User(String name, int age, String email, String address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}
```

---

### ❌ **Drawbacks:**

* Hard to maintain with many fields
* Parameters are hard to understand in the correct order
* No clarity for optional fields
* Code readability is poor

---

### ✅ **Solution: Use Builder Pattern Instead**

```java
User user = new User.Builder()
    .name("Prem")
    .age(35)
    .email("prem@example.com")
    .build();
```

Much clearer, readable, and maintainable.

---

### ✅ Summary Line for Interview:

> "Telescoping constructors use constructor overloading to handle optional parameters, but they become hard to maintain and use as the number of parameters grows. Builder pattern solves this problem elegantly."
