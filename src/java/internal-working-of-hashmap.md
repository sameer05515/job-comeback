### ✅ Internal Working of `HashMap` in Java

`HashMap` works on the principle of **hashing** and uses an array of **buckets** to store key-value pairs.

---

### 🧱 Key Components:

1. **Array of Node\<K,V>**
   Each entry in the map is a `Node<K, V>` (or `Entry<K,V>` in older versions) stored in an array called `table`.

2. **Hash Function**
   A hash code is computed for the key using `hashCode()` and refined via `hash()` to distribute entries uniformly.

3. **Index Calculation**
   Index in array = `hash(key) & (n - 1)` where `n` is the array size (always a power of 2).

4. **Collision Handling**
   If two keys map to the same index:

   * **Before Java 8**: Uses a **linked list**.
   * **Java 8+**: Uses a **balanced tree (Red-Black Tree)** when the number of entries in a bucket exceeds a threshold (default 8).

---

### 🔄 Insertion Flow

```java
map.put("A", 100);
```

1. Compute `hash("A")`.
2. Calculate index from hash.
3. If bucket is empty → insert node.
4. If key already exists → update value.
5. If collision → traverse linked list/tree → insert at the end.

---

### 🔍 Example

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("one", 1);
map.put("two", 2);
```

Internally:

* `"one".hashCode()` → hash → index
* Stored at `table[index]` as `Node<"one", 1>`

---

### ⚠️ Important Details

| Feature                 | Description                                      |
| ----------------------- | ------------------------------------------------ |
| **Load Factor**         | When `size > capacity * loadFactor`, map resizes |
| **Default Capacity**    | 16                                               |
| **Default Load Factor** | 0.75                                             |
| **Resize Trigger**      | When map is 75% full                             |
| **Resize Operation**    | Doubles array size and rehashes all entries      |

---

### 🧠 HashMap is NOT thread-safe!

Use `ConcurrentHashMap` in multi-threaded environments.


---
---

# in which version Entry got replaced with Node in hashmap?

In **Java 8**, the internal implementation of `HashMap` replaced the `Entry` class with a new internal class called `Node`.

---

### 🔄 Summary of the Change:

| Java Version     | Internal Class Used                |
| ---------------- | ---------------------------------- |
| Java 7 and below | `Entry<K, V>` (static inner class) |
| Java 8 and above | `Node<K, V>` (static inner class)  |

---

### Why the change?

Java 8 introduced performance improvements to `HashMap`, such as using **Red-Black Trees** in buckets when hash collisions exceed a threshold (default is 8). To support this change:

* `Node<K, V>` became the new basic storage class.
* `TreeNode<K, V>` extends `Node<K, V>` for tree-based buckets.

These enhancements required a more flexible structure than the old `Entry` class.

---

✅ You can confirm this in the source code of `java.util.HashMap` in the Java 8 JDK.
