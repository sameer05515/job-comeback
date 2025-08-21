# @Primary vs @Qualifier Annotation

Bhai ye dono Spring ke **bean ambiguity resolve karne ke liye** use hote hain. Dono ke beech difference interview me bahut pucha jata hai.

---

## 🔑 Difference Between `@Primary` and `@Qualifier`

| Feature                 | `@Primary`                                                       | `@Qualifier`                                                 |
| ----------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| **Purpose**             | Default bean select karta hai jab multiple beans same type ke ho | Explicitly specify karta hai ki kaunsa bean inject karna hai |
| **Scope**               | Global preference (bean level)                                   | Local preference (injection point level)                     |
| **Annotation Location** | Bean class or `@Bean` method pe lagate ho                        | Injection point pe lagate ho (`@Autowired` ke sath)          |
| **When to Use**         | Jab ek bean ko *default* banana ho                               | Jab specific bean chahiye ho aur multiple beans available ho |
| **Priority**            | Lower priority → `@Qualifier` overrides `@Primary`               | Higher priority over `@Primary`                              |

---

## ✅ Example

### Using `@Primary`

```java
@Component
@Primary
class MySQLDatabase implements Database { }

@Component
class OracleDatabase implements Database { }

@Service
class DataService {
    @Autowired
    private Database database; // MySQLDatabase inject hoga (default)
}
```

---

### Using `@Qualifier`

```java
@Component
class MySQLDatabase implements Database { }

@Component
class OracleDatabase implements Database { }

@Service
class DataService {
    @Autowired
    @Qualifier("oracleDatabase")
    private Database database; // OracleDatabase inject hoga
}
```

---

## 🎯 Interview Punchline

* "`@Primary` ek **global default** hai, aur `@Qualifier` ek **local override**."
* "`@Qualifier` always takes precedence if both are present."

---

Bhai, chaho to main ek **code snippet** bana dun jisme dono ek sath ho aur dikhaye ki `@Qualifier` ne `@Primary` ko override kar diya?
