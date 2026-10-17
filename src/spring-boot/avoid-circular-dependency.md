Ye Spring Boot interview ka kaafi important question hai. 😊 Agar `A` aur `B` ek-dusre par depend karte hain, toh ise Circular Dependency kehte hain.

## 1. Circular dependency kaise hoti hai?

Maan lo:

- `A` ko kaam karne ke liye `B` chahiye.
- `B` ko kaam karne ke liye `A` chahiye.

## Bean A

Needs B

## Bean B

Needs A

A → B → A → B ...

Constructor injection ke saath example:

```
@Component
public class A {
    private final B b;

    public A(B b) {
        this.b = b;
    }
}
```

```
@Component
public class B {
    private final A a;

    public B(A a) {
        this.a = a;
    }
}
```

Spring `A` banane ke liye `B` maangta hai, aur `B` banane ke liye `A`. Dono constructor ek-dusre ka wait karte hain. Spring is circular dependency ko resolve nahi kar sakta aur aam taur par `BeanCurrentlyInCreationException` ke saath startup fail ho jaata hai.

## 2. Spring mein ise handle karne ke 4 approaches

### Approach 1: Design refactor karna — best solution

Sabse achha solution hai circular dependency ko remove karna. Shared functionality ko teesre bean mein move kar sakte hain.

Bean A

SharedService

Bean B

A aur B dono shared functionality use karte hain, bina ek-dusre par directly depend kiye.

Ye maintainability aur unit testing ke liye sabse achha approach hai.

### Approach 2: `@Lazy` use karna

```
@Component
public class A {
    private final B b;

    public A(@Lazy B b) {
        this.b = b;
    }
}
```

`@Lazy` injection point par proxy ke through dependency ko defer kar sakta hai, jisse kuch circular dependencies resolve ho sakti hain.

Lekin dhyan rahe: ye design issue ko khatam nahi karta aur har circular dependency ka solution nahi hai.

### Approach 3: Setter injection

```
@Component
public class A {
    private B b;

    @Autowired
    public void setB(B b) {
        this.b = b;
    }
}
```

`B` mein bhi setter injection use kiya ja sakta hai. Spring kuch singleton setter/field-injection cycles ko early references ke through resolve kar sakta hai.

Lekin ye constructor injection se kam explicit hai aur circular dependency ko chhupane ka risk rakhta hai.

### Approach 4: `ObjectProvider` use karna

Dependency ko immediately resolve karne ke bajay zaroorat padne par retrieve kar sakte hain:

```
@Component
public class A {
    private final ObjectProvider<B> bProvider;

    public A(ObjectProvider<B> bProvider) {
        this.bProvider = bProvider;
    }

    public void doWork() {
        B b = bProvider.getObject();
        b.process();
    }
}
```

Is approach mein `B` ko tab resolve kiya jaata hai jab `getObject()` call hota hai. Iske liye invocation ke samay dependency available honi chahiye.

## 3. Spring Boot mein important interview point

Spring Boot mein circular references default se disabled hain. Configuration:

```
spring.main.allow-circular-references=true
```

Kuch eligible setter/field-based singleton cycles ko allow kar sakti hai, lekin constructor-based circular dependency ko is property se automatically resolve nahi kiya ja sakta. Production code mein is setting ko enable karne ke bajay design refactor karna generally better hai.

## Interview mein ideal answer

> A circular dependency occurs when Bean A depends on Bean B and Bean B depends on Bean A. With constructor injection, Spring cannot instantiate either bean and application startup fails. My preferred solution is to refactor the design and remove the cycle. Depending on the use case, I can also use `@Lazy`, `ObjectProvider`, or setter injection. Spring Boot disables circular references by default, and enabling them should not be my first choice.

Ek follow-up interview question: Agar `A` aur `B` dono singleton beans hain aur dono mein setter injection use ho rahi hai, toh Spring circular dependency ko kaise resolve kar sakta hai?