In Java 8+, `Optional<T>` is a smart way to **avoid null pointer exceptions** and handle values **safely and declaratively**.

---

## ✅ Basic Null Handling with `Optional`

### 🔹 Old Way (before Java 8)

```java
String name = user != null ? user.getName() : "Guest";
```

---

### 🔹 With Optional

```java
Optional<User> userOpt = getUser();
String name = userOpt.map(User::getName).orElse("Guest");
```

---

## 🧰 Common Optional Methods

| Method                   | Description                      |
| ------------------------ | -------------------------------- |
| `Optional.of(value)`     | Create optional (throws if null) |
| `Optional.ofNullable(v)` | Create optional (null-safe)      |
| `isPresent()`            | Check if value is non-null       |
| `ifPresent()`            | Run code if value is present     |
| `orElse(default)`        | Return value or default if null  |
| `orElseGet(Supplier)`    | Lazy default                     |
| `orElseThrow()`          | Throw custom exception           |
| `map()`                  | Transform inner value            |
| `flatMap()`              | Unwrap nested Optionals          |
| `filter()`               | Filter inner value conditionally |

---

## 📌 Examples

### ✅ 1. Avoiding Null

```java
Optional<String> nameOpt = Optional.ofNullable(name);
nameOpt.ifPresent(n -> System.out.println(n.toUpperCase()));
```

---

### ✅ 2. Chained Map

```java
Optional<User> user = getUser();
String city = user
    .map(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");
```

---

### ✅ 3. Throw if Missing

```java
User user = getUser()
    .orElseThrow(() -> new RuntimeException("User not found"));
```

---

### ✅ 4. Filter

```java
Optional<User> user = getUser();
user.filter(u -> u.isActive()).ifPresent(this::processUser);
```

---

## ⚠️ Avoid This

```java
if (optional.isPresent()) {
   doSomething(optional.get()); // 👎 Anti-pattern
}
```

Better:

```java
optional.ifPresent(this::doSomething); // 👍 Clean
```

---

Let me know if you want examples for `Optional` in:

* Stream API
* JPA Repositories
* Spring Controllers (`Optional<T>` as request param or path param)


---
---

# examples for `Optional` in Stream API

Sure Premendra! Here's how `Optional` is used **with Java Stream API**, especially in **null-safe filtering**, **mapping**, and **handling optional values in pipelines**.

---

## ✅ 1. **Find First / Find Any**

```java
List<String> names = List.of("Ram", "Shyam", "Mohan");

Optional<String> found = names.stream()
    .filter(name -> name.startsWith("S"))
    .findFirst();

found.ifPresent(System.out::println);  // Output: Shyam
```

---

## ✅ 2. **Handle Optional with `map()`**

```java
List<String> names = List.of("Ram", "Shyam", "Mohan");

Optional<Integer> nameLength = names.stream()
    .filter(name -> name.equals("Mohan"))
    .findFirst()
    .map(String::length);

System.out.println(nameLength.orElse(0));  // Output: 5
```

---

## ✅ 3. **Collect Only Present Optionals**

You may have a list of `Optional`s and want only the values that are present.

```java
List<Optional<String>> optionals = List.of(
    Optional.of("Ram"),
    Optional.empty(),
    Optional.of("Shyam")
);

List<String> result = optionals.stream()
    .flatMap(Optional::stream) // Java 9+
    .collect(Collectors.toList());

System.out.println(result);  // Output: [Ram, Shyam]
```

> ✅ For Java 8 (no `Optional::stream`), use:

```java
.flatMap(o -> o.map(Stream::of).orElseGet(Stream::empty))
```

---

## ✅ 4. **Optional from `Stream.reduce()`**

```java
List<Integer> nums = List.of(10, 20, 30);

Optional<Integer> sum = nums.stream().reduce(Integer::sum);

sum.ifPresent(System.out::println);  // Output: 60
```

---

## ✅ 5. **Find Max/Min with Optional**

```java
List<Integer> nums = List.of(10, 20, 30);

Optional<Integer> max = nums.stream().max(Integer::compareTo);

max.ifPresent(System.out::println);  // Output: 30
```

---

## 🛑 Avoid: Returning `Optional<Optional<T>>`

```java
// Don't do this:
Optional<Optional<String>> nested = Optional.of(Optional.of("value"));
```

Use `flatMap` when chaining Optionals inside Streams.

---

Let me know if you want real-world usage with Spring Data `Optional<T>`, JPA `findById()`, or custom service returns.
