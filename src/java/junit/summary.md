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
