### ✅ How I Design a Fault-Tolerant API with Retry & Circuit Breaker Patterns (Spring Boot)

---

### 🔹 1. **Core Concepts**

| Pattern             | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| 🔁 Retry            | Retry failed calls (e.g. network blips)                 |
| 🛡️ Circuit Breaker | Stop repeated failing calls to avoid cascading failures |
| ⏱️ Timeout          | Limit waiting time to free resources                    |
| 🧰 Fallback         | Graceful degradation (cached data, dummy response)      |

---

### 🔹 2. **Tool of Choice → Resilience4j**

✅ Lightweight, Spring Boot-friendly
✅ Works with `Retry`, `CircuitBreaker`, `RateLimiter`, `Bulkhead`

---

### 🔹 3. **Add Dependency**

```xml
<!-- pom.xml -->
<dependency>
  <groupId>io.github.resilience4j</groupId>
  <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

---

### 🔹 4. **Sample Setup: Retry + Circuit Breaker**

```java
@CircuitBreaker(name = "productService", fallbackMethod = "fallback")
@Retry(name = "productService", fallbackMethod = "fallback")
public Product fetchProduct(String id) {
    return webClient.get()
                    .uri("/product/" + id)
                    .retrieve()
                    .bodyToMono(Product.class)
                    .block();
}

public Product fallback(String id, Throwable ex) {
    log.warn("Fallback for product {}: {}", id, ex.getMessage());
    return new Product("default-id", "Unavailable");
}
```

---

### 🔹 5. **application.yml Configuration**

```yaml
resilience4j:
  retry:
    instances:
      productService:
        max-attempts: 3
        wait-duration: 500ms

  circuitbreaker:
    instances:
      productService:
        failure-rate-threshold: 50
        wait-duration-in-open-state: 5s
        sliding-window-size: 10
        minimum-number-of-calls: 5
```

---

### 🔹 6. **Add Timeout + Rate Limiting**

```yaml
resilience4j:
  timelimiter:
    instances:
      productService:
        timeout-duration: 2s

  ratelimiter:
    instances:
      productService:
        limit-for-period: 10
        limit-refresh-period: 1s
```

---

### 🔹 7. **Metrics & Monitoring**

* Use Spring Boot Actuator + Micrometer
* View circuit breaker status:

  * `/actuator/metrics/resilience4j.circuitbreaker.state`
* Integrate with Prometheus/Grafana for alerts

---

### 🔹 8. **Design Guidelines**

| Do's                             | Don'ts                                 |
| -------------------------------- | -------------------------------------- |
| ✅ Use fallback methods           | ❌ Let exceptions propagate silently    |
| ✅ Tune retry based on error type | ❌ Retry on all exceptions (e.g. 400)   |
| ✅ Wrap all remote calls          | ❌ Apply circuit breaker to local logic |
| ✅ Use timeouts to prevent hangs  | ❌ Block on long external calls         |

---

### ✅ Summary Line for Interview:

> "I use Resilience4j to build fault-tolerant APIs with retry, circuit breaker, fallback, and timeout strategies—tuned per service and monitored via Spring Actuator and Grafana for resilience at scale."

---

Type:

* `resilience4j-template` → boilerplate setup
* `fallback-patterns` → sample fallback types
* `metrics-dashboards` → for circuit states & retry counts
