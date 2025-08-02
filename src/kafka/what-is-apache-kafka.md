**Apache Kafka** is a **distributed streaming platform** used for building real-time data pipelines and streaming applications. It’s designed to be **fault-tolerant, high-throughput, scalable**, and **durable**.

---

## ✅ Core Concepts:

| Term               | Description                                            |
| ------------------ | ------------------------------------------------------ |
| **Producer**       | Sends (publishes) data to Kafka                        |
| **Consumer**       | Reads (subscribes to) data from Kafka                  |
| **Topic**          | Logical channel to which messages are written and read |
| **Partition**      | Subdivision of a topic; enables parallelism            |
| **Broker**         | Kafka server that stores and serves data               |
| **Zookeeper**      | Manages brokers (older Kafka versions)                 |
| **Offset**         | Position of a message in a partition                   |
| **Consumer Group** | Group of consumers that share workload                 |

---

## 📦 Example Use-Cases

* Real-time log processing
* Stream processing with tools like Apache Flink or Kafka Streams
* ETL pipelines
* Messaging systems
* Microservices communication

---

## 🔁 Data Flow Diagram

```text
Producer → Topic → Partition → Kafka Broker → Consumer Group → Consumer
```

---

## 🧠 Highlights

* High-throughput and low latency
* Horizontally scalable
* Persistent and durable (data stored on disk)
* Can replay data (reprocessing)
* Supports both real-time and batch processing

---

Let me know if you want a working Java producer/consumer example.
