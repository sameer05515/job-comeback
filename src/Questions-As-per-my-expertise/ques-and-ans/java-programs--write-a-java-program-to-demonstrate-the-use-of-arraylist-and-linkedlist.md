✅ Here's a simple Java program demonstrating basic operations using both `ArrayList` and `LinkedList`:

```java
import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        // ArrayList demonstration
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Java");
        arrayList.add("Spring");
        arrayList.add("React");

        System.out.println("ArrayList Elements:");
        arrayList.forEach(System.out::println);

        arrayList.remove("Spring");
        System.out.println("After removing 'Spring': " + arrayList);

        // LinkedList demonstration
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("Node");
        linkedList.addFirst("MongoDB");
        linkedList.addLast("Express");

        System.out.println("\nLinkedList Elements:");
        linkedList.forEach(System.out::println);

        linkedList.removeFirst();
        linkedList.removeLast();

        System.out.println("After removing first and last: " + linkedList);
    }
}
```

---

### ✅ Output:

```
ArrayList Elements:
Java
Spring
React
After removing 'Spring': [Java, React]

LinkedList Elements:
MongoDB
Node
Express
After removing first and last: [Node]
```

Let me know if you want to compare performance or internal working too.
