Here are **React/Java Tech Lead Interview Questions (with leadership focus)** — divided into **Code + System + Leadership** blocks:

---

### ✅ **React/Frontend – Tech Lead Level**

1. **How do you manage performance in large React apps?**
2. **Explain code-splitting and lazy loading with React.**
3. **How would you structure a React app with 50+ screens?**
4. **What's your approach to managing shared state across modules?**
5. **How do you ensure accessibility (a11y) in your React apps?**
6. **How do you coordinate between designers and frontend devs?**
7. **How do you avoid prop drilling in deep component trees?**
8. **How would you handle SEO in a React SPA?**
9. **Compare CRA, Vite, and Next.js – when would you pick each?**
10. **How do you structure reusable UI components in a team project?**

---

### ✅ **Java/Spring Boot – Tech Lead Level**

1. **How do you structure a microservices-based backend using Spring Boot?**
2. **What are common anti-patterns in Spring Boot you avoid?**
3. **How do you ensure observability (logs, metrics, traces)?**
4. **How would you secure REST APIs at scale?**
5. **What’s your approach for schema versioning and DB migrations (Flyway/Liquibase)?**
6. **How do you design a fault-tolerant API with retry/circuit breaker patterns?**
7. **How do you handle config management across environments?**
8. **How would you design an async workflow with RabbitMQ or Kafka?**
9. **What’s your strategy to handle breaking changes in APIs?**
10. **How do you manage DTO, entity, mapper layers cleanly in multi-module projects?**

---

### ✅ **Tech Leadership & Management**

1. [**How do you balance delivery timelines vs code quality?**](./tech-lead/balance -between-delivery-timeline-and-code-quality.md)
2. **How do you onboard a new developer in a large codebase?**
3. **What are your steps when a production issue is reported?**
4. **How do you do RCA and communicate it to stakeholders?**
5. **How do you conduct technical reviews of architecture proposals?**
6. **How do you prioritize tech debt in a product-driven environment?**
7. **What is your process for planning a refactor/rewrite?**
8. **How do you mentor junior developers?**
9. **How do you ensure knowledge sharing and avoid silos?**
10. **How do you handle a conflict between two senior devs on tech decisions?**

---

Reply with:

* `system` → for system design questions (LLD+HLD)
* `react-arch` → for React project architecture
* `java-arch` → for Spring Boot microservices architecture
* `deck` → to get Tech Lead cheat-sheet or slide content for prep



Here are **Tech Lead-level System Design Interview Questions** — with a mix of **HLD (High-Level Design), LLD (Low-Level Design)**, and **tradeoff thinking**.

---

### ✅ **Common System Design Questions**

1. **Design a URL Shortener (like bit.ly)**

   * Focus: DB schema, hashing/collision, scalability, caching

2. **Design an Uber-like real-time location tracking system**

   * Focus: WebSockets, GPS ingestion, message queues, geo-indexing

3. **Design a Twitter/Newsfeed system**

   * Focus: Fan-out-on-write/read, timelines, Redis, sharding

4. **Design a scalable file upload service (like Google Drive)**

   * Focus: S3, metadata store, virus scanning, resumable upload

5. **Design a Chat System (like WhatsApp)**

   * Focus: Message queues, delivery status, group chats, presence

6. **Design a Rate Limiter for APIs**

   * Focus: Token bucket/Leaky bucket, Redis counters, multi-node sync

7. **Design a Notification System (email/SMS/push)**

   * Focus: Queueing, retry, deduplication, template engine

8. **Design a Job Scheduler (like Cron-as-a-Service)**

   * Focus: Task queue, persistence, retries, worker coordination

9. **Design an E-commerce Checkout System**

   * Focus: Inventory lock, payment gateway, transactional integrity

10. **Design a Video Streaming Platform (like YouTube)**

* Focus: Uploading, encoding, CDN, metadata, recommendations

---

### ✅ **Design Thinking + Tradeoffs**

| Topic                           | Sample Question                                         |
| ------------------------------- | ------------------------------------------------------- |
| **Scaling**                     | How do you handle millions of requests per second?      |
| **Consistency vs Availability** | What tradeoffs will you make in a chat system?          |
| **Caching**                     | When do you use Redis vs CDN vs in-memory?              |
| **Data Partitioning**           | How do you shard a large users table?                   |
| **Event-Driven vs REST**        | When to use Kafka instead of HTTP calls?                |
| **Resiliency**                  | How to handle service failures in a microservice setup? |
| **Monitoring**                  | What do you log/alert/monitor in a payment flow?        |
| **Database choice**             | SQL vs NoSQL for a product catalog? Why?                |

---

### ✅ **Must-Know Building Blocks**

* Load Balancers (HAProxy, Nginx, ELB)
* API Gateway
* Kafka / RabbitMQ
* Redis / Memcached
* PostgreSQL / MongoDB
* Object Storage (S3, GCS)
* CDN (Cloudflare, Akamai)
* OAuth2, JWT, Session mgmt
* Docker, K8s, Helm
* Prometheus, Grafana, ELK Stack

---

Reply with:

* `url`, `chat`, `checkout`, etc. → for full design of a system
* `hld` → for a structured High-Level Design template
* `lld` → for component-level class diagrams (Java/React)
* `deck` → for interview presentation prep (for Tech Lead/Architect)
* 
