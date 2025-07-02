### ✅ What is `React.memo`?

`React.memo` is a **higher-order component (HOC)** in React that **prevents unnecessary re-renders** of functional components by doing a **shallow comparison** of props.

---

### 🔹 Syntax

```js
const MyComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});
```

---

### 🔹 When It Works:

* When component is **pure** (output depends only on props)
* When props **don’t change on every render**

✅ Helps improve performance in large apps or lists

---

### 🔹 Optional Custom Comparison

```js
const MyMemoComponent = React.memo(MyComponent, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

---

### 🔹 Example

```jsx
const Child = React.memo(({ name }) => {
  console.log("Rendered:", name);
  return <p>Hello {name}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Child name="Prem" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

✅ `Child` won’t re-render unless `name` changes

---

### ⚠️ Not Needed When:

* Props always change (e.g., functions/objects re-created)
* The component is already cheap to render

---

### ✅ Summary Line for Interview:

> "`React.memo` is used to memoize functional components and avoid re-rendering when props haven’t changed, helping optimize performance in pure, prop-driven components."

---

Type:

* `memo-vs-useMemo` → for side-by-side usage
* `react-perf-checklist` → optimize list rendering & rerenders
