✅ Here's a complete **System Design for a Rate Limiter for APIs**, with focus on:

> 🪣 **Token Bucket / Leaky Bucket Algorithms** | ⚡ **Redis for counters** | 🕸️ **Multi-node sync**

---

## 🧭 1. **Goal**

* Limit the **number of API requests per user/IP/service**
* Enforce limits like:
  `100 reqs/min`, `1000 reqs/day`, etc.
* Prevent abuse, protect downstream services
* Must work **across multiple nodes**

---

## ⚙️ 2. **Common Algorithms**

### 🔹 A. **Token Bucket** (Preferred)

* Each user has a "bucket" of tokens.
* Tokens are **added at a fixed rate**.
* A request **removes 1 token**.
* If empty → reject the request.

> ✅ Allows bursts
> ✅ Precise control

### 🔹 B. **Leaky Bucket**

* Requests enter a queue (bucket).
* Bucket leaks at constant rate.
* If queue is full → reject.

> ✅ Smoother output
> ❌ Not burst-tolerant

---

## 🗃️ 3. **Redis for Global Rate Limiting (Multi-node)**

Redis stores **per-user/token counters**:

### Token Bucket (with Lua script for atomicity):

```bash
Key: rate_limit:{user_id}

Fields:
- tokens: current token count
- last_refill: timestamp of last refill
```

---

## 🔄 4. **Redis Token Bucket Logic**

On each request:

1. Get `tokens` and `last_refill`
2. Refill based on time passed
3. If `tokens > 0`:

   * Decrease by 1
   * Allow request
4. Else → reject (HTTP 429)

✅ Use **Redis Lua Script** to make atomic:

```lua
-- Pseudocode for token bucket refill
local tokens = redis.call('HGET', KEYS[1], 'tokens')
local last = redis.call('HGET', KEYS[1], 'last_refill')
-- Calculate new tokens and update
```

---

## 🧪 5. **Sample Redis Schema**

| Key                  | TTL  | Value (Hash)                           |
| -------------------- | ---- | -------------------------------------- |
| `rate_limit:user123` | auto | `{tokens: 4, last_refill: 1719060000}` |

---

## 📊 6. **Limit Types**

| Limit Type      | Description                 |
| --------------- | --------------------------- |
| Per User        | `X req/min` per user        |
| Per API Key     | External clients/app limits |
| Per IP          | Anonymous user protection   |
| Global Throttle | Backend safety guard        |

---

## 🧵 7. **Spring Boot Filter (Java)**

```java
@Component
public class RateLimitFilter extends OncePerRequestFilter {
  @Autowired RedisTemplate redis;

  protected void doFilterInternal(...) {
    String key = "rate_limit:" + userId;
    // Lua script call to Redis
    boolean allowed = redis.eval(script, ...)
    if (!allowed) throw new TooManyRequestsException();
    filterChain.doFilter(request, response);
  }
}
```

---

## 📈 8. **Scalability Considerations**

| Component   | Strategy                            |
| ----------- | ----------------------------------- |
| Redis       | Clustered + partition by key        |
| Gateway/API | Stateless, use shared Redis         |
| Throttling  | Per-endpoint, per-user customizable |
| Async Retry | Queue rejected requests (optional)  |

---

## 🔐 9. **Security & Abuse Control**

* Block IPs that abuse multiple tokens
* Blacklist API keys with consistent overuse
* Add CAPTCHA or login for anonymous users

---

## ✅ Summary Architecture

```
          [Client]
             ↓
    [API Gateway / Filter]
             ↓
    [Redis] ← Lua-based token bucket
             ↓
        [Application Logic]
```

---

## Optional Enhancements

* Visual dashboard for limits
* Soft limits with logging
* Redis TimeSeries for rate analytics
* Integrate with API key plans (tiers)

---

Would you like:

✅ A working **Redis Lua Token Bucket script**?
✅ A **Spring Boot filter** that plugs into Redis for rate-limiting?

Let me know!
