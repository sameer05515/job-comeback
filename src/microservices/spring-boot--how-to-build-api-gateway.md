To build an **API Gateway** with Spring Boot, you can use **Spring Cloud Gateway**, which is part of the Spring Cloud ecosystem. It provides a simple way to route requests, apply filters, and manage cross-cutting concerns like logging, authentication, rate-limiting, etc.

---

### ✅ Steps to Create API Gateway using Spring Cloud Gateway

---

### 1. **Add dependencies (Maven)**

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-gateway</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
</dependencies>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>2021.0.8</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```

---

### 2. **`application.yml` Configuration**

```yaml
server:
  port: 8080

spring:
  application:
    name: api-gateway

  cloud:
    gateway:
      routes:
        - id: user-service
          uri: http://localhost:8081/
          predicates:
            - Path=/users/**
        - id: order-service
          uri: http://localhost:8082/
          predicates:
            - Path=/orders/**
```

---

### 3. **Main Class**

```java
@SpringBootApplication
public class ApiGatewayApplication {
  public static void main(String[] args) {
    SpringApplication.run(ApiGatewayApplication.class, args);
  }
}
```

---

### 4. **Run Services**

You should have services like:

* `UserService` running on port `8081`
* `OrderService` on port `8082`

API Gateway will act as entry point on `8080`, and forward requests like:

* `GET /users/1` → `http://localhost:8081/users/1`
* `GET /orders/100` → `http://localhost:8082/orders/100`

---

### ✅ Features you can add

* CORS filter
* Rate limiting
* Resilience (circuit breaker)
* Authentication/authorization
* Logging and tracing

Let me know if you want JWT security or Eureka discovery integration too.
