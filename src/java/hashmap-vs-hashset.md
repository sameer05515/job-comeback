Bhai, interview me **HashMap vs HashSet** ka difference bohot common hai. Yahaan ek crisp comparison table de raha hoon:

---

## 🔑 HashMap vs HashSet in Java

| Feature           | **HashMap**                                                         | **HashSet**                                                                                |
| ----------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Definition**    | Stores data in **key-value pairs**                                  | Stores only **unique values (no duplicates)**                                              |
| **Underlying DS** | Backed by a **HashTable** (array + linked list/tree for collisions) | Internally uses a **HashMap** (stores elements as keys, dummy value as constant `PRESENT`) |
| **Duplicates**    | Keys must be **unique**, values can be duplicate                    | No duplicates allowed                                                                      |
| **Nulls**         | Allows **1 null key** and multiple null values                      | Allows **1 null element**                                                                  |
| **Access/Lookup** | `O(1)` average for `get(key)`                                       | `O(1)` average for `contains(element)`                                                     |
| **Usage**         | Use when you want a mapping between **key and value**               | Use when you only want to store **unique elements**                                        |
| **Iteration**     | Iterate over `keySet()`, `values()`, or `entrySet()`                | Iterate directly over elements                                                             |
| **Example**       | `Map<String, Integer> map = new HashMap<>();`                       | `Set<String> set = new HashSet<>();`                                                       |

---

### ✅ Code Demo

```java
import java.util.*;

public class Test {
    public static void main(String[] args) {
        // HashMap
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("A", 3); // overrides old value
        System.out.println("HashMap: " + map); // {A=3, B=2}

        // HashSet
        Set<String> set = new HashSet<>();
        set.add("A");
        set.add("B");
        set.add("A"); // ignored, duplicate
        System.out.println("HashSet: " + set); // [A, B]
    }
}
```

---

👉 Ek line me:

* **HashMap = key → value mapping**
* **HashSet = unique collection of elements (internally backed by HashMap)**

---

Bhai, kya main iska **diagram of internal working (HashMap buckets vs HashSet)** text-based bana kar de du jisse interview me easily samjha sako?
