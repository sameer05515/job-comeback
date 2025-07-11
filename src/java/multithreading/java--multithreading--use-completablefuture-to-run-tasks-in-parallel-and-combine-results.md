Bilkul Prem bhaiya 🙏
Yeh raha ekdum **practical aur clean example** of using `CompletableFuture` to **run tasks in parallel and combine their results** ✅

---

### ✅ Java 8: `CompletableFuture` Parallel Execution + Combining Results

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureCombineDemo {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        
        // Task 1: Simulate fetching user info
        CompletableFuture<String> userFuture = CompletableFuture.supplyAsync(() -> {
            simulateDelay("Fetching user...");
            return "👤 User: Prem";
        });

        // Task 2: Simulate fetching account info
        CompletableFuture<String> accountFuture = CompletableFuture.supplyAsync(() -> {
            simulateDelay("Fetching account...");
            return "💰 Account: Active";
        });

        // Combine both results
        CompletableFuture<String> combined = userFuture.thenCombine(accountFuture,
                (user, account) -> user + " | " + account);

        // Wait and get final result
        String result = combined.get();
        System.out.println("✅ Combined Result → " + result);
    }

    private static void simulateDelay(String msg) {
        System.out.println(msg);
        try {
            Thread.sleep(1000); // simulate delay
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

---

### 🧾 Output:

```
Fetching user...
Fetching account...
✅ Combined Result → 👤 User: Prem | 💰 Account: Active
```

---

### 🔍 Breakdown

| Step            | What it does                             |
| --------------- | ---------------------------------------- |
| `supplyAsync()` | Starts tasks **in parallel**             |
| `thenCombine()` | Combines results of two futures          |
| `.get()`        | Blocks and returns final combined result |

---

### 🧠 More Variants:

| Method                   | Description                            |
| ------------------------ | -------------------------------------- |
| `thenCombine(f2, fn)`    | Combine two futures                    |
| `thenCompose()`          | Chain futures (flatMap)                |
| `allOf(f1, f2, ..., fn)` | Wait for all to complete (void result) |
| `anyOf(f1, f2, ..., fn)` | Continue on first completed            |

---

**Boliye Prem bhaiya – aage chahiye kya real project use-case (like DB call + API call), ya `CompletableFuture.allOf()` ka version bhi?**
