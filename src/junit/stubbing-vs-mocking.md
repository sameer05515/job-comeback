JUnit interview mein Stubbing vs Mocking ka question aksar Mockito ke context mein poochha jaata hai.

## 1. Stubbing vs Mocking

| Point           | Stubbing                                          | Mocking                                                                            |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Purpose         | Dependency ka predefined response configure karna | Dependency ke interactions verify karna, aur zaroorat par response configure karna |
| Focus           | What should it return?                            | Was it called correctly?                                                           |
| Mockito methods | `when().thenReturn()`, `thenThrow()`              | `verify()`, `verifyNoInteractions()`                                               |
| Example         | Repository se expected user return karna          | Verify karna ki repository ka `save()` call hua                                    |

Important: Stubbing aur mocking mutually exclusive concepts nahi hain. Mockito ka mock object dono purposes ke liye use ho sakta hai.

## 2. Example using Mockito

Maan lo hum `UserService` test kar rahe hain aur woh `UserRepository` par depend karta hai.

```
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldReturnUser() {
        User user = new User(1L, "Prem");

        // STUBBING: define the dependency's response
        when(userRepository.findById(1L))
                .thenReturn(Optional.of(user));

        // Execute the code under test
        User result = userService.getUser(1L);

        // Assert the result
        assertEquals("Prem", result.getName());

        // MOCK INTERACTION VERIFICATION
        verify(userRepository).findById(1L);
    }
}
```

Is example mein:

- `@Mock` ek mock object create karta hai.
- `when(...).thenReturn(...)` stubbing hai — repository ka response configure karta hai.
- `verify(...)` interaction verification hai — confirm karta hai ki repository method call hui.
- `assertEquals(...)` result verify karta hai.

## 3. Stubbing ke common examples

```
// Return a value
when(repository.findById(1L))
        .thenReturn(Optional.of(user));

// Throw an exception
when(repository.findById(1L))
        .thenThrow(new RuntimeException("Database error"));

// Return different values on successive calls
when(service.nextValue())
        .thenReturn(1, 2, 3);
```

## 4. Mocking/verification ke common examples

```
// Verify method was called once
verify(repository).save(user);

// Verify method was called twice
verify(repository, times(2)).save(user);

// Verify method was never called
verify(repository, never()).deleteById(1L);

// Verify there were no interactions
verifyNoInteractions(repository);
```

Dhyan rahe: `verify()` default mein ek invocation verify karta hai. `verifyNoInteractions()` tabhi use karein jab test ki requirement sach mein ye ho ki dependency bilkul call na ho.

## 5. Interview mein bolne ke liye ideal answer

> Stubbing means configuring a test double to return a predefined value or throw an exception when a method is called. Mocking is commonly used to verify interactions with dependencies, such as whether a method was called with the expected arguments and how many times it was called. In Mockito, the same mock object can be stubbed using `when().thenReturn()` and verified using `verify()`. Assertions, meanwhile, verify the actual outcome of the code under test.

### Quick interview check

Agar code mein ye line hai:

```
when(paymentService.charge(100))
        .thenReturn("SUCCESS");
```

Ye kya hai?

A. Stubbing

B. Interaction verification

C. Assertion

D. Integration testing

Check answer