# Difference between props and state?

### ✅ **Difference Between Props and State in React**

| Feature                | `Props`                            | `State`                                                 |
| ---------------------- | ---------------------------------- | ------------------------------------------------------- |
| **Definition**         | Read-only data passed to component | Mutable data local to component                         |
| **Mutability**         | **Immutable**                      | **Mutable**                                             |
| **Setter**             | Set by parent only                 | Updated via `useState` or `this.setState()`             |
| **Usage**              | Used to configure child components | Used for dynamic behavior (e.g., form inputs, counters) |
| **Access**             | `props.name`                       | `[count, setCount] = useState(0)`                       |
| **Location**           | Passed from **parent to child**    | Lives **inside the component**                          |
| **Renders on Change?** | Yes                                | Yes                                                     |

---

### ✅ Example: `Props` vs `State`

```jsx
function Greeting({ name }) { // ← props
  const [counter, setCounter] = React.useState(0); // ← state

  return (
    <>
      <h1>Hello, {name}</h1>           {/* prop used */}
      <p>Clicked {counter} times</p>   {/* state used */}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </>
  );
}
```

---

### 🧠 Tip for Interviews

* Props = config
* State = data that changes over time

---

Reply with:

* `deep` → to get lifecycle relation with props/state
* `qna` → for React interview Q\&A pack
* `code` → for stateful form vs stateless component example

---
---
# qna

Here’s a **React Q\&A pack** — focused on **frequently asked React interview questions** with crisp answers:

---

### ✅ **1. What is the difference between props and state?**

* **Props** are read-only, passed from parent to child.
* **State** is local, mutable data inside a component.

---

### ✅ **2. What is JSX?**

JSX is a JavaScript syntax extension that looks like HTML and gets compiled to `React.createElement()` calls.

---

### ✅ **3. What is a functional component vs class component?**

* Functional component: simple JS function, uses hooks.
* Class component: uses lifecycle methods and `this.state`.

---

### ✅ **4. What is the use of `useEffect` hook?**

Performs side effects (API calls, subscriptions) in functional components.

```js
useEffect(() => {
  // side-effect
}, []);
```

---

### ✅ **5. What are keys in React lists?**

Unique identifiers used to help React optimize re-rendering.

```js
items.map(item => <li key={item.id}>{item.name}</li>);
```

---

### ✅ **6. What is lifting state up?**

Moving shared state to the closest common ancestor to avoid prop drilling.

---

### ✅ **7. What are controlled vs uncontrolled components?**

* **Controlled**: React manages input state via `useState`
* **Uncontrolled**: DOM manages state via `ref`

---

### ✅ **8. What is React.memo?**

Higher-order component to avoid unnecessary re-renders for pure components.

---

### ✅ **9. How is Context API used?**

Provides global state without prop drilling.

```js
const ThemeContext = React.createContext();
<ThemeContext.Provider value={theme}>...</ThemeContext.Provider>
```

---

### ✅ **10. How to fetch data in React?**

```js
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(setData);
}, []);
```

---

Type:

* `adv-qna` → for advanced questions (hooks, perf, SSR, etc.)
* `redux-qna` → for Redux-based Q\&A
* `quiz` → MCQ-based React quiz for practice
