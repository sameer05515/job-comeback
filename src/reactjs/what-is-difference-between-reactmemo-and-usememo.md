Here’s a concise difference between `React.memo` and `useMemo`:

---

### ✅ `React.memo`

* **Used for**: *Wrapping components* to prevent unnecessary re-renders.

* **Applies to**: **Entire component** (functional components only).

* **Syntax**:

  ```js
  const MyComponent = React.memo((props) => {
    // component logic
  });
  ```

* **When it works**: When props have not changed (shallow comparison).

---

### ✅ `useMemo`

* **Used for**: *Memoizing values/computations inside a component*.

* **Applies to**: Any **expensive computation** or **object/array references**.

* **Syntax**:

  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

* **When it works**: When dependencies don’t change → returns cached value.

---

### 🧠 Summary

| Feature  | React.memo                    | useMemo                                   |
| -------- | ----------------------------- | ----------------------------------------- |
| Type     | HOC (Higher-Order Component)  | React Hook                                |
| Scope    | Entire Component              | Value/Computation                         |
| Purpose  | Avoid re-render if props same | Avoid re-calculation if deps same         |
| Use Case | Pure UI components            | Expensive calc / stable ref (e.g., props) |

---

Let me know if you want examples.
