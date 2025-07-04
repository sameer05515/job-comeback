### ✅ Key Terminology for **Apache Kafka**

Here’s a concise list of important Kafka terms (for interviews or quick revision):

---

### 🔹 **Core Concepts**

| Term               | Meaning                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| **Producer**       | Publishes (writes) messages to Kafka topics                                                            |
| **Consumer**       | Subscribes to (reads) messages from Kafka topics                                                       |
| **Topic**          | A logical stream of data/messages                                                                      |
| **Partition**      | A topic is split into partitions to allow parallelism                                                  |
| **Broker**         | A Kafka server that stores data and serves clients                                                     |
| **Cluster**        | Group of Kafka brokers working together                                                                |
| **Offset**         | Unique ID of a message within a partition                                                              |
| **Consumer Group** | A group of consumers sharing a subscription (each partition is read by only one consumer in the group) |

---

### 🔹 **Advanced Concepts**

| Term                        | Meaning                                                |
| --------------------------- | ------------------------------------------------------ |
| **Leader Partition**        | Main partition replica for reads/writes                |
| **Follower Partition**      | Replica for fault tolerance                            |
| **Replication Factor**      | Number of copies of partition data                     |
| **Retention**               | How long messages are stored                           |
| **Compaction**              | Cleanup policy to retain latest key-value              |
| **Schema Registry**         | Manages Avro/Protobuf schema evolution                 |
| **Zookeeper**               | Used by older Kafka versions for cluster coordination  |
| **Kafka Connect**           | Framework to move data between Kafka and other systems |
| **Kafka Streams**           | Library for building stream-processing apps            |
| **Dead Letter Queue (DLQ)** | Stores failed messages for later reprocessing          |

---

### 🔹 **Configuration & Delivery**

| Term                    | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| **acks**                | Controls producer write durability (`0`, `1`, `all`) |
| **idempotent producer** | Ensures no duplicate messages                        |
| **at-most-once**        | Messages may be lost                                 |
| **at-least-once**       | Messages may be re-delivered                         |
| **exactly-once**        | Ensures each message is delivered once and only once |

---

### ✅ Summary Line for Interview:

> "Kafka is a distributed event streaming platform with core concepts like producers, consumers, topics, partitions, offsets, and consumer groups. It supports high availability, fault tolerance, and real-time data processing at scale."

---

Type:

* `kafka-interview-questions` → only question set
* `kafka-config-cheatsheet` → tuning & property summary
* `kafka-vs-rabbitmq` → comparison table
