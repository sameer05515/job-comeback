# How collision is handled in HashMap

In **Java’s `HashMap`**, collisions (when two keys produce the same hash bucket index) are handled in **two stages** depending on Java version:

---

### **1. Pre–Java 8 (Before JDK 1.8)**

* **Collision Resolution Method:** **Separate Chaining** with a **Linked List**.
* Keys with the same hash index are stored in a linked list in that bucket.
* On lookup, keys in the list are compared using `.equals()` until a match is found.

---

### **2. Java 8 and Later**

* Still **Separate Chaining**, but **Linked List → Balanced Tree (Red-Black Tree)** for performance when too many collisions occur.
* **Threshold:** When a bucket's linked list length exceeds **8** and capacity is ≥ 64, it is converted to a **red-black tree**.

  * **O(n)** lookup (Linked List) → **O(log n)** lookup (Tree).
* If the size drops below **6**, the tree reverts back to a linked list.

---

### **Collision Handling Flow**

1. Compute **hash** → get **bucket index**.
2. If **bucket empty** → place entry there.
3. If **same key** exists → **replace value**.
4. If **different key but same bucket**:

   * Pre-Java 8 → append to linked list.
   * Java 8+ → append, and if too many collisions, **treeify**.

---

### **Diagram (Java 8+)**

```
Bucket[5] → [Node1: key1, value1] → [Node2: key2, value2]  // Linked List
Bucket[7] → TreeNode(keyA, valueA) ↔ TreeNode(keyB, valueB) // Red-Black Tree
```

---

If you want, I can give you a **short Java code** that intentionally causes collisions so you can show this in an interview. That will make you look extra sharp.
