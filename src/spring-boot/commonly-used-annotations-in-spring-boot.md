Spring Boot interview ke liye commonly used annotations ko categories mein yaad karna best rahega. Java Full Stack / Technical Lead interview mein in annotations ka purpose aur practical usage explain karna aana chahiye.

## 1. Core Spring & Dependency Injection

| Annotation        | Purpose                                                           |
| ----------------- | ----------------------------------------------------------------- |
| `@Component`      | Spring-managed bean banata hai                                    |
| `@Service`        | Service/business logic layer                                      |
| `@Repository`     | Data access layer; persistence exceptions translate kar sakta hai |
| `@Controller`     | MVC controller, usually views return karta hai                    |
| `@RestController` | REST controller; response body directly return karta hai          |
| `@Autowired`      | Dependency inject karta hai                                       |
| `@Qualifier`      | Multiple matching beans mein specific bean choose karta hai       |
| `@Primary`        | Multiple candidates mein default preference deta hai              |
| `@Bean`           | `@Configuration` class mein bean define karta hai                 |
| `@Configuration`  | Bean configuration declare karta hai                              |
| `@Lazy`           | Bean initialization defer kar sakta hai                           |
| `@Scope`          | Bean scope specify karta hai                                      |

Example:

```
@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
```

Interview tip: Single-constructor class mein `@Autowired` generally necessary nahi hota.

## 2. REST API & Spring MVC

| Annotation              | Purpose                                                |
| ----------------------- | ------------------------------------------------------ |
| `@RequestMapping`       | Base URL ya request mapping                            |
| `@GetMapping`           | HTTP GET                                               |
| `@PostMapping`          | HTTP POST                                              |
| `@PutMapping`           | HTTP PUT                                               |
| `@PatchMapping`         | HTTP PATCH                                             |
| `@DeleteMapping`        | HTTP DELETE                                            |
| `@PathVariable`         | URL path se value lena                                 |
| `@RequestParam`         | Query parameter lena                                   |
| `@RequestBody`          | JSON request body ko object mein bind karna            |
| `@ResponseBody`         | Return value ko response body mein likhna              |
| `@ResponseStatus`       | HTTP status specify karna                              |
| `@CrossOrigin`          | CORS configuration                                     |
| `@ExceptionHandler`     | Specific exception handle karna                        |
| `@ControllerAdvice`     | Multiple controllers ke liye shared exception handling |
| `@RestControllerAdvice` | REST APIs ke liye global exception handling            |

Example:

```
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@Valid @RequestBody CreateUserRequest request) {
        return userService.createUser(request);
    }
}
```

## 3. Spring Boot Configuration

| Annotation                 | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| `@SpringBootApplication`   | Main Boot application annotation                        |
| `@EnableAutoConfiguration` | Auto-configuration enable karta hai                     |
| `@ComponentScan`           | Components scan karta hai                               |
| `@ConfigurationProperties` | Configuration ko type-safe object mein bind karta hai   |
| `@Value`                   | Property value inject karta hai                         |
| `@Profile`                 | Environment-specific beans/configuration                |
| `@ConditionalOnProperty`   | Property ke basis par bean configure karta hai          |
| `@EnableScheduling`        | Scheduled tasks enable karta hai                        |
| `@Scheduled`               | Method ko scheduled interval par execute karta hai      |
| `@Async`                   | Method ko asynchronous execution ke liye mark karta hai |

Example:

```
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

`@SpringBootApplication` essentially `@Configuration`, `@EnableAutoConfiguration` aur `@ComponentScan` ka combination hai.

## 4. Database & JPA

| Annotation        | Purpose                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| `@Entity`         | JPA entity declare karta hai                                                            |
| `@Table`          | Database table configuration                                                            |
| `@Id`             | Primary key                                                                             |
| `@GeneratedValue` | ID generation strategy                                                                  |
| `@Column`         | Column mapping                                                                          |
| `@OneToOne`       | One-to-one relationship                                                                 |
| `@OneToMany`      | One-to-many relationship                                                                |
| `@ManyToOne`      | Many-to-one relationship                                                                |
| `@ManyToMany`     | Many-to-many relationship                                                               |
| `@JoinColumn`     | Foreign-key column mapping                                                              |
| `@Transactional`  | Transaction boundary define karta hai                                                   |
| `@Query`          | Repository par custom query                                                             |
| `@Modifying`      | Repository query ko update/delete jaise modifying operation ke roop mein mark karta hai |
| `@Version`        | Optimistic locking ke liye version field                                                |

Example:

```
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
}
```

Interview tip: `@Transactional` ka default rollback behaviour aam taur par unchecked exceptions (`RuntimeException`, `Error`) ke liye hota hai; checked exceptions par default mein rollback nahi hota.

## 5. Validation

| Annotation      | Purpose                                                 |
| --------------- | ------------------------------------------------------- |
| `@Valid`        | Bean validation trigger karta hai                       |
| `@NotNull`      | Value null nahi honi chahiye                            |
| `@NotBlank`     | String null, empty ya whitespace-only nahi honi chahiye |
| `@NotEmpty`     | String/collection/map/array empty nahi hona chahiye     |
| `@Size`         | Length/size constrain karta hai                         |
| `@Min` / `@Max` | Numeric bounds                                          |
| `@Email`        | Email format validation                                 |

Example:

```
public record CreateUserRequest(
    @NotBlank String name,
    @Email String email,
    @Min(18) int age
) {}
```

```
@PostMapping
public User create(@Valid @RequestBody CreateUserRequest request) {
    return userService.createUser(request);
}
```

## 6. Spring Security

| Annotation              | Purpose                                                      |
| ----------------------- | ------------------------------------------------------------ |
| `@EnableMethodSecurity` | Method-level security enable karta hai                       |
| `@PreAuthorize`         | Method execute hone se pehle authorization check             |
| `@PostAuthorize`        | Method execute hone ke baad result-based authorization check |
| `@Secured`              | Role-based method access control                             |
| `@RolesAllowed`         | Standard role-based access control annotation                |

Example:

```
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) {
    userRepository.deleteById(id);
}
```

Dhyan rahe: `@PreAuthorize` tabhi kaam karega jab method security enabled ho aur relevant Spring Security configuration sahi ho.

## 7. Testing

| Annotation           | Purpose                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| `@SpringBootTest`    | Full Spring application context test                                                            |
| `@WebMvcTest`        | MVC/controller slice test                                                                       |
| `@DataJpaTest`       | JPA repository slice test                                                                       |
| `@RestClientTest`    | REST client slice test                                                                          |
| `@TestConfiguration` | Tests ke liye additional configuration                                                          |
| `@MockBean`          | Spring context mein mock bean register/replace karna; deprecated in newer Spring Boot versions  |
| `@MockitoBean`       | Spring test context mein mock bean register/replace karna, newer Spring Framework versions mein |
| `@BeforeEach`        | Har test se pehle setup                                                                         |
| `@AfterEach`         | Har test ke baad cleanup                                                                        |

## Interview preparation: sabse pehle ye 15 revise karein

### Revision checklist

0/15 revised

@SpringBootApplication

@RestController

@Service

@Repository

@Component

@Autowired / constructor injection

@Qualifier vs @Primary

@GetMapping / @PostMapping

@PathVariable vs @RequestParam

@RequestBody + @Valid

@ControllerAdvice + @ExceptionHandler

@Entity + @Id

@Transactional

@PreAuthorize

@SpringBootTest vs @WebMvcTest

Meri recommendation: har annotation ke liye teen cheezein prepare karein — kya karta hai, kab use karte hain, aur ek practical example. Senior-level interviews mein inke internal behaviour aur trade-offs par follow-up questions bhi aa sakte hain.