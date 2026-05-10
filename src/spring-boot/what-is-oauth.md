OAuth is an **authorization framework** that allows one application to access another application’s resources **without sharing the user’s password**.

Example:

You click:

> “Login with Google”

Here:

* Your app = Client
* Google = Authorization Server
* User data = Resource
* User = Resource Owner

Instead of giving password to the app, Google gives a temporary **Access Token**.

---

# Real Flow

```text
User --> Client App --> Google Login
                    <-- Authorization Code
Client App --> Google Token API
            <-- Access Token
Client App --> Resource Server(API)
            <-- User Data
```

---

# Main OAuth Roles

| Role                 | Meaning                    |
| -------------------- | -------------------------- |
| Resource Owner       | User                       |
| Client               | Application                |
| Authorization Server | Google/Auth Server         |
| Resource Server      | API Server                 |
| Access Token         | Temporary permission token |

---

# OAuth 2.0 Important Concepts

## 1. Access Token

Used to access APIs.

Example:

```http
Authorization: Bearer eyJhbGciOi...
```

---

## 2. Refresh Token

Used to generate new access token.

```text
Access Token expires quickly.
Refresh Token lives longer.
```

---

## 3. Authorization Code

Temporary code returned after login.

Used in secure server-side apps.

---

# OAuth Grant Types

| Grant Type         | Used For           |
| ------------------ | ------------------ |
| Authorization Code | Web apps           |
| Client Credentials | Machine-to-machine |
| Password Grant     | Legacy             |
| Implicit           | Deprecated         |
| PKCE               | SPA/Mobile apps    |

---

# Most Asked Interview Question

## OAuth vs JWT

| OAuth                   | JWT                |
| ----------------------- | ------------------ |
| Authorization framework | Token format       |
| Defines flow            | Stores claims/data |
| "Who can access?"       | "Who are you?"     |

JWT can be used INSIDE OAuth.

---

# OAuth vs SSO

| OAuth             | SSO                       |
| ----------------- | ------------------------- |
| Authorization     | Authentication experience |
| Access delegation | One login for many apps   |

---

# OAuth vs Authentication

OAuth itself does NOT authenticate user.

It authorizes access.

For authentication:

* OpenID Connect (OIDC) is used on top of OAuth2.

---

# Spring Boot OAuth2 Example

## Maven

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>
```

---

## application.yml

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: YOUR_CLIENT_ID
            client-secret: YOUR_SECRET
```

---

## Security Config

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain security(HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .oauth2Login();

        return http.build();
    }
}
```

---

# Interview-Level Explanation

> OAuth allows secure delegated access using tokens instead of credentials.
> User authenticates with Authorization Server, which issues tokens to Client application for accessing protected resources.

---

# Tricky Interview Questions

## Why OAuth preferred over session-based auth?

* Stateless
* Microservice friendly
* Mobile friendly
* Scalable
* API ecosystem support

---

## Why Access Token short-lived?

If token leaks:

* attacker gets limited access window

---

## Why PKCE introduced?

To secure SPA/mobile apps where client secret cannot be stored securely.

---

# Real Companies Using OAuth

* Google
* Facebook
* GitHub
* LinkedIn

Examples:

* Login with Google
* Login with GitHub
* Login with Facebook
