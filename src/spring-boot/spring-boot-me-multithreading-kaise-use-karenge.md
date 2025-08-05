Spring Boot में **multithreading** को इस्तेमाल करने के लिए आप Java के concurrency features (जैसे `ExecutorService`, `@Async`, `CompletableFuture`, आदि) और Spring के built-in support का उपयोग कर सकते हैं।

---

### ✅ Option 1: `@Async` Annotation (Spring Way – Simple & Clean)

#### 🔧 Step 1: Enable Async support

```java
@SpringBootApplication
@EnableAsync
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

#### 📦 Step 2: Create a Service with `@Async` method

```java
@Service
public class EmailService {

    @Async
    public void sendEmail(String to) {
        System.out.println("Sending email to " + to + " by thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(3000); // simulate delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Email sent to " + to);
    }
}
```

#### ✅ Step 3: Call `sendEmail()` method from any controller

```java
@RestController
public class MailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/send")
    public String send() {
        emailService.sendEmail("user@example.com");
        return "Email processing started!";
    }
}
```

---

### ✅ Option 2: Using `ExecutorService` (Manual Thread Management)

```java
ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    System.out.println("Running in separate thread: " + Thread.currentThread().getName());
});
```

---

### ✅ Option 3: Return `CompletableFuture` with `@Async`

```java
@Async
public CompletableFuture<String> process() {
    // long-running task
    return CompletableFuture.completedFuture("Done");
}
```

---

### 🛠 Optional: Customize ThreadPoolExecutor

```java
@Configuration
public class AsyncConfig {

    @Bean(name = "taskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(500);
        executor.setThreadNamePrefix("MyAsync-");
        executor.initialize();
        return executor;
    }
}
```

---

अगर आप चाहें तो मैं `CompletableFuture` और DB call के साथ एक end-to-end demo भी बना सकता हूँ।
