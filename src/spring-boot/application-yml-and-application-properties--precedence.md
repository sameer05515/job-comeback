Yes bhai ✅ Spring Boot me **`application.properties`** aur **`application.yml`** dono ek saath project me rakh sakte ho.

### ⚡ Precedence Rule (Spring Boot Documentation se):

1. **`application.properties`** and **`application.yml`** are **both supported**.
2. Agar dono me **same property key** defined hai, toh **`application.properties` will take precedence over `application.yml`**.

   * i.e., `.properties` → **wins** over `.yml`

---

### Example:

#### `application.yml`

```yaml
server:
  port: 8081
```

#### `application.properties`

```properties
server.port=9090
```

➡️ Result: App will start on **9090** (properties wins).

---

### 🔑 Interview Line

* Spring Boot supports **both `.properties` and `.yml`**.
* Agar dono present hai aur same property likhi hai, toh **`application.properties` ka value override karega `application.yml` ko**.
* Best practice: **Stick to one format** for consistency (prefer `.yml` for structured configs).

---

Bhai, chaahe to main ek **priority order diagram** (text-only) bhi bana du jo clearly dikhaye Spring Boot me sabse pehle kaun se configs load hote hain (CLI args → Env Vars → .properties → .yml etc.)?
