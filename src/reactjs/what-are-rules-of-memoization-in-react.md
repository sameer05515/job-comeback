Here are the key **rules of memoization in React** using `React.memo`, `useMemo`, and `useCallback`:

---

### ✅ `React.memo(Component)` – *Memoizes a Component*

* Prevents **unnecessary re-renders** of functional components.
* Re-renders only when **props change (shallow comparison)**.
* Ideal for **pure components**.

```jsx
const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});
```

**Rules:**

* Works only on **function components**.
* Props must be **primitive or memoized** (objects/functions will trigger re-render unless memoized).
* For custom comparison, use:
  `React.memo(Component, areEqual)`

---

### ✅ `useMemo(() => computeFn, [deps])` – *Memoizes a value*

* Avoids re-executing expensive functions.
* Returns a **memoized value** only when dependencies change.

```jsx
const sortedList = useMemo(() => expensiveSort(data), [data]);
```

**Rules:**

* Use only for **heavy computations** or **referential equality**.
* Don't overuse – it may **add overhead**.

---

### ✅ `useCallback(() => fn, [deps])` – *Memoizes a function*

* Returns a **stable function reference** between renders.
* Useful when passing functions to **memoized child components**.

```jsx
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);
```

**Rules:**

* Dependencies should include all external variables used inside the function.
* Use with `React.memo()` to prevent unnecessary child re-renders.

---

### ⚠️ General Best Practices

* **Don't memoize everything.** Use it when:

  * Props are **causing re-renders** of child components.
  * You have **expensive computations**.
* Prefer **primitive props** (`number`, `string`, `boolean`) over objects/functions unless memoized.

---

Let me know if you want a code example showing all 3 together in one component.
