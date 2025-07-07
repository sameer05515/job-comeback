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



---
---

✅ In **JavaScript/React**, **serializable values** are those that can be safely converted to a **string format (like JSON)** and back, while **non-serializable values** cannot be represented as JSON.

---

### 🔹 **Serializable Values**

✅ Can be passed in Redux state, localStorage, props, etc.

| Example          | Description         |
| ---------------- | ------------------- |
| Strings          | `"Prem"`            |
| Numbers          | `42`                |
| Booleans         | `true / false`      |
| Null / Undefined | `null`, `undefined` |
| Arrays           | `[1, 2, 3]`         |
| Plain Objects    | `{ name: "Prem" }`  |

---

### 🔹 **Non-Serializable Values**

❌ Cannot be reliably stored or transferred via JSON

| Example                 | Why it's non-serializable             |
| ----------------------- | ------------------------------------- |
| **Functions**           | Cannot be stringified in JSON         |
| **DOM elements**        | Complex browser-native objects        |
| **Class instances**     | May contain private state/methods     |
| **Symbols**             | No JSON representation                |
| **Map / Set / WeakMap** | Not supported in JSON                 |
| **Promises**            | Have internal states not serializable |
| **Date objects**        | Must be converted to string manually  |

---

### 🔹 In React/Redux Best Practices:

* ✅ **Store only serializable values** in Redux state or context
* ❌ **Avoid putting functions, class instances, or DOM nodes** in state/context/store

```js
// ✅ Good
state = { user: { name: "Prem" }, count: 3 }

// ❌ Bad
state = { onClick: () => {}, domRef: document.body }
```

---

### ✅ Summary Line for Interview:

> "Serializable values in JavaScript are those that can be converted to JSON (like strings, numbers, arrays), while non-serializable values (like functions, DOM nodes, or class instances) should be avoided in app state or Redux store."
> 
