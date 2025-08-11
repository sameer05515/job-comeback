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
