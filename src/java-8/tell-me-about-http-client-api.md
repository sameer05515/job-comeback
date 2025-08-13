The **HTTP Client API** was introduced in **Java 11** (standardized from the incubator API in Java 9 & 10) to replace the older `HttpURLConnection` with a more modern, flexible, and asynchronous HTTP client.

---

### **Key Features**

1. **Supports HTTP/1.1 and HTTP/2** (including multiplexing and server push).
2. **Synchronous and Asynchronous** request handling.
3. **Immutable** and thread-safe `HttpClient` instances.
4. **Built-in support for WebSockets**.
5. **Cleaner, fluent API** for building requests.

---

### **Core Classes**

* **`HttpClient`** → Used to send requests and receive responses.
* **`HttpRequest`** → Represents an HTTP request.
* **`HttpResponse`** → Represents an HTTP response.

---

### **Example – Synchronous GET**

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("Status Code: " + response.statusCode());
        System.out.println("Body: " + response.body());
    }
}
```

---

### **Example – Asynchronous GET**

```java
import java.net.URI;
import java.net.http.*;
import java.util.concurrent.CompletableFuture;

public class AsyncHttpClientExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
                .GET()
                .build();

        CompletableFuture<HttpResponse<String>> futureResponse =
                client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

        futureResponse.thenApply(HttpResponse::body)
                      .thenAccept(System.out::println)
                      .join();
    }
}
```

---

### **Advantages over `HttpURLConnection`**

* **Non-blocking** I/O support via `CompletableFuture`.
* **HTTP/2 support** (old API only supports HTTP/1.1).
* **More readable** and less boilerplate code.
* **Immutable and reusable** client instances.
* **Built-in JSON handling** (with `BodyHandlers.ofString()` + external parsing libraries).

---

If you want, I can also show **POST request with JSON body** using this API — that's a common interview question.


---
---

# POST request with JSON body using this HttpClient API

Here’s a **Java 11+ POST request with JSON body** using the `HttpClient` API:

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;

public class PostJsonExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();

        String jsonBody = """
            {
              "name": "John Doe",
              "age": 30
            }
            """;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                .timeout(Duration.ofSeconds(10))
                .header("Content-Type", "application/json")
                .POST(BodyPublishers.ofString(jsonBody))
                .build();

        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

        System.out.println("Status Code: " + response.statusCode());
        System.out.println("Response Body: " + response.body());
    }
}
```

**Key points:**

* `HttpClient` introduced in **Java 11**.
* `.POST(BodyPublishers.ofString(json))` sends the request body.
* `.header("Content-Type", "application/json")` sets content type.
* Can use `send()` (sync) or `sendAsync()` (async).

If you want, I can also give you an **async version with CompletableFuture** so the call doesn’t block.

---
---

# an **async version with CompletableFuture** so the call doesn’t block

Here’s the **async POST request with JSON body** using Java 11+ `HttpClient` and `CompletableFuture`:

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;

public class AsyncPostJsonExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();

        String jsonBody = """
            {
              "name": "John Doe",
              "age": 30
            }
            """;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                .timeout(Duration.ofSeconds(10))
                .header("Content-Type", "application/json")
                .POST(BodyPublishers.ofString(jsonBody))
                .build();

        CompletableFuture<HttpResponse<String>> futureResponse =
                client.sendAsync(request, BodyHandlers.ofString());

        futureResponse
                .thenApply(HttpResponse::body)
                .thenAccept(body -> System.out.println("Response: " + body))
                .exceptionally(e -> {
                    System.err.println("Error: " + e.getMessage());
                    return null;
                });

        System.out.println("Request sent asynchronously... main thread is free!");

        // Keep main alive until async completes
        futureResponse.join();
    }
}
```

**Highlights:**

* `sendAsync()` returns a `CompletableFuture<HttpResponse<T>>`.
* The main thread doesn’t block until `.join()` is called (or you can chain futures without joining).
* `thenApply()` processes the result, `thenAccept()` consumes it, `exceptionally()` handles errors.

Do you want me to also give you a **version with multiple async POST requests running in parallel** for interview prep? That’s a common follow-up question.


---
---

# **version with multiple async POST requests running in parallel**

Here’s a **Java 11 HttpClient + CompletableFuture** example making **multiple async POST requests in parallel** and processing all results when done:

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

public class MultipleAsyncPostExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();

        List<String> jsonBodies = List.of(
                """
                {"name": "John Doe", "age": 30}
                """,
                """
                {"name": "Jane Smith", "age": 25}
                """,
                """
                {"name": "Mike Johnson", "age": 40}
                """
        );

        List<CompletableFuture<HttpResponse<String>>> futures = jsonBodies.stream()
                .map(json -> {
                    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                            .timeout(Duration.ofSeconds(10))
                            .header("Content-Type", "application/json")
                            .POST(BodyPublishers.ofString(json))
                            .build();
                    return client.sendAsync(request, BodyHandlers.ofString());
                })
                .collect(Collectors.toList());

        CompletableFuture<Void> allFutures = CompletableFuture.allOf(
                futures.toArray(new CompletableFuture[0])
        );

        allFutures
                .thenRun(() -> {
                    System.out.println("All requests completed!");
                    futures.forEach(future -> {
                        try {
                            HttpResponse<String> response = future.join();
                            System.out.println("Status: " + response.statusCode());
                            System.out.println("Body: " + response.body());
                        } catch (Exception e) {
                            System.err.println("Error: " + e.getMessage());
                        }
                    });
                })
                .join(); // Wait for all to finish
    }
}
```

**Key points for interviews:**

* `CompletableFuture.allOf()` waits for all futures to complete.
* Requests run **truly in parallel** (I/O bound) with a single `HttpClient`.
* Using `.join()` instead of `.get()` avoids checked exceptions.
* Useful for **batch API calls** or microservices communication.

I can also show you a **version that collects results into a `List<String>` without manually looping** using streams — it’s a neat functional style often asked in interviews. Would you like that?


---
---

# a **version that collects results into a `List<String>` without manually looping** using streams

Here’s the **functional style version** that collects all async POST responses into a `List<String>` without manually looping:

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

public class MultipleAsyncPostFunctional {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();

        List<String> jsonBodies = List.of(
                """
                {"name": "John Doe", "age": 30}
                """,
                """
                {"name": "Jane Smith", "age": 25}
                """,
                """
                {"name": "Mike Johnson", "age": 40}
                """
        );

        List<CompletableFuture<String>> futures = jsonBodies.stream()
                .map(json -> {
                    HttpRequest request = HttpRequest.newBuilder()
                            .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
                            .timeout(Duration.ofSeconds(10))
                            .header("Content-Type", "application/json")
                            .POST(BodyPublishers.ofString(json))
                            .build();

                    return client.sendAsync(request, BodyHandlers.ofString())
                            .thenApply(HttpResponse::body);
                })
                .collect(Collectors.toList());

        // Combine all into a single future that contains a list of results
        CompletableFuture<List<String>> allResponses = CompletableFuture.allOf(
                futures.toArray(new CompletableFuture[0])
        ).thenApply(v ->
                futures.stream()
                        .map(CompletableFuture::join)
                        .collect(Collectors.toList())
        );

        // Get and print results
        List<String> results = allResponses.join();
        results.forEach(System.out::println);
    }
}
```

**Why this is cleaner:**

* The `thenApply(HttpResponse::body)` transformation extracts only the body at each step.
* `CompletableFuture.allOf()` returns a `Void` future, but we map it into a list in `.thenApply()`.
* No manual `forEach()` after completion — it’s handled inside the functional chain.

If you want, I can show a **non-blocking version** that just prints results as they arrive instead of waiting for all. That’s a pattern often asked in *reactive programming* interviews.


---
---

# HttpClient se ek api invoke kar ke, response body ko kisi class me parse kar sakte hain??

Haan, bilkul kar sakte hain 👍

Java 11+ ke `HttpClient` ka use karke API call karo, phir JSON ko `ObjectMapper` (Jackson) ya `Gson` se apni POJO class me map kar sakte ho.

---

### Example — `HttpClient` + Jackson

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ApiExample {
    public static void main(String[] args) throws Exception {
        // Step 1: HttpClient banaye
        HttpClient client = HttpClient.newHttpClient();

        // Step 2: Request banaye
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://jsonplaceholder.typicode.com/todos/1"))
                .GET()
                .build();

        // Step 3: Response fetch kare
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Step 4: Jackson se parse kare
        ObjectMapper mapper = new ObjectMapper();
        Todo todo = mapper.readValue(response.body(), Todo.class);

        // Step 5: Output print kare
        System.out.println(todo);
    }
}

// Sample POJO
class Todo {
    public int userId;
    public int id;
    public String title;
    public boolean completed;

    @Override
    public String toString() {
        return "Todo{" +
                "userId=" + userId +
                ", id=" + id +
                ", title='" + title + '\'' +
                ", completed=" + completed +
                '}';
    }
}
```

---

✅ **Key Points**

* Java 11 `HttpClient` sirf String ya stream return karta hai → parsing ke liye Jackson/Gson ki zarurat hoti hai.
* `ObjectMapper` me `readValue(String json, Class<T> type)` direct POJO me convert kar deta hai.
* Async version bhi `sendAsync()` ke saath ban sakta hai.

---

Agar tum chaho to main is example ka **async + multiple parallel requests** wala version bhi bana sakta hoon.


---
---



# **Java me REST API invoke karne ke options**

#### **1. Core Java / Built-in**

* **`HttpURLConnection`** (Java 1.1 se) — old, verbose, manual stream handling.
* **`HttpClient`** (Java 11 se) — modern, async + sync, cleaner API.
* **`URLConnection`** (very old, generic for HTTP/FTP, rarely used for new code).

#### **2. Spring Framework**

* **`RestTemplate`** — Easy synchronous calls (Spring 5 se deprecated in favor of WebClient).
* **`WebClient`** — Reactive, supports async + streaming.

#### **3. Jakarta EE / JAX-RS**

* **`Client` API** from `javax.ws.rs.client` (e.g., Jersey, RESTEasy).

#### **4. Third-Party Libraries**

* **Apache HttpClient** — powerful, customizable, still widely used.
* **OkHttp** — lightweight, fast, async support.
* **Retrofit** (on top of OkHttp) — declarative API client.
* **Feign** — declarative, often used with Spring Cloud.

---

If you want, I can prepare a **comparison table** for these with pros/cons + when to use which, so it’s easy to recall in interviews. Would you like me to make that?

---
---

# a **comparison table** for these with pros/cons + when to use which

Here’s your **Java REST API Client Comparison Table** for quick interview revision:

---

| **Library / API**                   | **Type**               | **Pros**                                                                                                             | **Cons**                                                            | **When to Use**                                      |
| ----------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| **HttpURLConnection** (Core Java)   | Low-level              | - Built-in (no deps) <br> - Works in all Java versions                                                               | - Verbose code <br> - Manual stream parsing <br> - No async support | Very small apps or avoiding dependencies             |
| **HttpClient** (Java 11+)           | Built-in modern client | - Clean API <br> - Async with `CompletableFuture` <br> - HTTP/2 support <br> - Handles JSON with ObjectMapper easily | - Requires Java 11+ <br> - Not as high-level as Spring              | Modern Java apps, async calls, no framework          |
| **RestTemplate** (Spring)           | High-level synchronous | - Very easy for JSON ↔ POJO <br> - Built-in with Spring <br> - Rich config                                           | - Blocking <br> - Deprecated for new dev (still maintained)         | Legacy Spring apps, quick sync calls                 |
| **WebClient** (Spring WebFlux)      | Reactive / async       | - Non-blocking <br> - Supports streaming & backpressure <br> - Integrates with Mono/Flux                             | - Slight learning curve <br> - Requires Reactor understanding       | Reactive Spring apps, async/massive concurrent calls |
| **JAX-RS Client** (Jersey/RESTEasy) | Standard API           | - Java EE standard <br> - Pluggable providers <br> - Fluent API                                                      | - Needs JAX-RS implementation <br> - Not in Core Java               | Jakarta EE or JAX-RS-based apps                      |
| **Apache HttpClient**               | Third-party            | - Battle-tested <br> - Rich features (connection pool, cookies) <br> - Works with older Java                         | - Heavier than OkHttp <br> - More boilerplate than Retrofit         | Complex enterprise apps needing fine control         |
| **OkHttp**                          | Third-party            | - Lightweight <br> - Async + HTTP/2 <br> - Easy to use                                                               | - Minimal features vs Apache <br> - No built-in JSON mapping        | Mobile (Android) or small footprint apps             |
| **Retrofit** (on OkHttp)            | Declarative            | - Interface-based <br> - Auto JSON ↔ POJO <br> - Minimal boilerplate                                                 | - Needs OkHttp <br> - Extra learning curve                          | Declarative REST clients, Android, clean API design  |
| **Feign** (Spring Cloud)            | Declarative            | - Just define interface + annotations <br> - Built-in load balancing (Ribbon) <br> - Integrates with Eureka/Consul   | - Requires Spring Cloud <br> - Less control over low-level HTTP     | Microservices with Spring Cloud                      |

---

If you want, I can also make a **flowchart** that helps pick **which one to use** based on project type, Java version, and async/sync needs — perfect for interviews.

Do you want me to prepare that decision flowchart?
