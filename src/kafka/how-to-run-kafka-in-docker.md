Here’s how you can **run Apache Kafka in Docker** using `docker-compose` with minimal setup.

---

### ✅ Step 1: Create `docker-compose.yml`

```yaml
version: '3.8'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
```

---

### ✅ Step 2: Run the Containers

```bash
docker-compose up -d
```

---

### ✅ Step 3: Verify Setup

Check logs:

```bash
docker-compose logs -f kafka
```

---

### ✅ Step 4: Use Kafka CLI

```bash
# Open bash inside Kafka container
docker exec -it <container_id> bash

# Create topic
kafka-topics --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# List topics
kafka-topics --list --bootstrap-server localhost:9092

# Produce message
kafka-console-producer --topic test-topic --bootstrap-server localhost:9092

# Consume message
kafka-console-consumer --topic test-topic --bootstrap-server localhost:9092 --from-beginning
```

---

Let me know if you want a single-node Kafka without Zookeeper (using Kraft).


