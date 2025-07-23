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

