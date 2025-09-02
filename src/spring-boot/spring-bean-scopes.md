In **Spring**, bean scopes define **the lifecycle and visibility of beans**.
Here are the main scopes you’ll use most often:

---

### 🔹 1. **singleton** (default)

* Only **one instance** per Spring container.
* All requests to that bean return the same object.

```java
@Component
@Scope("singleton")
public class MyService {}
```

---

### 🔹 2. **prototype**

* A **new instance** is created every time the bean is requested.

```java
@Component
@Scope("prototype")
public class MyPrototypeService {}
```

---

### 🔹 3. **request** (Web-aware scope)

* A **new bean instance per HTTP request**.

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST)
public class MyRequestBean {}
```

---

### 🔹 4. **session** (Web-aware scope)

* One bean instance per **HTTP session**.

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION)
public class MySessionBean {}
```

---

### 🔹 5. **application** (Web-aware scope)

* One bean instance per **ServletContext** (shared across the app).

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_APPLICATION)
public class MyAppBean {}
```

---

### 🔹 6. **websocket** (WebSocket-aware scope)

* One bean instance per **WebSocket session**.

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_WEBSOCKET)
public class MyWsBean {}
```

---

👉 Summary Table:

| Scope           | Instance Lifecycle                    |
| --------------- | ------------------------------------- |
| **singleton**   | One per Spring container              |
| **prototype**   | New instance per request to container |
| **request**     | One per HTTP request                  |
| **session**     | One per HTTP session                  |
| **application** | One per ServletContext                |
| **websocket**   | One per WebSocket session             |

---

Do you want me to also show a **real code demo** where singleton vs prototype beans behave differently (like logging hashCodes)?
