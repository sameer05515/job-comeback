# junit related code projects
## Junit 4 based
- [JUnit4In28Minutes](https://github.com/sameer05515/java-playground/tree/main/JUnit4In28Minutes)
- [MockitoTutorialForBeginners](https://github.com/sameer05515/java-playground/tree/main/MockitoTutorialForBeginners)

## Junit 5 based
- [junit-test-example](https://github.com/sameer05515/java-playground/tree/main/junit-test-example) 



---
---

Here’s a quick summary of commonly used **JUnit** annotations and usage (assuming JUnit 5):

---

### ✅ Basic Annotations

* `@Test` – Marks a method as a test case
* `@BeforeEach` – Runs before each test method
* `@AfterEach` – Runs after each test method
* `@BeforeAll` – Runs once before all tests (must be `static`)
* `@AfterAll` – Runs once after all tests (must be `static`)
* `@Disabled` – Disables the test method

---

### ✅ Assertions

```java
Assertions.assertEquals(expected, actual);
Assertions.assertTrue(condition);
Assertions.assertFalse(condition);
Assertions.assertNotNull(obj);
Assertions.assertThrows(Exception.class, () -> { ... });
```

---

### ✅ Example

```java
import org.junit.jupiter.api.*;

class MathUtilsTest {

    @BeforeAll
    static void setupAll() {
        System.out.println("Init test class");
    }

    @BeforeEach
    void setup() {
        System.out.println("Init test method");
    }

    @Test
    void testAddition() {
        Assertions.assertEquals(5, 2 + 3);
    }

    @AfterEach
    void teardown() {
        System.out.println("Clean test method");
    }

    @AfterAll
    static void teardownAll() {
        System.out.println("Clean test class");
    }
}
```

Let me know if you want mocks (`@Mock`, Mockito) or Spring Boot test examples.


---
---

JUnit 5 officially **released on September 10, 2017**.

It introduced a completely new architecture compared to JUnit 4, with three main sub-projects:

1. **JUnit Platform** – foundation for launching testing frameworks.
2. **JUnit Jupiter** – new programming and extension model.
3. **JUnit Vintage** – support for running JUnit 3 and 4 tests on the JUnit 5 platform.

Let me know if you'd like a quick migration guide from JUnit 4 to 5.


---
---

Here’s a quick comparison of **JUnit 4 vs JUnit 5**:

| Feature                        | JUnit 4                                            | JUnit 5                                                |
| ------------------------------ | -------------------------------------------------- | ------------------------------------------------------ |
| **Release Year**               | 2006                                               | 2017                                                   |
| **Package Name**               | `org.junit.*`                                      | `org.junit.jupiter.*`                                  |
| **Architecture**               | Monolithic                                         | Modular (Platform, Jupiter, Vintage)                   |
| **Test Lifecycle Annotations** | `@Before`, `@After`, `@BeforeClass`, `@AfterClass` | `@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll` |
| **Assertions**                 | `Assert.*`                                         | `Assertions.*` with better messages                    |
| **Assumptions**                | `Assume.*`                                         | `Assumptions.*`                                        |
| **Parameterized Tests**        | Limited support via runner                         | Built-in and improved support                          |
| **Test Discovery**             | Classpath scanning (limited)                       | More flexible via Launcher API                         |
| **Extension Model**            | Custom Runners, Rules                              | Powerful `@ExtendWith` model                           |
| **Static Imports Required**    | Yes                                                | Yes (but cleaner APIs)                                 |
| **Dynamic Tests**              | Not supported                                      | Supported via `@TestFactory`                           |
| **Nested Tests**               | Not supported                                      | Supported via `@Nested`                                |
| **Tagging & Filtering**        | Categories via `@Category`                         | `@Tag` with better filtering support                   |
| **IDE & Tool Support**         | Mature                                             | Widely supported now                                   |

### JUnit 5 sample test:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MyTest {

    @Test
    void testAddition() {
        assertEquals(4, 2 + 2);
    }
}
```

Let me know if you want a working project setup or migration example.

---
---

JUnit 5 में Parameterized Test के लिए `@ParameterizedTest` annotation और साथ में `@ValueSource`, `@CsvSource`, आदि का उपयोग होता है।

### ✅ Example using `@ValueSource` (Single parameter):

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ValueSourceExampleTest {

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8, 10})
    void testEvenNumbers(int number) {
        assertTrue(number % 2 == 0, number + " is not even");
    }
}
```

---

### ✅ Example using `@CsvSource` (Multiple parameters):

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CsvSourceExampleTest {

    @ParameterizedTest
    @CsvSource({
        "2, 3, 5",
        "10, 20, 30",
        "-1, 1, 0"
    })
    void testAddition(int a, int b, int expectedSum) {
        assertEquals(expectedSum, a + b);
    }
}
```

---

### ⚙️ Required Dependency in `pom.xml`:

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-params</artifactId>
    <version>5.10.0</version> <!-- or your JUnit 5 version -->
    <scope>test</scope>
</dependency>
```

Bataiye agar `@MethodSource` ya custom provider ka example bhi chahiye.


---
---

In **JUnit 5**, you can organize and run multiple test classes together using a **test suite** with the `@Suite` annotation.

---

### ✅ Step-by-step: Create Test Suite in JUnit 5

1. Add the following imports from `org.junit.platform.suite.api`.
2. Use annotations: `@Suite`, `@SelectClasses`, `@SelectPackages`, etc.

---

### 🔹 Example: Using `@SelectClasses`

```java
package com.prem.junit.suite;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({
    com.prem.junit.test.CalculatorTest.class,
    com.prem.junit.test.StringUtilTest.class
})
public class MyTestSuite {
}
```

---

### 🔹 Example: Using `@SelectPackages`

```java
package com.prem.junit.suite;

import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectPackages("com.prem.junit.test")
public class PackageTestSuite {
}
```

This will run all test classes under `com.prem.junit.test` package.

---

### 🧪 How to Run

* Use your IDE (e.g., IntelliJ, Eclipse) to run `MyTestSuite`.
* Or, run using Maven:

```bash
mvn test
```

---

### 📦 Required Dependency (if not added):

```xml
<dependency>
  <groupId>org.junit.platform</groupId>
  <artifactId>junit-platform-suite</artifactId>
  <version>1.10.0</version> <!-- Match your junit-jupiter version -->
  <scope>test</scope>
</dependency>
```

---

Let me know if you want **tags-based filtering** or **dynamic inclusion** in suite.

---
---

# Spring starter test me mockito bhi add hota hai kya?

Yes ✅, `spring-boot-starter-test` **already includes Mockito** by default.

---

### 📦 Maven Dependency

When you add:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test</artifactId>
  <scope>test</scope>
</dependency>
```

It pulls in these key test libraries:

| Library       | Purpose                         |
| ------------- | ------------------------------- |
| JUnit Jupiter | Unit testing framework          |
| Mockito Core  | Mocking/stubbing in unit tests  |
| Hamcrest      | Matchers for assertions         |
| AssertJ       | Fluent assertions               |
| Spring Test   | Spring-specific testing support |

---

### 🔍 Confirm by checking dependencies:

Run this Maven command to view all resolved test dependencies:

```bash
mvn dependency:tree -Dscope=test
```

You’ll see:

```
org.mockito:mockito-core
```

---

### ✅ Example Usage

```java
@ExtendWith(MockitoExtension.class)
class MyServiceTest {

  @Mock
  private MyRepository repository;

  @InjectMocks
  private MyService service;

  @Test
  void testSomething() {
    when(repository.findSomething()).thenReturn("hello");
    String result = service.process();
    assertEquals("HELLO", result);
  }
}
```

Let me know if you want `@WebMvcTest` or `@MockBean` examples too.


---
---

# Mockito ko use karna hai. please share example code

Sure Prem! Here's a **simple Mockito example** using `@Mock`, `@InjectMocks`, and JUnit 5:

---

### ✅ Scenario

We want to test `UserService`, which depends on `UserRepository`.

---

### 📁 `User.java`

```java
public class User {
    private int id;
    private String name;

    // constructors, getters, setters
    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() { return name; }
}
```

---

### 📁 `UserRepository.java`

```java
public interface UserRepository {
    User findUserById(int id);
}
```

---

### 📁 `UserService.java`

```java
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String getUsername(int id) {
        User user = userRepository.findUserById(id);
        return user != null ? user.getName() : "Unknown";
    }
}
```

---

### ✅ Test with Mockito (JUnit 5)

📁 `UserServiceTest.java`

```java
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @Test
    void testGetUsername() {
        // Arrange
        when(userRepository.findUserById(101)).thenReturn(new User(101, "Prem"));

        // Act
        String result = userService.getUsername(101);

        // Assert
        assertEquals("Prem", result);
    }

    @Test
    void testUserNotFound() {
        when(userRepository.findUserById(999)).thenReturn(null);
        assertEquals("Unknown", userService.getUsername(999));
    }
}
```

---

Let me know if you want a **Spring Boot REST Controller + @MockBean** version also.
