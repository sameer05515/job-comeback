### ✅ How I Design an Async Workflow Using RabbitMQ or Kafka (Spring Boot)

---

### 🔹 1. **Use Case for Async Design**

Async is ideal when:

* Tasks are **time-consuming** (e.g., image processing, email, PDF generation)
* You want to **decouple** producers & consumers
* You need **event-driven** architecture or **high throughput**

---

### 🔹 2. **Choose RabbitMQ vs Kafka**

| Feature    | RabbitMQ                          | Kafka                                 |
| ---------- | --------------------------------- | ------------------------------------- |
| Use When   | Event-driven, guaranteed delivery | High-volume, streaming/log processing |
| Durability | Message queues                    | Distributed commit log                |
| Ordering   | FIFO in queues                    | Partition-based ordering              |
| Latency    | Low                               | Optimized for throughput              |

---

### 🔹 3. **High-Level Architecture**

```
+------------+      +---------------+      +------------------+
| Producer   | ---> | RabbitMQ/Kafka| ---> | Consumer Service |
+------------+      +---------------+      +------------------+

→ Can have multiple consumers per topic or queue
→ Consumers can scale horizontally
```

---

### 🔹 4. **RabbitMQ (Spring AMQP)** – Basic Setup

```xml
<!-- pom.xml -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

```java
@Bean
public Queue queue() {
    return new Queue("email-queue", true);
}

@RabbitListener(queues = "email-queue")
public void consumeEmail(EmailPayload payload) {
    emailService.send(payload);
}
```

```java
rabbitTemplate.convertAndSend("email-queue", new EmailPayload(...));
```

---

### 🔹 5. **Kafka (Spring Kafka)** – Basic Setup

```xml
<dependency>
  <groupId>org.springframework.kafka</groupId>
  <artifactId>spring-kafka</artifactId>
</dependency>
```

```yaml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    consumer:
      group-id: email-consumer
```

```java
@KafkaListener(topics = "email-topic", groupId = "email-consumer")
public void listen(EmailPayload payload) {
    emailService.send(payload);
}
```

```java
kafkaTemplate.send("email-topic", new EmailPayload(...));
```

---

### 🔹 6. **Key Patterns to Apply**

| Pattern                | Purpose                              |
| ---------------------- | ------------------------------------ |
| ✅ Dead Letter Queue    | Handle failed messages safely        |
| ✅ Retry Mechanism      | Retry failed jobs (manually or auto) |
| ✅ Idempotency Check    | Avoid duplicate processing           |
| ✅ Header-based Routing | Custom message routing logic         |
| ✅ Correlation ID       | Track end-to-end flow                |

---

### 🔹 7. **Message Structure**

```json
{
  "eventId": "uuid-123",
  "eventType": "USER_REGISTERED",
  "timestamp": "2024-06-22T18:00:00Z",
  "payload": {
    "userId": 101,
    "email": "user@example.com"
  }
}
```

✅ Use consistent schemas (Avro/JSON) and versioning

---

### 🔹 8. **Monitoring & Observability**

* Use Prometheus/Grafana to monitor:

  * Consumer lag (Kafka)
  * Message queue depth (RabbitMQ)
* Alert on failure count or retry saturation

---

### ✅ Summary Line for Interview:

> "I design async workflows using RabbitMQ for guaranteed delivery or Kafka for high-throughput event processing. I follow pub-sub or queue-based models, ensure retries, DLQs, and idempotency, and monitor using Prometheus & alerting."

---

Type:

* `kafka-template-code` → full producer/consumer setup
* `rabbitmq-retry-example` → config with DLQ and retry
* `event-idempotency-guide` → how to avoid double-processing
