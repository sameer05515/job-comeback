In Spring Boot, multi–data source setup = **define multiple `DataSource` + `EntityManager` + `TransactionManager`**, and bind each to separate packages.

Below is a **clean production-ready pattern (Java + JPA)** 👇

---

## 🔹 1) application.yml

```yaml id="7u0p3k"
spring:
  datasource:
    primary:
      url: jdbc:mysql://localhost:3306/db1
      username: root
      password: root
      driver-class-name: com.mysql.cj.jdbc.Driver

    secondary:
      url: jdbc:postgresql://localhost:5432/db2
      username: postgres
      password: postgres
      driver-class-name: org.postgresql.Driver
```

---

## 🔹 2) Primary DB Config

```java id="l9r2ci"
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
    basePackages = "com.app.repo.primary",
    entityManagerFactoryRef = "primaryEntityManager",
    transactionManagerRef = "primaryTxManager"
)
public class PrimaryDBConfig {

    @Bean
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource.primary")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean primaryEntityManager(
            EntityManagerFactoryBuilder builder) {

        return builder
                .dataSource(primaryDataSource())
                .packages("com.app.entity.primary")
                .persistenceUnit("primary")
                .build();
    }

    @Bean
    @Primary
    public PlatformTransactionManager primaryTxManager(
            @Qualifier("primaryEntityManager") EntityManagerFactory emf) {

        return new JpaTransactionManager(emf);
    }
}
```

---

## 🔹 3) Secondary DB Config

```java id="8p8q3m"
@Configuration
@EnableJpaRepositories(
    basePackages = "com.app.repo.secondary",
    entityManagerFactoryRef = "secondaryEntityManager",
    transactionManagerRef = "secondaryTxManager"
)
public class SecondaryDBConfig {

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.secondary")
    public DataSource secondaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean secondaryEntityManager(
            EntityManagerFactoryBuilder builder) {

        return builder
                .dataSource(secondaryDataSource())
                .packages("com.app.entity.secondary")
                .persistenceUnit("secondary")
                .build();
    }

    @Bean
    public PlatformTransactionManager secondaryTxManager(
            @Qualifier("secondaryEntityManager") EntityManagerFactory emf) {

        return new JpaTransactionManager(emf);
    }
}
```

---

## 🔹 4) Entity + Repo Separation

```java id="63t5km"
// primary
package com.app.entity.primary;
@Entity
public class User {
    @Id
    private Long id;
}

// secondary
package com.app.entity.secondary;
@Entity
public class AuditLog {
    @Id
    private Long id;
}
```

```java id="qhjg0x"
// primary repo
package com.app.repo.primary;
public interface UserRepo extends JpaRepository<User, Long> {}

// secondary repo
package com.app.repo.secondary;
public interface AuditRepo extends JpaRepository<AuditLog, Long> {}
```

---

## 🔹 5) Service Usage

```java id="k0x7z7"
@Service
public class MyService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuditRepo auditRepo;

    @Transactional("primaryTxManager")
    public void saveUser(User user) {
        userRepo.save(user);
    }

    @Transactional("secondaryTxManager")
    public void saveAudit(AuditLog log) {
        auditRepo.save(log);
    }
}
```

---

## 🔥 Alternative Approaches (Interview Points)

```text id="j51np8"
1. AbstractRoutingDataSource → dynamic DB switching (multi-tenant)
2. Spring Data JDBC → lighter than JPA
3. MyBatis → fine-grained SQL control
4. XA Transactions (JTA, Atomikos) → distributed transactions
5. Read/Write split (replica DBs)
```

---

## ⚡ Dynamic Routing (Advanced)

```java id="u1kl0c"
public class RoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return DBContext.get(); // ThreadLocal
    }
}
```

---

## 💡 TL;DR (Interview Ready)

```text id="9f6h3v"
- Define multiple DataSource beans
- Separate Entity + Repo packages
- Configure multiple EntityManager + TxManager
- Use @Transactional with specific manager
- Optional: RoutingDataSource for dynamic switching
```

---

Agar tu chahe toh next:

* 🔥 **Spring Boot + Kafka + Multi-DB system design**
* ⚡ **Multi-tenant SaaS architecture**
* 🧠 **Read/Write splitting with replica DB**

bhi bana deta hoon (interview level 💯)
