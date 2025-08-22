# classic Group Anagrams problem

> given Input: ["eat","tea","tan","ate","nat","bat"]  
> please group strings in subarrays, if they are anagrams, output should be like   
> // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]  


Perfect 👌 Yehi question **Java 8 Streams** me bohot pucha jata hai. Aap `Collectors.groupingBy` + sorted key use karke kar sakte ho.

### ✅ Java 8 Solution – Group Anagrams

```java
import java.util.*;
import java.util.stream.*;

public class GroupAnagrams {
    public static void main(String[] args) {
        List<String> input = Arrays.asList("eat","tea","tan","ate","nat","bat");

        Collection<List<String>> result = input.stream()
            .collect(Collectors.groupingBy(
                word -> {
                    char[] chars = word.toCharArray();
                    Arrays.sort(chars);         // sorted chars as key
                    return new String(chars);
                }
            ))
            .values();

        System.out.println(result);
        
        var data=input.stream()
            .collect(Collectors.groupingBy(
                word -> {
                    char[] chars = word.toCharArray();
                    Arrays.sort(chars);         // sorted chars as key
                    return new String(chars);
                }
            ));
            
      System.out.println(data);
    }
}
```

### 🖨 Output

```
[[eat, tea, ate], [tan, nat], [bat]]
```

---

👉 Yehi concise one-liner bhi bol sakte ho interview me:

```java
input.stream()
     .collect(Collectors.groupingBy(w -> {
         char[] c = w.toCharArray();
         Arrays.sort(c);
         return new String(c);
     }))
     .values();
```

---

Bhai, chaho to main iska **parallelStream version** bhi bana dun jo bade inputs ke liye fast hoga. Banau?
