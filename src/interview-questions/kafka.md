### ✅ Apache Kafka – Interview Questions (Java + Spring Boot Context)

---

### 🔹 **Basic Level**

1. [**What is Apache Kafka?**](../kafka/what-is-apache-kafka.md)
2. **What is a Topic in Kafka?**
3. **What is a Partition and why is it used?**
4. **What is the difference between a Producer and a Consumer?**
5. **What is a Consumer Group?**
6. **What is an Offset in Kafka?**
7. **How does Kafka ensure fault tolerance?**
8. **Difference between Kafka and traditional message brokers (e.g. RabbitMQ)?**

---

### 🔹 **Intermediate Level**

9. **How does Kafka achieve high throughput?**
10. **What is the role of Zookeeper in Kafka?**
11. **What are replication factor and leader election in Kafka?**
12. **How does Kafka guarantee message ordering?**
13. **Difference between at-most-once, at-least-once, and exactly-once delivery?**
14. **What is idempotent producer in Kafka?**
15. **What happens when a consumer fails in a consumer group?**
16. **What is Kafka retention policy?**

---

### 🔹 **Advanced Level**

17. **Explain how Kafka handles backpressure.**
18. **What is a Dead Letter Queue (DLQ) in Kafka?**
19. **How does Kafka handle rebalancing in consumer groups?**
20. **How do you manage schema evolution in Kafka (Avro + Schema Registry)?**
21. **Explain Kafka Streams vs Kafka Consumer + Producer combo.**
22. **How does Kafka achieve exactly-once semantics (EOS)?**
23. **What is ISR (In-Sync Replica)?**
24. **How can you monitor Kafka performance and lag?**

---

### 🔹 **Spring Boot + Kafka**

25. **How do you integrate Kafka with Spring Boot?**
26. **How do you configure multiple Kafka consumers in Spring Boot?**
27. **How do you handle Kafka consumer exceptions in Spring?**
28. **How to configure retry and backoff for Kafka listeners?**
29. **What is `@KafkaListener`? How does it work under the hood?**
30. **How do you secure Kafka with SSL or SASL in Spring Boot?**

- [**How to run kafka in docker?**](../kafka/how-to-run-kafka-in-docker.md)

---

Type:

* `kafka-springboot-setup` → for code examples
* `kafka-prod-cheatsheet` → for performance tuning tips
* `kafka-vs-rabbitmq` → detailed comparison for interviews
* 


---
---


### ✅ Kafka vs RabbitMQ — Key Differences (Interview Ready)

| Feature                  | **Kafka**                                            | **RabbitMQ**                                          |
| ------------------------ | ---------------------------------------------------- | ----------------------------------------------------- |
| **Type**                 | Distributed event streaming platform                 | Traditional message broker (queue-based)              |
| **Use Case**             | High-throughput, real-time data pipelines            | Event-driven apps, task queues, short-lived jobs      |
| **Message Model**        | **Pub-Sub + Log-based** (consumer reads from offset) | **Queue-based** (message removed after consumption)   |
| **Message Durability**   | Persistent log with configurable retention           | Ack-based (removed after ack)                         |
| **Message Ordering**     | Ordered within **partition**                         | FIFO (per queue, but not guaranteed with concurrency) |
| **Throughput**           | Very High (designed for millions/sec)                | Moderate to High                                      |
| **Scalability**          | Horizontally scalable via partitions                 | Scalable via exchanges and clustered queues           |
| **Consumer Behavior**    | Pull-based (consumers pull from offset)              | Push-based (broker pushes messages)                   |
| **Delivery Guarantees**  | At-most, at-least, **exactly-once** (with config)    | At-most, at-least-once                                |
| **Replay Capability**    | ✅ Yes – re-read from any offset                      | ❌ No – message removed once acknowledged              |
| **Built-in Retry/Delay** | ❌ Needs custom logic / DLQ                           | ✅ Built-in with retry, delay, TTL                     |
| **Tooling**              | Kafka Connect, Kafka Streams, Schema Registry        | RabbitMQ plugins, Shovel, Federation                  |
| **Latency**              | Lower for large batches (but tunable)                | Very low (single message delivery)                    |
| **Protocol**             | Custom TCP protocol                                  | AMQP 0.9.1                                            |
| **Complexity**           | Higher (needs config for brokers, Zookeeper\*)       | Easier to set up and use                              |
| **Spring Boot Support**  | ✅ spring-kafka                                       | ✅ spring-boot-starter-amqp                            |

> \* Kafka newer versions (2.8+) can run **without Zookeeper**

---

### 🔹 Summary:

* **Kafka** → Best for **event-driven, large-scale, stream processing**, where you need high-throughput, log persistence, and replay.
* **RabbitMQ** → Best for **task queues, workflows, guaranteed delivery**, especially where messages are short-lived and ordering/TTL is critical.

---

### ✅ Interview Summary Line:

> "Kafka is a distributed log system optimized for high-throughput event streaming and replay, while RabbitMQ is a message broker built for reliable delivery and task queueing with rich routing and retry capabilities."

---

Type:

* `kafka-vs-rabbitmq-cheatsheet` → printable interview table
* `usecase-scenarios` → when to use Kafka vs RabbitMQ
* `springboot-kafka-rabbit-demo` → side-by-side code examples
* 
