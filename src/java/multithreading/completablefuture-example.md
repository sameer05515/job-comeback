Here’s a **quick CompletableFuture example** that shows async execution, chaining, and combining:

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {

        // Run async task without returning result
        CompletableFuture<Void> future1 = CompletableFuture.runAsync(() -> {
            System.out.println("Task 1 running in thread: " + Thread.currentThread().getName());
        });

        // Run async task and return result
        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
            System.out.println("Task 2 running in thread: " + Thread.currentThread().getName());
            return "Hello";
        });

        // Chaining with thenApply
        CompletableFuture<String> future3 = future2.thenApply(result -> result + " World");

        // Combining two futures
        CompletableFuture<String> combined = future3.thenCombine(
                CompletableFuture.supplyAsync(() -> " from CompletableFuture"),
                (f3, f4) -> f3 + f4
        );

        // Wait for results
        future1.join(); // Wait for void future
        System.out.println(combined.get());
    }
}
```

**Output (sample)**

```
Task 1 running in thread: ForkJoinPool.commonPool-worker-1
Task 2 running in thread: ForkJoinPool.commonPool-worker-2
Hello World from CompletableFuture
```

---

If you want, I can also give you a **CompletableFuture cheatsheet** covering
`thenApply`, `thenAccept`, `thenRun`, `allOf`, `anyOf`, and exception handling — perfect for interviews.
