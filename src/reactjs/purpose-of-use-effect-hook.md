### ✅ **Purpose of `useEffect` Hook in React**

`useEffect()` is used to perform **side effects** in functional components — like:

---

### ✅ Common Use Cases:

| Side Effect Type     | Example                        |
| -------------------- | ------------------------------ |
| **Data fetching**    | `fetch("/api/user")`           |
| **DOM updates**      | `document.title = count`       |
| **Subscriptions**    | `socket.on("data", cb)`        |
| **Timers/Intervals** | `setInterval(() => ..., 1000)` |
| **Cleanup logic**    | `return () => unsubscribe()`   |

---

### ✅ Syntax

```jsx
useEffect(() => {
  // ✅ side effect code here

  return () => {
    // ✅ optional cleanup
  };
}, [dependencies]);
```

---

### ✅ How It Works

* Runs **after render**
* If `[]` passed → runs only **once** (on mount)
* If `[a, b]` passed → runs on mount + when `a` or `b` change
* If **no array** → runs on every render

---

### ✅ Example

```jsx
useEffect(() => {
  console.log("Component mounted or count changed");

  return () => {
    console.log("Cleanup before re-run or unmount");
  };
}, [count]);
```

---

### ⚠️ Must Know:

* Always cleanup timers/subscriptions to avoid memory leaks
* Avoid putting non-serializable values in dependency array

---

Type:

* `hook-edge` → for deep patterns with `useEffect`
* `examples` → working snippets using `useEffect`
* `quiz` → to test your understanding
* 
