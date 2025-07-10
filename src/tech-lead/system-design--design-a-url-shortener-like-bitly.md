✅ Here's a complete **System Design for a URL Shortener** like **bit.ly**, focused on:

> 🔧 **DB Schema** | 🔁 **Hashing/Collisions** | 📈 **Scalability** | ⚡ **Caching**

---

## 🧱 1. **Basic Requirement**

* Convert a long URL to a short one (`https://bit.ly/abc123`)
* Redirect short URL to the original long URL
* Handle collisions and scale to millions of URLs
* Optional: track click analytics, expiration, user accounts

---

## 🗂️ 2. **DB Schema Design**

### ✅ Table: `url_mapping`

| Field         | Type        | Description                  |
| ------------- | ----------- | ---------------------------- |
| `id`          | BIGINT (PK) | Auto-increment               |
| `short_code`  | VARCHAR(10) | Unique short key (`abc123`)  |
| `long_url`    | TEXT        | Original long URL            |
| `created_at`  | TIMESTAMP   | Creation date                |
| `expires_at`  | TIMESTAMP   | (Optional) expiry date       |
| `user_id`     | VARCHAR     | (Optional) multi-user system |
| `click_count` | INT         | (Optional) analytics         |

**Index on `short_code`** for fast redirection lookup.

---

## 🧮 3. **Hashing & Collision Handling**

### Option A: **Base62 encoding of DB ID**

```java
ID = 125 => base62Encode(125) => "cb"
```

* Pros: No collisions, predictable
* Cons: Exposes internal ID pattern (mitigate with salt)

### Option B: **Hashing with Fallback**

```java
hash = SHA256(longUrl + timestamp + salt) → base62 → 6–8 char code
```

* Check DB: if `short_code` exists, retry with different salt or length.
* Store `{short_code → long_url}` mapping in DB.

---

## 🗃️ 4. **Caching Layer**

Use **Redis** for high-speed redirection:

* **Key**: `short_code`
* **Value**: `long_url`
* Expire cache after N minutes/hours
* On cache miss → read from DB → update Redis

---

## 🌍 5. **Scalability Considerations**

| Layer             | Strategy                                  |
| ----------------- | ----------------------------------------- |
| **Load Balancer** | Nginx/ALB to distribute requests          |
| **App Layer**     | Stateless services → scalable via K8s     |
| **DB**            | Use RDS/PostgreSQL or NoSQL like DynamoDB |
| **Cache**         | Redis Cluster                             |
| **Analytics**     | Async logging to Kafka or S3 + Athena     |
| **Rate Limiting** | Prevent abuse via IP-based limits         |

---

## 🚦 6. **Redirection Flow**

```
1. GET /abc123
2. Lookup Redis → miss → DB
3. If found → redirect (HTTP 301/302)
4. Update cache
5. Log click event (async Kafka/SQS)
```

---

## 🛡️ 7. **Collision Handling**

* If using hashing: check DB if `short_code` exists → retry
* If using ID-based Base62: guaranteed unique
* Optional: allow **custom aliases** (`bit.ly/prem123`)

---

## 🔐 8. **Security & Abuse Protection**

* Validate input URLs (no JS, file://)
* Throttle user/IP
* ReCAPTCHA on anonymous API
* Optional: auth for registered users

---

## ⚙️ 9. **Bonus Features**

* Link expiration (`expires_at`)
* Analytics: IP, browser, timestamp
* Dashboard for users
* API usage tracking & rate limiting

---

## ✅ Summary Diagram (Flow)

```
[Client] → [Load Balancer]
          ↓
     [App Service]
     ↙       ↘
[Redis]     [Database]
               ↓
     [Analytics Logger (Kafka/S3)]
```

---

Would you like:
✅ A **Spring Boot + Redis + PostgreSQL** code skeleton?
✅ A **sequence diagram or deployment diagram**?
