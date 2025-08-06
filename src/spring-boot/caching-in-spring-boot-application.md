In a Spring Boot REST application, **caching** is used to store the results of expensive method calls and reuse them later, improving performance and reducing load.

---

### ✅ 1. **Add Dependencies (Maven)**

For simple in-memory cache using `ConcurrentHashMap`:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

To use **EhCache / Caffeine / Redis**, add their respective starters.

---

### ✅ 2. **Enable Caching**

```java
@SpringBootApplication
@EnableCaching
public class MyApp { 
  public static void main(String[] args) {
    SpringApplication.run(MyApp.class, args);
  }
}
```

---

### ✅ 3. **Apply `@Cacheable` on Method**

```java
@Service
public class StudentService {

  @Cacheable("studentById")
  public Student getStudentById(String id) {
    simulateDelay(); // expensive DB call
    return studentRepository.findById(id).orElse(null);
  }

  private void simulateDelay() {
    try { Thread.sleep(2000); } catch (InterruptedException ignored) {}
  }
}
```

---

### ✅ 4. **Evict or Update Cache**

```java
@CacheEvict(value = "studentById", key = "#id")
public void deleteStudent(String id) {
    studentRepository.deleteById(id);
}

@CachePut(value = "studentById", key = "#student.id")
public Student updateStudent(Student student) {
    return studentRepository.save(student);
}
```

---

### ✅ 5. **Application Properties (Optional)**

```properties
spring.cache.type=simple   # other options: caffeine, redis, ehcache, etc.
```

---

### ✅ 6. **Verify Caching Behavior**

Call the API twice:

* First call takes \~2 seconds.
* Second call returns instantly (cache hit).

---

### Want Redis or Caffeine integration too?
