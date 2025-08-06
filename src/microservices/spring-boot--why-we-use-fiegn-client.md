We use **Feign Client** in Spring Boot (especially with Spring Cloud) to simplify making HTTP requests between microservices. It allows us to **call REST APIs like normal Java method calls**, avoiding boilerplate code.

---

### ✅ **Key Reasons to Use Feign Client**

1. **Declarative REST Client**

   * Just write an interface and annotate it — no need to write `RestTemplate` code.

   ```java
   @FeignClient(name = "order-service")
   public interface OrderClient {
       @GetMapping("/orders/{id}")
       Order getOrderById(@PathVariable("id") Long id);
   }
   ```

2. **Load Balancing** (via Eureka + Ribbon or Spring Cloud LoadBalancer)

   * Feign integrates with service discovery for dynamic routing.

3. **Fallback/Resilience**

   * Can easily add fallback methods with **Resilience4j** or **Hystrix**.

4. **Easier Testing and Maintenance**

   * Code looks like a local method call. Improves readability and testability.

5. **Custom Interceptors**

   * You can add headers like auth tokens easily.

6. **Clean Integration**

   * Works well with Spring Boot's `@EnableFeignClients`.

---

### ✅ Example

```java
@FeignClient(name = "product-service", url = "http://localhost:8081")
public interface ProductClient {
    @GetMapping("/products/{id}")
    Product getProduct(@PathVariable("id") Long id);
}
```

Then use like:

```java
@Autowired
ProductClient productClient;

public void someMethod() {
    Product p = productClient.getProduct(5L);
}
```

Let me know if you want full working microservice examples with Feign.
