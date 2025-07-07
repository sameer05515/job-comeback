✅ **`useCallback` vs `useMemo`** — both are React hooks used for **memoization**, but they memoize **different things**.

---

### 🔹 **`useCallback`**

* Returns a **memoized function**
* Useful when passing **callbacks to child components**
* Avoids **recreating functions** on every render

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

➡ `handleClick` will not be recreated unless dependencies change.

---

### 🔹 **`useMemo`**

* Returns a **memoized computed value**
* Avoids **recalculating expensive expressions**

```jsx
const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

➡ `result` is recalculated only when `a` or `b` change.

---

### 🔹 ✅ Key Differences

| Feature       | `useCallback`                      | `useMemo`                             |
| ------------- | ---------------------------------- | ------------------------------------- |
| Memoizes      | **Function reference**             | **Return value** of a function        |
| Return Type   | Function                           | Any value (number, object, JSX, etc.) |
| Main Use Case | Prevent child re-renders via props | Avoid heavy recomputations            |
| Syntax        | `useCallback(fn, deps)`            | `useMemo(() => value, deps)`          |

---

### 🔹 ✅ Example Side-by-Side

```jsx
// useCallback - memoize function
const onClick = useCallback(() => {
  console.log('Clicked');
}, []);

// useMemo - memoize computed value
const doubled = useMemo(() => count * 2, [count]);
```

---

### ✅ Summary Line for Interview:

> "`useCallback` memoizes a function to avoid unnecessary re-creations, while `useMemo` memoizes a computed value to avoid expensive recalculations."
> 
