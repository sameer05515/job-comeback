
Good question bhai 👍 — ye ek **Java 8 interview favourite** hai.

---

## ✅ Use of Static Methods in Functional Interfaces

1. **Utility / Helper methods provide karna**

   * Functional interface ke saath directly related helper logic aapko kahin aur likhna na pade.
   * Example: `Comparator` functional interface ke andar hi `comparing()`, `naturalOrder()`, `reverseOrder()` static methods diye gaye hain.

2. **No need of separate Utils classes**

   * Pehle hum alag utility classes banate the (e.g., `Collections`, `Arrays`).
   * Ab interface ke andar hi relevant static helpers mil jate hain.

3. **Better API design (discoverability)**

   * Jab aap functional interface use karte ho, to IntelliSense me hi static methods dikh jate hain → easy to discover and use.

4. **Encapsulation of related functionality**

   * Functional interface aur usse related static methods ek jagah bundled rahte hain.

---

## ✅ Example: Comparator (Java 8+)

```java
import java.util.*;

public class StaticMethodFI {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Prem", "Naren", "Rimi");

        // Using static method in functional interface Comparator
        names.sort(Comparator.comparing(String::length));

        System.out.println(names); // [Rimi, Prem, Naren]
    }
}
```

Here, `Comparator.comparing()` ek **static method** hai jo `Comparator` interface ke andar hi diya gaya hai.

---

## ✅ Interview me bolne ka line

*"Static methods in functional interfaces were introduced to provide utility/helper methods related to the interface itself, without needing extra utility classes. Example: `Comparator.comparing()` makes APIs more concise and discoverable."*

---

Bhai, chaho to main iska ek **table bana dun (Before Java 8 vs After Java 8)** jisme dikhaun ki static methods kaise Utils class ki need ko replace karte hain?
