Here are **React/Java Tech Lead Interview Questions (with leadership focus)** — divided into **Code + System + Leadership** blocks:

---

### ✅ **React/Frontend – Tech Lead Level**

1. [**How do you manage performance in large React apps?**](../tech-lead/reactjs--how-do-you-manage-performance-in-large-react-apps.md)
2. [**Explain code-splitting and lazy loading with React.**](../tech-lead/reactjs--explain-codesplitting-and-lazy-loading-with-react.md)
3. [**How would you structure a React app with 50+ screens?**](../tech-lead/reactjs--how-would-you-structure-a-react-app-with-50-plus-screens.md)
4. [**What's your approach to managing shared state across modules?**](../tech-lead/reactjs--whats-your-approach-to-managing-shared-state-across-modules.md)
5. [**How do you ensure accessibility (a11y) in your React apps?**](../tech-lead/reactjs--how-do-you-ensure-accessibility--a11y--in-your-react-apps.md)
6. [**How do you coordinate between designers and frontend devs?**](../tech-lead/reactjs--how-do-you-coordinate-between-designers-and-frontend-devs.md)
7. [**How do you avoid prop drilling in deep component trees?**](../tech-lead/reactjs--how-do-you-avoid-prop-drilling-in-deep-component-trees.md)
8. [**How would you handle SEO in a React SPA?**](../tech-lead/reactjs--how-would-you-handle-seo-in-a-react-spa.md)
9. [**Compare CRA, Vite, and Next.js – when would you pick each?**](../tech-lead/reactjs--compare--cra--vite-and--nextjs--when-would-you-pick-each.md)
10. [**How do you structure reusable UI components in a team project?**](../tech-lead/reactjs--how-do-you-structure-reusable-ui-components-in-a-team-project.md)

---

### ✅ **Java/Spring Boot – Tech Lead Level**

1. [**How do you structure a microservices-based backend using Spring Boot?**](../tech-lead/java-01.md)
2. [**What are common anti-patterns in Spring Boot you avoid?**](../tech-lead/java-02.md)
3. [**How do you ensure observability (logs, metrics, traces)?**](../tech-lead/java-03.md)
4. [**How would you secure REST APIs at scale?**](../tech-lead/java-04.md)
5. [**What’s your approach for schema versioning and DB migrations (Flyway/Liquibase)?**](../tech-lead/java-05.md)
6. [**How do you design a fault-tolerant API with retry/circuit breaker patterns?**](../tech-lead/java-06.md)
7. [**How do you handle config management across environments?**](../tech-lead/java-07.md)
8. [**How would you design an async workflow with RabbitMQ or Kafka?**](../tech-lead/java-08.md)
9. [**What’s your strategy to handle breaking changes in APIs?**](../tech-lead/java-09.md)
10. [**How do you manage DTO, entity, mapper layers cleanly in multi-module projects?**](../tech-lead/java-10.md)

---

### ✅ **Tech Leadership & Management**

1. [**How do you balance delivery timelines vs code quality**](../tech-lead/balance-between-delivery-timeline-and-code-quality.md)
2. [**How do you onboard a new developer in a large codebase?**](../tech-lead/01.md)
3. [**What are your steps when a production issue is reported?**](../tech-lead/02.md)
4. [**How do you do RCA and communicate it to stakeholders?**](../tech-lead/03.md)
5. [**How do you conduct technical reviews of architecture proposals?**](../tech-lead/04.md)
6. [**How do you prioritize tech debt in a product-driven environment?**](../tech-lead/05.md)
7. [**What is your process for planning a refactor/rewrite?**](../tech-lead/06.md)
8. [**How do you mentor junior developers?**](../tech-lead/07.md)
9. [**How do you ensure knowledge sharing and avoid silos?**](../tech-lead/08.md)
10. [**How do you handle a conflict between two senior devs on tech decisions?**](../tech-lead/09.md)

---

Reply with:

* `system` → for system design questions (LLD+HLD)
* `react-arch` → for React project architecture
* `java-arch` → for Spring Boot microservices architecture
* `deck` → to get Tech Lead cheat-sheet or slide content for prep



Here are **Tech Lead-level System Design Interview Questions** — with a mix of **HLD (High-Level Design), LLD (Low-Level Design)**, and **tradeoff thinking**.

---

### ✅ **Common System Design Questions**

1. [**Design a URL Shortener (like bit.ly)**](../tech-lead/system-design--design-a-url-shortener-like-bitly.md)

   * Focus: DB schema, hashing/collision, scalability, caching

2. [**Design an Uber-like real-time location tracking system**](../tech-lead/system-design--design-an-uberlike-realtime-location-tracking-system.md)

   * Focus: WebSockets, GPS ingestion, message queues, geo-indexing

3. [**Design a Twitter/Newsfeed system**](../tech-lead/system-design--design-a-twitter-newsfeed-system.md)

   * Focus: Fan-out-on-write/read, timelines, Redis, sharding

4. [**Design a scalable file upload service (like Google Drive)**](../tech-lead/system-design--design-a-scalable-file-upload-service-like-google-drive.md)

   * Focus: S3, metadata store, virus scanning, resumable upload

5. [**Design a Chat System (like WhatsApp)**](../tech-lead/system-design--design-a-chat-system-like-whatsapp.md)

   * Focus: Message queues, delivery status, group chats, presence

6. [**Design a Rate Limiter for APIs**](../tech-lead/system-design--design-a-rate-limiter-for-apis.md)

   * Focus: Token bucket/Leaky bucket, Redis counters, multi-node sync

7. [**Design a Notification System (email/SMS/push)**](../tech-lead/system-design--design-a-notification-system--email-sms-push.md)

   * Focus: Queueing, retry, deduplication, template engine

8. [**Design a Job Scheduler (like Cron-as-a-Service)**](../tech-lead/system-design--design-a-job-scheduler--like-cron-as-a-service.md)

   * Focus: Task queue, persistence, retries, worker coordination

9. [**Design an E-commerce Checkout System**](../tech-lead/system-design--design-an-e-commerce-checkout-system.md)

   * Focus: Inventory lock, payment gateway, transactional integrity

10. [**Design a Video Streaming Platform (like YouTube)**](../tech-lead/system-design--design-a-video-streaming-platform--like-youtube.md)

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


[QNA](./tech-lead/qna.md)

[GIT-cheatsheet](../tech-lead/git-01.md)

[System Design: Upload document and secure application](../tech-lead/system-design-01.md)