# java me stream produce karne ke different tareeke

Java me **Stream** banane ke kaafi tareeke hote hain — interview me aapko mostly ye categories cover karni chahiye:

---

## **1. Collections se**

```java
List<Integer> list = Arrays.asList(1, 2, 3);
Stream<Integer> s1 = list.stream();
Stream<Integer> s2 = list.parallelStream(); // Parallel version
```

---

## **2. Arrays se**

```java
String[] arr = {"a", "b", "c"};
Stream<String> s3 = Arrays.stream(arr);
Stream<String> s4 = Stream.of(arr); // varargs support
```

---

## **3. Static factory methods**

```java
Stream<String> s5 = Stream.of("a", "b", "c"); // Direct values
Stream<Integer> s6 = Stream.empty();          // Empty stream
```

---

## **4. Infinite / Generated streams**

```java
Stream<Integer> s7 = Stream.generate(() -> 1);               // Constant value
Stream<Integer> s8 = Stream.iterate(1, n -> n + 1);           // Incremental
```

---

## **5. Primitive Streams (IntStream, LongStream, DoubleStream)**

```java
IntStream s9 = IntStream.range(1, 5);      // 1, 2, 3, 4
IntStream s10 = IntStream.rangeClosed(1, 5); // 1..5
```

---

## **6. Files / IO se**

```java
Stream<String> lines = Files.lines(Paths.get("file.txt")); // File lines
```

---

## **7. Regex split se**

```java
Stream<String> words = Pattern.compile("\\s+").splitAsStream("Hello World Java");
```

---

## **8. Builder se**

```java
Stream<String> s11 = Stream.<String>builder().add("a").add("b").build();
```

---

## **Quick Table (Interview-Style)**

| Source Type   | Example                                     | Notes                   |
| ------------- | ------------------------------------------- | ----------------------- |
| Collection    | `list.stream()`                             | Most common             |
| Array         | `Arrays.stream(arr)`                        | Works with any array    |
| Direct values | `Stream.of(…)`                              | Simple constants        |
| Infinite      | `Stream.iterate()`, `Stream.generate()`     | Lazy infinite sequences |
| Primitive     | `IntStream.range()`, `rangeClosed()`        | Avoids boxing           |
| File          | `Files.lines(path)`                         | Needs IO handling       |
| Regex         | `Pattern.compile(regex).splitAsStream(str)` | Good for splitting      |
| Builder       | `Stream.builder().add(...).build()`         | Programmatic building   |

---

Agar tum chaho to main iska **"all in one" demo program** bana sakta hoon jo har tarah ka stream banata hai aur print karta hai, jo interviews me impress karega.
Kya main bana du?


---
---

# Stream.concat

Bilkul 👍
`Stream.concat()` bhi ek tarika hai stream produce karne ka, lekin **ye nayi stream banane ke liye do existing streams ko merge karta hai** — ye starting point nahi hai jaise `Stream.of()` ya `list.stream()` hote hain.

---

### Example:

```java
Integer[] arr1 = {1, 3, 5};
Integer[] arr2 = {2, 4, 6};

Stream<Integer> combined = Stream.concat(
        Arrays.stream(arr1),
        Arrays.stream(arr2)
);

combined.forEach(System.out::println);
```

**Output:**

```
1
3
5
2
4
6
```

---

💡 **Note:**

* `Stream.concat(s1, s2)` → lazy evaluation karta hai.
* Order maintain hota hai: pehle `s1` ka data, fir `s2` ka.
* Zyada streams ko combine karna ho to `Stream.of(s1, s2, s3).flatMap(...)` better hota hai.

---

Agar tum chaho to main **"Java Streams — all creation ways + concat"** ek single cheat-sheet code bana du jo interview me direct chal jaye.
Banau?


---
---

# Java Streams Creation + Concat Cheat-Sheet 🚀 (Interview-Ready)

Here’s your **Java Streams Creation + Concat Cheat-Sheet** 🚀 (Interview-Ready)

```java
import java.util.*;
import java.util.stream.*;

public class StreamCreationDemo {
    public static void main(String[] args) {

        // 1️⃣ From Collection
        List<String> list = Arrays.asList("A", "B", "C");
        list.stream().forEach(System.out::println);

        // 2️⃣ From Arrays
        Integer[] arr = {1, 2, 3};
        Arrays.stream(arr).forEach(System.out::println);

        // 3️⃣ Using Stream.of()
        Stream.of("X", "Y", "Z").forEach(System.out::println);

        // 4️⃣ Using Stream.generate()
        Stream.generate(() -> "Hello").limit(3).forEach(System.out::println);

        // 5️⃣ Using Stream.iterate()
        Stream.iterate(1, n -> n + 2).limit(5).forEach(System.out::println);

        // 6️⃣ From Primitives
        IntStream.range(1, 5).forEach(System.out::println);        // 1 to 4
        LongStream.of(10L, 20L, 30L).forEach(System.out::println);

        // 7️⃣ From File (Java NIO)
        // try (Stream<String> lines = Files.lines(Paths.get("file.txt"))) { ... }

        // 8️⃣ Concat two Streams
        Stream<String> s1 = Stream.of("A", "B");
        Stream<String> s2 = Stream.of("C", "D");
        Stream.concat(s1, s2).forEach(System.out::println);

        // 9️⃣ Multiple Streams concat
        Stream.of(s1, s2, Stream.of("E", "F"))
              .flatMap(x -> x)
              .forEach(System.out::println);
    }
}
```

---

✅ **Points to Remember for Interviews**

* **Stream.concat()** → merges exactly 2 streams, order preserved.
* **Stream.of(...).flatMap(...)** → better for merging 2+ streams.
* `generate()` → infinite stream of same/supplier values.
* `iterate()` → infinite stream with progression.
* Primitive streams (`IntStream`, `LongStream`, `DoubleStream`) are memory-efficient.

---

If you want, I can also give you a **one-page table of "When to use which stream creation method"** so you can recall instantly in interviews.
Ban du kya?
