# tell me about Spring boot auto configuration

Spring Boot **auto-configuration** is a feature that automatically configures your Spring application based on the dependencies available on the classpath and sensible defaults, so you don’t have to manually configure beans.

---

### **How It Works**

1. **Classpath detection**

   * Spring Boot scans your classpath for libraries.
     Example: If `spring-boot-starter-web` is present, it configures **Tomcat**, `DispatcherServlet`, and MVC beans automatically.

2. **`@EnableAutoConfiguration` / `@SpringBootApplication`**

   * `@SpringBootApplication` internally uses `@EnableAutoConfiguration`.
   * It triggers `SpringFactoriesLoader` to load configuration classes from
     `META-INF/spring.factories`.

3. **Conditional Beans**

   * Beans are only created if certain conditions match, using annotations like:

     * `@ConditionalOnClass` → Only if a certain class is in the classpath.
     * `@ConditionalOnMissingBean` → Only if a bean isn’t already defined.
     * `@ConditionalOnProperty` → Based on property values.

4. **Customization**

   * Override defaults by defining your own beans.
   * Change behavior with `application.properties` or `application.yml`.

---

### **Example**

If you have `spring-boot-starter-data-jpa` in your project:

* Auto-configures **DataSource**, **EntityManagerFactory**, and **TransactionManager**.
* No need to write XML or `@Bean` config unless you want to customize.

---

### **Pros**

✅ Less boilerplate
✅ Faster development
✅ Sensible defaults

### **Cons**

⚠️ Can be a black box for beginners
⚠️ Harder to debug if multiple auto-configs clash

---

For interviews, you can remember:

> *Spring Boot auto-configuration is “smart defaults + conditional beans” based on your classpath and settings.*

---

If you want, I can make you a **Spring Boot Auto-Configuration flow diagram** so you can recall this in 5 seconds during interviews.
