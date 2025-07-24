Microservices communicate with each other using **inter-service communication** mechanisms, mainly over the network. Here are the common methods:

---

### 🔹 1. **HTTP REST (Synchronous)**

* Microservice A calls Microservice B via HTTP endpoint.
* Often uses `RestTemplate` or `WebClient` in Spring Boot.

```java
// Example using WebClient
WebClient.create()
    .get()
    .uri("http://user-service/api/users/1")
    .retrieve()
    .bodyToMono(User.class)
    .block();
```

---

### 🔹 2. **gRPC (Synchronous)**

* Uses Protocol Buffers for fast, contract-based RPC communication.
* More efficient than REST for large-scale, low-latency systems.

---

### 🔹 3. **Message Queue (Asynchronous)**

* Services communicate via queues or topics using a message broker:

  * RabbitMQ, Apache Kafka, ActiveMQ, etc.

```java
// Publisher (e.g., KafkaTemplate)
kafkaTemplate.send("user-created-topic", user);
```

```java
// Consumer (e.g., @KafkaListener)
@KafkaListener(topics = "user-created-topic")
public void consume(User user) {
    // Handle user event
}
```

---

### 🔹 4. **Service Discovery + Load Balancing**

* Tools like **Eureka**, **Consul** used for locating services dynamically.
* Load balancers like **Ribbon**, **Spring Cloud LoadBalancer**, **NGINX** help in distributing traffic.

---

### 🔹 5. **API Gateway**

* A central entry point (like **Spring Cloud Gateway**, **Zuul**, **Kong**) routes requests to respective microservices.

---

### Summary Table

| Method            | Type         | Tools/Examples             |
| ----------------- | ------------ | -------------------------- |
| REST API          | Synchronous  | WebClient, RestTemplate    |
| gRPC              | Synchronous  | gRPC, Protocol Buffers     |
| Message Queues    | Asynchronous | Kafka, RabbitMQ            |
| API Gateway       | Gateway      | Spring Cloud Gateway, Zuul |
| Service Discovery | Registry     | Eureka, Consul             |

---

Let me know if you want full code for one of these patterns.
