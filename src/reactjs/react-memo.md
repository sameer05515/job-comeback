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


---
---

✅ **HOC (Higher-Order Component)** in React is a **function** that takes a component and returns a **new enhanced component**.

It’s used to **reuse logic** (like authentication, logging, theming) across multiple components without repeating code.

---

### 🔹 **Basic Syntax:**

```js
const withFeature = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    // add logic here
    return <WrappedComponent {...props} />;
  };
};
```

---

### 🔹 ✅ Example: `withLogger`

```js
const withLogger = (Component) => {
  return function Wrapped(props) {
    console.log("Props received:", props);
    return <Component {...props} />;
  };
};

const Hello = (props) => <h1>Hello {props.name}</h1>;

const HelloWithLogger = withLogger(Hello);

// Usage
<HelloWithLogger name="Prem" />
```

---

### 🔹 **Use Cases of HOC:**

* Access control (auth guard)
* Logging, analytics
* Code reuse (similar to mixins)
* Loading states / error boundaries (pre-hooks era)

---

### 🔹 Rules:

* Don’t mutate the original component
* Use pure functions
* Can be **composed** with other HOCs

---

### ✅ Summary Line for Interview:

> "A Higher-Order Component is a function that takes a component and returns a new one, allowing logic reuse like logging, access control, and UI wrapping without modifying the original component."
> 


---
---

✅ **`React.memo` vs `useMemo`** — both help in **performance optimization**, but serve different purposes.

---

### 🔹 **React.memo**

👉 A **Higher-Order Component (HOC)** that **memoizes a component**
👉 Prevents **re-render** if props didn’t change

```jsx
const MyComponent = React.memo((props) => {
  // only re-renders if props change
  return <div>{props.value}</div>;
});
```

➡ Usage: When you want to **skip rendering** of a whole component unless props changed.

---

### 🔹 **useMemo**

👉 A **hook** that **memoizes a computed value**
👉 Avoids recalculating expensive functions

```jsx
const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

➡ Usage: When you want to **cache calculation results** between renders unless dependencies change.

---

### 🔹 ✅ Difference Table

| Feature       | `React.memo`                       | `useMemo`                       |
| ------------- | ---------------------------------- | ------------------------------- |
| Type          | HOC (wraps component)              | Hook (inside component)         |
| Memoizes      | Component render output            | Return value of a function      |
| Purpose       | Avoid unnecessary component render | Avoid unnecessary recalculation |
| Usage example | `React.memo(MyComponent)`          | `useMemo(() => ..., [deps])`    |

---

### ✅ Summary Line for Interview:

> "`React.memo` prevents re-renders of a component when props don’t change, while `useMemo` caches expensive calculations inside a component to avoid recomputation."
> 
