To build **Service Discovery** in a microservice architecture using Spring Boot, you typically use **Spring Cloud Netflix Eureka**. It helps services **register** themselves and **discover** other services dynamically, without hardcoded URLs.

---

### ✅ Step-by-step Setup for Eureka-based Service Discovery

---

### 1. 🧠 **What is Eureka?**

* Eureka Server: a registry where services register themselves.
* Eureka Client: each microservice that registers itself and uses the registry to discover others.

---

### 2. 🚀 Create Eureka Server

#### a) Dependencies (`pom.xml`):

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
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

#### b) Main class:

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
  public static void main(String[] args) {
    SpringApplication.run(EurekaServerApplication.class, args);
  }
}
```

#### c) `application.yml`:

```yaml
server:
  port: 8761

spring:
  application:
    name: eureka-server

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
```

---

### 3. 🧩 Create Eureka Clients (e.g., user-service, order-service)

#### a) Add dependency:

```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

#### b) Add `@EnableEurekaClient` to main class (optional in newer Spring versions):

```java
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
  public static void main(String[] args) {
    SpringApplication.run(UserServiceApplication.class, args);
  }
}
```

#### c) `application.yml` of client:

```yaml
server:
  port: 8081

spring:
  application:
    name: user-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

---

### 4. 🧪 Test It

* Start Eureka server → `http://localhost:8761`
* Start `user-service` and see it register automatically
* Now other services can discover `user-service` by name via `DiscoveryClient` or using Spring Cloud LoadBalancer

---

Let me know if you want:

* API Gateway to use service discovery
* Load-balanced REST client (`WebClient` or `RestTemplate`)
* Docker setup for Eureka Server + Clients
