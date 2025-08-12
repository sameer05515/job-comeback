**Feature Flags in CI/CD**

**Definition:**
Feature flags (a.k.a. feature toggles) are configuration switches that enable or disable specific functionality in your application **without deploying new code**.

---

### **Why use in CI/CD?**

* **Decouple deployment from release** → You can merge and deploy incomplete features but keep them hidden.
* **Safe rollouts** → Enable feature gradually (canary release, % rollout).
* **Quick rollback** → Disable a feature instantly if it breaks production.
* **A/B testing** → Show different features to different user segments.
* **Continuous Delivery** → Deploy frequently without exposing unfinished work.

---

### **How it fits into CI/CD pipeline**

1. **CI stage**

   * Build & test code with both feature-ON and feature-OFF scenarios.
   * Use flags in unit/integration tests to ensure both paths work.

2. **CD stage**

   * Deploy new code to staging/prod with feature OFF.
   * Gradually toggle ON via feature flag service (LaunchDarkly, Unleash, FF4J, custom config).
   * Monitor metrics & errors.
   * Toggle OFF instantly if problems occur (no redeploy needed).

---

### **Example – Java (Spring Boot)**

```java
@Service
public class CheckoutService {
    @Value("${feature.newPaymentFlow:false}")
    private boolean newPaymentFlow;

    public void processPayment() {
        if (newPaymentFlow) {
            System.out.println("Using new payment flow...");
        } else {
            System.out.println("Using old payment flow...");
        }
    }
}
```

`application.properties`

```properties
feature.newPaymentFlow=false
```

➡ Toggle in CI/CD by updating config in staging/prod without redeploy.

---

### **Best Practices**

* **Default OFF** for new features.
* **Clean up old flags** after full rollout (avoid tech debt).
* **Name flags meaningfully** (`feature.userProfileV2`).
* **Centralize flag config** (env vars, config service, feature flag platform).
* **Test both ON/OFF paths** in CI.

---

If you want, I can also give you a **diagram showing how feature flags fit into a CI/CD pipeline** so it’s visual for interviews. That would make it super easy to recall.
