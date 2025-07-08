✅ Here's a **Java 8+** style version using **Streams** to find the second largest element in an array:

```java
import java.util.*;
import java.util.stream.*;

public class SecondLargestJava8 {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        Optional<Integer> secondLargest = Arrays.stream(arr)
            .boxed()
            .distinct()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .findFirst();

        secondLargest.ifPresentOrElse(
            val -> System.out.println("Second largest element is: " + val),
            () -> System.out.println("No second largest element found.")
        );
    }
}
```

---

### ✅ Output:

```
Second largest element is: 34
```

Let me know if you want a version that avoids sorting or works on lists too.
