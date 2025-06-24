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

---
---
# adv-qna

Here’s your **Advanced React Q\&A Pack** — targeted for **5–10+ YOE / Tech Lead / Sr. Dev** interviews 👇

---

### ✅ 1. **How does React’s reconciliation algorithm work?**

React compares **virtual DOM trees** using a **diffing algorithm**:

* Compares node type and keys
* Minimizes DOM operations
* Uses `key` prop to track elements in lists efficiently

---

### ✅ 2. **How does `useCallback` work? When should you use it?**

`useCallback(fn, [deps])` returns a **memoized version of the function** — useful to:

* Avoid re-creating handlers on every render
* Prevent child components from unnecessary re-renders (esp. with `React.memo`)

```js
const handleClick = useCallback(() => doSomething(id), [id]);
```

---

### ✅ 3. **What is `useMemo` and when should you use it?**

`useMemo(() => compute(), [deps])` memoizes a **computed value** to avoid recalculating on each render.

Use it for:

* Expensive calculations
* Derived values in large components

---

### ✅ 4. **What causes unnecessary re-renders in React?**

* Props or state changes (even with same value)
* Anonymous functions or inline objects/arrays in JSX
* Missing `React.memo`, `useCallback`, `useMemo`

---

### ✅ 5. **What is React’s concurrent rendering?**

React can **pause, interrupt, resume, or abandon** renders:

* Improves responsiveness
* Powered by **Fiber architecture**
* Used in **React 18+** with **automatic batching** and **transitions**

---

### ✅ 6. **Difference between `useEffect`, `useLayoutEffect`, and `useInsertionEffect`**

| Hook                 | When it Runs                            |
| -------------------- | --------------------------------------- |
| `useEffect`          | After paint (async, non-blocking)       |
| `useLayoutEffect`    | Before paint (blocking, layout sync)    |
| `useInsertionEffect` | Before layout/render (for styling libs) |

Use `useLayoutEffect` only when DOM measurement or mutation is needed before paint.

---

### ✅ 7. **How do Suspense and lazy loading work in React?**

```js
const About = React.lazy(() => import('./About'));
<Suspense fallback={<Loader />}><About /></Suspense>
```

Used for:

* Code-splitting
* Server-side rendering
* Concurrent rendering

---

### ✅ 8. **How would you prevent prop drilling without Redux?**

Use **Context API**:

```js
const ThemeContext = createContext();
<ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>
```

Then access with `useContext(ThemeContext)`.

---

### ✅ 9. **When do you use `useReducer` instead of `useState`?**

Use `useReducer` when:

* State logic is complex
* You need better control/structure
* You’re modeling state transitions

```js
const [state, dispatch] = useReducer(reducerFn, initialState);
```

---

### ✅ 10. **How do you handle memory leaks in React?**

* Cancel async calls inside `useEffect`
* Clean up intervals, subscriptions:

```js
useEffect(() => {
  const id = setInterval(...);
  return () => clearInterval(id);
}, []);
```

---

Reply with:

* `patterns` → React design patterns (container-presentational, hooks, composition)
* `ssr` → questions on SSR, hydration, and SEO
* `redux-qna` → advanced Redux Q\&A
* `project` → get an end-to-end React app architecture summary
